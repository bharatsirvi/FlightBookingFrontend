import axios from "axios";
import ChatInput from "./ChatInput";
import ChartRenderer from "./ChartRenderer";
import TableRenderer from "./TableRenderer";
import { BASE_URL } from "../utils/constants";
import usePollingState from "../hooks/usePollingState";
import { useEffect } from "react";

export default function ChatWindow({ faqQuery }) {

  const apiCall = async (query) => {
      const res = await axios.post(
        `${BASE_URL}/api/query`,
        { query },
        { headers: { "Content-Type": "application/json" } }
      );
      return res.data;
    }
  const {
    data: response,
    loading,
    error,
    poll: pollResponse,
    cancel,
  } = usePollingState({
    fetcher: apiCall,
  });
  
  console.log("ChatWindow response:", response);
  const handleSend = (query) => {
    pollResponse(query);
  };

  useEffect(() => {
    return () => {
      cancel(); 
    };
  }, [cancel]);

  return (
    <div className="p-2">
      <div className="fixed inset-0 overflow-scroll pointer-events-none opacity-40">
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-300 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-300 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-pink-300 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative max-w-5xl mx-auto pt-8">
        <div>
          <ChatInput onSend={handleSend} faqQuery={faqQuery} />

          {loading && (
            <div className="flex items-center justify-center mt-8 py-12">
              <div className="relative">
                <div className="w-20 h-20 relative">
                  <div className="absolute inset-0 border-4 border-blue-200 rounded-full"></div>
                  <div className="absolute inset-0 border-4 border-transparent border-t-blue-600 rounded-full animate-spin"></div>
                  <div className="absolute inset-2 border-3 border-transparent border-t-purple-500 rounded-full animate-spin animate-reverse"></div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full animate-pulse"></div>
                </div>
              </div>
              <div className="ml-6">
                <div className="text-xl font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                  Analyzing your request...
                </div>
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce delay-100"></div>
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce delay-200"></div>
                </div>
              </div>
            </div>
          )}

          {error && (
            <div className="mt-8 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-pink-500/10 rounded-2xl blur-sm"></div>
              <div className="relative bg-gradient-to-br from-red-50 to-pink-50 border border-red-200/50 rounded-2xl p-6 shadow-lg backdrop-blur-sm">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg">
                    <svg
                      className="w-5 h-5 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-red-800 mb-1">
                      Something went wrong
                    </h3>
                    <p className="text-red-900 leading-relaxed">{error}</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {response?.type === "chart" && (
            <div className="mt-8 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-2xl blur-sm"></div>
              <div className="relative bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200/50 rounded-2xl p-6 shadow-lg backdrop-blur-sm">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center shadow-lg">
                    <svg
                      className="w-5 h-5 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">
                      Chart Visualization
                    </h3>
                    <p className="text-sm text-gray-600">
                      Data insights in visual format
                    </p>
                  </div>
                </div>
                <div className="bg-white/70 backdrop-blur-sm rounded-xl shadow-inner">
                  <ChartRenderer response={response} />
                </div>
              </div>
            </div>
          )}

          {response?.type === "table" && (
            <div className="mt-8 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-2xl blur-sm"></div>
              <div className="relative bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200/50 rounded-2xl p-6 shadow-lg backdrop-blur-sm">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center shadow-lg">
                    <svg
                      className="w-5 h-5 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 10h18M3 6h18m-9 8h9m-9 4h9m-9-8V6a2 2 0 012-2h2a2 2 0 012 2v4m-6 0a2 2 0 00-2 2v4a2 2 0 002 2h2a2 2 0 002-2v-4a2 2 0 00-2-2H9z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">
                      Data Table
                    </h3>
                    <p className="text-sm text-gray-600">
                      Structured data results
                    </p>
                  </div>
                </div>
                <div className="overflow-scroll">
                  <TableRenderer response={response} />
                </div>
              </div>
            </div>
          )}

          {response?.type === "text" && (
            <div className="mt-8 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl blur-sm"></div>
              <div className="relative bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-200/50 rounded-2xl p-6 shadow-lg backdrop-blur-sm">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center shadow-lg">
                    <svg
                      className="w-5 h-5 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">
                      AI Response
                    </h3>
                    <p className="text-sm text-gray-600">
                      Generated insights and analysis
                    </p>
                  </div>
                </div>
                <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-inner">
                  <p className="text-gray-800 leading-relaxed text-lg font-medium">
                    {response.answer}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
