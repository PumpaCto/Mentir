import { useEffect, useState } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const mouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  return (
    <div
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
      className="fixed top-0 left-0 w-6 h-6 bg-primary rounded-full pointer-events-none z-[9999] opacity-70 transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-75"
    ></div>
  );
};

export default CustomCursor;
