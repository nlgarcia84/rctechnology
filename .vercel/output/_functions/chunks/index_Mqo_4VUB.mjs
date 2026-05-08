import { c as createComponent } from './_astro_assets_zLf5wvux.mjs';
import 'piccolore';
import { r as renderComponent, b as renderTemplate, m as maybeRenderHead } from './entrypoint_g7PPwlsS.mjs';
import { $ as $$MiniCard } from './MiniCard_CaUyXAuO.mjs';
import { $ as $$Layout } from './Layout_BuF2oPAP.mjs';
import pkg from 'lucide-react';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Index;
  const { Home } = pkg;
  const isHomePage = Astro2.url.pathname === "/";
  const data = [
    {
      icon: "Heart",
      title: "Signos Vitales",
      description: "Frecuencia cardíaca, SpO2, temperatura cutánea y presión arterial."
    },
    {
      icon: "Activity",
      title: "Biomarcadores Críticos",
      description: "Seguimiento de niveles de NT-proBNP (insuficiencia cardíaca) y Calcio en orina (riesgo renal-cardíaco)."
    },
    {
      icon: "Scale",
      title: "Análisis de Composición Corporal",
      description: "Control exhaustivo del peso y la retención de líquidos para prevenir descompensaciones."
    },
    {
      icon: "Zap",
      title: "ECG Hospitalario",
      description: "Integración de electrocardiogramas de 12 derivaciones realizados en entornos clínicos o domiciliarios."
    }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="min-h-screen bg-gray-950 text-gray-300 lg:px-20"> <div class="max-w-4xl mx-auto bg-gray-900/50 backdrop-blur-xl border border-white/10 sm:p-12 rounded-3xl shadow-2xl"> <header class="border-b border-white/10 p-5 mb-8 flex items-center justify-between gap-4"> <h1 class="text-4xl font-bold text-white mb-0">
RedBeat Health Platform
</h1> ${!isHomePage && renderTemplate`<a href="/#hero" id="go-home" class="inline-flex items-center gap-2 rounded-xl border border-red-500/80 bg-gray-900/80 px-4 py-2 text-red-400 transition-all hover:bg-red-500/10"> ${renderComponent($$result2, "Home", Home, { "className": "w-5 h-5" })} </a>`} </header> <article class="bg-gray-800/40 rounded-2xl p-6 mb-10 border border-white/5 m-5"> <h2 class="text-xl font-semibold text-white mb-4 flex items-center"> <span class="w-1.5 h-6 bg-red-600 rounded-full mr-3"></span>
El Ecosistema Integral de Salud Conectada
</h2> <p>
La <span class="text-red-600 font-semibold">REDBEAT HEALTH PLATFORM</span> de RC Technology es una solución de salud digital de próxima generación
          que transforma la atención cardiológica reactiva en una estrategia de prevención
          continua y personalizada. Nuestra plataforma actúa como el núcleo inteligente
          de un ecosistema compuesto por seis dispositivos médicos interconectados,
          diseñados para monitorizar la salud cardiovascular desde cualquier lugar.
</p> </article> <article class="bg-gray-800/40 rounded-2xl p-6 mb-10 border border-white/5 m-5"> <h2 class="text-xl font-semibold text-white mb-4 flex items-center"> <span class="w-1.5 h-6 bg-red-600 rounded-full mr-3"></span>
Una Visión Integral del Paciente en Tiempo Real
</h2> <p class="mb-5">
Gracias a nuestra Conectividad Total, todos los dispositivos de la
          gama RedBeat —desde wearables y básculas médicas hasta medidores de
          biomarcadores— sincronizan sus datos automáticamente en la nube. Esto
          permite a los profesionales de la salud acceder a un Dashboard de
          Monitorización avanzado, donde pueden visualizar de forma unificada:
</p> <ol> ${data.map((d) => renderTemplate`<li class="bg-gray-800/40 rounded-2xl p-6 mb-10 border border-white/5 m-5"> ${renderComponent($$result2, "MiniCard", $$MiniCard, { "icon": d.icon, "title": d.title, "description": d.description })} </li>`)} </ol> </article> <article class="bg-gray-800/40 rounded-2xl p-6 mb-10 border border-white/5 m-5"> <h2 class="text-xl font-semibold text-white mb-4 flex items-center"> <span class="w-1.5 h-6 bg-red-600 rounded-full mr-3"></span>
Inteligencia Artificial para un Diagnóstico Preventivo
</h2> <p>
La plataforma <span class="text-red-600 font-semibold">REDBEAT</span> no
          solo almacena datos; los interpreta. Estamos entrenando modelos de Inteligencia
          Artificial para generar reportes clínicos automáticos que ayuden a identificar
          irregularidades sutiles antes de que se conviertan en eventos críticos.
</p> </article> </div> </section> ` })}`;
}, "/Users/normanleyvagarcia/Desktop/rctechnology/src/pages/plataforma/index.astro", void 0);

const $$file = "/Users/normanleyvagarcia/Desktop/rctechnology/src/pages/plataforma/index.astro";
const $$url = "/plataforma";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
