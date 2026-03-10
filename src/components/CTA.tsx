import { ArrowRight, Heart } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-20 sm:py-28 bg-gradient-to-br from-green-600 to-green-700 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-green-500/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-500/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-sm font-semibold text-green-100 mb-6">
          <Heart size={16} />
          Junte-se a centenas de famílias
        </div>

        <h2 className="text-3xl font-extrabold text-white sm:text-4xl md:text-5xl">
          Comece hoje a transformar a alimentação do seu filho
        </h2>
        <p className="mt-6 text-lg text-green-100 max-w-2xl mx-auto">
          Bons hábitos alimentares começam cedo. Dê o primeiro passo para uma
          infância mais saudável com Little Lunch.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#planos"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-base font-bold text-green-700 shadow-lg hover:bg-green-50 transition-all hover:shadow-xl"
          >
            Escolher um Plano
            <ArrowRight size={18} />
          </a>
          <a
            href="#sobre"
            className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/30 px-8 py-4 text-base font-bold text-white hover:bg-white/10 transition-colors"
          >
            Saber Mais
          </a>
        </div>
      </div>
    </section>
  );
}

