import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = ({ position }) => {
  const [cursorVariant, setCursorVariant] = useState('default');
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    const links = document.querySelectorAll('a, button');
    links.forEach((link) => {
      link.addEventListener('mouseenter', handleMouseEnter);
      link.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      links.forEach((link) => {
        link.removeEventListener('mouseenter', handleMouseEnter);
        link.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  const variants = {
    default: {
      x: position.x - 10,
      y: position.y - 10,
      scale: 1,
      backgroundColor: 'rgba(0, 217, 255, 0.1)',
      border: '2px solid #00d9ff',
    },
    hover: {
      x: position.x - 10,
      y: position.y - 10,
      scale: 2,
      backgroundColor: 'rgba(157, 0, 255, 0.1)',
      border: '2px solid #9d00ff',
    },
  };

  const followerVariants = {
    default: {
      x: position.x - 20,
      y: position.y - 20,
      scale: 1,
      opacity: 0.5,
    },
    hover: {
      x: position.x - 20,
      y: position.y - 20,
      scale: 1.5,
      opacity: 0.3,
    },
  };

  return (
    <>
      <motion.div
        className="custom-cursor"
        variants={variants}
        animate={isHovering ? 'hover' : 'default'}
        transition={{ type: 'spring', stiffness: 1000, damping: 28 }}
      />
      <motion.div
        className="cursor-follower"
        variants={followerVariants}
        animate={isHovering ? 'hover' : 'default'}
        transition={{ type: 'spring', stiffness: 800, damping: 20 }}
      />
    </>
  );
};

export default CustomCursor;