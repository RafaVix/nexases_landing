export default function Footer() {
  return (
    <footer className="bg-[#2E2E2E] text-white py-12 md:py-16">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-8 md:mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-[#1FA4A9]"></div>
              <span className="text-lg font-bold">NexaSES</span>
            </div>
            <p className="text-sm text-gray-300">
              Diagnóstico conversacional com IA para organizar suas dívidas sem julgamento.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4 text-base">Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#como-funciona"
                  className="text-gray-300 hover:text-[#1FA4A9] transition-colors"
                >
                  Como funciona
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-[#1FA4A9] transition-colors"
                >
                  Política de Privacidade
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-[#1FA4A9] transition-colors"
                >
                  Termos de Uso
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-base">Contato</h4>
            <p className="text-sm text-gray-300">
              <a
                href="mailto:contato@nexases.com.br"
                className="hover:text-[#1FA4A9] transition-colors"
              >
                contato@nexases.com.br
              </a>
            </p>
          </div>
        </div>

        {/* Compliance */}
        <div className="border-t border-gray-700 pt-8 md:pt-12">
          <div className="space-y-3 text-xs md:text-sm text-gray-400">
            <p>
              Esta experiência utiliza inteligência artificial para guiar perguntas e organizar informações.
            </p>
            <p>
              Conteúdo educativo. Não constitui consultoria financeira.
            </p>
            <p className="text-gray-500">
              © 2024 NexaSES. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
