import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

const Button = ({
  children,
  className = "",
  variant = "primary",
  icon = false,
  onClick,
  href,
  target = "_blank",
  rel = "noopener noreferrer",
}) => {
  const baseClasses =
    "px-6 py-3 rounded-lg font-medium transition-all duration-300 inline-flex items-center justify-center";

  const variantClasses = {
    primary:
      "bg-gradient-to-r from-neon-blue to-neon-purple text-white hover:shadow-lg hover:shadow-neon-blue/25",
    secondary:
      "border border-neon-blue text-neon-blue hover:bg-neon-blue hover:text-dark-bg",
    outline: "border border-white text-white hover:bg-white hover:text-dark-bg",
  };

  const buttonContent = (
    <>
      {children}
      {icon && <FaArrowRight className="ml-2" />}
    </>
  );

  const button = (
    <motion.button
      className={`${baseClasses} ${variantClasses[variant]} ${className} btn-glow`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
    >
      {buttonContent}
    </motion.button>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        target={target}
        rel={rel}
        className={`${baseClasses} ${variantClasses[variant]} ${className} btn-glow`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {buttonContent}
      </motion.a>
    );
  }

  return button;
};

export default Button;
