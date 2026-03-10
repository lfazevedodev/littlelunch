import { ArrowRight, Leaf, Heart, Clock } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-sunny-100 via-cream-50 to-coral-50 pt-28 pb-20 sm:pt-36 sm:pb-28">
      {/* Decorative blobs */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-sunny-300/25 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-coral-200/25 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-leaf-200/20 rounded-full blur-3xl -translate-x-1/2" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-sunny-200 px-4 py-1.5 text-sm font-semibold text-brown-600">
            <Leaf size={16} className="text-leaf-500" />
            Meu Lanchinho Escolar
          </div>

          {/* Logo script */}
          <h1 className="max-w-4xl text-warm-900">
            <span className="block font-[family-name:var(--font-pacifico)] text-5xl sm:text-6xl md:text-7xl text-brown-600 mb-4">
              Little Lunch
            </span>
            <span className="block text-3xl font-extrabold leading-tight tracking-tight text-brown-700 sm:text-4xl md:text-5xl font-[family-name:var(--font-baloo)]">
              Refeições saudáveis que seus{" "}
              <span className="text-coral-500">filhos vão adorar</span>
            </span>
          </h1>

          {/* Subheadline */}
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-brown-400 sm:text-xl">
            Ingredientes naturais, cardápios equilibrados e praticidade para a
            rotina da sua família. Bons hábitos alimentares começam cedo.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href="#planos"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-sunny-400 px-8 py-4 text-base font-bold text-brown-700 shadow-lg shadow-sunny-400/30 hover:bg-sunny-500 transition-all hover:shadow-xl"
            >
              Conheça os Planos
              <ArrowRight size={18} />
            </a>
            <a
              href="#sobre"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-brown-200 bg-white px-8 py-4 text-base font-bold text-brown-600 hover:bg-brown-50 transition-colors"
            >
              Saiba Mais
            </a>
          </div>

          {/* Trust badges */}
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl w-full">
            <div className="flex items-center justify-center gap-3 rounded-2xl bg-white p-4 shadow-sm border border-leaf-100">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-leaf-100">
                <Leaf size={20} className="text-leaf-500" />
              </div>
              <span className="text-sm font-semibold text-brown-600">
                100% Natural
              </span>
            </div>
            <div className="flex items-center justify-center gap-3 rounded-2xl bg-white p-4 shadow-sm border border-coral-100">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-coral-100">
                <Heart size={20} className="text-coral-500" />
              </div>
              <span className="text-sm font-semibold text-brown-600">
                Feito com Cuidado
              </span>
            </div>
            <div className="flex items-center justify-center gap-3 rounded-2xl bg-white p-4 shadow-sm border border-sunny-200">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-sunny-200">
                <Clock size={20} className="text-sunny-700" />
              </div>
              <span className="text-sm font-semibold text-brown-600">
                Prático & Rápido
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
