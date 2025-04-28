import { Doughnut } from "react-chartjs-2";
import { motion } from "framer-motion";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { tokenomicsData } from "@/data/tokenomicsData";

ChartJS.register(ArcElement, Tooltip, Legend);

const Tokenomics = () => {
  const data = {
    labels: tokenomicsData.map((item) => item.label),
    datasets: [
      {
        data: tokenomicsData.map((item) => item.percentage),
        backgroundColor: tokenomicsData.map((item) => item.color),
        borderWidth: 1,
      },
    ],
  };

  return (
    <section id="tokenomics" className="py-20 bg-primary text-black">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl md:text-5xl font-heading text-center mb-12"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Tokenomics
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            className="w-full max-w-md mx-auto"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <Doughnut data={data} />
          </motion.div>

          <div className="space-y-6">
            {tokenomicsData.map((item, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg p-4 shadow-md"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <h3 className="text-lg font-bold mb-1">{item.label}</h3>
                <p className="text-gray-700">{item.percentage}%</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tokenomics;
