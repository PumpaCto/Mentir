import { FaTwitter, FaTelegramPlane } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-secondary text-white py-10 border-t border-primary">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        
        {/* Left Side */}
        <div className="text-center md:text-left">
          <h3 className="text-xl font-heading text-primary">MiraVerse Token</h3>
          <p className="text-gray-400 text-sm mt-2">
            © 2025 MiraVerse. All rights reserved.
          </p>
        </div>

        {/* Middle Navigation */}
        <div className="flex flex-col md:flex-row gap-4 text-sm text-gray-400">
          <Link href="#roadmap">
            <span className="hover:text-primary cursor-pointer">Roadmap</span>
          </Link>
          <Link href="#tokenomics">
            <span className="hover:text-primary cursor-pointer">Tokenomics</span>
          </Link>
          <Link href="#nft">
            <span className="hover:text-primary cursor-pointer">NFTs</span>
          </Link>
          <Link href="#community">
            <span className="hover:text-primary cursor-pointer">Community</span>
          </Link>
          <Link href="#contact">
            <span className="hover:text-primary cursor-pointer">Contact</span>
          </Link>
        </div>

        {/* Right Side */}
        <div className="flex gap-4">
          <a
            href="https://x.com/MiraVersaToken?s=09"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:text-primary"
          >
            <FaTwitter size={24} />
          </a>
          <a
            href="https://t.me/MiraVerseToken"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:text-primary"
          >
            <FaTelegramPlane size={24} />
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
