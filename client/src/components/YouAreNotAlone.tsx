import { Button } from "@/components/ui/button";
import { Heart, AlertCircle, Lightbulb, TrendingDown } from "lucide-react";

interface YouAreNotAloneProps {
  onChatOpen: () => void;
}

const situations = [
  {
    icon: AlertCircle,
    title: "Não saber por onde começar",
    description: "Muitas pessoas se sentem perdidas quando enfrentam dívidas acumuladas.",
  },
  {
    icon: TrendingDown,
    title: "Contas acumuladas e confusão",
    description: "É comum perder o controle quando há múltiplas dívidas em diferentes lugares.",
  },
  {
    icon: Heart,
    title: "Ansiedade ao pensar em dívidas",
    description: "O estresse financeiro afeta muitas pessoas. Você não está sozinho nisto.",
  },
  {
    icon: Lightbulb,
    title: "Cansaço de promessas milagrosas",
    description: "Queremos ser honestos: não há soluções mágicas, apenas caminhos reais.",
  },
];

export default function YouAreNotAlone({ onChatOpen }: YouAreNotAloneProps) {
  return (
    <section className="section-spacing bg-white">
      <div className="container">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2E2E2E] mb-4">
            Você não está sozinho
          </h2>
          <p className="text-base md:text-lg text-[#6B7A7E] max-w-2xl mx-auto">
            Muitas pessoas enfrentam desafios similares com dívidas e desorganização financeira.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12">
          {situations.map((situation, index) => {
            const Icon = situation.icon;
            return (
              <div
                key={index}
                className="p-6 md:p-8 bg-[#F5F7F6] rounded-[14px] border border-[#D4DCDB] hover:border-[#1FA4A9] transition-colors"
              >
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <Icon className="w-6 h-6 text-[#1FA4A9]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#2E2E2E] mb-2">
                      {situation.title}
                    </h3>
                    <p className="text-sm md:text-base text-[#6B7A7E]">
                      {situation.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
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
    </section>
  );
}
