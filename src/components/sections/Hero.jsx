import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import Button from "../common/Button";
import SocialIcons from "../common/SocialIcons";
import { FaDownload, FaArrowDown } from "react-icons/fa";

const Hero = () => {
  const [textIndex, setTextIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

    const handleNavClick = (e, id) => {
      e.preventDefault();
      const element = document.querySelector(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    };

  const roles = [
    "Fullstack Developer",
    "React Specialist",
    "Node.js Expert",
    "UI/UX Enthusiast",
    "Problem Solver",
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.6, 0.05, 0.01, 0.9],
      },
    },
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-bg via-dark-bg to-purple-900/20 z-0"></div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-neon-blue/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-neon-purple/10 rounded-full blur-3xl animate-pulse-slow"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-neon-pink/5 rounded-full blur-3xl animate-pulse-slow"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      <div className="container mx-auto px-6 z-10">
        <motion.div
          className="text-center"
          variants={containerVariants}
          animate={isLoaded ? "visible" : "hidden"}
        >
          {/* Greeting */}
          <motion.div variants={itemVariants} className="mb-4">
            <p className="text-lg text-gray-400">Hello, I'm</p>
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-display font-bold mb-6"
          >
            <span className="gradient-text">Madhu Uppala</span>
          </motion.h1>

          {/* Role with Typing Animation */}
          <motion.div variants={itemVariants} className="mb-8 h-10">
            <TypeAnimation
              sequence={[
                roles[0],
                2000,
                roles[1],
                2000,
                roles[2],
                2000,
                roles[3],
                2000,
                roles[4],
                2000,
              ]}
              wrapper="div"
              speed={50}
              repeat={Infinity}
              className="text-2xl md:text-3xl text-neon-blue"
            />
          </motion.div>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="max-w-2xl mx-auto text-gray-300 mb-10 text-lg"
          >
            Passionate about creating exceptional digital experiences with
            modern web technologies. I specialize in building scalable,
            performant applications with a focus on user experience and clean
            code.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <Button
              onClick={(e) => handleNavClick(e, "#projects")}
              variant="primary"
              icon
              // href="#projects"
              // target="_self"
            >
              View My Work
            </Button>
            <Button
              onClick={(e) => handleNavClick(e, "#contact")}
              variant="secondary"
              // href="#contact"
              // target="_self"
            >
              Get In Touch
            </Button>
          </motion.div>

          {/* Social Icons */}
          <motion.div variants={itemVariants}>
            <SocialIcons size="text-3xl" className="justify-center" />
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
      >
        <p className="text-sm text-gray-400 mb-2">Scroll Down</p>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <FaArrowDown className="text-neon-blue text-xl mx-auto" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
