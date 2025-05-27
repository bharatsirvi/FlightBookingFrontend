import { useState } from "react";
import axios from "axios";
import ChatInput from "./ChatInput";
import ChartRenderer from "./ChartRenderer";

export default function ChatWindow() {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSend = async (query) => {
    setLoading(true);
    setError("");
    try {
      const res = await axios.post("/api/query", { query });
      setResponse(res.data);
    } catch (err) {
      setError("⚠️ Failed to get response");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <ChatInput onSend={handleSend} />
      {loading && <p className="text-blue-500 mt-4">Loading...</p>}
      {error && <p className="text-red-600 mt-4">{error}</p>}
      {response && (
        <div className="mt-6">
          <ChartRenderer response={response} />
        </div>
      )}
    </div>
  );
}
