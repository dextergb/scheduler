import { useState } from "react";

export default function useVisualMode(defaultMode) {
  const [mode, setMode] = useState(defaultMode);
  const [history, setHistory] = useState([defaultMode]);

  function transition(newMode, replace = false) {
    setMode(newMode);
    const updatedHistory = [...history];
    if (replace) {
      updatedHistory.pop();
    }
    updatedHistory.push(newMode);
    setHistory(updatedHistory);
  }
  function back() {
    if (history.length > 1) {
      const updatedHistory = [...history];
      updatedHistory.pop();
      setHistory(updatedHistory);
      setMode(updatedHistory[updatedHistory.length - 1]);
    }
  }

  return { mode, transition, back };
}
