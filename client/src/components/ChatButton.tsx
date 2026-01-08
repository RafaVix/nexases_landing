import { MessageCircle } from "lucide-react";

interface ChatButtonProps {
  onClick: () => void;
}

export default function ChatButton({ onClick }: ChatButtonProps) {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-6 right-6 z-40 w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#1FA4A9] text-white shadow-lg hover:bg-[#1a8a8f] transition-colors flex items-center justify-center"
      aria-label="Abrir chat"
    >
      <MessageCircle className="w-6 h-6 md:w-7 md:h-7" />
    </button>
  );
}
