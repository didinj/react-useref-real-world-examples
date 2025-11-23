import { useEffect, useRef } from "react";

export default function AutoFocusInput() {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return <input ref={inputRef} type="text" placeholder="This input will auto-focus" />;
}