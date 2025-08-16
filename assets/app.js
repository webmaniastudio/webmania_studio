// Boot: theme + language (default FA)
(function boot(){
  try{
    const storedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const isDark = storedTheme ? storedTheme==='dark' : prefersDark;
    document.documentElement.classList.toggle('dark', isDark);

    const lang = localStorage.getItem('language') || 'fa'; // default fa
    document.documentElement.setAttribute('lang', lang);
    document.documentElement.setAttribute('dir', lang==='fa' ? 'rtl' : 'ltr');
  }catch(e){}
})();

// i18n
const i18n = {
  en:{
    nav:{home:'Home',services:'Services',portfolio:'Portfolio',about:'About',contact:'Contact',cta:'Get a Quote'},
    hero:{title:'Websites that inspire and convert',subtitle:'Your Vision, Our Code. From design to development, focused on speed, SEO, and conversion.',cta1:'Start Your Project',cta2:'View Portfolio'},
    testi:{title:'What clients say'},
    services:{title:'Our Services'},
    pricing:{title:'Plans that scale with you',monthly:'Monthly',yearly:'Yearly',save:'Save 15%'},
    faq:{title:'Frequently Asked Questions'},
    process:{title:'How we work'},
    portfolio:{title:'Our Creative Masterpieces',filterAll:'All',filterEcom:'E‑commerce',filterCorp:'Corporate',filterApp:'Web App',view:'View Project'},
    contact:{title:'Let’s build something amazing',formTitle:'Send a message',name:'Full Name',email:'Email Address',phone:'Phone Number',service:'Desired Service',budget:'Project Budget',message:'Your Message',submit:'Send Message',success:'Message sent. We will reply within 24h.'},
    estimator:{title:'Quick Project Estimator',cta:'Estimate Now',total:'Estimated Budget',note:'This is an indicative estimate for planning.'},
    cta:{title:'Ready to start?',btn:'Start Your Project'},
    footer:{rights:'All rights reserved.'},
    featured:{title:'Featured Work'}
  },
  fa:{
    nav:{home:'خانه',services:'خدمات',portfolio:'نمونه‌کارها',about:'درباره‌ما',contact:'تماس',cta:'شروع همکاری'},
    hero:{title:'وب‌سایت‌هایی که الهام‌بخش و نتیجه‌محورند',subtitle:'چشم‌انداز شما، کُد ما. از طراحی تا توسعه با تمرکز بر سرعت، سئو و تبدیل.',cta1:'شروع همکاری',cta2:'مشاهده نمونه‌کار'},
    testi:{title:'نظرات مشتریان'},
    services:{title:'خدمات ما'},
    pricing:{title:'پلن‌هایی که با شما رشد می‌کنند',monthly:'ماهانه',yearly:'سالانه',save:'۱۵٪ صرفه‌جویی'},
    faq:{title:'سوالات پرتکرار'},
    process:{title:'فرآیند همکاری'},
    portfolio:{title:'آثار خلاقانه ما',filterAll:'همه',filterEcom:'فروشگاه',filterCorp:'شرکتی',filterApp:'برنامه وب',view:'مشاهده پروژه'},
    contact:{title:'بیایید با هم چیزی شگفت‌انگیز بسازیم',formTitle:'پیام خود را ارسال کنید',name:'نام کامل',email:'ایمیل',phone:'شماره تلفن',service:'خدمات مورد نیاز',budget:'بودجه پروژه',message:'پیام شما',submit:'ارسال پیام',success:'پیام شما ارسال شد. حداکثر تا ۲۴ ساعت پاسخ می‌دهیم.'},
    estimator:{title:'محاسبه‌گر سریع پروژه',cta:'محاسبه سریع',total:'بودجه تخمینی',note:'این عدد صرفاً برای برنامه‌ریزی اولیه است.'},
    cta:{title:'برای شروع آماده‌اید؟',btn:'شروع همکاری'},
    footer:{rights:'تمامی حقوق محفوظ است.'},
    featured:{title:'نمونه‌کار منتخب'}
  }
};

// Demo data
const testimonials = [
  { name:'Liam', role:'CTO, Acme', text:{en:'They delivered beyond expectations.',fa:'فراتر از انتظار ما تحویل دادند.'} },
  { name:'Nora', role:'Founder, Nova', text:{en:'Clean design, solid code.',fa:'طراحی تمیز و کدنویسی قوی.'} },
  { name:'Omid', role:'PM, Zen', text:{en:'Great communication and results.',fa:'تعامل عالی و نتیجه‌محور.'} },
];

const servicesList = [
  { icon:'spark', key:'uiux', title:{en:'UI/UX Design',fa:'طراحی UI/UX'}, desc:{en:'Beautiful, intuitive interfaces.',fa:'رابط‌های زیبا و شهودی.'} },
  { icon:'code', key:'frontend', title:{en:'Frontend Dev',fa:'توسعه فرانت‌اند'}, desc:{en:'Modern reactive UIs.',fa:'رابط‌های مدرن و سریع.'} },
  { icon:'server', key:'backend', title:{en:'Backend Dev',fa:'توسعه بک‌اند'}, desc:{en:'Robust APIs & DBs.',fa:'APIهای قدرتمند و دیتابیس.'} },
  { icon:'app', key:'webapp', title:{en:'Custom Web Apps',fa:'اپ‌های وب سفارشی'}, desc:{en:'Tailored to your flows.',fa:'متناسب با فرآیند شما.'} },
  { icon:'shop', key:'ecommerce', title:{en:'E‑commerce',fa:'فروشگاه اینترنتی'}, desc:{en:'Secure stores & payments.',fa:'فروشگاه امن و پرداخت.'} },
  { icon:'tools', key:'support', title:{en:'Maintenance',fa:'پشتیبانی'}, desc:{en:'Updates & performance.',fa:'به‌روزرسانی و عملکرد.'} },
];

const pricing = {
  features:[
    { key:'design', en:'Pro UI/UX', fa:'طراحی حرفه‌ای UI/UX' },
    { key:'frontend', en:'Frontend Dev', fa:'توسعه فرانت‌اند' },
    { key:'backend', en:'Backend & API', fa:'بک‌اند و API' },
    { key:'cms', en:'CMS/Blog', fa:'CMS/بلاگ' },
    { key:'ecom', en:'E‑commerce', fa:'فروشگاه اینترنتی' },
    { key:'support', en:'Priority Support', fa:'پشتیبانی اولویت‌دار' },
  ],
  plans:[
    { name:{en:'Starter',fa:'استارتر'}, monthly:1490, yearly:1490*12*0.85, includes:['design','frontend','cms'] },
    { name:{en:'Growth',fa:'رشد'}, monthly:2990, yearly:2990*12*0.85, includes:['design','frontend','backend','cms','support'] },
    { name:{en:'Scale',fa:'اسکیل'}, monthly:4990, yearly:4990*12*0.85, includes:['design','frontend','backend','cms','ecom','support'] },
  ]
};

const faqs = [
  { q:{en:'How long does a project take?',fa:'مدت زمان اجرای پروژه چقدر است؟'}, a:{en:'Typically 3–8 weeks depending on scope.',fa:'معمولاً ۳ تا ۸ هفته بسته به دامنه کار.'} },
  { q:{en:'Do you offer maintenance?',fa:'آیا پشتیبانی ارائه می‌دهید؟'}, a:{en:'Yes, flexible maintenance plans.',fa:'بله، پلن‌های پشتیبانی انعطاف‌پذیر داریم.'} },
  { q:{en:'Can you redesign my site?',fa:'می‌توانید سایت من را بازطراحی کنید؟'}, a:{en:'Absolutely, with measurable improvements.',fa:'قطعاً؛ با بهبودهای قابل اندازه‌گیری.'} },
];

const processSteps = [
  { step:1, en:'Discovery & Strategy', fa:'شناخت و استراتژی' },
  { step:2, en:'UX Flow & Wireframes', fa:'جریان UX و وایرفریم' },
  { step:3, en:'UI Design & Prototype', fa:'طراحی UI و پروتوتایپ' },
  { step:4, en:'Development', fa:'توسعه' },
  { step:5, en:'QA & Launch', fa:'کیفیت‌سنجی و انتشار' },
  { step:6, en:'Support & Growth', fa:'پشتیبانی و رشد' },
];

const projects = [
  { id:'fashion', cat:'ecommerce', img:'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&w=1200&q=80', title:{en:'Fashion Store',fa:'فروشگاه مد'}, role:{en:'Full‑stack e‑commerce',fa:'فول‌استک فروشگاهی'}, link:'#' },
  { id:'techinc', cat:'corporate', img:'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=1200&q=80', title:{en:'Tech Solutions Inc.',fa:'شرکت راهکارهای فناوری'}, role:{en:'Corporate site + CMS',fa:'سایت شرکتی + CMS'}, link:'#' },
  { id:'tasks', cat:'webapp', img:'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80', title:{en:'Task Manager App',fa:'اپ مدیریت وظایف'}, role:{en:'Realtime web app',fa:'اپ وب بلادرنگ'}, link:'#' },
  { id:'electronics', cat:'ecommerce', img:'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1200&q=80', title:{en:'Electronics Shop',fa:'فروشگاه الکترونیک'}, role:{en:'Headless store',fa:'فروشگاه Headless'}, link:'#' },
  { id:'law', cat:'corporate', img:'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80', title:{en:'Law Firm',fa:'مؤسسه حقوقی'}, role:{en:'Brand & SEO',fa:'برندینگ و سئو'}, link:'#' },
  { id:'fitness', cat:'webapp', img:'https://images.unsplash.com/photo-1555421689-3f034debb7a6?auto=format&fit=crop&w=1200&q=80', title:{en:'Fitness Tracker',fa:'ردیاب تناسب اندام'}, role:{en:'PWA & Charts',fa:'PWA و نمودار'}, link:'#' },
];

// Helpers
function t(key){
  const lang = document.documentElement.getAttribute('lang') || 'fa';
  return key.split('.').reduce((o,k)=>o?.[k], i18n[lang]) || '';
}
function bindTexts(){
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const key = el.getAttribute('data-i18n'); if (key) el.textContent = t(key);
  });
}

// Header
function initHeader(){
  // Theme
  const themeBtns = [document.getElementById('themeToggle'), document.getElementById('themeToggleMobile')].filter(Boolean);
  themeBtns.forEach(btn=>btn.addEventListener('click',()=>{
    const next = !document.documentElement.classList.contains('dark');
    document.documentElement.classList.toggle('dark', next);
    localStorage.setItem('theme', next ? 'dark' : 'light');
  }));

  // Language global
  const langBtns = [document.getElementById('langToggle'), document.getElementById('langToggleMobile')].filter(Boolean);
  function applyLanguage(lang){
    localStorage.setItem('language', lang);
    document.documentElement.setAttribute('lang', lang);
    document.documentElement.setAttribute('dir', lang==='fa' ? 'rtl' : 'ltr');
    bindTexts(); renderPage();
  }
  bindTexts();
  langBtns.forEach(btn=>btn.addEventListener('click',()=>{
    const cur = document.documentElement.getAttribute('lang') || 'fa';
    applyLanguage(cur==='fa' ? 'en' : 'fa');
  }));

  // Mobile menu
  const toggle = document.getElementById('menuToggle');
  const panel = document.getElementById('mobileNav');
  if(toggle && panel){
    toggle.addEventListener('click',()=>{
      const open = !panel.classList.contains('open');
      panel.classList.toggle('open', open);
      toggle.setAttribute('aria-expanded', String(open));
      toggle.innerHTML = open
        ? '<svg class="icon"><use href="/assets/icons.svg#close"></use></svg>'
        : '<svg class="icon"><use href="/assets/icons.svg#menu"></use></svg>';
    });
    panel.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{
      panel.classList.remove('open');
      toggle.setAttribute('aria-expanded','false');
      toggle.innerHTML = '<svg class="icon"><use href="/assets/icons.svg#menu"></use></svg>';
    }));
  }

  // Active link
  const path = location.pathname.replace(/\/+$/,'');
  document.querySelectorAll('.nav-link').forEach(a=>{
    try{
      const href = new URL(a.href, location.origin).pathname.replace(/\/+$/,'');
      if (href===path || (href.endsWith('/index.html') && (path==='' || path==='/'))) a.classList.add('active');
    }catch(e){}
  });

  // Magnet effect
  document.querySelectorAll('.magnet').forEach(btn=>{
    btn.addEventListener('mousemove',(e)=>{
      const r=btn.getBoundingClientRect();
      btn.style.setProperty('--x', `${e.clientX-r.left}px`);
      btn.style.setProperty('--y', `${e.clientY-r.top}px`);
    });
  });
}

// Reveal
function initReveal(){
  const obs = new IntersectionObserver((ents)=>{
    ents.forEach(e=> e.isIntersecting && e.target.classList.add('is-visible'));
  },{threshold:.12});
  document.querySelectorAll('.reveal').forEach(el=>obs.observe(el));
}

// Back to top
function initBackToTop(){
  const btn = document.getElementById('backToTop'); if(!btn) return;
  window.addEventListener('scroll',()=>{ if(window.scrollY>300) btn.classList.add('show'); else btn.classList.remove('show'); });
  btn.addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'}));
}

/* Home */
function renderHome(){
  const lang = document.documentElement.lang || 'fa';
  const heroTitle = document.querySelector('[data-hero-title]');
  const heroSub = document.querySelector('[data-hero-sub]');
  const heroCta1 = document.querySelector('[data-hero-cta1]');
  const heroCta2 = document.querySelector('[data-hero-cta2]');
  if (heroTitle) heroTitle.textContent = t('hero.title');
  if (heroSub) heroSub.textContent = t('hero.subtitle');
  if (heroCta1) heroCta1.textContent = t('hero.cta1');
  if (heroCta2) heroCta2.textContent = t('hero.cta2');

  // Services preview
  const servicesGrid = document.getElementById('servicesPreview');
  if (servicesGrid){
    servicesGrid.innerHTML = servicesList.slice(0,3).map(s=>`
      <div class="glass p-6 card">
        <div class="text-2xl mb-3 gradient-text">
          <svg class="icon icon-xl"><use href="/assets/icons.svg#${s.icon}"></use></svg>
        </div>
        <h3 class="font-bold mb-1">${s.title[lang]}</h3>
        <p class="opacity-80">${s.desc[lang]}</p>
      </div>
    `).join('');
  }

  // Featured work (2 items)
  const featuredWrap = document.getElementById('featuredGrid');
  if (featuredWrap){
    const picks = projects.slice(0,2);
    featuredWrap.innerHTML = picks.map(p=>`
      <div class="portfolio-card">
        <img src="${p.img}" alt="${p.title[lang]}" loading="lazy" decoding="async">
        <div class="portfolio-overlay"></div>
        <div class="portfolio-info">
          <h3 class="text-white font-bold">${p.title[lang]}</h3>
          <p class="text-white opacity-80 text-sm mb-2">${p.role[lang]}</p>
          <a class="btn-primary magnet" href="/portfolio.html"><span>${t('portfolio.view')}</span></a>
        </div>
      </div>
    `).join('');
  }

  // Testimonials slider
  const testiTitle = document.getElementById('testiTitle');
  const track = document.querySelector('.slider-track');
  const dots = document.querySelector('.slider-dots');
  if (testiTitle && track && dots){
    testiTitle.textContent = t('testi.title');
    track.innerHTML = testimonials.map(item=>`
      <div class="slide">
        <div class="glass p-6 card h-full">
          <p class="text-lg mb-3">“${item.text[lang]}”</p>
          <div class="text-sm opacity-80">${item.name} — ${item.role}</div>
        </div>
      </div>
    `).join('');
    dots.innerHTML = testimonials.map((_,i)=>`<button aria-label="slide ${i+1}" data-idx="${i}"></button>`).join('');
    initSlider();
  }

  // Stats band (lower)
  const statsBand = document.getElementById('statsBand');
  if (statsBand){
    statsBand.innerHTML = (lang==='fa') ? `
      <div class="glass p-5 card"><div class="stat-num">+۸۰</div><div class="stat-label">پروژه</div></div>
      <div class="glass p-5 card"><div class="stat-num">+۶</div><div class="stat-label">سال</div></div>
      <div class="glass p-5 card"><div class="stat-num">+۴۰</div><div class="stat-label">مشتری راضی</div></div>
      <div class="glass p-5 card"><div class="stat-num">۹۹.۹٪</div><div class="stat-label">آپ‌تایم</div></div>
    `:`
      <div class="glass p-5 card"><div class="stat-num">+80</div><div class="stat-label">Projects</div></div>
      <div class="glass p-5 card"><div class="stat-num">+6</div><div class="stat-label">Years</div></div>
      <div class="glass p-5 card"><div class="stat-num">+40</div><div class="stat-label">Happy Clients</div></div>
      <div class="glass p-5 card"><div class="stat-num">99.9%</div><div class="stat-label">Uptime</div></div>
    `;
  }

  // CTA banner
  const ctaTitle = document.getElementById('ctaTitle');
  const ctaBtn = document.getElementById('ctaBtn');
  if (ctaTitle && ctaBtn){ ctaTitle.textContent = t('cta.title'); ctaBtn.textContent = t('cta.btn'); }
}

/* Services page */
function renderServicesPage(){
  const lang = document.documentElement.lang || 'fa';
  const grid = document.getElementById('servicesGrid');
  if (grid){
    grid.innerHTML = servicesList.map(s=>`
      <div class="glass p-6 card">
        <div class="text-2xl mb-3 gradient-text"><svg class="icon icon-xl"><use href="/assets/icons.svg#${s.icon}"></use></svg></div>
        <h3 class="font-bold mb-1">${s.title[lang]}</h3>
        <p class="opacity-80">${s.desc[lang]}</p>
      </div>
    `).join('');
  }

  const priceWrap = document.getElementById('pricingWrap');
  if (priceWrap){
    const features = pricing.features; const plans = pricing.plans;
    priceWrap.innerHTML = `
      <div class="flex items-center gap-2 justify-center mb-6">
        <span>${t('pricing.monthly')}</span>
        <button id="billingSwitch" class="switch" aria-label="Billing switch"></button>
        <span>${t('pricing.yearly')} <span class="badge">${t('pricing.save')}</span></span>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4" id="plansGrid"></div>
    `;
    const plansGrid = document.getElementById('plansGrid');
    const renderPlans = yearly=>{
      plansGrid.innerHTML = plans.map(p=>{
        const price = yearly ? Math.round(p.yearly) : p.monthly;
        const feats = features.map(f=>{
          const ok = p.includes.includes(f.key);
          const icon = ok ? 'check' : 'minus';
          return `<li class="flex items-center gap-2 ${ok?'':'opacity-70'}">
            <svg class="icon ${ok?'text-success':''}"><use href="/assets/icons.svg#${icon}"></use></svg>
            <span>${f[lang]}</span>
          </li>`;
        }).join('');
        return `
          <div class="glass p-6 card flex flex-col">
            <h4 class="text-xl font-bold mb-1">${p.name[lang]}</h4>
            <div class="text-3xl font-extrabold mb-4">$${price}<span class="text-sm opacity-70">${yearly?'/yr':'/mo'}</span></div>
            <ul class="space-y-2 mb-5">${feats}</ul>
            <a href="/contact.html" class="btn-primary magnet mt-auto"><span>${t('nav.cta')}</span></a>
          </div>`;
      }).join('');
    };
    renderPlans(false);
    const sw = document.getElementById('billingSwitch');
    sw.addEventListener('click',()=>{ const on=!sw.classList.contains('is-on'); sw.classList.toggle('is-on',on); renderPlans(on); });
  }

  const faqWrap = document.getElementById('faqWrap');
  if (faqWrap){
    faqWrap.innerHTML = faqs.map(f=>`
      <div class="faq-item">
        <div class="faq-q">${f.q[lang]} <svg class="icon chev"><use href="/assets/icons.svg#chev-down"></use></svg></div>
        <div class="faq-a"><div class="py-2">${f.a[lang]}</div></div>
      </div>
    `).join('');
    faqWrap.querySelectorAll('.faq-q').forEach(q=>{
      q.addEventListener('click',()=> q.parentElement.classList.toggle('open'));
    });
  }

  const processGrid = document.getElementById('processGrid');
  if (processGrid){
    processGrid.innerHTML = processSteps.map(s=>`
      <div class="glass p-5 card step">
        <div class="badge mb-2">#${s.step}</div>
        <div class="title">${s[lang]}</div>
      </div>
    `).join('');
  }
}

/* Portfolio */
function renderPortfolioPage(){
  const lang = document.documentElement.lang || 'fa';
  const bar = document.getElementById('filterBar'); const grid = document.getElementById('portfolioGrid'); if (!bar||!grid) return;
  const filters = [
    {key:'all', label:t('portfolio.filterAll')},
    {key:'ecommerce', label:t('portfolio.filterEcom')},
    {key:'corporate', label:t('portfolio.filterCorp')},
    {key:'webapp', label:t('portfolio.filterApp')},
  ];
  let active='all';

  function drawBar(){
    bar.innerHTML = filters.map(f=>`<button class="chip ${f.key===active?'active':''}" data-filter="${f.key}">${f.label}</button>`).join('');
    bar.querySelectorAll('button').forEach(b=>b.addEventListener('click',()=>{ active=b.dataset.filter; drawBar(); drawGrid(); }));
  }
  function drawGrid(){
    grid.innerHTML = projects.filter(p => active==='all' || p.cat===active).map(p=>`
      <div class="portfolio-card">
        <img src="${p.img}" alt="${p.title[lang]}" loading="lazy" decoding="async">
        <div class="portfolio-overlay"></div>
        <div class="portfolio-info">
          <h3 class="text-white font-bold">${p.title[lang]}</h3>
          <p class="text-white opacity-80 text-sm mb-2">${p.role[lang]}</p>
          <button class="btn-primary magnet" data-view="${p.id}"><span>${t('portfolio.view')}</span></button>
        </div>
      </div>
    `).join('');
    grid.querySelectorAll('[data-view]').forEach(b=>b.addEventListener('click',()=>openProjectModal(b.dataset.view)));
  }
  drawBar(); drawGrid();

  const modal = document.getElementById('projectModal'); const closeBtn = document.getElementById('closeModal');
  function openProjectModal(id){
    const p = projects.find(x=>x.id===id); if(!p) return;
    document.getElementById('modalImage').src = p.img;
    document.getElementById('modalTitle').textContent = p.title[lang];
    document.getElementById('modalCategory').textContent = p.role[lang];
    document.getElementById('modalDesc').textContent = lang==='fa' ? 'شرح کوتاه چالش، راهکار و نتیجه.' : 'Brief of challenge, solution and outcome.';
    document.getElementById('modalLink').href = p.link || '#';
    modal.classList.add('is-open'); document.body.style.overflow='hidden';
  }
  function closeProjectModal(){ modal.classList.remove('is-open'); document.body.style.overflow=''; }
  closeBtn?.addEventListener('click', closeProjectModal);
  modal?.addEventListener('click', e=>{ if(e.target===modal) closeProjectModal(); });
  document.addEventListener('keydown', e=>{ if(e.key==='Escape') closeProjectModal(); });
}

/* About */
function renderAboutPage(){
  const teamGrid = document.getElementById('teamGrid');
  const valuesGrid = document.getElementById('valuesGrid');
  const lang = document.documentElement.lang || 'fa';
  if (teamGrid){
    const team = [
      { img:'https://placehold.co/800x600/png', name:'Alex Johnson', role:{en:'Lead Frontend',fa:'رهبر فرانت‌اند'}, bio:{en:'Motion & React/Vue.',fa:'موشن و React/Vue.'} },
      { img:'https://placehold.co/800x600/png', name:'Sarah Williams', role:{en:'UI/UX Designer',fa:'طراح UI/UX'}, bio:{en:'Figma & systems.',fa:'Figma و سیستم طراحی.'} },
      { img:'https://placehold.co/800x600/png', name:'Michael Chen', role:{en:'Backend Specialist',fa:'متخصص بک‌اند'}, bio:{en:'Node/Python & DB.',fa:'Node/Python و دیتابیس.'} },
    ];
    teamGrid.innerHTML = team.map(m=>`
      <div class="team-card">
        <div class="team-photo"><img src="${m.img}" alt="${m.name}" loading="lazy"></div>
        <div class="team-body">
          <h3 class="font-bold">${m.name}</h3>
          <div class="badge my-2">${m.role[lang]}</div>
          <p class="opacity-80">${m.bio[lang]}</p>
        </div>
      </div>
    `).join('');
  }
  if (valuesGrid){
    const vals = [
      { icon:'bulb', en:'Innovation', fa:'نوآوری' },
      { icon:'medal', en:'Quality', fa:'کیفیت' },
      { icon:'heart', en:'Client Focus', fa:'تمرکز بر مشتری' },
      { icon:'users', en:'Collaboration', fa:'همکاری' },
    ];
    valuesGrid.innerHTML = vals.map(v=>`
      <div class="glass p-6 card">
        <div class="w-10 h-10 rounded-full" style="background:linear-gradient(90deg,var(--primary-1),var(--primary-2));color:#fff;display:flex;align-items:center;justify-content:center;margin-bottom:.5rem;">
          <svg class="icon"><use href="/assets/icons.svg#${v.icon}"></use></svg>
        </div>
        <div class="font-bold">${v[lang]}</div>
      </div>
    `).join('');
  }
}

/* Contact */
function renderContactPage(){
  const status = document.getElementById('formStatus'); const form = document.getElementById('contactForm');
  const map = {name:'contact.name',email:'contact.email',phone:'contact.phone',service:'contact.service',budget:'contact.budget',message:'contact.message',submit:'contact.submit'};
  Object.entries(map).forEach(([k,key])=>{ const el=document.querySelector(`[data-label="${k}"]`); if(el) el.textContent=t(key);});
  const lang = document.documentElement.lang || 'fa';
  const serviceSel = document.getElementById('service'); const budgetSel = document.getElementById('budget');
  if(serviceSel){
    serviceSel.innerHTML = [
      {v:'',l: lang==='fa'?'انتخاب سرویس':'Select a service'},
      {v:'uiux',l: lang==='fa'?'طراحی UI/UX':'UI/UX Design'},
      {v:'frontend',l: lang==='fa'?'توسعه فرانت‌اند':'Frontend Development'},
      {v:'backend',l: lang==='fa'?'توسعه بک‌اند':'Backend Development'},
      {v:'ecommerce',l: lang==='fa'?'فروشگاه اینترنتی':'E‑commerce'},
      {v:'fullstack',l: lang==='fa'?'توسعه فول‌استک':'Full‑Stack'},
      {v:'maintenance',l: lang==='fa'?'پشتیبانی و نگهداری':'Maintenance & Support'},
      {v:'consulting',l: lang==='fa'?'مشاوره و استراتژی':'Consulting & Strategy'},
      {v:'other',l: lang==='fa'?'سایر':'Other'},
    ].map(o=>`<option value="${o.v}">${o.l}</option>`).join('');
  }
  if(budgetSel){
    budgetSel.innerHTML = [
      {v:'',l: lang==='fa'?'انتخاب بودجه':'Select budget range'},
      {v:'lt5k',l: lang==='fa'?'کمتر از ۵۰۰۰ دلار':'Less than $5,000'},
      {v:'5k-10k',l:'$5,000 - $10,000'},
      {v:'10k-25k',l:'$10,000 - $25,000'},
      {v:'gt25k',l: lang==='fa'?'بیش از ۲۵۰۰۰ دلار':'More than $25,000'},
    ].map(o=>`<option value="${o.v}">${o.l}</option>`).join('');
  }
  if(form){
    form.addEventListener('submit',(e)=>{
      e.preventDefault();
      status.textContent = t('contact.success'); status.className='form-status ok';
      form.reset(); setTimeout(()=>location.href='/thank-you.html',900);
    });
  }

  // Estimator
  const estWrap = document.getElementById('estimator');
  if(estWrap){
    const features = [
      {k:'ui',l:{en:'UI/UX Design',fa:'طراحی UI/UX'},p:1500},
      {k:'fe',l:{en:'Frontend (React/Vue)',fa:'فرانت‌اند (React/Vue)'},p:2500},
      {k:'be',l:{en:'Backend/API',fa:'بک‌اند/API'},p:3000},
      {k:'ecom',l:{en:'E‑commerce',fa:'فروشگاه'},p:2000},
      {k:'cms',l:{en:'CMS/Blog',fa:'CMS/بلاگ'},p:1000},
      {k:'seo',l:{en:'SEO/Analytics',fa:'سئو/آنالیتیکس'},p:800},
      {k:'sup',l:{en:'Maintenance (3mo)',fa:'نگهداری (۳ ماه)'},p:900},
    ];
    estWrap.innerHTML = `
      <h3 class="text-2xl font-bold mb-3">${t('estimator.title')}</h3>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
        ${features.map(f=>`
          <label class="glass p-3 flex items-center gap-3 cursor-pointer">
            <input type="checkbox" data-price="${f.p}">
            <span>${f.l[lang]}</span>
            <span class="ml-auto badge">$${f.p}</span>
          </label>
        `).join('')}
      </div>
      <div class="flex items-center gap-3">
        <button id="calcBtn" class="btn-primary magnet"><span>${t('estimator.cta')}</span></button>
        <div><div class="text-sm opacity-70">${t('estimator.total')}</div><div id="estTotal" class="text-2xl font-extrabold">$0</div></div>
      </div>
      <div class="text-sm opacity-70 mt-2">${t('estimator.note')}</div>
    `;
    document.getElementById('calcBtn').addEventListener('click',()=>{
      let total=0; estWrap.querySelectorAll('input[type="checkbox"]').forEach(cb=>{ if(cb.checked) total+=Number(cb.dataset.price); });
      document.getElementById('estTotal').textContent=`$${total}`;
    });
  }
}

// Slider
function initSlider(){
  const track = document.querySelector('.slider-track');
  const dots = document.querySelectorAll('.slider-dots button');
  if(!track || !dots.length) return;
  let idx=0,N=dots.length,timer;
  const go=i=>{ idx=(i+N)%N; track.style.transform=`translateX(-${idx*100}%)`; dots.forEach((d,j)=>d.classList.toggle('active',j===idx)); };
  dots.forEach(d=>d.addEventListener('click',()=>go(Number(d.dataset.idx))));
  const auto=()=>{ timer=setInterval(()=>go(idx+1),4000); }; const stop=()=>clearInterval(timer);
  auto(); track.addEventListener('mouseenter',stop); track.addEventListener('mouseleave',auto);
}

// Render dispatcher
function renderPage(){
  const page = document.body.dataset.page;
  const yearEl = document.getElementById('year'); if(yearEl) yearEl.textContent=new Date().getFullYear();
  if(page==='home') renderHome();
  if(page==='services') renderServicesPage();
  if(page==='portfolio') renderPortfolioPage();
  if(page==='about') renderAboutPage();
  if(page==='contact') renderContactPage();
  initReveal();

  // Rebind magnet
  document.querySelectorAll('.magnet').forEach(btn=>{
    btn.addEventListener('mousemove',(e)=>{
      const r=btn.getBoundingClientRect();
      btn.style.setProperty('--x',`${e.clientX-r.left}px`); btn.style.setProperty('--y',`${e.clientY-r.top}px`);
    });
  });
}

// DOM ready
window.addEventListener('DOMContentLoaded',()=>{
  initHeader(); initBackToTop(); bindTexts(); renderPage();
});