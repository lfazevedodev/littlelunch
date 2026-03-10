import { Instagram, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-brown-800 text-brown-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <a href="#" className="flex items-center gap-1.5">
              <span className="font-[family-name:var(--font-pacifico)] text-2xl text-white">
                Little Lunch
              </span>
            </a>
            <p className="mt-1 text-xs font-semibold text-sunny-400 uppercase tracking-wider">
              Meu Lanchinho Escolar
            </p>
            <p className="mt-4 text-sm leading-relaxed max-w-md">
              Alimentação saudável para crianças de forma prática e consistente.
              Ajudamos famílias a criar hábitos alimentares saudáveis desde
              cedo.
            </p>
            <div className="mt-6 flex gap-4">
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-brown-700 text-brown-300 hover:bg-sunny-400 hover:text-brown-700 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Navegação
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#sobre"
                  className="text-sm hover:text-sunny-400 transition-colors"
                >
                  Sobre
                </a>
              </li>
              <li>
                <a
                  href="#beneficios"
                  className="text-sm hover:text-sunny-400 transition-colors"
                >
                  Benefícios
                </a>
              </li>
              <li>
                <a
                  href="#como-funciona"
                  className="text-sm hover:text-sunny-400 transition-colors"
                >
                  Como Funciona
                </a>
              </li>
              <li>
                <a
                  href="#planos"
                  className="text-sm hover:text-sunny-400 transition-colors"
                >
                  Planos
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="text-sm hover:text-sunny-400 transition-colors"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Contato
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:contato@littlelunch.com.br"
                  className="text-sm hover:text-sunny-400 transition-colors"
                >
                  contato@littlelunch.com.br
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm hover:text-sunny-400 transition-colors"
                >
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        <hr className="my-10 border-brown-700" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-brown-400">
            &copy; {new Date().getFullYear()} Little Lunch. Todos os direitos
            reservados.
          </p>
          <p className="text-xs text-brown-400 flex items-center gap-1">
            Feito com <Heart size={12} className="text-coral-400" /> para
            famílias brasileiras
          </p>
        </div>
      </div>
    </footer>
  );
}
