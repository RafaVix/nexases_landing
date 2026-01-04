import { Button } from "@/components/ui/button";

interface HeaderProps {
  onChatOpen?: () => void;
}

export default function Header({ onChatOpen }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 bg-[#F5F7F6] border-b border-[#E0E3E1] shadow-sm">
      <div className="container flex items-center justify-between py-4 gap-4">
        {/* ESQUERDA: Logo/Marca */}
        <div className="flex items-center gap-2 min-w-max">
          <div className="w-3 h-3 rounded-full bg-[#1FA4A9]"></div>
          <span className="text-sm font-medium text-[#2F6F95]">Suas Finanças</span>
        </div>

        {/* CENTRO: Frase em Pill */}
        <div className="flex-1 flex justify-center mx-4">
          <div className="bg-[#2F6F95] text-white px-6 py-2 rounded-full text-sm font-medium whitespace-nowrap">
            Conheça os caminhos para sair das dívidas
          </div>
        </div>

        {/* DIREITA: Botão CTA */}
        <div className="min-w-max">
          <Button
            onClick={onChatOpen}
            className="bg-[#1FA4A9] hover:bg-[#188A90] text-white font-medium px-6 py-2 h-auto rounded-lg text-sm"
          >
            Iniciar diagnóstico
          </Button>
        </div>
      </div>
    </header>
  );
}
