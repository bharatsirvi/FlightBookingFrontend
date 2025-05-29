import { useRef, useState } from "react";
import ChatWindow from "./ChatWindow";
import { faqs } from "../utils/constants";

function Body() {
  const [faqQuery, setFaqQuery] = useState("");
  const chatRef = useRef(null); 

  const handleFaqClick = (question) => {
    setFaqQuery(question);
    setTimeout(() => {
      chatRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-purple-200 rounded-full opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-indigo-200 rounded-full opacity-10 animate-bounce delay-500"></div>
      </div>

      <div className="relative z-10 p-6 sm:p-8 lg:p-12" ref={chatRef}>
        <div className="text-center mb-12 space-y-4">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-tr from-blue-500 to-indigo-600 rounded-2xl shadow-lg mb-6 transform hover:scale-105 transition-all duration-300">
            <span className="text-3xl">✈️</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent leading-tight">
            Flight Booking Analytics
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            Discover insights, compare prices, and find the perfect flights with
            our intelligent analytics platform
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 rounded-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-500 blur-sm"></div>

            <div
              className="relative bg-white/80 backdrop-blur-xl shadow-2xl rounded-3xl border border-white/20 overflow-hidden"
              
            >
              <div className="h-2 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500"></div>

              <div className="p-8 lg:p-12">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-sm text-gray-600 font-medium">
                        Live Analytics
                      </span>
                    </div>
                    <div className="w-px h-4 bg-gray-300"></div>
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse delay-300"></div>
                      <span className="text-sm text-gray-600 font-medium">
                        Real-time Data
                      </span>
                    </div>
                  </div>
                  <div className="hidden sm:flex items-center space-x-2 text-sm text-gray-500">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                    <span>Powered by AI</span>
                  </div>
                </div>

                <div className="">
                  <ChatWindow faqQuery={faqQuery} setFaqQuery={setFaqQuery} />
                </div>
              </div>

              <div className="h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-30"></div>
            </div>
          </div>

          <div className="mt-20 max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                Frequently Asked Questions
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
              <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
                Explore our most commonly asked questions to find quick answers
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {faqs.map((question, idx) => (
                <button
                  key={idx}
                  onClick={() => handleFaqClick(question)}
                  className="cursor-pointer group relative text-left p-6 bg-gradient-to-br from-white to-gray-50/50 hover:from-blue-50 hover:to-purple-50 rounded-2xl border border-gray-200/60 hover:border-blue-300/60 shadow-lg hover:shadow-2xl transition-all  duration-500 transform hover:-translate-y-2 hover:scale-105"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <div className="absolute bottom-4 right-4 w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white text-sm font-bold opacity-20 group-hover:opacity-100 transition-opacity duration-300">
                    ?
                  </div>

                  <div className="relative z-10">
                    <p className="text-gray-800 group-hover:text-gray-900 font-semibold text-base leading-relaxed transition-colors duration-300">
                      {question}
                    </p>

                    <div className="mt-4 flex items-center text-blue-600 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-0 group-hover:translate-x-2">
                      <span className="text-sm font-medium">
                        Ask this question
                      </span>
                      <svg
                        className="w-4 h-4 ml-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Body;
