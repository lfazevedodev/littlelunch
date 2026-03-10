import { Search, ListChecks, Truck, Smile } from "lucide-react";

const steps = [
  {
    icon: Search,
    step: "01",
    title: "Conheça o serviço",
    description:
      "Descubra como Little Lunch pode transformar a alimentação do seu filho com ingredientes naturais e cardápios equilibrados.",
  },
  {
    icon: ListChecks,
    step: "02",
    title: "Escolha seu plano",
    description:
      "Selecione o plano que melhor se adapta à rotina da sua família — mensal, trimestral ou anual.",
  },
  {
    icon: Truck,
    step: "03",
    title: "Receba em casa",
    description:
      "As refeições chegam prontas na sua porta, preparadas com cuidado e ingredientes naturais.",
  },
  {
    icon: Smile,
    step: "04",
    title: "Crianças felizes e saudáveis",
    description:
      "Integre as refeições na rotina da criança e veja os hábitos alimentares saudáveis se formarem.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="como-funciona"
      className="py-20 sm:py-28 bg-gradient-to-b from-white to-sunny-50"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-block text-sm font-bold text-coral-500 uppercase tracking-wider mb-3">
            Como Funciona
          </span>
          <h2 className="text-3xl font-extrabold text-brown-700 sm:text-4xl">
            Simples e prático:{" "}
            <span className="text-sunny-600">4 passos</span> para uma
            alimentação melhor
          </h2>
          <p className="mt-4 text-lg text-brown-400">
            A experiência foi pensada para ser simples e direta, sem
            complicação.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative text-center">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-sunny-400 to-sunny-200" />
              )}

              <div className="relative mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-sunny-400 text-brown-700 shadow-lg shadow-sunny-400/30">
                <step.icon size={28} />
              </div>
              <span className="mt-4 inline-block text-xs font-bold text-sunny-700 uppercase tracking-wider">
                Passo {step.step}
              </span>
              <h3 className="mt-2 text-lg font-bold text-brown-600">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-brown-400">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
