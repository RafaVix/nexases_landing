import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

interface WhatItDoesNotProps {
  onChatOpen: () => void;
}

const restrictions = [
  "Não promete resultados",
  "Não pede dados sensíveis",
  "Não se passa por banco/instituição",
  "Não obriga você a comprar nada",
];

export default function WhatItDoesNot({ onChatOpen }: WhatItDoesNotProps) {
  return (
    <section className="section-spacing bg-[#F5F7F6]">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2E2E2E] mb-4">
              O que este diagnóstico NÃO faz
            </h2>
          </div>

          <div className="space-y-4 mb-12">
            {restrictions.map((restriction, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-4 md:p-5 bg-white rounded-[12px] border border-[#D4DCDB]"
              >
                <X className="w-5 h-5 text-[#DC2626] flex-shrink-0" />
                <p className="text-base md:text-lg text-[#2E2E2E] font-medium">
                  {restriction}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button
              onClick={onChatOpen}
              className="btn-primary text-base md:text-lg py-4 px-8"
            >
              Iniciar diagnóstico
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
