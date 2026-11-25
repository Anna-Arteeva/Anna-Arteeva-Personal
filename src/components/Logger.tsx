import { useEffect } from "react";

interface LoggerProps {
  event: string;
  data?: Record<string, unknown>;
}

// Minimal client-side logger placeholder. Replace with real analytics as needed.
const Logger = ({ event, data }: LoggerProps) => {
  // Serialise so a new object literal on each render doesn't re-log the event.
  const payload = JSON.stringify(data ?? {});

  useEffect(() => {
    console.info("log", { event, data: JSON.parse(payload), ts: new Date().toISOString() });
  }, [event, payload]);

  return null;
};

export default Logger;
