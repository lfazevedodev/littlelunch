import { AlertTriangle, Clock, ShoppingCart, Frown, Apple } from "lucide-react";

const problems = [
  {
    icon: Clock,
    title: "Rotina corrida",
    description:
      "Falta tempo para preparar refeições saudáveis e equilibradas todos os dias.",
  },
  {
    icon: AlertTriangle,
    title: "Falta de conhecimento nutricional",
    description:
      "Nem sempre é fácil saber o que é realmente saudável para crianças.",
  },
  {
    icon: ShoppingCart,
    title: "Excesso de ultraprocessados",
    description:
      "O mercado é cheio de opções rápidas, mas pobres em nutrientes.",
  },
  {
    icon: Frown,
    title: "Resistência das crianças",
    description:
      "As crianças muitas vezes recusam alimentos naturais e saudáveis.",
  },
  {
    icon: Apple,
    title: "Pouca variedade",
    description:
      "A dieta infantil acaba limitada a poucos alimentos conhecidos.",
  },
];

export default function Problem() {
  return (
    <section id="sobre" className="py-20 sm:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-block text-sm font-bold text-coral-500 uppercase tracking-wider mb-3">
            O Desafio
          </span>
          <h2 className="text-3xl font-extrabold text-brown-700 sm:text-4xl">
            Sabemos como é difícil manter uma{" "}
            <span className="text-coral-500">alimentação saudável</span> na
            rotina das crianças
          </h2>
          <p className="mt-4 text-lg text-brown-400">
            Muitos pais enfrentam desafios diários para oferecer refeições
            equilibradas. Você não está sozinho.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="group rounded-2xl border border-cream-300 bg-cream-100 p-6 hover:border-coral-200 hover:bg-coral-50 transition-all"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-coral-100 text-coral-500 group-hover:bg-coral-200 transition-colors">
                <problem.icon size={24} />
              </div>
              <h3 className="mt-4 text-lg font-bold text-brown-600">
                {problem.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-brown-400">
                {problem.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
