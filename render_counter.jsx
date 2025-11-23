import { useEffect, useRef, useState } from "react";

export default function RenderCounter() {
  const [value, setValue] = useState("");
  const renderCount = useRef(1);

  useEffect(() => {
    renderCount.current++;
  });

  return (
    <div>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Type something"
      />
      <p>Renders: {renderCount.current}</p>
    </div>
  );
}