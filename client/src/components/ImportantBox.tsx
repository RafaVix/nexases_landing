import { Button } from "@/components/ui/button";
import { AlertCircle } from "lucide-react";

interface ImportantBoxProps {
  onChatOpen: () => void;
}

export default function ImportantBox({ onChatOpen }: ImportantBoxProps) {
  return (
    <section className="section-spacing bg-white">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          <div className="bg-[#E0B65C]/15 border-l-4 border-[#E0B65C] rounded-[8px] p-6 md:p-8 mb-8">
            <div className="flex gap-4">
              <AlertCircle className="w-6 h-6 text-[#E0B65C] flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-[#2E2E2E] mb-3 text-lg">
                  Importante
                </h3>
                <p className="text-sm md:text-base text-[#2E2E2E] leading-relaxed">
                  Este diagnóstico é educativo e automatizado por IA. Não negociamos dívidas e não solicitamos dados sensíveis. Quando for necessário cálculo/simulação/renegociação formal, você será orientado a buscar o canal oficial adequado.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Button
              onClick={onChatOpen}
              className="btn-secondary text-base md:text-lg py-4 px-8"
            >
              Seguir para o diagnóstico
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
