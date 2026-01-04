import { Button } from "@/components/ui/button";

interface HowItWorksProps {
  onChatOpen: () => void;
}

const steps = [
  {
    number: "1",
    title: "Você responde perguntas simples",
    description: "Compartilhe informações sobre sua situação de forma clara e objetiva.",
  },
  {
    number: "2",
    title: "A conversa se adapta às suas respostas",
    description: "A IA personaliza as perguntas conforme você avança no diagnóstico.",
  },
  {
    number: "3",
    title: "Você recebe clareza sobre sua situação e possíveis caminhos",
    description: "Ao final, você terá uma visão clara do seu cenário e próximos passos.",
  },
];

export default function HowItWorks({ onChatOpen }: HowItWorksProps) {
  return (
    <section id="como-funciona" className="section-spacing bg-[#F5F7F6]">
      <div className="container">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2E2E2E] mb-4">
            Como funciona o diagnóstico
          </h2>
        </div>

        {/* Fluxo Visual */}
        <div className="mb-12 md:mb-16 flex justify-center">
          <img
            src="/images/fluxo_nexases.png"
            alt="Fluxo do diagnóstico: Diagnóstico, Organização, Próximo passo"
            className="w-full max-w-4xl h-auto"
          />
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12">
          {steps.map((step, index) => (
            <div
              key={index}
              className="p-6 md:p-8 bg-white rounded-[14px] border border-[#D4DCDB] flex flex-col"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-full bg-[#1FA4A9] flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-lg">{step.number}</span>
                </div>
                <h3 className="font-semibold text-[#2E2E2E] text-lg">
                  {step.title}
                </h3>
              </div>
              <p className="text-sm md:text-base text-[#6B7A7E]">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button
            onClick={onChatOpen}
            className="btn-primary text-base md:text-lg py-4 px-8"
          >
            Fazer diagnóstico agora
          </Button>
        </div>
      </div>
    </section>
  );
}
