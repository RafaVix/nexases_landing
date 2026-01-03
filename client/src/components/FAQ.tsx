import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  onChatOpen: () => void;
}

const faqs = [
  {
    question: "Isso é gratuito?",
    answer: "Sim, o diagnóstico inicial é totalmente gratuito. Você receberá uma análise clara da sua situação sem custos.",
  },
  {
    question: "Vocês vão pedir CPF ou dados bancários?",
    answer: "Não. Nunca solicitamos dados sensíveis como CPF, senha ou informações bancárias. O diagnóstico funciona apenas com informações gerais sobre sua situação.",
  },
  {
    question: "Isso renegocia minha dívida?",
    answer: "Não. Este é um diagnóstico educativo. Não negociamos dívidas. Quando necessário, você será orientado a buscar canais oficiais apropriados.",
  },
  {
    question: "Isso substitui consultor/advogado?",
    answer: "Não. Este diagnóstico é complementar e educativo. Para questões complexas, recomendamos buscar orientação profissional especializada.",
  },
  {
    question: "Quanto tempo leva?",
    answer: "O diagnóstico geralmente leva entre 5 e 15 minutos, dependendo da complexidade da sua situação.",
  },
  {
    question: "Minhas respostas ficam salvas?",
    answer: "Suas respostas são processadas para gerar o diagnóstico. Recomendamos ler a Política de Privacidade para entender como seus dados são tratados.",
  },
  {
    question: "Quem é a Vivi?",
    answer: "Vivi é a assistente de IA que conduz o diagnóstico de forma acolhedora e sem julgamento. Ela faz perguntas estruturadas para ajudar você a organizar suas informações.",
  },
];

export default function FAQ({ onChatOpen }: FAQProps) {
  return (
    <section className="section-spacing bg-[#F5F7F6]">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2E2E2E] mb-4">
              Perguntas frequentes
            </h2>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-3 mb-12">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white border border-[#D4DCDB] rounded-[12px] px-6 py-4 data-[state=open]:border-[#1FA4A9]"
              >
                <AccordionTrigger className="text-base md:text-lg font-semibold text-[#2E2E2E] hover:text-[#1FA4A9] transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm md:text-base text-[#6B7A7E] pt-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

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
