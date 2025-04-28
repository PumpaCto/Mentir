import { motion } from "framer-motion";
import { partnersData } from "@/data/partnersData";
import Image from "next/image";

const PartnerSection = () => {
  return (
    <section id="partners" className="py-20 bg-secondary text-white relative">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl md:text-5xl font-heading text-center text-primary mb-12"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Our Partners
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 place-items-center">
          {partnersData.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="hover:scale-110 transition-transform"
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                width={120}
                height={120}
                className="rounded-xl bg-white p-2"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnerSection;
