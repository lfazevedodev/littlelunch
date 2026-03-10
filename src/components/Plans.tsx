import { Check, Star } from "lucide-react";

const plans = [
  {
    name: "Mensal",
    price: "R$ 299",
    period: "/mês",
    description: "Ideal para conhecer o serviço e experimentar",
    features: [
      "Refeições semanais para 1 criança",
      "Cardápio variado e equilibrado",
      "Ingredientes 100% naturais",
      "Entrega em domicílio",
      "Suporte por WhatsApp",
    ],
    highlighted: false,
    cta: "Começar Agora",
  },
  {
    name: "Trimestral",
    price: "R$ 269",
    period: "/mês",
    description: "Melhor custo-benefício para famílias comprometidas",
    badge: "Mais Popular",
    features: [
      "Tudo do plano Mensal",
      "10% de desconto no valor",
      "Cardápios personalizados",
      "Guia de alimentação infantil",
      "Suporte prioritário",
      "Sem taxa de entrega",
    ],
    highlighted: true,
    cta: "Escolher Trimestral",
  },
  {
    name: "Anual",
    price: "R$ 229",
    period: "/mês",
    description: "Máxima economia para hábitos duradouros",
    features: [
      "Tudo do plano Trimestral",
      "23% de desconto no valor",
      "Consulta nutricional inclusa",
      "Conteúdo educativo exclusivo",
      "Acesso antecipado a novidades",
      "Suporte VIP",
    ],
    highlighted: false,
    cta: "Escolher Anual",
  },
];

export default function Plans() {
  return (
    <section id="planos" className="py-20 sm:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-block text-sm font-bold text-green-600 uppercase tracking-wider mb-3">
            Planos
          </span>
          <h2 className="text-3xl font-extrabold text-stone-900 sm:text-4xl">
            Escolha o plano ideal para a{" "}
            <span className="text-green-600">sua família</span>
          </h2>
          <p className="mt-4 text-lg text-stone-500">
            Planos flexíveis pensados para diferentes necessidades. Quanto mais
            longo o plano, maior a economia.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-3xl p-8 transition-all ${
                plan.highlighted
                  ? "bg-green-600 text-white shadow-2xl shadow-green-600/25 scale-[1.03] border-2 border-green-500"
                  : "bg-white border-2 border-stone-100 hover:border-green-200 shadow-sm hover:shadow-md"
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1 rounded-full bg-orange-500 px-4 py-1.5 text-xs font-bold text-white shadow-md">
                    <Star size={14} />
                    {plan.badge}
                  </span>
                </div>
              )}

              <h3
                className={`text-lg font-bold ${plan.highlighted ? "text-green-100" : "text-stone-500"}`}
              >
                {plan.name}
              </h3>
              <div className="mt-3 flex items-baseline gap-1">
                <span
                  className={`text-4xl font-extrabold ${plan.highlighted ? "text-white" : "text-stone-900"}`}
                >
                  {plan.price}
                </span>
                <span
                  className={`text-base font-medium ${plan.highlighted ? "text-green-200" : "text-stone-400"}`}
                >
                  {plan.period}
                </span>
              </div>
              <p
                className={`mt-2 text-sm ${plan.highlighted ? "text-green-100" : "text-stone-500"}`}
              >
                {plan.description}
              </p>

              <hr
                className={`my-6 ${plan.highlighted ? "border-green-500" : "border-stone-100"}`}
              />

              <ul className="space-y-3">
                {plan.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start gap-3 text-sm">
                    <Check
                      size={18}
                      className={`shrink-0 mt-0.5 ${plan.highlighted ? "text-green-200" : "text-green-500"}`}
                    />
                    <span
                      className={
                        plan.highlighted ? "text-white" : "text-stone-600"
                      }
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="#"
                className={`mt-8 block w-full rounded-full py-3.5 text-center text-sm font-bold transition-all ${
                  plan.highlighted
                    ? "bg-white text-green-700 hover:bg-green-50 shadow-md"
                    : "bg-green-600 text-white hover:bg-green-700 shadow-md shadow-green-600/20"
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

