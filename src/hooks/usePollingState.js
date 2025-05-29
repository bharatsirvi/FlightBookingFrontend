import { useState, useCallback } from "react";

export default function usePollingState({ fetcher }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const poll = useCallback(
    async (...args) => {
      setLoading(true);
      setError("");
      setData(null);

      try {
        const result = await fetcher(...args);
        if (result) {
          setData(result);
          setLoading(false);
        } else {
          setLoading(false);
          setError("No data received");
        }
      } catch (err) {
        setLoading(false);
        setError("Please try again with a different query with more clear context.");
      }
    },
    [fetcher]
  );

  const cancel = useCallback(() => {
    setLoading(false);
  }, []);

  return { data, loading, error, poll, cancel };
}
