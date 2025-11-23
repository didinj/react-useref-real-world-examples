import { useRef } from "react";

export default function ScrollExample() {
  const sectionRef = useRef(null);

  const scrollToSection = () => {
    sectionRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <button onClick={scrollToSection}>Scroll to Section</button>
      <div style={{ height: "1000px" }}></div>
      <div ref={sectionRef}>
        <h2>Target Section</h2>
      </div>
    </>
  );
}