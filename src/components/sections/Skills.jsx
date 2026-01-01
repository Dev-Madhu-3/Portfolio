import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { skillsData } from "../../data/skillsData";
import Card from "../common/Card";

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [filter, setFilter] = useState("Frontend");

  const categories = ["All", "Frontend", "Backend", "Database", "Other"];

  const filteredSkills =
    filter === "All"
      ? skillsData
      : skillsData.filter((skill) => skill.category === filter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1,
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
      },
    },
  };

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto rounded-full"></div>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex justify-center mb-12 flex-wrap gap-3"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                filter === category
                  ? "bg-gradient-to-r from-neon-blue to-neon-purple text-white"
                  : "glass text-gray-300 hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              whileHover={{ scale: 1.03 }}
            >
              <Card className="h-full">
                <div className="flex items-center mb-4">
                  <div className="text-4xl mr-4">{skill.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold">{skill.name}</h3>
                    <p className="text-sm text-gray-400">{skill.category}</p>
                  </div>
                </div>
                <div className="mb-2">
                  <div className="flex justify-between mb-1">
                    <span className="text-sm text-gray-300">Proficiency</span>
                    <span className="text-sm text-gray-300">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2.5">
                    <motion.div
                      className={`h-2.5 rounded-full bg-gradient-to-r ${skill.color}`}
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${skill.level}%` } : {}}
                      transition={{ duration: 1, delay: 0.2 + index * 0.1 }}
                    ></motion.div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
