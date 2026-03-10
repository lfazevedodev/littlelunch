import { Instagram, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-400">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <a href="#" className="flex items-center gap-2">
              <span className="text-2xl">🥗</span>
              <span className="text-xl font-extrabold text-white">
                Little<span className="text-orange-400">Lunch</span>
              </span>
            </a>
            <p className="mt-4 text-sm leading-relaxed max-w-md">
              Alimentação saudável para crianças de forma prática e consistente.
              Ajudamos famílias a criar hábitos alimentares saudáveis desde
              cedo.
            </p>
            <div className="mt-6 flex gap-4">
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-stone-800 text-stone-400 hover:bg-green-600 hover:text-white transition-colors"
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
                  className="text-sm hover:text-green-400 transition-colors"
                >
                  Sobre
                </a>
              </li>
              <li>
                <a
                  href="#beneficios"
                  className="text-sm hover:text-green-400 transition-colors"
                >
                  Benefícios
                </a>
              </li>
              <li>
                <a
                  href="#como-funciona"
                  className="text-sm hover:text-green-400 transition-colors"
                >
                  Como Funciona
                </a>
              </li>
              <li>
                <a
                  href="#planos"
                  className="text-sm hover:text-green-400 transition-colors"
                >
                  Planos
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="text-sm hover:text-green-400 transition-colors"
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
                  className="text-sm hover:text-green-400 transition-colors"
                >
                  contato@littlelunch.com.br
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm hover:text-green-400 transition-colors"
                >
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        <hr className="my-10 border-stone-800" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-stone-500">
            &copy; {new Date().getFullYear()} Little Lunch. Todos os direitos
            reservados.
          </p>
          <p className="text-xs text-stone-500 flex items-center gap-1">
            Feito com <Heart size={12} className="text-red-400" /> para
            famílias brasileiras
          </p>
        </div>
      </div>
    </footer>
  );
}

