import { useEffect } from "react";

interface LoggerProps {
  event: string;
  data?: Record<string, unknown>;
}

const Logger = ({ event, data }: LoggerProps) => {
  useEffect(() => {
    // Minimal client-side logger placeholder. Replace with real analytics as needed.
    try {
      const payload = { event, data, ts: new Date().toISOString() };
      // eslint-disable-next-line no-console
      console.info("log", payload);
    } catch {
      // ignore
    }
  }, [event, data]);

  return null;
};

export default Logger;


