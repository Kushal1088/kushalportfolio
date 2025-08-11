import React from "react";
import { motion } from "framer-motion";
import {  FaCertificate, FaGraduationCap } from "react-icons/fa";
import Education from "./Education";


const internship = {
  title: "Full Stack Developer Intern – Techpile Private Limited",
  date: "June 2025 - August 2025",
  desc: [
    "Completed intensive training in full-stack web development using HTML, CSS, JavaScript, and Node.js.",
"Developed dynamic web pages with responsive design and interactive features.",
"Enhanced skills in server-side scripting, database integration, and API development.",
"Performed debugging and testing using Chrome DevTools and Postman.",
"Worked collaboratively on mini-projects to simulate professional development practices.",
],

  link: "/images/techpile.jpg",
};

const certifications = [

  {
    name: "Zidio – AI Tools Internship",
    img: "/images/zidio.jpg",
    link: "/images/zidio.jpg"
  },
  {
    name: "Internship / Summer Training",
    img: "/images/techpile.jpg",
    link:  "/images/techpile.jpg"
  },
  {
    name: "SoftPro – Python Workshop",
    img: "/images/softpro.jpg",
    link: "/images/softpro.jpg"
  },
  {
   name: "All India Aincet aptitude ",
    img: "/images/aincet.jpg",
     link: "/images/aincet.jpg"
  },
   {
   name: "PW wireframe & prototype",
    img: "/images/pw.png",
     link: "/images/pw.png"
  },
];

const Button = ({ text, link }) => (
  <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block mt-4 px-6 py-2 bg-cyan-500 text-black rounded-lg shadow-md hover:bg-cyan-400 transition-all duration-300"
  >
    {text}
  </a>
);

const Experience = () => {
  return (
    <section id="experience" className="text-white bg-[#03051b]">
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-center pt-12 animated-heading"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Professional Background
      </motion.h2>
      <div className="w-20 h-[2px] bg-cyan-400 mx-auto mt-3 mb-7"></div>

      {/* Internship */}
      <div className="min-h-[80vh] flex flex-col justify-center px-[6vw]">
        <motion.div
          className="flex flex-col md:flex-row items-center gap-8 backdrop-blur-md border border-gray-800 rounded-xl p-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src="/images/techpile.jpg"
              alt="Internship Certificate"
              className="rounded-lg shadow-lg w-full max-w-md object-cover project-image-card"
            />
          </div>
          <div className="w-full md:w-1/2">
            <div className="flex items-center gap-3 mb-2">
             
              <h3 className="text-3xl  text-cyan-300 font-medium">  {internship.title}</h3>
            </div>
            <p className="text-gray-400 text-lg mb-4">{internship.date}</p>
            {internship.desc.map((line, i) => (
              <p key={i} className="text-gray-300">• {line} <br/> </p>
              
            ))}
            <Button   text="View Certificate" link={internship.link} />
          </div>
        </motion.div>
      </div>

      {/* Certifications */}
      <div className="min-h-[60vh] flex flex-col justify-center px-[6vw] mt-12">
        <motion.div
         
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-5 mb-6 ">
            <FaCertificate className="text-yellow-500" size={28} />
            <h3 className="text-3xl font-bold text-cyan-300 ">Certifications</h3>
          </div>
          <div className="flex gap-6 overflow-x-auto pb-4 ">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="min-w-[250px]  p-4 rounded-xl shadow-lg hover:scale-105 transition-transform flex-shrink-0 mx-auto "
              >
                <img
                  src={cert.img}
                  alt={cert.name}
                  className="rounded-md h-40 w-full object-contain"
                />
                <p className="text-lg font-medium mt-4">{cert.name}</p>
                <Button text="View Certificate" link={cert.link} />
              </div>
              
            ))}
          </div>
        </motion.div>
      </div>



      <Education/>
   

    </section>
  );
};

export default Experience;

