import { ArrowRight, Leaf, Heart, Clock } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-green-50 via-white to-orange-50 pt-28 pb-20 sm:pt-36 sm:pb-28">
      {/* Decorative blobs */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-green-200/30 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-orange-200/30 rounded-full blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-green-100 px-4 py-1.5 text-sm font-semibold text-green-700">
            <Leaf size={16} />
            Alimentação saudável para crianças
          </div>

          {/* Headline */}
          <h1 className="max-w-4xl text-4xl font-extrabold leading-tight tracking-tight text-stone-900 sm:text-5xl md:text-6xl">
            Refeições saudáveis que seus{" "}
            <span className="text-green-600">filhos vão adorar</span>
          </h1>

          {/* Subheadline */}
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-stone-500 sm:text-xl">
            Ingredientes naturais, cardápios equilibrados e praticidade para a
            rotina da sua família. Bons hábitos alimentares começam cedo.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href="#planos"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-green-600 px-8 py-4 text-base font-bold text-white shadow-lg shadow-green-600/25 hover:bg-green-700 transition-all hover:shadow-xl hover:shadow-green-600/30"
            >
              Conheça os Planos
              <ArrowRight size={18} />
            </a>
            <a
              href="#sobre"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-green-200 bg-white px-8 py-4 text-base font-bold text-green-700 hover:bg-green-50 transition-colors"
            >
              Saiba Mais
            </a>
          </div>

          {/* Trust badges */}
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl w-full">
            <div className="flex items-center justify-center gap-3 rounded-2xl bg-white p-4 shadow-sm border border-green-100">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100">
                <Leaf size={20} className="text-green-600" />
              </div>
              <span className="text-sm font-semibold text-stone-700">
                100% Natural
              </span>
            </div>
            <div className="flex items-center justify-center gap-3 rounded-2xl bg-white p-4 shadow-sm border border-orange-100">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-100">
                <Heart size={20} className="text-orange-500" />
              </div>
              <span className="text-sm font-semibold text-stone-700">
                Feito com Cuidado
              </span>
            </div>
            <div className="flex items-center justify-center gap-3 rounded-2xl bg-white p-4 shadow-sm border border-yellow-100">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-yellow-100">
                <Clock size={20} className="text-yellow-600" />
              </div>
              <span className="text-sm font-semibold text-stone-700">
                Prático & Rápido
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

