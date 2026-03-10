"use client";

import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  MessageCircle,
  Clock,
  CheckCircle,
} from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "E-mail",
    value: "contato@littlelunch.com.br",
    href: "mailto:contato@littlelunch.com.br",
  },
  {
    icon: Phone,
    label: "WhatsApp",
    value: "(11) 99999-9999",
    href: "https://wa.me/5511999999999",
  },
  {
    icon: MapPin,
    label: "Localização",
    value: "São Paulo, SP — Brasil",
    href: null,
  },
  {
    icon: Clock,
    label: "Horário de atendimento",
    value: "Seg a Sex, 9h às 18h",
    href: null,
  },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section
      id="contato"
      className="py-20 sm:py-28 bg-gradient-to-b from-coral-50/30 to-white"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-block text-sm font-bold text-leaf-500 uppercase tracking-wider mb-3">
            Fale Conosco
          </span>
          <h2 className="text-3xl font-extrabold text-brown-700 sm:text-4xl">
            Tem alguma dúvida?{" "}
            <span className="text-leaf-500">Entre em contato</span>
          </h2>
          <p className="mt-4 text-lg text-brown-400">
            Estamos prontos para ajudar você e sua família. Envie sua mensagem
            ou fale diretamente conosco por WhatsApp.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="rounded-2xl bg-brown-600 p-8 text-white">
              <div className="flex items-center gap-3 mb-4">
                <MessageCircle size={24} />
                <h3 className="text-lg font-bold">Informações de Contato</h3>
              </div>
              <p className="text-sm text-brown-200 leading-relaxed mb-8">
                Escolha o canal mais conveniente para você. Respondemos todas as
                mensagens em até 24 horas.
              </p>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/15">
                      <info.icon size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-sunny-300 uppercase tracking-wider">
                        {info.label}
                      </p>
                      {info.href ? (
                        <a
                          href={info.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm font-medium text-white hover:text-sunny-300 transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-sm font-medium text-white">
                          {info.value}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* WhatsApp quick action */}
            <a
              href="https://wa.me/5511999999999?text=Olá! Gostaria de saber mais sobre o Little Lunch."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 rounded-2xl border-2 border-leaf-200 bg-leaf-50 p-5 text-leaf-600 font-bold hover:bg-leaf-100 transition-colors"
            >
              <MessageCircle size={22} />
              Falar pelo WhatsApp
            </a>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="rounded-2xl border border-cream-300 bg-white p-8 shadow-sm">
              {submitted ? (
                <div className="flex flex-col items-center justify-center text-center py-12">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-leaf-100 mb-5">
                    <CheckCircle size={32} className="text-leaf-500" />
                  </div>
                  <h3 className="text-xl font-bold text-brown-600">
                    Mensagem enviada!
                  </h3>
                  <p className="mt-2 text-sm text-brown-400 max-w-sm">
                    Obrigado pelo seu contato. Nossa equipe responderá em até 24
                    horas. Fique de olho no seu e-mail!
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 text-sm font-semibold text-leaf-500 hover:text-leaf-600 transition-colors"
                  >
                    Enviar outra mensagem
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-semibold text-brown-600 mb-1.5"
                      >
                        Nome completo
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        placeholder="Seu nome"
                        className="w-full rounded-xl border border-cream-300 bg-cream-100 px-4 py-3 text-sm text-brown-700 placeholder:text-brown-300 outline-none focus:border-sunny-400 focus:ring-2 focus:ring-sunny-100 transition-all"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-semibold text-brown-600 mb-1.5"
                      >
                        E-mail
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        placeholder="seu@email.com"
                        className="w-full rounded-xl border border-cream-300 bg-cream-100 px-4 py-3 text-sm text-brown-700 placeholder:text-brown-300 outline-none focus:border-sunny-400 focus:ring-2 focus:ring-sunny-100 transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-semibold text-brown-600 mb-1.5"
                    >
                      Telefone / WhatsApp
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder="(11) 99999-9999"
                      className="w-full rounded-xl border border-cream-300 bg-cream-100 px-4 py-3 text-sm text-brown-700 placeholder:text-brown-300 outline-none focus:border-sunny-400 focus:ring-2 focus:ring-sunny-100 transition-all"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-semibold text-brown-600 mb-1.5"
                    >
                      Assunto
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      className="w-full rounded-xl border border-cream-300 bg-cream-100 px-4 py-3 text-sm text-brown-700 outline-none focus:border-sunny-400 focus:ring-2 focus:ring-sunny-100 transition-all"
                    >
                      <option value="">Selecione um assunto</option>
                      <option value="planos">Dúvidas sobre planos</option>
                      <option value="cardapio">Cardápios e ingredientes</option>
                      <option value="alergias">
                        Alergias e restrições alimentares
                      </option>
                      <option value="entrega">Entregas e logística</option>
                      <option value="outro">Outro assunto</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-semibold text-brown-600 mb-1.5"
                    >
                      Mensagem
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      placeholder="Conte-nos como podemos ajudar..."
                      className="w-full rounded-xl border border-cream-300 bg-cream-100 px-4 py-3 text-sm text-brown-700 placeholder:text-brown-300 outline-none focus:border-sunny-400 focus:ring-2 focus:ring-sunny-100 transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-sunny-400 px-6 py-3.5 text-sm font-bold text-brown-700 shadow-md shadow-sunny-400/25 hover:bg-sunny-500 transition-all hover:shadow-lg"
                  >
                    <Send size={18} />
                    Enviar Mensagem
                  </button>

                  <p className="text-xs text-center text-brown-300">
                    Respondemos todas as mensagens em até 24 horas úteis.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
