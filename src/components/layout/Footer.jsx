import React from "react";
import { motion } from "framer-motion";
import SocialIcons from "../common/SocialIcons";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-dark-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-4 md:mb-0"
          >
            <p className="text-gray-400">
              &copy; {currentYear} Madhu Uppala. All rights reserved.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <SocialIcons />
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
