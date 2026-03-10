import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Ana Paula",
    role: "Mãe do Lucas, 4 anos",
    text: "Little Lunch transformou a rotina alimentar do meu filho. Ele agora come frutas e legumes com prazer! Não preciso mais me preocupar em montar lanches todas as noites.",
    rating: 5,
  },
  {
    name: "Roberto Silva",
    role: "Pai da Sofia, 6 anos",
    text: "A praticidade é incrível. Com nossa rotina corrida, ter refeições saudáveis prontas é um alívio enorme. A qualidade dos ingredientes é impecável.",
    rating: 5,
  },
  {
    name: "Mariana Costa",
    role: "Mãe da Beatriz, 3 anos",
    text: "Minha filha era muito resistente a alimentos naturais. Depois de três meses com Little Lunch, ela começou a aceitar muito melhor. Recomendo demais!",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 sm:py-28 bg-gradient-to-b from-white to-orange-50/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-block text-sm font-bold text-orange-500 uppercase tracking-wider mb-3">
            Depoimentos
          </span>
          <h2 className="text-3xl font-extrabold text-stone-900 sm:text-4xl">
            O que as famílias dizem sobre o{" "}
            <span className="text-green-600">Little Lunch</span>
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="rounded-2xl bg-white border border-stone-100 p-8 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex gap-1">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className="text-yellow-400 fill-yellow-400"
                  />
                ))}
              </div>
              <p className="mt-4 text-base leading-relaxed text-stone-600 italic">
                &ldquo;{testimonial.text}&rdquo;
              </p>
              <div className="mt-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 text-sm font-bold text-green-700">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-bold text-stone-800">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-stone-400">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

