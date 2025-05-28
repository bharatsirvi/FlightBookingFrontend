import axios from "axios";
import ChatInput from "./ChatInput";
import ChartRenderer from "./ChartRenderer";
import TableRenderer from "./TableRenderer";
import { BASE_URL } from "../utils/constants";
import { useEffect, useState } from "react";
export default function ChatWindow({ faqQuery}) {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSend = async (query) => {
    setLoading(true);
    setError("");
    setResponse(null);
    try {
      const response = await axios.post(
        `${BASE_URL}/api/query`,
        { query },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setResponse(response.data);
    } catch (error) {
      console.error("Error fetching response:", error);
      setError(
        "Sorry, I couldn't find an answer. Please try again with a different query and make sure the query is valid."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 rounded-2xl bg-white shadow-lg border border-gray-100">
      <ChatInput onSend={handleSend} faqQuery={faqQuery} />
      {loading && (
        <div className="flex items-center justify-center mt-6">
          <div className="flex items-center space-x-3 text-blue-600">
            <svg
              className="w-6 h-6 animate-spin text-blue-500"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 00-8 8z"
              ></path>
            </svg>
            <span className="text-lg font-medium">
              Analyzing your request...
            </span>
          </div>
        </div>
      )}

      {error && (
        <div className="mt-6 p-4 rounded-md bg-red-50 border border-red-300 text-red-700 shadow-sm">
          {error}
        </div>
      )}

      {response?.type === "chart" && (
        <div className="mt-8">
          <ChartRenderer response={response} />
        </div>
      )}

      {response?.type === "table" && (
        <div className="mt-8">
          <TableRenderer response={response} />
        </div>
      )}

      {response?.type === "text" && (
        <div className="mt-8 p-4 bg-gray-50 border border-gray-200 rounded-md text-gray-800 shadow">
          {response.answer}
        </div>
      )}
    </div>
  );
}
