// Safe hotfix JS: theme/lang/menu/icons, no content re-render

// 1) Inject local SVG sprite (icons)
(async function injectIcons(){
  if (document.getElementById('svg-sprite')) return;
  try{
    const res = await fetch('assets/icons.svg', { cache: 'reload' });
    if (!res.ok) throw new Error('icons');
    const svg = await res.text();
    const wrap = document.createElement('div');
    wrap.id = 'svg-sprite';
    wrap.style.display = 'none';
    wrap.innerHTML = svg;
    document.body.prepend(wrap);
  }catch(e){
    // fallback: leave <use href="assets/icons.svg#...">, most servers serve it fine
  }
})();

// 2) Theme (dark/light)
(function(){
  const stored = localStorage.getItem('theme');
  const prefers = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const isDark = stored ? stored === 'dark' : prefers;
  document.documentElement.classList.toggle('dark', isDark);

  const btns = [document.getElementById('themeToggle'), document.getElementById('themeToggleMobile')].filter(Boolean);
  btns.forEach(b => b.addEventListener('click', ()=>{
    const next = !document.documentElement.classList.contains('dark');
    document.documentElement.classList.toggle('dark', next);
    localStorage.setItem('theme', next ? 'dark' : 'light');
  }));
})();

// 3) Language (global)
(function(){
  const dict = {
    en:{ home:'Home', services:'Services', portfolio:'Portfolio', about:'About', contact:'Contact', cta:'Get a Quote',
         heroT:'Websites that inspire and convert', heroS:'Your Vision, Our Code...', cta1:'Start Your Project', cta2:'View Portfolio',
         rights:'All rights reserved.' },
    fa:{ home:'خانه', services:'خدمات', portfolio:'نمونه‌کارها', about:'درباره‌ما', contact:'تماس', cta:'شروع همکاری',
         heroT:'وب‌سایت‌هایی که الهام‌بخش و نتیجه‌محورند', heroS:'چشم‌انداز شما، کُد ما...', cta1:'شروع همکاری', cta2:'مشاهده نمونه‌کار',
         rights:'تمامی حقوق محفوظ است.' }
  };
  function apply(lang){
    localStorage.setItem('language', lang);
    document.documentElement.setAttribute('lang', lang);
    document.documentElement.setAttribute('dir', lang==='fa' ? 'rtl' : 'ltr');
    const t = dict[lang];
    document.querySelectorAll('[data-i18n="nav.home"]').forEach(el=>el.textContent=t.home);
    document.querySelectorAll('[data-i18n="nav.services"]').forEach(el=>el.textContent=t.services);
    document.querySelectorAll('[data-i18n="nav.portfolio"]').forEach(el=>el.textContent=t.portfolio);
    document.querySelectorAll('[data-i18n="nav.about"]').forEach(el=>el.textContent=t.about);
    document.querySelectorAll('[data-i18n="nav.contact"]').forEach(el=>el.textContent=t.contact);
    document.querySelectorAll('[data-i18n="nav.cta"]').forEach(el=>el.textContent=t.cta);
    document.querySelectorAll('[data-hero-title]').forEach(el=>el.textContent=t.heroT);
    document.querySelectorAll('[data-hero-sub]').forEach(el=>el.textContent=t.heroS);
    document.querySelectorAll('[data-hero-cta1]').forEach(el=>el.textContent=t.cta1);
    document.querySelectorAll('[data-hero-cta2]').forEach(el=>el.textContent=t.cta2);
    document.querySelectorAll('[data-i18n="footer.rights"]').forEach(el=>el.textContent=t.rights);
  }
  const langInit = localStorage.getItem('language') || 'fa';
  apply(langInit);
  const btns = [document.getElementById('langToggle'), document.getElementById('langToggleMobile')].filter(Boolean);
  btns.forEach(b=>b.addEventListener('click', ()=>{
    const next = (document.documentElement.getAttribute('lang') || 'fa') === 'fa' ? 'en' : 'fa';
    apply(next);
  }));
})();

// 4) Mobile menu
(function(){
  const btn = document.getElementById('menuToggle');
  const nav = document.getElementById('mobileNav');
  if (!btn || !nav) return;
  btn.addEventListener('click', ()=>{
    const open = !nav.classList.contains('open');
    nav.classList.toggle('open', open);
    btn.setAttribute('aria-expanded', String(open));
    btn.innerHTML = open
      ? '<svg class="icon"><use href="assets/icons.svg#close"></use></svg>'
      : '<svg class="icon"><use href="assets/icons.svg#menu"></use></svg>';
  });
  nav.querySelectorAll('a').forEach(a=>a.addEventListener('click', ()=>{
    nav.classList.remove('open');
    btn.setAttribute('aria-expanded','false');
    btn.innerHTML = '<svg class="icon"><use href="assets/icons.svg#menu"></use></svg>';
  }));
})();

// 5) Back-to-top
(function(){
  const b = document.getElementById('backToTop');
  if (!b) return;
  addEventListener('scroll', ()=>{ if (scrollY>300) b.classList.add('show'); else b.classList.remove('show'); });
  b.addEventListener('click', ()=> scrollTo({top:0, behavior:'smooth'}));
})();

// 6) Ensure animations OFF by default (opt-in only)
(function(){
  const urlFx = new URLSearchParams(location.search).get('fx');
  const stored = localStorage.getItem('effects');
  const on = (urlFx==='1') || (stored==='on');
  document.documentElement.classList.toggle('anim-on', !!on);
})();