import { c as createComponent, $ as $$Picture, a as $$Image } from './_astro_assets_zLf5wvux.mjs';
import 'piccolore';
import { m as maybeRenderHead, c as addAttribute, r as renderComponent, b as renderTemplate } from './entrypoint_g7PPwlsS.mjs';
import { a as $$Button, $ as $$Layout } from './Layout_BuF2oPAP.mjs';
import { a as actions$1, s as supabase } from './supabaseClient_DKYvw2QP.mjs';

const $$CardOptimized = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$CardOptimized;
  const {
    imageUrl,
    title,
    description,
    class: className = "",
    paginaDesti
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`mb-10 mx-auto w-full max-w-[95vw] sm:max-w-[400px] md:max-w-[350px] lg:max-w-[380px] xl:max-w-md  h-500px flex flex-col rounded-lg border border-gray-700 bg-gray-900/50 backdrop-blur-sm transition-all duration-300 hover:border-gray-600 hover:bg-gray-900/80 hover:shadow-lg hover:shadow-red-500/10 ${className}`, "class")} data-astro-cid-bej2rhun> ${imageUrl && renderTemplate`${renderComponent($$result, "Picture", $$Picture, { "src": imageUrl, "alt": title, "width": 480, "height": 270, "formats": ["webp", "png"], "class": "mb-4 rounded-t-lg w-full h-[160px] sm:h-[180px] md:h-[160px] lg:h-[180px] object-cover", "data-astro-cid-bej2rhun": true })}`} <div class="flex-1 flex flex-col p-4 sm:p-5 md:p-5 lg:p-7" data-astro-cid-bej2rhun> <h3 class="mb-5 text-center text-xl font-bold text-white group-hover:text-red-500 transition" data-astro-cid-bej2rhun> ${title} </h3> <div class="mb-5" data-astro-cid-bej2rhun> ${Array.isArray(description) ? renderTemplate`<ul class="list-disc pl-5 text-gray-400 text-sm leading-relaxed line-clamp-4" data-astro-cid-bej2rhun> ${description.map((item) => renderTemplate`<li data-astro-cid-bej2rhun>${item}</li>`)} </ul>` : renderTemplate`<p class="text-gray-400 text-sm leading-relaxed line-clamp-4" data-astro-cid-bej2rhun> ${description} </p>`} </div> ${renderComponent($$result, "Button", $$Button, { "as": "a", "href": paginaDesti, "text": "Leer más", "class": "text-white border-red-700 bg-red-700 border rounded-xl px-4 py-2 ml-auto mr-auto", "data-astro-cid-bej2rhun": true })} </div> </div>`;
}, "/Users/normanleyvagarcia/Desktop/rctechnology/src/components/CardOptimized.astro", void 0);

const appImg = new Proxy({"src":"/_astro/app.BnBpV6TK.png","width":884,"height":1488,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/normanleyvagarcia/Desktop/rctechnology/src/assets/cards/app.png";
							}
							
							return target[name];
						}
					});

const gadgets = new Proxy({"src":"/_astro/gadgets.DGBLOXaN.png","width":992,"height":1066,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/normanleyvagarcia/Desktop/rctechnology/src/assets/cards/gadgets.png";
							}
							
							return target[name];
						}
					});

const dashboard = new Proxy({"src":"/_astro/dashboard.DSN7awc1.png","width":886,"height":1454,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/normanleyvagarcia/Desktop/rctechnology/src/assets/cards/dashboard.png";
							}
							
							return target[name];
						}
					});

const formimage = new Proxy({"src":"/_astro/formimage.WxMiZ_h3.png","width":2046,"height":1482,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/normanleyvagarcia/Desktop/rctechnology/src/assets/formimage.png";
							}
							
							return target[name];
						}
					});

const $$ContactForm = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="relative w-full bg-gray-950 overflow-hidden"> <!-- CONTENEDOR HERO --> <div class="relative h-[75vh] w-full"> <!-- IMAGEN --> ${renderComponent($$result, "Picture", $$Picture, { "src": formimage, "alt": "Imagen formulario", "formats": ["webp", "png"], "class": "absolute inset-0 w-full h-full object-cover z-0" })} <!-- TINTE BASE --> <div class="absolute inset-0 bg-gray-950/60 z-10"></div> <!-- VIGNETTE --> <div class="absolute inset-0 z-20" style="background: radial-gradient(circle, transparent 0%, #030712 95%);"></div> <!-- DEGRADADOS --> <div class="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-gray-950 to-transparent z-30"></div> <div class="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-gray-950 to-transparent z-30"></div> <div class="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-gray-950 to-transparent z-30"></div> <div class="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-gray-950 to-transparent z-30"></div> <!-- FORM OVERLAY --> <div class="absolute inset-0 z-40 flex items-center justify-center px-4"> <form method="POST"${addAttribute(actions$1.enviarContacto, "action")} id="form-contacto" class="w-full max-w-lg
           bg-gray-900/30
           backdrop-blur-2xl
           rounded-2xl
           shadow-[0_20px_80px_rgba(0,0,0,0.6)]
           border border-white/10
           p-6 sm:p-8
           flex flex-col gap-6
           transform scale-[0.98]
           hover:scale-100 transition-all duration-300"> <div class="flex flex-col gap-1.5"> <label class="text-white/90 text-sm">Nombre</label> <input type="text" name="name" class="w-full p-2 rounded-lg bg-gray-800/70 border border-white/10 text-white focus:outline-none focus:border-red-500" required> </div> <div class="flex flex-col gap-1.5"> <label class="text-white/90 text-sm">Apellido</label> <input type="text" name="surname" class="w-full p-2 rounded-lg bg-gray-800/70 border border-white/10 text-white focus:outline-none focus:border-red-500" required> </div> <div class="flex flex-col gap-1.5"> <label class="text-white/90 text-sm">Correo Electrónico</label> <input type="email" name="email" class="w-full p-2 rounded-lg bg-gray-800/70 border border-white/10 text-white focus:outline-none focus:border-red-500" required> </div> <div class="flex flex-col gap-1.5"> <label class="text-white/90 text-sm">Mensaje</label> <textarea name="message" rows="4" class="w-full p-2 rounded-lg bg-gray-800/70 border border-white/10 text-white focus:outline-none focus:border-red-500" required></textarea> </div> <label class="text-white flex items-center gap-2 text-sm"> <input type="checkbox" id="terms-checkbox" class="w-4 h-4 accent-red-600"> <span>
Acepto la <a href="/politica-privacidad/" class="underline hover:text-red-400">Política de Privacidad</a> </span> </label> <button id="submit-button" type="submit" class="bg-red-600 hover:bg-red-700 text-white font-medium py-3 rounded-xl disabled:opacity-50 transition-all" disabled>
Enviar
</button> <div id="form-message" class="text-center text-sm min-h-[20px] text-white/80"></div> </form> </div> </div> </div>`;
}, "/Users/normanleyvagarcia/Desktop/rctechnology/src/components/ContactForm.astro", void 0);

const logoAccio = new Proxy({"src":"/_astro/logo_accio.C4zn4ogX.webp","width":417,"height":159,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/normanleyvagarcia/Desktop/rctechnology/src/assets/sponsors/logo_accio.webp";
							}
							
							return target[name];
						}
					});

const logoCdti = new Proxy({"src":"/_astro/logo_cdti.DcIbdO-y.webp","width":980,"height":272,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/normanleyvagarcia/Desktop/rctechnology/src/assets/sponsors/logo_cdti.webp";
							}
							
							return target[name];
						}
					});

const logoEnisa = new Proxy({"src":"/_astro/logo_enisa.CaVNiViF.webp","width":2800,"height":229,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/normanleyvagarcia/Desktop/rctechnology/src/assets/sponsors/logo_enisa.webp";
							}
							
							return target[name];
						}
					});

const $$Esponsors = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-row justify-center gap-2 mb-2"> ${renderComponent($$result, "Image", $$Image, { "src": logoAccio, "alt": "Logo Accio", "format": "webp", "class": "filter brightness-90 grayscale contrast-[1.1] invert-[0.1] hover:invert-0 hover:grayscale-0 hover:brightness-100 transition duration-300 w-[100px] h-auto sm:w-[150px] md:w-[192px]" })} ${renderComponent($$result, "Image", $$Image, { "src": logoCdti, "alt": "Logo CDTI", "format": "webp", "class": "filter brightness-90 grayscale contrast-[1.1] invert-[0.1] hover:invert-0 hover:grayscale-0 hover:brightness-100 transition duration-300 w-[100px] h-auto sm:w-[150px] md:w-[192px]" })} </div> <div class="flex justify-center"> ${renderComponent($$result, "Image", $$Image, { "src": logoEnisa, "alt": "Logo Enisa", "format": "webp", "class": "filter brightness-90 grayscale contrast-[1.1] invert-[0.1] hover:invert-0 hover:grayscale-0 hover:brightness-100 transition duration-300 w-[200px] h-auto sm:w-[300px] md:w-[400px]" })} </div>`;
}, "/Users/normanleyvagarcia/Desktop/rctechnology/src/components/Esponsors.astro", void 0);

async function formAction({ request }) {
  const formData = await request.formData();
  const name = String(formData.get("name") ?? "").trim();
  const surname = String(formData.get("surname") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();
  if (!name || !surname || !email || !message) {
    return { error: "Todos los campos son obligatorios." };
  }
  const { error } = await supabase.from("contact_messages").insert([{ name, surname, email, message }]);
  if (error) return { error: "Error al guardar el mensaje." };
  return { success: true };
}
const actions = {
  contact: formAction
};
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const data = [
    {
      imageUrl: appImg,
      title: "App y plataforma",
      description: "En el mundo de la atención médica actual, la precisión es esencial para brindar el mejor cuidado a nuestros pacientes. Con la ayuda de la inteligencia artificial y la innovación en dispositivos de última generación, estamos liderando el camino hacia una atención cardiológica más avanzada y personalizada que nunca.",
      paginaDesti: "/plataforma/"
    },
    {
      imageUrl: gadgets,
      title: "Nuestra Tecnología de Vanguardia",
      description: "Utilizamos dispositivos propios diseñados específicamente para medir su salud cardiovascular de manera precisa y continua. Estos dispositivos incluyen ECGs, holters, parches, implantables y wearables. ",
      paginaDesti: "/tecnologia/"
    },
    {
      imageUrl: dashboard,
      title: "Ventajas de nuestra plataforma",
      description: [
        "Precisión Inigualable: Nuestra IA es capaz de detectar incluso las irregularidades más sutiles en su ritmo cardíaco, lo que nos permite intervenir antes de que los problemas empeoren."
      ],
      paginaDesti: "/ventajasplataforma/"
    }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": async ($$result2) => renderTemplate`  ${maybeRenderHead()}<div id="hero" class="relative w-full h-[75vh] bg-gray-950 overflow-hidden"> <!-- VIDEO --> <video autoplay muted loop playsinline class="absolute inset-0 w-full h-full object-cover z-0 scale-105"> <source src="/assets/hero.mp4" type="video/mp4"> </video> <!-- GRADIENTE SUAVE --> <div class="absolute inset-0 bg-gradient-to-b from-gray-950/40 via-gray-950/60 to-gray-950/90 z-10"></div> <!-- VIGNETTE --> <div class="absolute inset-0 z-20" style="background: radial-gradient(circle, transparent 0%, #030712 90%);"></div> <!-- CONTENIDO --> <div class="relative z-40 flex flex-col items-center justify-center h-full text-center px-8 pb-8"> <h1 class="text-white text-5xl md:text-6xl font-black tracking-tight pb-5 pt-40">
Precisión cardíaca constante para una vida plena y segura
</h1> <p class="text-gray-300 text-lg md:text-xl font-medium leading-relaxed">
Integramos dispositivos de grado clínico con algoritmos de IA para
        ofrecer una visión 360° de su salud cardiovascular en tiempo real
</p> <a href="#productos" class="mt-6 px-3 xs:px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-xl transition">
Nuestros Productos
</a> </div> </div>  <div class="h-20 bg-gradient-to-b from-gray-950 to-transparent"></div>  <div class="text-center px-5"> <span class="text-4xl md:text-5xl text-center my-20 font-thin tracking-tight">
Detección y medicina de precisión con IA para cardiología
</span> </div> <h2 id="productos" class="text-4xl md:text-xl lg:text-5xl text-center my-20 font-semibold tracking-tight">
Nuestros productos
</h2>  <div class="mb-10 flex flex-col gap-6 items-center md:flex-row md:items-stretch md:justify-center md:gap-8 px-2 sm:px-4"> ${data.map((d) => renderTemplate`${renderComponent($$result2, "CardOptimized", $$CardOptimized, { "imageUrl": d.imageUrl, "title": d.title, "description": d.description, "class": "mx-0", "paginaDesti": d.paginaDesti })}`)} </div>  <div id="aboutus" class="relative w-full h-[60vh] bg-gray-950 overflow-hidden"> <!-- VIDEO --> <video autoplay muted loop playsinline class="absolute inset-0 w-full h-full object-cover z-0 scale-110 blur-[1.5px] brightness-75"> <source src="/assets/hero2.mp4" type="video/mp4"> </video> <!-- TINTE BASE --> <div class="absolute inset-0 bg-gray-950/60 z-10"></div> <!-- VIGNETTE --> <div class="absolute inset-0 z-20" style="background: radial-gradient(circle, transparent 0%, #030712 95%);"></div> <!-- DEGRADADOS COMO CONTACTFORM --> <div class="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-gray-950 to-transparent z-30"></div> <div class="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-gray-950 to-transparent z-30"></div> <div class="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-gray-950 to-transparent z-30"></div> <div class="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-gray-950 to-transparent z-30"></div> <!-- CONTENIDO --> <div class="relative z-40 flex flex-col items-center justify-center h-full text-center px-8"> <h2 class="text-4xl md:text-4xl lg:text-5xl text-center my-20 font-semibold tracking-tight">
Sobre Nosotros
</h2> <p class="text-gray-300 text-lg md:text-3xl sm:px-2 font-medium leading-relaxed">
En RC Technology, no solo observamos el futuro de la medicina; lo
        estamos construyendo. Nacimos con la misión de cerrar la brecha entre la
        tecnología de vanguardia y el cuidado del corazón, transformando datos
        biométricos complejos en diagnósticos claros, rápidos y precisos.
</p> </div> </div>  <h2 id="contact" class="text-4xl md:text-4xl lg:text-5xl text-center my-20 font-semibold tracking-tight">
Contacto
</h2> ${renderComponent($$result2, "ContactForm", $$ContactForm, { "action": actions.contact })}  <h2 class="text-3xl md:text-4xl lg:text-5xl text-center my-24 font-semibold tracking-tight">
Proyecto subvencionado por CDTI
</h2> ${renderComponent($$result2, "Esponsors", $$Esponsors, {})} ` })}`;
}, "/Users/normanleyvagarcia/Desktop/rctechnology/src/pages/index.astro", void 0);

const $$file = "/Users/normanleyvagarcia/Desktop/rctechnology/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  actions,
  default: $$Index,
  file: $$file,
  formAction,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
