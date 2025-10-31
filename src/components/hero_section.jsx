import img from "../assets/images/harvest_app_mockup1.png";
import { motion } from "framer-motion";

function HeroSection() {
  return (
    <section
      id="home"
      className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10 px-6 md:px-10 lg:px-20 py-24 bg-gradient-to-b from-green-50/60 to-white"
    >
      {/* Left Content */}
      <motion.div
        className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-2xl"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
          <span className="text-green-800">Never Miss</span> a Follow-Up
        </h1>

        <p className="mt-5 text-lg text-gray-700 leading-relaxed">
          The Harvest App helps churches follow up with first-timers and new converts — 
          even when you're offline.
        </p>

        <div className="mt-8">
          <a href="#download">
            <button className="py-3 px-10 text-lg font-semibold rounded-lg bg-green-700 text-white shadow-md hover:bg-green-800 hover:shadow-lg transition-all duration-300">
              Download Now
            </button>
          </a>
        </div>
      </motion.div>

      {/* Right Image */}
      <motion.div
        className="w-full lg:w-[40%] flex justify-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <img
          src={img}
          alt="Harvest App mockup"
          className="w-[80%] md:w-[70%] lg:w-full drop-shadow-2xl transform hover:scale-105 transition-transform duration-500"
        />
      </motion.div>
    </section>
  );
}

export default HeroSection;
