import BlogComingSoon from "./blog_coming_soon";
import NavBar from "../components/navbar";
import Footer from "../components/footer";
import { motion } from "framer-motion";

function Blogs() {
  return (
    <div id="Blogs" className="min-h-screen flex flex-col">
      <NavBar />

      {/* Hero Section */}
      <section className="flex-1 flex flex-col items-center justify-center text-center px-6 md:px-12 py-24 bg-gradient-to-b from-green-50/60 to-white">
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Our Blog is <span className="text-green-800">Coming Soon</span> ✍🏽
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-gray-600 max-w-2xl leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          We’re preparing insightful articles, practical resources, and success stories
          to help churches and believers reach more people — and follow up with love and consistency.
        </motion.p>

        <motion.div
          className="mt-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.5 }}
        >
          <button
            disabled
            className="py-3 px-10 bg-green-700 text-white text-lg font-semibold rounded-md opacity-80 cursor-not-allowed"
          >
            Stay Tuned
          </button>
        </motion.div>
      </section>

      {/* Optional Illustration */}
      <BlogComingSoon />

      <Footer />
    </div>
  );
}

export default Blogs;
