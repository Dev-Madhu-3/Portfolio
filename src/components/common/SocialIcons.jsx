import React from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";

const SocialIcons = ({ className = "", size = "text-2xl" }) => {
  const socialLinks = [
    {
      name: "GitHub",
      icon: <FaGithub />,
      href: "https://github.com/madhuuppala",
      color: "hover:text-gray-400",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin />,
      href: "https://linkedin.com/in/madhuuppala",
      color: "hover:text-blue-400",
    },
    {
      name: "Twitter",
      icon: <FaTwitter />,
      href: "https://twitter.com/madhuuppala",
      color: "hover:text-sky-400",
    },
    {
      name: "Email",
      icon: <FaEnvelope />,
      href: "mailto:mr.madhu.uppala@gmail.com",
      color: "hover:text-red-400",
    },
    {
      name: "Phone",
      icon: <FaPhone />,
      href: "tel:9989857197",
      color: "hover:text-green-400",
    },
  ];

  return (
    <div className={`flex space-x-4 ${className}`}>
      {socialLinks.map((link, index) => (
        <motion.a
          key={link.name}
          href={link.href}
          className={`${size} text-gray-400 transition-colors duration-300 ${link.color}`}
          target={
            link.name === "Email" || link.name === "Phone" ? "_self" : "_blank"
          }
          rel="noopener noreferrer"
          whileHover={{ y: -3 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 * index }}
        >
          {link.icon}
        </motion.a>
      ))}
    </div>
  );
};

export default SocialIcons;
