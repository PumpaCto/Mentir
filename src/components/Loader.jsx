import Image from "next/image";
import { motion } from "framer-motion";

const Loader = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="flex flex-col items-center space-y-4"
      >
        <Image src="/images/logo.png" alt="MiraVerse Logo" width={150} height={150} />
        <motion.h1
          className="text-2xl font-heading text-primary animate-float"
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          transition={{ repeat: Infinity, duration: 2, repeatType: "reverse" }}
        >
          Loading MiraVerse...
        </motion.h1>
      </motion.div>
    </div>
  );
};

export default Loader;
