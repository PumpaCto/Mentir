import Link from "next/link";
import { useState } from "react";
import { FaTwitter, FaTelegramPlane } from "react-icons/fa";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-black/60 backdrop-blur-md text-white shadow-lg">
      <div className="container mx-auto flex justify-between items-center p-4">
        <Link href="/">
          <h1 className="text-2xl font-heading text-primary cursor-pointer">MiraVerse</h1>
        </Link>
        <div className="flex items-center gap-4">
          <nav className="hidden md:flex space-x-6 text-sm">
            <Link href="#roadmap">Roadmap</Link>
            <Link href="#tokenomics">Tokenomics</Link>
            <Link href="#nft">NFTs</Link>
            <Link href="#community">Community</Link>
            <Link href="#contact">Contact</Link>
          </nav>
          <ThemeToggle />
          <a
            href="https://x.com/MiraVersaToken?s=09"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:text-primary"
          >
            <FaTwitter size={20} />
          </a>
          <a
            href="https://t.me/MiraVerseToken"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:text-primary"
          >
            <FaTelegramPlane size={20} />
          </a>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex flex-col gap-1"
          >
            <div className="w-6 h-0.5 bg-white"></div>
            <div className="w-6 h-0.5 bg-white"></div>
            <div className="w-6 h-0.5 bg-white"></div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center bg-black py-4 space-y-4">
          <Link href="#roadmap">Roadmap</Link>
          <Link href="#tokenomics">Tokenomics</Link>
          <Link href="#nft">NFTs</Link>
          <Link href="#community">Community</Link>
          <Link href="#contact">Contact</Link>
        </div>
      )}
    </header>
  );
};

export default Header;
