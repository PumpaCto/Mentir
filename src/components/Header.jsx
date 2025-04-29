"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import { motion } from "framer-motion";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 w-full z-50 transition-all ${
        scrolled ? "bg-white/80 dark:bg-black/80 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <Link href="/">
            <span className="text-2xl font-extrabold text-primary cursor-pointer tracking-wider">
              MiraVerse
            </span>
          </Link>
        </motion.div>

        <nav className="flex items-center gap-6 text-lg font-medium text-black dark:text-white">
          {[
            { name: "About", href: "/about" },
            { name: "Roadmap", href: "/roadmap" },
            { name: "NFT", href: "/nft" },
            { name: "Community", href: "/community" },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
            >
              <Link href={item.href}>
                <span className="cursor-pointer hover:text-accent transition">{item.name}</span>
              </Link>
            </motion.div>
          ))}
          <ThemeToggle />
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;
