import { motion } from "framer-motion";
import { FaTwitter, FaTelegramPlane } from "react-icons/fa";
import { statsData } from "@/data/statsData";

const CommunitySection = () => {
  return (
    <section id="community" className="py-20 bg-primary text-black relative">
      <div className="container mx-auto px-4 text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-heading text-center mb-12"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Join Our Community
        </motion.h2>

        <div className="flex justify-center gap-6 mb-12">
          <a
            href="https://x.com/MiraVersaToken?s=09"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-accent p-4 rounded-full hover:scale-110 transition"
          >
            <FaTwitter size={30} />
          </a>
          <a
            href="https://t.me/MiraVerseToken"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-accent p-4 rounded-full hover:scale-110 transition"
          >
            <FaTelegramPlane size={30} />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {statsData.map((stat, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg p-6 shadow-md"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <h3 className="text-4xl font-bold text-primary">{stat.number}+</h3>
              <p className="mt-2 text-gray-700">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
