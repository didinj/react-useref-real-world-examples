import { useRef } from "react";

export default function BasicRefExample() {
  const countRef = useRef(0);

  const increment = () => {
    countRef.current++;
    console.log("Current count:", countRef.current);
  };

  return (
    <button onClick={increment}>
      Click to increase (check console)
    </button>
  );
}