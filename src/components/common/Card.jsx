import React from "react";
import { motion } from "framer-motion";

const Card = ({
  children,
  className = "",
  hover = true,
  glow = false,
  delay = 0,
  ...props
}) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: delay,
      },
    },
  };

  return (
    <motion.div
      className={`glass rounded-xl p-6 ${glow ? "neon-glow" : ""} ${
        hover
          ? "hover:transform hover:translate-y-[-5px] transition-all duration-300"
          : ""
      } ${className}`}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default Card;
