"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Para que faixa etária o Little Lunch é indicado?",
    answer:
      "Nossos cardápios são pensados para crianças desde a primeira infância até os primeiros anos escolares. Os ingredientes e as porções são adaptados para cada fase do desenvolvimento.",
  },
  {
    question: "Os ingredientes são realmente naturais?",
    answer:
      "Sim! Utilizamos apenas ingredientes naturais e de qualidade. Não usamos conservantes artificiais, corantes ou ultraprocessados em nenhuma de nossas receitas.",
  },
  {
    question: "Como funciona a entrega?",
    answer:
      "As refeições são preparadas e entregues semanalmente na sua casa, em embalagens seguras e adequadas para manter a qualidade e frescor dos alimentos.",
  },
  {
    question: "Posso cancelar meu plano a qualquer momento?",
    answer:
      "Sim! Nossos planos são flexíveis. Você pode cancelar, pausar ou alterar seu plano a qualquer momento, sem multas ou complicações.",
  },
  {
    question: "E se meu filho tiver alergia alimentar?",
    answer:
      "Levamos alergias alimentares muito a sério. Durante o cadastro, você pode informar todas as restrições e alergias, e nossos cardápios serão adaptados para garantir a segurança do seu filho.",
  },
  {
    question: "Qual a diferença entre os planos?",
    answer:
      "A principal diferença é o compromisso e o desconto. Planos mais longos oferecem melhor custo-benefício e benefícios adicionais como consulta nutricional e conteúdo educativo exclusivo.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 sm:py-28 bg-white">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="inline-block text-sm font-bold text-green-600 uppercase tracking-wider mb-3">
            Dúvidas Frequentes
          </span>
          <h2 className="text-3xl font-extrabold text-stone-900 sm:text-4xl">
            Perguntas Frequentes
          </h2>
          <p className="mt-4 text-lg text-stone-500">
            Tire suas dúvidas sobre o Little Lunch
          </p>
        </div>

        <div className="mt-12 space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-2xl border border-stone-100 bg-stone-50/50 overflow-hidden transition-all"
            >
              <button
                className="flex w-full items-center justify-between p-5 text-left"
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
              >
                <span className="text-base font-semibold text-stone-800 pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  size={20}
                  className={`shrink-0 text-stone-400 transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-5 pb-5">
                  <p className="text-sm leading-relaxed text-stone-500">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

