import { motion } from "framer-motion";

const Loader = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 1.5, delay: 2 }}
      className="fixed inset-0 bg-primary flex items-center justify-center z-50"
    >
      <motion.div
        className="relative w-24 h-24 rounded-full border-4 border-white border-t-transparent animate-spin"
        animate={{
          rotate: 360,
        }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 1.2,
        }}
      />
      <div className="absolute text-white text-xl font-bold mt-32">
        Loading MiraVerseToken...
      </div>
    </motion.div>
  );
};

export default Loader;
