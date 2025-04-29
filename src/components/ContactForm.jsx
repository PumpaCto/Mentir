import { motion } from "framer-motion";

const ContactForm = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-secondary p-10">
      <h1 className="text-5xl font-bold text-white mb-6">Contact Us</h1>
      <motion.form
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-lg bg-white p-8 rounded-lg shadow-lg space-y-6"
      >
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-primary"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-primary"
        />
        <textarea
          placeholder="Your Message"
          className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-primary"
          rows="5"
        ></textarea>
        <button
          type="submit"
          className="w-full py-3 bg-primary text-black font-bold rounded hover:scale-105 transition"
        >
          Send Message
        </button>
      </motion.form>
    </section>
  );
};

export default ContactForm;
