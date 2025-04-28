import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-center bg-stars bg-cover bg-center px-4">
      <motion.h1
        className="text-5xl md:text-7xl font-heading text-primary mb-6 animate-fadeIn"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Welcome to MiraVerse
      </motion.h1>
      <motion.p
        className="text-lg md:text-2xl mb-8 max-w-2xl text-white animate-fadeIn"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        Crypto meets Anime, AI shapes the future.  
        Join us before the universe explodes!
      </motion.p>

      <div className="flex flex-col md:flex-row gap-4">
        <Link href="#community">
          <button className="px-8 py-3 bg-primary text-black rounded-full font-bold hover:scale-105 transition">
            Join Community
          </button>
        </Link>
        <a
          href="https://pump.fun/"  // Token link çıkınca burayı güncelleyeceğiz!
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="px-8 py-3 bg-accent text-white rounded-full font-bold hover:scale-105 transition">
            Buy Now
          </button>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
