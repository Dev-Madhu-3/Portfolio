import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experienceData } from "../../data/experienceData";

const Experience = () => {
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

  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            My <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto rounded-full"></div>
        </motion.div>

        <VerticalTimeline lineColor="#2a2a3a">
          {experienceData.map((experience, index) => (
            <VerticalTimelineElement
              key={experience.id}
              contentStyle={{
                background: "rgba(21, 21, 32, 0.8)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                borderRadius: "0.75rem",
                color: "#ffffff",
              }}
              contentArrowStyle={{
                borderRight: "7px solid #2a2a3a",
              }}
              date={experience.date}
              dateClassName="text-neon-blue font-semibold"
              iconStyle={{
                background: "linear-gradient(135deg, #00d9ff, #9d00ff)",
                color: "#ffffff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              icon={
                <div className="text-xl font-bold">
                  {experience.company.charAt(0)}
                </div>
              }
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <h3 className="text-xl font-bold">{experience.title}</h3>
                <h4 className="text-lg text-neon-blue mb-2">
                  {experience.company}
                </h4>
                <p className="text-sm text-gray-400 mb-4">
                  {experience.location}
                </p>
                <p className="text-gray-300 mb-4">{experience.description}</p>
                <div className="flex flex-wrap gap-2">
                  {experience.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs px-2 py-1 bg-dark-border rounded-full text-gray-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default Experience;
