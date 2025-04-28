import { motion } from "framer-motion";
import { roadmapData } from "@/data/roadmapData";

const Roadmap = () => {
  return (
    <section id="roadmap" className="py-20 bg-secondary text-white relative">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl md:text-5xl font-heading text-center text-primary mb-12"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Roadmap
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-10">
          {roadmapData.map((item, index) => (
            <motion.div
              key={index}
              className="border-l-4 border-primary pl-6 relative"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="absolute -left-3 top-2 w-6 h-6 bg-primary rounded-full"></div>
              <h3 className="text-xl font-bold mb-2">{item.quarter}</h3>
              <p className="text-gray-300">{item.details}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
