import { motion } from "framer-motion";
import { Mail, MessageCircle } from "lucide-react";

function BlogComingSoon() {
  return (
    <section className="relative bg-gradient-to-b from-green-50 via-white to-green-100/40 rounded-3xl shadow-lg border border-green-100 p-10 md:p-16 mx-5 md:mx-auto mt-20 mb-20 max-w-5xl overflow-hidden">
      
      {/* Background Accent */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(16,185,129,0.05),_transparent_70%)]" />

      {/* Content */}
      <motion.div
        className="relative z-10 text-center max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-3">
          ✍🏽 Want to Contribute?
        </h2>
        <p className="text-lg text-neutral-600 leading-relaxed">
          Have a story, testimony, or insight that can inspire others?  
          We’re building a platform where your voice can reach thousands.  
          Share your experiences, lessons, and revelations — and help others grow in faith.
        </p>

        <motion.hr
          className="border-green-200 my-8 w-3/4 mx-auto"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        />

        {/* Buttons */}
        <div className="flex flex-col md:flex-row justify-center gap-5 mt-6">
          <motion.a
            href="mailto:tryttechglobal@gmail.com"
            className="w-full md:w-auto"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            <button className="flex items-center justify-center gap-2 w-full md:w-auto bg-white text-green-800 border border-green-700 font-semibold text-lg rounded-xl py-3 px-10 hover:bg-green-100 hover:shadow-md transition-all duration-300">
              <Mail className="w-5 h-5" /> Email Us
            </button>
          </motion.a>

          <motion.a
            href="https://wa.me/2348166528347"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-auto"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            <button className="flex items-center justify-center gap-2 w-full md:w-auto bg-green-800 text-white font-semibold text-lg rounded-xl py-3 px-10 hover:bg-green-900 hover:shadow-lg transition-all duration-300">
              <MessageCircle className="w-5 h-5" /> Send a Message
            </button>
          </motion.a>
        </div>

        {/* Tagline */}
        <p className="text-sm text-gray-500 italic mt-6">
          Together, we can build tools that touch lives. 🌱
        </p>
      </motion.div>
    </section>
  );
}

export default BlogComingSoon;
