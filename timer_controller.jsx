import { useRef, useState } from "react";

export default function TimerController() {
  const timerRef = useRef(null);
  const [count, setCount] = useState(0);

  const startTimer = () => {
    if (timerRef.current) return;
    timerRef.current = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);
  };

  const stopTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = null;
  };

  return (
    <div>
      <h3>Count: {count}</h3>
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
    </div>
  );
}