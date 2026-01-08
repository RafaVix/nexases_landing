import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { useState, useRef, useEffect } from "react";

interface Message {
  id: string;
  type: "user" | "assistant";
  content: string;
  timestamp: Date;
}

interface ChatWidgetProps {
  isOpen: boolean;
  onClose: () => void;
}

const WEBHOOK_URL = "https://nexases.com.br/webhook/diagnostico-dividas";

export default function ChatWidget({ isOpen, onClose }: ChatWidgetProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const sessionIdRef = useRef<string>("");

  // Initialize session ID with persistence
  useEffect(() => {
    if (!sessionIdRef.current) {
      sessionIdRef.current =
        localStorage.getItem("nexases_session_id") ||
        `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
      localStorage.setItem("nexases_session_id", sessionIdRef.current);
    }
  }, []);

  // Initialize chat with greeting
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const greeting: Message = {
        id: "greeting_" + Date.now(),
        type: "assistant",
        content:
          "Oi! Eu sou a Vivi. Posso te ajudar a entender sua situação com calma. Quer começar o diagnóstico?",
        timestamp: new Date(),
      };
      setMessages([greeting]);
    }
  }, [isOpen]);

  // Scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: "msg_" + Date.now(),
      type: "user",
      content: inputValue,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    const messageToSend = inputValue;
    setInputValue("");
    setIsLoading(true);

    try {
      const payload = {
        session_id: sessionIdRef.current,
        user_message: messageToSend,
      };

      // Call n8n webhook
      const response = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      // Extract message from webhook response
      const assistantMessage: Message = {
        id: "msg_" + Date.now(),
        type: "assistant",
        content:
          data.message ||
          "Desculpe, não consegui processar sua resposta. Pode tentar novamente?",
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      console.error("Error sending message:", error);

      // Fallback error message
      const errorMessage: Message = {
        id: "msg_" + Date.now(),
        type: "assistant",
        content:
          "Tive uma falha de conexão. Pode tentar novamente? Se o problema persistir, entre em contato conosco.",
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end md:items-center justify-end md:justify-end p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/20"
        onClick={onClose}
      ></div>

      {/* Chat Window */}
      <div className="relative bg-white rounded-[16px] shadow-2xl w-full md:w-96 h-[600px] md:h-[700px] flex flex-col z-10">
        {/* Header */}
        <div className="bg-[#1FA4A9] text-white p-4 md:p-5 rounded-t-[16px] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src="/images/avatar_da_vivi_chatbot.png"
              alt="Vivi"
              className="w-8 h-8 md:w-10 md:h-10 rounded-full object-cover"
            />
            <div>
              <h3 className="font-semibold text-base md:text-lg">Vivi</h3>
              <p className="text-xs md:text-sm opacity-90">
                Assistente de diagnóstico
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 hover:bg-white/20 rounded-full transition-colors"
            aria-label="Fechar chat"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 md:p-5 space-y-4 bg-[#F5F7F6]">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${
                message.type === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`max-w-xs md:max-w-sm px-4 py-3 rounded-[12px] ${
                  message.type === "user"
                    ? "bg-[#1FA4A9] text-white rounded-br-none"
                    : "bg-white text-[#2E2E2E] border border-[#D4DCDB] rounded-bl-none"
                }`}
              >
                <p className="text-sm md:text-base leading-relaxed">
                  {message.content}
                </p>
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-white text-[#2E2E2E] border border-[#D4DCDB] px-4 py-3 rounded-[12px] rounded-bl-none">
                <div className="flex gap-2">
                  <div className="w-2 h-2 bg-[#1FA4A9] rounded-full animate-bounce"></div>
                  <div
                    className="w-2 h-2 bg-[#1FA4A9] rounded-full animate-bounce"
                    style={{ animationDelay: "0.2s" }}
                  ></div>
                  <div
                    className="w-2 h-2 bg-[#1FA4A9] rounded-full animate-bounce"
                    style={{ animationDelay: "0.4s" }}
                  ></div>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="border-t border-[#D4DCDB] p-4 md:p-5 bg-white rounded-b-[16px]">
          <div className="flex gap-2">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  handleSendMessage();
                }
              }}
              placeholder="Digite sua resposta..."
              className="flex-1 px-4 py-2 md:py-3 bg-[#F5F7F6] border border-[#D4DCDB] rounded-[10px] text-sm md:text-base focus:outline-none focus:border-[#1FA4A9] focus:ring-2 focus:ring-[#1FA4A9]/20 transition-all"
              disabled={isLoading}
            />
            <button
              onClick={handleSendMessage}
              disabled={isLoading || !inputValue.trim()}
              className="px-4 md:px-5 py-2 md:py-3 bg-[#1FA4A9] text-white rounded-[10px] hover:bg-[#1a8a8f] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              aria-label="Enviar mensagem"
            >
              <span className="hidden md:inline">Enviar</span>
              <span className="md:hidden">→</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
