import { motion } from "framer-motion";
import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Şu anlık formu sadece console log yapıyoruz
    console.log(formData);
    alert("Thanks for contacting us!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 bg-primary text-black">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl md:text-5xl font-heading text-center mb-12"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Contact Us
        </motion.h2>

        <form
          onSubmit={handleSubmit}
          className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg space-y-6"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <label className="block text-gray-700 font-semibold mb-2">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-primary"
              placeholder="Your Name"
            />
          </motion
