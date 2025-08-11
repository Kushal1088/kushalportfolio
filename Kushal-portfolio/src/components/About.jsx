

import { motion } from "framer-motion";
import profile from "../assets/Aboutm.png"; // Use rectangle image

function About() {
  return (
    <section
      id="about"
      className="bg-hero-gradient text-white min-h-screen flex items-center px-6 py-16 scroll-mt-20 "
    >
      <div className="w-full max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        {/* Left Side - Text */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <div className="text-center md:text-left">
  <h2 className="text-5xl sm:text-6xl font-bold text-cyan-400 animate-glow-heading">
    About Me
  </h2>

  {/* Centered glowing line just below heading */}
  <div className="mx-auto md:mx-0 mt-2 h-[3px] w-24 bg-cyan-400 rounded-full animate-pulse-left-glow"></div>
</div>


          <p className="text-gray-300 text-lg sm:text-xl leading-relaxed">
            I'm <span className="text-white font-semibold">Kushal Pandey</span>, a dedicated 
            <span className="text-cyan-300 font-medium"> Full Stack MERN Developer </span>  and part <br/> engineer, part digital architect,   tech alchemist.I craft scalable, lightning-fast web experiences powered by the MERN stack and enhanced with a spark of AI wizardry. As a final-year B.Tech CSE student, I see every project as a canvas where code meets creativity — blending logic, design, and innovation into solutions that feel as good as they function. My mission? Build the kind of applications people can’t imagine living without<br/>

 <span className="text-cyan-400 font-medium"> A Glimpse into My Codecraft:</span>
<br/>

 <span className="text-white font-semibold">Quirex –</span> An intelligent query engine that transforms messy data into clear, conversational answers, making information retrieval fast, precise, and effortless.<br/>

<span className="text-white font-semibold"> Shortner –</span>A sleek, privacy-first URL shortener with custom aliases, detailed analytics, and secure link-sharing for a clean, professional web presence. <br/>

<span className="text-white font-semibold">Realtime Weather API –</span> A lightning-fast API delivering live weather updates, forecasts, and push notifications, perfect for dashboards and location-based apps.<br/>
          </p>
          <p className="text-gray-400 text-base sm:text-lg">
         Eager to join trailblazing, high-energy teams where code meets creativity — turning bold ideas into impactful products while evolving into a powerhouse full-stack engineer.
          </p>
        </motion.div>

       {/* Right Side - Animated Image */}
       <motion.div
  initial={{ opacity: 0, x: 60 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
  className="flex justify-center md:justify-end"
>
  <div className="relative group w-full sm:w-[340px] md:w-[400px] lg:w-[480px] transition-transform duration-300">
    <img
      src={profile}
      alt="Kushal Pandey"
      className="w-full rounded-4xl h-auto object-cover transform 
      group-hover:-translate-y-2 
      group-hover:-translate-x-3 
      group-hover:scale-105 
      transition-transform duration-500 ease-in-out"
    />
  </div>
      </motion.div>

       
       
      </div>
    </section>
  );
}

export default About;
