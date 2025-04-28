import { motion } from "framer-motion";
import { blogData } from "@/data/blogData";
import Link from "next/link";

const BlogPreview = () => {
  return (
    <section id="blog" className="py-20 bg-secondary text-white">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl md:text-5xl font-heading text-center text-primary mb-12"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Latest News
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {blogData.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:scale-105 transition"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-black mb-2">{post.title}</h3>
                <p className="text-gray-700 text-sm mb-4">{post.excerpt}</p>
                <Link href={`/blog/${post.slug}`}>
                  <span className="text-primary font-semibold hover:underline">
                    Read More →
                  </span>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;
