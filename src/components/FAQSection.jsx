import { useState } from "react";
import { motion } from "framer-motion";
import { faqData } from "@/data/faqData";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <section id="faq" className="py-20 bg-primary text-black">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl md:text-5xl font-heading text-center mb-12"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Frequently Asked Questions
        </motion.h2>

        <div className="max-w-3xl mx-auto space-y-6">
          {faqData.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div
                onClick={() => toggleFAQ(index)}
                className="bg-white rounded-lg p-6 cursor-pointer shadow-md hover:scale-105 transition"
              >
                <h3 className="text-lg font-bold">{faq.question}</h3>
                {openIndex === index && (
                  <p className="text-gray-700 mt-2">{faq.answer}</p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
