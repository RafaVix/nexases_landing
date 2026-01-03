import { Button } from "@/components/ui/button";

interface FinalCTAProps {
  onChatOpen: () => void;
}

export default function FinalCTA({ onChatOpen }: FinalCTAProps) {
  return (
    <section className="section-spacing bg-white">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-lg md:text-xl text-[#2E2E2E] mb-8 leading-relaxed">
            Se você só quer entender sua situação com calma e ter clareza do próximo passo possível, podemos começar agora.
          </p>

          <Button
            onClick={onChatOpen}
            className="btn-primary text-lg md:text-xl py-5 px-10 mb-4"
          >
            Fazer diagnóstico agora
          </Button>

          <p className="text-sm md:text-base text-[#6B7A7E]">
            Sem compromisso. Sem julgamento.
          </p>
        </div>
      </div>
    </section>
  );
}
