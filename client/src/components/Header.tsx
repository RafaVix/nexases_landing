import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

interface HeaderProps {
  onChatOpen: () => void;
}

export default function Header({ onChatOpen }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-[#F5F7F6] border-b border-[#D4DCDB] shadow-sm">
      <div className="container flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-[#1FA4A9]"></div>
          <span className="text-lg md:text-xl font-bold text-[#2E2E2E]">
            NexaSES
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-2 text-center">
          <p className="text-sm font-medium text-[#2E2E2E]">
            Conheça os caminhos para sair das dívidas
          </p>
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Button
            onClick={onChatOpen}
            className="btn-primary text-sm"
          >
            Iniciar diagnóstico
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className="w-5 h-5 text-[#2E2E2E]" />
          ) : (
            <Menu className="w-5 h-5 text-[#2E2E2E]" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-[#D4DCDB] p-4 space-y-3">
          <button
            onClick={() => scrollToSection("como-funciona")}
            className="block w-full text-left text-sm font-medium text-[#2E2E2E] hover:text-[#1FA4A9] transition-colors py-2"
          >
            Como funciona
          </button>
          <Button
            onClick={onChatOpen}
            className="btn-primary w-full text-sm"
          >
            Iniciar diagnóstico
          </Button>
        </div>
      )}
    </header>
  );
}
