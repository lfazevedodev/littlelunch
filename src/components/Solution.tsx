import { Salad, Users, BookOpen, CheckCircle } from "lucide-react";

const pillars = [
  {
    icon: Salad,
    title: "Nutrição Infantil Adequada",
    description:
      "Refeições e lanches preparados com ingredientes naturais, organizados em cardápios equilibrados pensados para o desenvolvimento infantil.",
    color: "green" as const,
  },
  {
    icon: Users,
    title: "Praticidade para os Pais",
    description:
      "Facilitamos a rotina das famílias para que a alimentação saudável das crianças não seja mais uma preocupação.",
    color: "orange" as const,
  },
  {
    icon: BookOpen,
    title: "Educação Alimentar",
    description:
      "Contribuímos para a formação de hábitos alimentares saudáveis, ajudando crianças a criar uma relação positiva com alimentos naturais.",
    color: "yellow" as const,
  },
];

const colorMap = {
  green: {
    bg: "bg-green-100",
    icon: "text-green-600",
    border: "border-green-200",
    hover: "hover:border-green-300",
  },
  orange: {
    bg: "bg-orange-100",
    icon: "text-orange-500",
    border: "border-orange-200",
    hover: "hover:border-orange-300",
  },
  yellow: {
    bg: "bg-yellow-100",
    icon: "text-yellow-600",
    border: "border-yellow-200",
    hover: "hover:border-yellow-300",
  },
};

export default function Solution() {
  return (
    <section className="py-20 sm:py-28 bg-gradient-to-b from-green-50/50 to-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-block text-sm font-bold text-green-600 uppercase tracking-wider mb-3">
            Nossa Solução
          </span>
          <h2 className="text-3xl font-extrabold text-stone-900 sm:text-4xl">
            Três pilares para uma{" "}
            <span className="text-green-600">infância mais saudável</span>
          </h2>
          <p className="mt-4 text-lg text-stone-500">
            Little Lunch oferece uma solução completa que vai além da comida —
            cuidamos do desenvolvimento alimentar do seu filho.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => {
            const colors = colorMap[pillar.color];
            return (
              <div
                key={index}
                className={`rounded-2xl border ${colors.border} ${colors.hover} bg-white p-8 shadow-sm transition-all hover:shadow-md`}
              >
                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-2xl ${colors.bg}`}
                >
                  <pillar.icon size={28} className={colors.icon} />
                </div>
                <h3 className="mt-6 text-xl font-bold text-stone-800">
                  {pillar.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-stone-500">
                  {pillar.description}
                </p>
                <ul className="mt-5 space-y-2">
                  <li className="flex items-center gap-2 text-sm text-stone-600">
                    <CheckCircle size={16} className="text-green-500 shrink-0" />
                    Ingredientes naturais
                  </li>
                  <li className="flex items-center gap-2 text-sm text-stone-600">
                    <CheckCircle size={16} className="text-green-500 shrink-0" />
                    Cardápios equilibrados
                  </li>
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

