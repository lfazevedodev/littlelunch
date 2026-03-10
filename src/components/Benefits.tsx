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
    color: "bg-sunny-200 text-sunny-700",
  },
  {
    icon: Leaf,
    title: "Ingredientes naturais",
    description:
      "Sem ultraprocessados, sem conservantes artificiais. Apenas ingredientes de verdade.",
    color: "bg-leaf-100 text-leaf-500",
  },
  {
    icon: CalendarCheck,
    title: "Cardápios equilibrados",
    description:
      "Variedade e equilíbrio nutricional garantidos em cada semana do plano.",
    color: "bg-coral-100 text-coral-500",
  },
  {
    icon: Truck,
    title: "Praticidade no dia a dia",
    description:
      "Receba as refeições prontas. Sem stress, sem planejamento complicado.",
    color: "bg-sunny-200 text-sunny-700",
  },
  {
    icon: Baby,
    title: "Hábitos saudáveis desde cedo",
    description:
      "Ajudamos a criar uma relação positiva entre as crianças e alimentos naturais.",
    color: "bg-leaf-100 text-leaf-500",
  },
  {
    icon: ShieldCheck,
    title: "Confiança e qualidade",
    description:
      "Transparência em todos os ingredientes e processos. Sua confiança é nossa prioridade.",
    color: "bg-coral-100 text-coral-500",
  },
];

export default function Benefits() {
  return (
    <section id="beneficios" className="py-20 sm:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-block text-sm font-bold text-sunny-700 uppercase tracking-wider mb-3">
            Por que Little Lunch?
          </span>
          <h2 className="text-3xl font-extrabold text-brown-700 sm:text-4xl">
            Diferenciais que fazem a diferença na{" "}
            <span className="text-leaf-500">saúde do seu filho</span>
          </h2>
          <p className="mt-4 text-lg text-brown-400">
            Nosso foco não é apenas fornecer comida, mas contribuir para o
            desenvolvimento de uma relação saudável com os alimentos.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex gap-4">
              <div
                className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${benefit.color}`}
              >
                <benefit.icon size={24} />
              </div>
              <div>
                <h3 className="text-base font-bold text-brown-600">
                  {benefit.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-brown-400">
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
