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
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="min-h-screen bg-gray-950 text-gray-300 py-12 px-6 sm:px-10 lg:px-20"> <div class="max-w-4xl mx-auto bg-gray-900/50 backdrop-blur-xl border border-white/10 p-8 sm:p-12 rounded-3xl shadow-2xl"> <header class="border-b border-white/10 pb-8 mb-8 flex items-center justify-between gap-4"> <div> <h1 class="text-4xl font-bold text-white mb-2">
Política de Cookies
</h1> <p class="text-sm text-gray-400">Última actualización: Abril 2026</p> </div> ${!isHomePage && renderTemplate`<a href="/#hero" id="go-home" class="inline-flex items-center gap-2 rounded-xl border border-red-500/80 bg-gray-900/80 px-4 py-2 text-red-400 transition-all hover:bg-red-500/10"> ${renderComponent($$result2, "Home", Home, { "className": "w-5 h-5" })} </a>`} </header> <div class="space-y-10"> <section> <h2 class="text-2xl font-bold text-white mb-4 flex items-center"> <span class="w-1.5 h-6 bg-red-600 rounded-full mr-3"></span>
¿Qué son las cookies?[cite: 2]
</h2> <p>
Las cookies son pequeños archivos de texto que los sitios web
            almacenan en tu dispositivo para que funcionen de manera eficiente y
            proporcionen información estadística[cite: 2].
</p> </section> <section> <h2 class="text-2xl font-bold text-white mb-4 flex items-center"> <span class="w-1.5 h-6 bg-red-600 rounded-full mr-3"></span>
Tabla de Cookies[cite: 2]
</h2> <div class="overflow-x-auto"> <table class="w-full text-left border-collapse border border-white/10 text-sm"> <thead> <tr class="bg-gray-800/60 text-white"> <th class="p-3 border border-white/10">Nombre</th> <th class="p-3 border border-white/10">Proveedor</th> <th class="p-3 border border-white/10">Finalidad</th> <th class="p-3 border border-white/10">Expiración</th> </tr> </thead> <tbody> <tr> <td class="p-3 border border-white/10">cookie-consent</td> <td class="p-3 border border-white/10">Propia</td> <td class="p-3 border border-white/10">Almacenar el estado de consentimiento[cite: 2].</td> <td class="p-3 border border-white/10">1 año[cite: 2]</td> </tr> </tbody> </table> </div> </section> <section> <h2 class="text-2xl font-bold text-white mb-4 flex items-center"> <span class="w-1.5 h-6 bg-red-600 rounded-full mr-3"></span>
Gestión y Desactivación[cite: 2]
</h2> <p>
Puedes bloquear o eliminar las cookies instaladas mediante la
            configuración de tu navegador (Chrome, Firefox, Safari, Edge)[cite:
            2].
</p> </section> </div> </div> </section> ` })}`;
}, "/Users/normanleyvagarcia/Desktop/rctechnology/src/pages/politica-cookies/index.astro", void 0);

const $$file = "/Users/normanleyvagarcia/Desktop/rctechnology/src/pages/politica-cookies/index.astro";
const $$url = "/politica-cookies";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
