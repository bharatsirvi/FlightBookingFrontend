import { useEffect, useState } from "react";

export default function ChatInput({ onSend, faqQuery }) {
  const [query, setQuery] = useState();

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
    <form onSubmit={handleSubmit} className="flex gap-3 mt-4">
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="flex-grow p-3 border rounded-xl shadow-sm focus:outline-none focus:ring focus:border-blue-300"
        placeholder="e.g. Top 5 airlines by bookings last month"
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 cursor-pointer"
      >
        Ask
      </button>
    </form>
  );
}
