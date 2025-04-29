"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const phrases = [
  "A New Era of Crypto",
  "Anime x Blockchain",
  "MiraVerse Token is Here",
];

const HeroSection = () => {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [subIndex, setSubIndex] = useState(0);
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    if (subIndex === phrases[index].length) {
      setTimeout(() => setIndex((prev) => (prev + 1) % phrases.length), 2000);
      setSubIndex(0);
    } else {
      const timeout = setTimeout(() => {
        setText(phrases[index].substring(0, subIndex + 1));
        setSubIndex((prev) => prev + 1);
      }, 120);
      return () => clearTimeout(timeout);
    }
  }, [subIndex, index]);

  useEffect(() => {
    const timeout2 = setInterval(() => {
      setBlink((prev) => !prev);
    }, 500);
    return () => clearInterval(timeout2);
  }, []);

  return (
    <section
      className="relative w-full min-h-screen flex flex-col justify-center items-center bg-primary overflow-hidden p-6"
      style={{
        backgroundImage: `url('/images/background-stars.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="z-10 text-center"
      >
        <h1 className="text-4xl sm:text-6xl font-extrabold text-black dark:text-white mb-6 tracking-wide">
          {text}
          <span className={`${blink ? "opacity-100" : "opacity-0"} ml-1`}>|</span>
        </h1>
        <p className="max-w-xl mx-auto text-lg text-black dark:text-white mb-8">
          Fusion of Crypto, Anime, and AI - Designed for the Next Generation of Traders.
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          <Link href="/community">
            <button className="px-8 py-3 bg-accent text-white rounded-full font-bold shadow-md hover:shadow-lg hover:scale-105 transition">
              Join Community
            </button>
          </Link>
          <a
            href="https://pump.fun/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="px-8 py-3 bg-black text-white rounded-full font-bold shadow-md hover:shadow-lg hover:scale-105 transition">
              Buy Now
            </button>
          </a>
        </div>
      </motion.div>

      <div className="absolute inset-0 bg-black/20 backdrop-blur-sm"></div>
    </section>
  );
};

export default HeroSection;
