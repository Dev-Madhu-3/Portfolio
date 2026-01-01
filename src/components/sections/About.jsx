import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaDownload, FaCode, FaLaptopCode, FaRocket } from "react-icons/fa";
import Button from "../common/Button";
import Card from "../common/Card";
import { skillsData } from "../../data/skillsData";

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const featuredSkills = skillsData.slice(0, 8);

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* About Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <motion.p
              variants={itemVariants}
              className="text-gray-300 mb-6 text-lg"
            >
              Hi! I'm Madhu Uppala, a passionate Fullstack Web Developer with
              over 5 years of experience in creating dynamic, responsive, and
              user-friendly web applications. I specialize in React.js and
              Node.js ecosystems, with a strong focus on performance,
              scalability, and clean code.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-gray-300 mb-6 text-lg"
            >
              My journey in web development started with a curiosity about how
              websites work, and it has evolved into a career focused on
              building innovative digital solutions. I love tackling complex
              problems and turning ideas into reality through code.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-gray-300 mb-8 text-lg"
            >
              When I'm not coding, you can find me exploring new technologies,
              contributing to open-source projects, or sharing my knowledge
              through technical writing and mentoring.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button variant="primary" icon>
                Download Resume
              </Button>
              <Button variant="secondary" href="#contact">
                Hire Me
              </Button>
            </motion.div>
          </motion.div>

          {/* Skills Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {featuredSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="glass rounded-lg p-4 flex flex-col items-center justify-center skill-card"
              >
                <div className="text-3xl mb-2">{skill.icon}</div>
                <p className="text-sm font-medium text-center">{skill.name}</p>
                <div className="w-full bg-gray-700 rounded-full h-1.5 mt-2">
                  <div
                    className={`h-1.5 rounded-full bg-gradient-to-r ${skill.color}`}
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Card className="text-center">
            <FaCode className="text-4xl text-neon-blue mx-auto mb-4" />
            <h3 className="text-3xl font-bold mb-2">50+</h3>
            <p className="text-gray-400">Projects Completed</p>
          </Card>
          <Card className="text-center">
            <FaLaptopCode className="text-4xl text-neon-purple mx-auto mb-4" />
            <h3 className="text-3xl font-bold mb-2">5+</h3>
            <p className="text-gray-400">Years Experience</p>
          </Card>
          <Card className="text-center">
            <FaRocket className="text-4xl text-neon-pink mx-auto mb-4" />
            <h3 className="text-3xl font-bold mb-2">30+</h3>
            <p className="text-gray-400">Happy Clients</p>
          </Card>
          <Card className="text-center">
            <FaDownload className="text-4xl text-green-400 mx-auto mb-4" />
            <h3 className="text-3xl font-bold mb-2">1000+</h3>
            <p className="text-gray-400">Code Commits</p>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
