import { c as createComponent } from './_astro_assets_zLf5wvux.mjs';
import 'piccolore';
import { m as maybeRenderHead, r as renderComponent, b as renderTemplate } from './entrypoint_g7PPwlsS.mjs';
import { Building2, ScanLine, Droplets, FlaskConical, HeartPulse, Watch, ShieldCheck, BellRing, Link2, Zap, Scale, Activity, Heart } from 'lucide-react';

const $$MiniCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$MiniCard;
  const { icon, title, description } = Astro2.props;
  const iconMap = {
    Heart,
    Activity,
    Scale,
    Zap,
    Link2,
    BellRing,
    ShieldCheck,
    Watch,
    HeartPulse,
    FlaskConical,
    Droplets,
    ScanLine,
    Building2
  };
  const IconComponent = icon && icon in iconMap ? iconMap[icon] : null;
  return renderTemplate`${maybeRenderHead()}<div class="text-center"> ${IconComponent && renderTemplate`${renderComponent($$result, "IconComponent", IconComponent, { "className": "w-6 h-6 text-red-600 mb-2 ml-auto mr-auto" })}`} <span class="text-2xl font-semibold"> ${title} </span> <p class="py-2"> ${description} </p> </div>`;
}, "/Users/normanleyvagarcia/Desktop/rctechnology/src/components/MiniCard.astro", void 0);

export { $$MiniCard as $ };
