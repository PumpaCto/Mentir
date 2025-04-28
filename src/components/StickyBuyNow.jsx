import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const StickyBuyNow = () => {
  const showButton = useScrollAnimation(200);

  if (!showButton) return null;

  return (
    <a
      href="https://pump.fun/" // Token çıkınca doğru link verilecek
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-accent text-white py-3 px-6 rounded-full font-bold shadow-lg hover:scale-110 hover:shadow-2xl transition-all duration-300 z-50"
    >
      Buy Now
    </a>
  );
};

export default StickyBuyNow;
