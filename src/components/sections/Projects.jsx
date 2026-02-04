import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { projectData } from "../../data/projectData";
import Card from "../common/Card";
import Button from "../common/Button";
import { FaGithub, FaExternalLinkAlt, FaTimes } from "react-icons/fa";

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [filter, setFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ["All", "Featured", "Recent"];

  const filteredProjects =
    filter === "All"
      ? projectData
      : filter === "Featured"
        ? projectData.filter((project) => project.featured)
        : projectData.slice(0, 3);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.15,
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

  const openProjectModal = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = "hidden";
  };

  const closeProjectModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = "auto";
  };

  return (
    <section id="projects" className="xl:p-20 py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            My <span className="gradient-text">Projects</span>
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

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              onClick={() => openProjectModal(project)}
              className="cursor-pointer"
            >
              <Card className="h-full overflow-hidden project-card">
                <div className="relative h-48 mb-4 overflow-hidden rounded-lg">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-bg to-transparent opacity-70"></div>
                  {project.featured && (
                    <div className="absolute top-4 right-4 bg-neon-purple text-white text-xs px-2 py-1 rounded-full">
                      Featured
                    </div>
                  )}
                </div>
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2 py-1 bg-dark-border rounded-full text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="text-xs px-2 py-1 bg-dark-border rounded-full text-gray-300">
                      +{project.tech.length - 3} more
                    </span>
                  )}
                </div>
                <div className="flex justify-between">
                  <Button variant="secondary" className="text-sm px-4 py-2">
                    View Details
                  </Button>
                  <div className="flex gap-2">
                    {project.private || (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors duration-300"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <FaGithub size={20} />
                      </a>
                    )}
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors duration-300"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <FaExternalLinkAlt size={20} />
                    </a>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Button */}
        {filter !== "All" && (
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Button variant="outline" onClick={() => setFilter("All")}>
              View All Projects
            </Button>
          </motion.div>
        )}
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeProjectModal}
        >
          <motion.div
            className="glass rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <button
                onClick={closeProjectModal}
                className="absolute top-4 right-4 text-gray-400 hover:text-white z-10"
              >
                <FaTimes size={24} />
              </button>
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-64 object-cover rounded-t-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-bg to-transparent opacity-70 rounded-t-xl"></div>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-4">
                {selectedProject.title}
              </h3>
              <p className="text-gray-300 mb-6">
                {selectedProject.description}
              </p>
              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-2">
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-dark-border rounded-full text-sm text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex gap-4">
                <Button
                  variant="primary"
                  href={selectedProject.demo}
                  target="_blank"
                >
                  <FaExternalLinkAlt className="mr-2" />
                  Live Demo
                </Button>
                <Button
                  variant="secondary"
                  disabled={selectedProject.private}
                  className={`relative group ${
                    selectedProject.private
                      ? "opacity-50 cursor-not-allowed"
                      : "hover:bg-gray-200"
                  }`}
                  {...(!selectedProject.private && {
                    href: selectedProject.github,
                    target: "_blank",
                  })}
                >
                  <FaGithub className="mr-2" />
                  View Code
                  {/* Tooltip when disabled */}
                  {selectedProject.private && (
                    <span
                      variant="secondary"
                      className="absolute h-full margin-auto left-0
      bg-white text-black text-xs px-auto py-1 rounded 
      opacity-0 group-hover:opacity-100 transition pointer-events-none"
                    >
                      🔒 This repository is private
                    </span>
                  )}
                </Button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default Projects;
