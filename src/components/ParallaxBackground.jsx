import { useEffect, useState } from "react";

const ParallaxBackground = () => {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffsetY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 w-full h-full -z-10 bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/background-stars.jpg')",
        backgroundPositionY: `${offsetY * 0.5}px`,
      }}
    ></div>
  );
};

export default ParallaxBackground;
