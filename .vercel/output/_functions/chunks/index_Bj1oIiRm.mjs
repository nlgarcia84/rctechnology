import { c as createComponent } from './_astro_assets_zLf5wvux.mjs';
import 'piccolore';
import { r as renderComponent, b as renderTemplate, m as maybeRenderHead } from './entrypoint_g7PPwlsS.mjs';
import { $ as $$Layout } from './Layout_BuF2oPAP.mjs';
import pkg from 'lucide-react';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Index;
  const { Home } = pkg;
  const isHomePage = Astro2.url.pathname === "/";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="min-h-screen bg-gray-950 text-gray-300 py-12 px-6 sm:px-10 lg:px-20"> <div class="max-w-4xl mx-auto bg-gray-900/50 backdrop-blur-xl border border-white/10 p-8 sm:p-12 rounded-3xl shadow-2xl"> <header class="border-b border-white/10 pb-8 mb-8 flex items-center justify-between gap-4"> <h1 class="text-4xl font-bold text-white mb-0">Términos de Servicio</h1> ${!isHomePage && renderTemplate`<a href="/#hero" id="go-home" class="inline-flex items-center gap-2 rounded-xl border border-red-500/80 bg-gray-900/80 px-4 py-2 text-red-400 transition-all hover:bg-red-500/10"> ${renderComponent($$result2, "Home", Home, { "className": "w-5 h-5" })} </a>`} </header> <p class="leading-relaxed">
Estos son los términos de servicio de RC Technology. Aquí explicamos las
        condiciones para usar nuestro sitio web y servicios.
</p> </div> </section> ` })}`;
}, "/Users/normanleyvagarcia/Desktop/rctechnology/src/pages/terminos-servicio/index.astro", void 0);

const $$file = "/Users/normanleyvagarcia/Desktop/rctechnology/src/pages/terminos-servicio/index.astro";
const $$url = "/terminos-servicio";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
