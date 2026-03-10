import {
  Leaf,
  UtensilsCrossed,
  CalendarCheck,
  Truck,
  Baby,
  ShieldCheck,
} from "lucide-react";

const benefits = [
  {
    icon: UtensilsCrossed,
    title: "Refeições pensadas para crianças",
    description:
      "Cada receita é cuidadosamente elaborada para ser nutritiva e atrativa para o paladar infantil.",
  },
  {
    icon: Leaf,
    title: "Ingredientes naturais",
    description:
      "Sem ultraprocessados, sem conservantes artificiais. Apenas ingredientes de verdade.",
  },
  {
    icon: CalendarCheck,
    title: "Cardápios equilibrados",
    description:
      "Variedade e equilíbrio nutricional garantidos em cada semana do plano.",
  },
  {
    icon: Truck,
    title: "Praticidade no dia a dia",
    description:
      "Receba as refeições prontas. Sem stress, sem planejamento complicado.",
  },
  {
    icon: Baby,
    title: "Hábitos saudáveis desde cedo",
    description:
      "Ajudamos a criar uma relação positiva entre as crianças e alimentos naturais.",
  },
  {
    icon: ShieldCheck,
    title: "Confiança e qualidade",
    description:
      "Transparência em todos os ingredientes e processos. Sua confiança é nossa prioridade.",
  },
];

export default function Benefits() {
  return (
    <section id="beneficios" className="py-20 sm:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-block text-sm font-bold text-green-600 uppercase tracking-wider mb-3">
            Por que Little Lunch?
          </span>
          <h2 className="text-3xl font-extrabold text-stone-900 sm:text-4xl">
            Diferenciais que fazem a diferença na{" "}
            <span className="text-green-600">saúde do seu filho</span>
          </h2>
          <p className="mt-4 text-lg text-stone-500">
            Nosso foco não é apenas fornecer comida, mas contribuir para o
            desenvolvimento de uma relação saudável com os alimentos.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-green-100">
                <benefit.icon size={24} className="text-green-600" />
              </div>
              <div>
                <h3 className="text-base font-bold text-stone-800">
                  {benefit.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-stone-500">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

