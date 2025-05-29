import { useEffect, useState } from "react";
import { Send, Sparkles } from "lucide-react";

export default function ChatInput({ onSend, faqQuery }) {
  const [query, setQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    if (faqQuery) {
      setQuery(faqQuery);
    }
  }, [faqQuery]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      onSend(query);
    }
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-2xl blur-xl opacity-60 animate-pulse"></div>

      <div onSubmit={handleSubmit} className="relative">
        <div
          className={`
          relative bg-white/90 backdrop-blur-lg border border-gray-200/50 rounded-2xl 
          shadow-2xl transition-all duration-300 ease-out
          ${
            isFocused
              ? "shadow-blue-500/25 border-blue-300/50 scale-[1.02]"
              : "hover:shadow-xl"
          }
        `}
        >
          <div className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400">
            <Sparkles
              size={20}
              className={`transition-all duration-300 ${
                isFocused ? "text-blue-500 scale-110" : ""
              }`}
            />
          </div>

          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            onKeyDown={(e) => e.key === "Enter" && handleSubmit(e)}
            className="
              w-full pl-16 pr-20 py-6 bg-transparent text-lg
              placeholder-gray-400 focus:outline-none
              font-medium tracking-wide
            "
            placeholder="Ask me anything about flight bookings..."
          />

          <button
            type="button"
            onClick={handleSubmit}
            disabled={!query.trim()}
            className={`
              absolute right-4 top-1/2 -translate-y-1/2
              p-3 rounded-xl transition-all duration-300 ease-out
              font-semibold text-sm flex items-center gap-2
              ${
                query.trim()
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg hover:shadow-xl hover:scale-105 active:scale-95"
                  : "bg-gray-100 text-gray-400 cursor-not-allowed"
              }
            `}
          >
            <Send
              size={18}
              className={`transition-transform duration-200 ${
                query.trim() ? "group-hover:translate-x-0.5" : ""
              }`}
            />
          </button>
        </div>
      </div>

      <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-3/4 h-8 bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-pink-500/30 blur-2xl opacity-40"></div>
    </div>
  );
}
