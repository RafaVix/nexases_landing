import { Button } from "@/components/ui/button";

interface HeroProps {
  onChatOpen: () => void;
}

export default function Hero({ onChatOpen }: HeroProps) {
  return (
    <section className="section-spacing bg-[#F5F7F6]">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Column - Text */}
          <div className="flex flex-col gap-6 order-2 md:order-1">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#2E2E2E] leading-tight mb-4">
                Entenda sua situação com clareza
              </h1>
              <p className="text-base md:text-lg text-[#6B7A7E] leading-relaxed">
                Uma conversa guiada com IA para organizar suas dívidas sem julgamento. Você receberá clareza sobre sua situação e possíveis caminhos.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <Button
                onClick={onChatOpen}
                className="btn-primary text-base md:text-lg py-4 px-8 w-full md:w-auto"
              >
                Fazer diagnóstico agora
              </Button>
              <p className="text-sm text-[#6B7A7E]">
                Leva poucos minutos. Sem compromisso.
              </p>
            </div>

            {/* Secondary CTA */}
            <button
              onClick={onChatOpen}
              className="text-[#3E7FA8] font-medium hover:text-[#2F6F95] transition-colors text-left text-sm md:text-base"
            >
              Quero entender minha situação →
            </button>
          </div>

          {/* Right Column - Illustration */}
          <div className="flex justify-center items-center order-1 md:order-2">
            <img
              src="/images/ilustracao_conceitual_do_hero.png"
              alt="Processo de diagnóstico: da confusão à clareza"
              className="w-full max-w-md md:max-w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
