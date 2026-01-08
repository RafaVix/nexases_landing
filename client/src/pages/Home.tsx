import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import YouAreNotAlone from "@/components/YouAreNotAlone";
import HowItWorks from "@/components/HowItWorks";

import WhatItDoesNot from "@/components/WhatItDoesNot";
import FinalCTA from "@/components/FinalCTA";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";
import ChatButton from "@/components/ChatButton";

/**
 * NexaSES Landing Page
 * Design Philosophy: Institucional, calma, confiável, educativa, sem pressão
 * Paleta: Primária #1FA4A9 (Confiança), Secundária #2F6F95, Neutro #F5F7F6
 * Objetivo: Converter visitantes em início de diagnóstico
 */
export default function Home() {
  const [chatOpen, setChatOpen] = useState(false);

  const handleOpenChat = () => {
    setChatOpen(true);
  };

  const handleCloseChat = () => {
    setChatOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header onChatOpen={handleOpenChat} />

      <main>
        <Hero onChatOpen={handleOpenChat} />
        <YouAreNotAlone onChatOpen={handleOpenChat} />
        <HowItWorks onChatOpen={handleOpenChat} />

        <WhatItDoesNot onChatOpen={handleOpenChat} />
        <FinalCTA onChatOpen={handleOpenChat} />
        <FAQ onChatOpen={handleOpenChat} />
      </main>

      <Footer />

      {/* Chat Button - Always visible */}
      {!chatOpen && <ChatButton onClick={handleOpenChat} />}

      {/* Chat Modal */}
      <ChatWidget isOpen={chatOpen} onClose={handleCloseChat} />
    </div>
  );
}
