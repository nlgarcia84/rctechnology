import { c as createComponent, $ as $$Picture } from './_astro_assets_zLf5wvux.mjs';
import 'piccolore';
import { h as createRenderInstruction, m as maybeRenderHead, c as addAttribute, b as renderTemplate, r as renderComponent, j as renderHead, k as renderSlot } from './entrypoint_g7PPwlsS.mjs';
import 'clsx';
import pkg from 'lucide-react';

async function renderScript(result, id) {
  const inlined = result.inlinedScripts.get(id);
  let content = "";
  if (inlined != null) {
    if (inlined) {
      content = `<script type="module">${inlined}</script>`;
    }
  } else {
    const resolved = await result.resolve(id);
    content = `<script type="module" src="${result.userAssetsBase ? (result.base === "/" ? "" : result.base) + result.userAssetsBase : ""}${resolved}"></script>`;
  }
  return createRenderInstruction({ type: "script", id, content });
}

const $$Button = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Button;
  const { as = "button", href = "", text, id, class: className } = Astro2.props;
  return renderTemplate`${as === "a" ? renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")}${addAttribute(id, "id")}${addAttribute(`btn ${className}`, "class")} target="_blank" rel="noopener noreferrer">${text}</a>` : renderTemplate`<button${addAttribute(id, "id")}${addAttribute(`btn ${className}`, "class")}>${text}</button>`}`;
}, "/Users/normanleyvagarcia/Desktop/rctechnology/src/components/Button.astro", void 0);

const logo = new Proxy({"src":"/_astro/rctlogo.BGrkQZfs.png","width":2000,"height":2000,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/normanleyvagarcia/Desktop/rctechnology/src/assets/rctlogo.png";
							}
							
							return target[name];
						}
					});

const logoMobile = new Proxy({"src":"/_astro/rctlogo_mobile.CIglS-lB.png","width":584,"height":576,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/normanleyvagarcia/Desktop/rctechnology/src/assets/rctlogo_mobile.png";
							}
							
							return target[name];
						}
					});

const $$Header = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Header;
  return renderTemplate`${maybeRenderHead()}<header id="main-header" class="fixed top-0 left-0 right-0 grid grid-cols-2 lg:grid-cols-3 items-center px-5 py-4 md:px-10 md:h-24 m-4 rounded-2xl bg-gray-900/80 backdrop-blur-md text-white border border-gray-700/50 z-[120] transition-all duration-500 ease-in-out" data-astro-cid-3ef6ksr2> <div id="header-logo" class="flex items-center justify-start transition-all duration-500 origin-left" data-astro-cid-3ef6ksr2> <a href="/#hero" class="logo shrink-0 lg:hidden flex items-center" data-astro-cid-3ef6ksr2> ${renderComponent($$result, "Picture", $$Picture, { "src": logoMobile, "alt": "RC Technology", "width": 48, "height": 48, "formats": ["webp", "png"], "data-astro-cid-3ef6ksr2": true })} </a> <a href="/#hero" class="logo shrink-0 hidden lg:flex items-center" data-astro-cid-3ef6ksr2> ${renderComponent($$result, "Picture", $$Picture, { "src": logo, "alt": "RC Technology", "width": 250, "height": 80, "formats": ["webp", "png"], "class": "h-16 w-auto object-contain transition-all duration-500", "data-astro-cid-3ef6ksr2": true })} </a> </div> <nav id="header-nav" class="hidden lg:flex justify-center items-center gap-4 text-lg font-medium transition-all duration-500 origin-center" data-astro-cid-3ef6ksr2> <a href="/#hero" class="hover:text-red-500 transition-colors px-4 py-2" data-astro-cid-3ef6ksr2>Inicio</a> <a href="/#aboutus" class="hover:text-red-500 transition-colors px-4 py-2" data-astro-cid-3ef6ksr2>Acerca de</a> <a href="/#contact" class="hover:text-red-500 transition-colors px-4 py-2" data-astro-cid-3ef6ksr2>Contacto</a> </nav> <div id="header-actions" class="flex gap-4 items-center justify-end transition-all duration-500 origin-right" data-astro-cid-3ef6ksr2> ${renderComponent($$result, "Button", $$Button, { "as": "a", "href": "http://54.37.38.27/", "class": "border border-red-700 hover:bg-red-700/20 px-5 py-2.5 rounded-xl hidden lg:block transition-all", "text": "REDBEAT", "data-astro-cid-3ef6ksr2": true })} ${renderComponent($$result, "Button", $$Button, { "as": "a", "href": "/#contact", "class": "bg-red-700 hover:bg-red-800 px-3 py-2 xs:px-6 xs:py-2.5 rounded-xl transition-all shadow-lg shadow-red-900/20 text-sm xs:text-base", "text": "Contáctanos", "data-astro-cid-3ef6ksr2": true })} <button id="menu-btn" class="lg:hidden relative w-6 sm:w-8 h-6 sm:h-8 flex flex-col justify-around z-[130] cursor-pointer" aria-label="Menú" data-astro-cid-3ef6ksr2> <span class="block w-full h-0.5 bg-white transition-all duration-300" data-astro-cid-3ef6ksr2></span> <span class="block w-full h-0.5 bg-white transition-all duration-300" data-astro-cid-3ef6ksr2></span> <span class="block w-full h-0.5 bg-white transition-all duration-300" data-astro-cid-3ef6ksr2></span> </button> </div> </header> <nav id="mobile-menu" class="lg:hidden fixed top-0 left-0 h-screen w-4/5 max-w-xs bg-black/60 backdrop-blur-2xl border-r border-white/10 text-white z-[150] transform -translate-x-full transition-transform duration-300 ease-in-out p-8 shadow-2xl" data-astro-cid-3ef6ksr2> <div class="flex flex-col gap-6 mt-24" data-astro-cid-3ef6ksr2> <a href="/#hero" class="text-2xl font-semibold border-b border-white/10 pb-4" data-astro-cid-3ef6ksr2>Inicio</a> <a href="/#aboutus" class="text-2xl font-semibold border-b border-white/10 pb-4" data-astro-cid-3ef6ksr2>Acerca de</a> <a href="/#contact" class="text-2xl font-semibold border-b border-white/10 pb-4" data-astro-cid-3ef6ksr2>Contacto</a> <a href="https://redbeat.stackcode.io/#/authentication/signin" target="_blank" rel="noopener noreferrer" class="text-2xl font-semibold border-b border-white/10 pb-4" data-astro-cid-3ef6ksr2>
Plataforma <span class="text-xl font-bold text-red-500 pt-4" data-astro-cid-3ef6ksr2>REDBEAT 1.0</span> </a> <a href="http://54.37.38.27/" target="_blank" rel="noopener noreferrer" class="text-2xl font-semibold border-b border-white/10 pb-4" data-astro-cid-3ef6ksr2>
Plataforma <span class="text-xl font-bold text-red-500 pt-4" data-astro-cid-3ef6ksr2>REDBEAT 2.0</span> </a> </div> </nav>  ${renderScript($$result, "/Users/normanleyvagarcia/Desktop/rctechnology/src/components/Header.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/normanleyvagarcia/Desktop/rctechnology/src/components/Header.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="text-center bg-red-700 px-4 py-10 w-full shadow-lg"> <p>
RC Technology Solutions SL. CIF:B56360894<br>
Gran Vía de les Corts Catalanes 620, ático 4A,08007<br>
Barcelona, Spain<br>
rafael@rctechnology.es<br>
+34 608 848 171
</p> </footer>`;
}, "/Users/normanleyvagarcia/Desktop/rctechnology/src/components/Footer.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$CookieBanner = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(["", `<div id="cookie-banner" class="fixed bottom-6 left-6 right-6 md:left-auto md:max-w-md bg-gray-900/95 backdrop-blur-xl border border-white/10 p-6 rounded-2xl shadow-2xl z-[200] hidden"> <div class="flex items-start gap-4"> <div class="bg-red-600/20 p-2 rounded-lg shrink-0"> <svg class="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path> </svg> </div> <div> <h3 class="text-white font-bold text-lg">Configuración de Cookies</h3> <p class="text-gray-400 text-sm mt-2 leading-relaxed">
Utilizamos cookies para mejorar la experiencia técnica de <strong>RC Technology</strong> y analizar el tráfico de forma anónima.
</p> <div class="flex flex-wrap gap-3 mt-6"> <button id="accept-cookies" class="bg-red-700 hover:bg-red-800 text-white text-sm font-bold py-2.5 px-6 rounded-xl transition-all active:scale-95">
Aceptar todas
</button> <a href="/politica-cookies" class="border border-gray-700 hover:bg-gray-800 text-gray-300 text-sm py-2.5 px-6 rounded-xl transition-all text-center">
Más información
</a> </div> </div> </div> </div> <script>
  const banner = document.getElementById('cookie-banner');
  const acceptBtn = document.getElementById('accept-cookies');

  // 1. Función para disparar la carga de Analytics
  function triggerAnalytics() {
    window.dispatchEvent(new CustomEvent('cookies-accepted'));
    console.log('Evento cookies-accepted disparado');
  }

  // 2. Lógica del Banner
  if (banner && acceptBtn) {
    // Si ya aceptó antes, cargamos analytics directamente sin mostrar banner
    if (localStorage.getItem('cookie-consent') === 'accepted') {
      triggerAnalytics();
    } else {
      // Si no ha aceptado, mostramos el banner
      banner.classList.remove('hidden');
    }

    acceptBtn.addEventListener('click', () => {
      localStorage.setItem('cookie-consent', 'accepted');
      banner.classList.add('hidden');
      triggerAnalytics();
    });
  }

  // 3. RECEPTOR: Aquí escuchas el evento para cargar tus trackers
  window.addEventListener('cookies-accepted', () => {
    // Ejemplo de Google Analytics (GTAG)
    /*
    const script = document.createElement('script');
    script.src = 'https://www.googletagmanager.com/gtag/js?id=TU_ID_AQUÍ';
    script.async = true;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'TU_ID_AQUÍ');
    */
    console.log('Scripts de seguimiento cargados con éxito.');
  });
<\/script>`])), maybeRenderHead());
}, "/Users/normanleyvagarcia/Desktop/rctechnology/src/components/CookieBanner.astro", void 0);

const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const { Cookie, ArrowUpCircle, Home } = pkg;
  return renderTemplate`<html lang="es"> <head><meta charset="utf-8"><title>RC TECHNOLOGY</title><meta name="viewport" content="width=device-width, initial-scale=1"><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Rajdhani:wght@300;400;500;600;700&display=swap" rel="stylesheet">${renderHead()}</head> <body class="bg-gray-950 text-gray-300 flex flex-col min-h-screen pt-40"> ${renderComponent($$result, "Header", $$Header, {})} <main class="grow px-5 pt-5 pb-20"> ${renderSlot($$result, $$slots["default"])} </main> <button id="reset-cookies" class="flex items-center justify-center gap-2 text-lg text-green-500 border-green-500 border-2 rounded-xl hover:bg-green-500/10 transition-all w-52 py-2 mb-20 mx-auto font-medium"> ${renderComponent($$result, "Cookie", Cookie, { "className": "w-5 h-5 text-green-500" })} Revisar cookies
</button> ${renderComponent($$result, "Footer", $$Footer, { "class": "fixed left-0 bottom-0 w-full z-50" })} ${renderComponent($$result, "CookieBanner", $$CookieBanner, {})} <a href="/" id="return-top" class="fixed bottom-0 right-0 m-10 z-[200]"> ${renderComponent($$result, "ArrowUpCircle", ArrowUpCircle, { "className": "w-10 h-10" })} </a> ${renderScript($$result, "/Users/normanleyvagarcia/Desktop/rctechnology/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts")} </body> </html>`;
}, "/Users/normanleyvagarcia/Desktop/rctechnology/src/layouts/Layout.astro", void 0);

export { $$Layout as $, $$Button as a };
