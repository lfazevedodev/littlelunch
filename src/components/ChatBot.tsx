"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import {
  MessageCircle,
  X,
  Send,
  ChevronRight,
  ArrowLeft,
} from "lucide-react";

/* ───────────────────────── types ───────────────────────── */

interface Message {
  id: number;
  from: "bot" | "user";
  text: string;
  options?: QuickOption[];
}

interface QuickOption {
  label: string;
  action: string;
}

/* ──────────────── knowledge base & flows ──────────────── */

const WELCOME_MESSAGE: Message = {
  id: 0,
  from: "bot",
  text: "Olá! 👋 Eu sou a Lumi, assistente virtual do Little Lunch. Estou aqui para ajudar você a encontrar a melhor alimentação saudável para o seu filho! Como posso ajudar?",
  options: [
    { label: "O que é o Little Lunch?", action: "about" },
    { label: "Quais são os planos?", action: "plans" },
    { label: "Como funciona a entrega?", action: "delivery" },
    { label: "Para qual idade?", action: "age" },
    { label: "Alergias alimentares", action: "allergies" },
    { label: "Ingredientes e qualidade", action: "ingredients" },
    { label: "Falar com atendente", action: "human" },
  ],
};

function getBotResponse(action: string): Message {
  const base = { id: Date.now(), from: "bot" as const };

  const responses: Record<string, Omit<Message, "id" | "from">> = {
    about: {
      text: "O Little Lunch é um serviço de alimentação saudável focado em crianças. 🥦🍎\n\nPreparamos refeições e lanches com ingredientes 100% naturais, organizados em cardápios equilibrados pensados para o desenvolvimento infantil.\n\nNosso objetivo é facilitar a rotina das famílias e ajudar a criar hábitos alimentares saudáveis desde cedo!",
      options: [
        { label: "Quais são os benefícios?", action: "benefits" },
        { label: "Quero conhecer os planos", action: "plans" },
        { label: "Voltar ao início", action: "restart" },
      ],
    },
    plans: {
      text: "Temos 3 planos pensados para diferentes necessidades da sua família: 📋\n\n🟢 **Mensal** — R$ 299/mês\nIdeal para experimentar. Refeições semanais, ingredientes naturais e entrega em domicílio.\n\n⭐ **Trimestral** — R$ 269/mês (10% OFF)\nO mais popular! Inclui cardápios personalizados, guia de alimentação e sem taxa de entrega.\n\n💎 **Anual** — R$ 229/mês (23% OFF)\nMáxima economia! Consulta nutricional inclusa, conteúdo educativo exclusivo e suporte VIP.\n\nQuanto mais longo o plano, maior a economia! 💰",
      options: [
        { label: "Quero o plano Mensal", action: "choose_monthly" },
        { label: "Quero o plano Trimestral", action: "choose_quarterly" },
        { label: "Quero o plano Anual", action: "choose_annual" },
        { label: "Qual plano é o melhor para mim?", action: "recommend" },
        { label: "Voltar ao início", action: "restart" },
      ],
    },
    recommend: {
      text: "Vou te ajudar a escolher! 🤔\n\n👉 Se quer **experimentar** antes de se comprometer, o plano **Mensal** (R$ 299/mês) é perfeito para começar.\n\n👉 Se já sabe que quer **manter a rotina saudável**, o plano **Trimestral** (R$ 269/mês) é o mais popular — você economiza 10% e ganha cardápios personalizados!\n\n👉 Se quer **o melhor custo-benefício** e compromisso com a saúde do seu filho, o plano **Anual** (R$ 229/mês) inclui consulta nutricional e conteúdo educativo exclusivo.\n\n💡 Minha recomendação: comece pelo **Trimestral** — é o equilíbrio perfeito entre economia e flexibilidade!",
      options: [
        { label: "Quero o Trimestral!", action: "choose_quarterly" },
        { label: "Prefiro começar pelo Mensal", action: "choose_monthly" },
        { label: "Vou de Anual!", action: "choose_annual" },
        { label: "Voltar ao início", action: "restart" },
      ],
    },
    choose_monthly: {
      text: "Ótima escolha! 🎉 O plano Mensal é perfeito para conhecer o Little Lunch.\n\n✅ Refeições semanais para 1 criança\n✅ Cardápio variado e equilibrado\n✅ Ingredientes 100% naturais\n✅ Entrega em domicílio\n✅ Suporte por WhatsApp\n\nPor apenas R$ 299/mês, seu filho terá uma alimentação muito mais saudável!\n\n👇 Clique abaixo para assinar agora ou falar com nosso time.",
      options: [
        { label: "Assinar Plano Mensal", action: "go_plans" },
        { label: "Falar com atendente", action: "human" },
        { label: "Ver outros planos", action: "plans" },
      ],
    },
    choose_quarterly: {
      text: "Excelente escolha! ⭐ O Trimestral é o nosso plano mais popular!\n\n✅ Tudo do plano Mensal\n✅ 10% de desconto (R$ 269/mês)\n✅ Cardápios personalizados\n✅ Guia de alimentação infantil\n✅ Suporte prioritário\n✅ Sem taxa de entrega\n\nVocê economiza R$ 90 a cada trimestre! 💰\n\n👇 Clique abaixo para assinar agora.",
      options: [
        { label: "Assinar Plano Trimestral", action: "go_plans" },
        { label: "Falar com atendente", action: "human" },
        { label: "Ver outros planos", action: "plans" },
      ],
    },
    choose_annual: {
      text: "A melhor decisão! 💎 O plano Anual é a máxima economia para hábitos duradouros!\n\n✅ Tudo do plano Trimestral\n✅ 23% de desconto (R$ 229/mês)\n✅ Consulta nutricional inclusa\n✅ Conteúdo educativo exclusivo\n✅ Acesso antecipado a novidades\n✅ Suporte VIP\n\nVocê economiza R$ 840 por ano! 🤩\n\n👇 Clique abaixo para assinar agora.",
      options: [
        { label: "Assinar Plano Anual", action: "go_plans" },
        { label: "Falar com atendente", action: "human" },
        { label: "Ver outros planos", action: "plans" },
      ],
    },
    delivery: {
      text: "As refeições são preparadas com cuidado e entregues semanalmente na sua casa! 🚚\n\n📦 Embalagens seguras e adequadas\n🧊 Mantém a qualidade e frescor\n📅 Entrega semanal programada\n🏠 Direto na porta da sua casa\n\nVocê não precisa se preocupar com nada — só aproveitar!",
      options: [
        { label: "Quanto custa a entrega?", action: "delivery_cost" },
        { label: "Quero conhecer os planos", action: "plans" },
        { label: "Voltar ao início", action: "restart" },
      ],
    },
    delivery_cost: {
      text: "No plano **Mensal**, a taxa de entrega é calculada conforme sua localização.\n\nMas nos planos **Trimestral** e **Anual**, a entrega é totalmente gratuita! 🎉\n\nEssa é mais uma vantagem de escolher um plano mais longo!",
      options: [
        { label: "Quero um plano sem taxa", action: "choose_quarterly" },
        { label: "Ver todos os planos", action: "plans" },
        { label: "Voltar ao início", action: "restart" },
      ],
    },
    age: {
      text: "Nossos cardápios são pensados para crianças em diferentes fases: 👶👧👦\n\n🍼 **Primeira infância** — adaptado para os primeiros alimentos\n🧒 **Idade pré-escolar** — porções e sabores adequados\n🎒 **Primeiros anos escolares** — lanches práticos para a escola\n\nOs ingredientes e porções são cuidadosamente ajustados para cada fase do desenvolvimento!",
      options: [
        { label: "E se tiver alergia?", action: "allergies" },
        { label: "Quero conhecer os planos", action: "plans" },
        { label: "Voltar ao início", action: "restart" },
      ],
    },
    allergies: {
      text: "Levamos alergias alimentares muito a sério! 🛡️\n\nDurante o cadastro, você pode informar todas as restrições e alergias do seu filho.\n\nNossos cardápios serão adaptados para garantir total segurança alimentar.\n\nSe tiver dúvidas específicas, recomendo falar com nosso time — eles podem esclarecer tudo em detalhes!",
      options: [
        { label: "Falar com atendente", action: "human" },
        { label: "Quero conhecer os planos", action: "plans" },
        { label: "Voltar ao início", action: "restart" },
      ],
    },
    ingredients: {
      text: "Qualidade é nossa prioridade número 1! 🌿\n\n✅ Ingredientes 100% naturais\n✅ Sem conservantes artificiais\n✅ Sem corantes\n✅ Sem ultraprocessados\n✅ Cardápios nutricionalmente equilibrados\n\nCada refeição é preparada com o mesmo cuidado que você teria em casa — mas com o conhecimento nutricional adequado para crianças!",
      options: [
        { label: "Quero experimentar!", action: "plans" },
        { label: "Qual plano escolher?", action: "recommend" },
        { label: "Voltar ao início", action: "restart" },
      ],
    },
    benefits: {
      text: "O Little Lunch oferece muitas vantagens para sua família: 🌟\n\n🥗 Refeições pensadas especificamente para crianças\n🌿 Ingredientes naturais, sem ultraprocessados\n📅 Cardápios variados e equilibrados\n⚡ Praticidade total no dia a dia\n💚 Estímulo a hábitos alimentares saudáveis\n🎓 Contribuição para a educação alimentar\n\nNosso foco vai além da comida — queremos ajudar seu filho a desenvolver uma relação saudável com os alimentos!",
      options: [
        { label: "Quero assinar!", action: "plans" },
        { label: "Qual plano é melhor para mim?", action: "recommend" },
        { label: "Voltar ao início", action: "restart" },
      ],
    },
    cancel: {
      text: "Sim, nossos planos são flexíveis! 🤝\n\nVocê pode cancelar, pausar ou alterar seu plano a qualquer momento, sem multas ou complicações.\n\nNossa confiança está na qualidade do serviço — acreditamos que depois de experimentar, você vai querer ficar! 😊",
      options: [
        { label: "Quero experimentar!", action: "choose_monthly" },
        { label: "Ver todos os planos", action: "plans" },
        { label: "Voltar ao início", action: "restart" },
      ],
    },
    human: {
      text: "Claro! Nosso time terá prazer em ajudar você pessoalmente! 💬\n\n📱 **WhatsApp**: (11) 99999-9999\n📧 **E-mail**: contato@littlelunch.com.br\n⏰ **Horário**: Seg a Sex, 9h às 18h\n\nVocê também pode usar nosso formulário de contato no site!",
      options: [
        { label: "Ir para o WhatsApp", action: "go_whatsapp" },
        { label: "Ir para o formulário", action: "go_contact" },
        { label: "Voltar ao início", action: "restart" },
      ],
    },
    fallback: {
      text: "Hmm, não tenho certeza se entendi. 🤔 Mas posso te ajudar com estas dúvidas:",
      options: [
        { label: "O que é o Little Lunch?", action: "about" },
        { label: "Quais são os planos?", action: "plans" },
        { label: "Como funciona a entrega?", action: "delivery" },
        { label: "Alergias alimentares", action: "allergies" },
        { label: "Falar com atendente", action: "human" },
      ],
    },
  };

  const response = responses[action] || responses.fallback;
  return { ...base, ...response };
}

/* ───────── simple keyword-based intent detection ───────── */

function detectIntent(text: string): string {
  const lower = text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

  const intents: { keywords: string[]; action: string }[] = [
    {
      keywords: [
        "plano",
        "preco",
        "valor",
        "quanto custa",
        "assinatura",
        "assinar",
        "mensalidade",
      ],
      action: "plans",
    },
    {
      keywords: ["qual plano", "melhor plano", "recomend", "indicar", "sugerir"],
      action: "recommend",
    },
    { keywords: ["mensal"], action: "choose_monthly" },
    { keywords: ["trimestral"], action: "choose_quarterly" },
    { keywords: ["anual"], action: "choose_annual" },
    {
      keywords: ["entrega", "frete", "envio", "receber", "chega"],
      action: "delivery",
    },
    {
      keywords: ["idade", "anos", "bebe", "crianca", "faixa etaria", "escolar"],
      action: "age",
    },
    {
      keywords: [
        "alergia",
        "intolerancia",
        "restricao",
        "gluten",
        "lactose",
        "leite",
      ],
      action: "allergies",
    },
    {
      keywords: [
        "ingrediente",
        "natural",
        "organico",
        "qualidade",
        "ultraprocessado",
        "conservante",
      ],
      action: "ingredients",
    },
    {
      keywords: ["beneficio", "vantagem", "diferencial", "por que"],
      action: "benefits",
    },
    {
      keywords: ["cancelar", "cancelamento", "pausar", "desistir"],
      action: "cancel",
    },
    {
      keywords: ["o que e", "sobre", "como funciona", "little lunch"],
      action: "about",
    },
    {
      keywords: [
        "atendente",
        "humano",
        "pessoa",
        "falar com",
        "contato",
        "whatsapp",
        "telefone",
        "email",
      ],
      action: "human",
    },
  ];

  for (const intent of intents) {
    if (intent.keywords.some((kw) => lower.includes(kw))) {
      return intent.action;
    }
  }

  return "fallback";
}

/* ───────────────── markdown-like bold ──────────────────── */

function formatText(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={i} className="font-bold">
          {part.slice(2, -2)}
        </strong>
      );
    }
    return part;
  });
}

/* ══════════════════════ COMPONENT ══════════════════════ */

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([WELCOME_MESSAGE]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, typing, scrollToBottom]);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  function addBotMessage(action: string) {
    setTyping(true);
    setTimeout(() => {
      const response = getBotResponse(action);
      setMessages((prev) => [...prev, response]);
      setTyping(false);
    }, 600 + Math.random() * 400);
  }

  function handleOptionClick(action: string, label: string) {
    if (action === "go_plans") {
      window.location.hash = "#planos";
      setOpen(false);
      return;
    }
    if (action === "go_contact") {
      window.location.hash = "#contato";
      setOpen(false);
      return;
    }
    if (action === "go_whatsapp") {
      window.open(
        "https://wa.me/5511999999999?text=Olá! Gostaria de saber mais sobre o Little Lunch.",
        "_blank"
      );
      return;
    }
    if (action === "restart") {
      setMessages([
        {
          ...WELCOME_MESSAGE,
          id: Date.now(),
          text: "Claro! Como posso ajudar? 😊",
        },
      ]);
      return;
    }

    const userMsg: Message = { id: Date.now(), from: "user", text: label };
    setMessages((prev) => [...prev, userMsg]);
    addBotMessage(action);
  }

  function handleSend() {
    const text = input.trim();
    if (!text) return;

    const userMsg: Message = { id: Date.now(), from: "user", text };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");

    const action = detectIntent(text);
    addBotMessage(action);
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSend();
    }
  }

  function handleReset() {
    setMessages([WELCOME_MESSAGE]);
  }

  return (
    <>
      {/* ────────── Floating Button ────────── */}
      <button
        onClick={() => setOpen(!open)}
        className={`fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full shadow-lg transition-all duration-300 sm:h-16 sm:w-16 ${
          open
            ? "bg-brown-600 hover:bg-brown-700 rotate-0"
            : "bg-sunny-400 hover:bg-sunny-500 animate-bounce-slow"
        }`}
        aria-label={open ? "Fechar chat" : "Abrir chat"}
      >
        {open ? (
          <X size={24} className="text-white" />
        ) : (
          <MessageCircle size={24} className="text-brown-700" />
        )}
      </button>

      {/* Badge "Precisa de ajuda?" */}
      {!open && (
        <div className="fixed bottom-20 right-5 z-50 animate-fade-in sm:bottom-[5.5rem]">
          <div className="rounded-full bg-white px-4 py-2 text-xs font-semibold text-brown-600 shadow-md border border-sunny-200">
            Precisa de ajuda? 💬
          </div>
        </div>
      )}

      {/* ────────── Chat Window ────────── */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-end justify-end sm:inset-auto sm:bottom-24 sm:right-5">
          <div className="flex h-full w-full flex-col bg-white shadow-2xl sm:h-[min(580px,80vh)] sm:w-[400px] sm:rounded-2xl sm:border sm:border-cream-300 overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between bg-brown-600 px-4 py-3 sm:rounded-t-2xl">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-sunny-400/30">
                  <span className="font-[family-name:var(--font-pacifico)] text-sm text-white">
                    L
                  </span>
                </div>
                <div>
                  <p className="text-sm font-bold text-white">Lumi</p>
                  <p className="text-xs text-sunny-300">
                    Assistente Little Lunch
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={handleReset}
                  className="rounded-lg p-1.5 text-brown-200 hover:bg-white/15 hover:text-white transition-colors"
                  title="Recomeçar conversa"
                >
                  <ArrowLeft size={18} />
                </button>
                <button
                  onClick={() => setOpen(false)}
                  className="rounded-lg p-1.5 text-brown-200 hover:bg-white/15 hover:text-white transition-colors sm:hidden"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-cream-100">
              {messages.map((msg) => (
                <div key={msg.id}>
                  {/* Bubble */}
                  <div
                    className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed whitespace-pre-line ${
                        msg.from === "user"
                          ? "bg-sunny-400 text-brown-700 rounded-br-md"
                          : "bg-white text-brown-600 border border-cream-300 shadow-sm rounded-bl-md"
                      }`}
                    >
                      {msg.text.split("\n").map((line, i) => (
                        <span key={i}>
                          {formatText(line)}
                          {i < msg.text.split("\n").length - 1 && <br />}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Quick Options */}
                  {msg.options && msg.from === "bot" && (
                    <div className="mt-3 flex flex-wrap gap-2 pl-1">
                      {msg.options.map((opt, i) => (
                        <button
                          key={i}
                          onClick={() =>
                            handleOptionClick(opt.action, opt.label)
                          }
                          className="inline-flex items-center gap-1.5 rounded-full border border-sunny-300 bg-white px-3.5 py-2 text-xs font-semibold text-brown-600 hover:bg-sunny-50 hover:border-sunny-400 transition-all active:scale-95"
                        >
                          <ChevronRight size={12} className="text-sunny-600" />
                          {opt.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {/* Typing indicator */}
              {typing && (
                <div className="flex justify-start">
                  <div className="rounded-2xl rounded-bl-md bg-white border border-cream-300 shadow-sm px-4 py-3">
                    <div className="flex gap-1.5">
                      <span className="h-2 w-2 rounded-full bg-sunny-400 animate-bounce [animation-delay:0ms]" />
                      <span className="h-2 w-2 rounded-full bg-sunny-400 animate-bounce [animation-delay:150ms]" />
                      <span className="h-2 w-2 rounded-full bg-sunny-400 animate-bounce [animation-delay:300ms]" />
                    </div>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="border-t border-cream-300 bg-white p-3">
              <div className="flex items-center gap-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Digite sua dúvida..."
                  className="flex-1 rounded-xl border border-cream-300 bg-cream-100 px-4 py-2.5 text-sm text-brown-700 placeholder:text-brown-300 outline-none focus:border-sunny-400 focus:ring-2 focus:ring-sunny-100 transition-all"
                />
                <button
                  onClick={handleSend}
                  disabled={!input.trim()}
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-sunny-400 text-brown-700 shadow-sm hover:bg-sunny-500 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
                >
                  <Send size={16} />
                </button>
              </div>
              <p className="mt-2 text-center text-[10px] text-brown-300">
                Assistente automatizada do Little Lunch
              </p>
            </div>
          </div>
        </div>
      )}

      {/* ────────── Inline styles for custom animations ────────── */}
      <style jsx global>{`
        @keyframes bounce-slow {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-6px);
          }
        }
        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.4s ease-out;
        }
      `}</style>
    </>
  );
}
