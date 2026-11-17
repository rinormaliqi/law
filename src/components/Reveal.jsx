import React from 'react';
import { motion } from 'framer-motion';

// Subtle fade-and-rise when an element scrolls into view (runs once).
// Respects the user's reduced-motion setting via <MotionConfig reducedMotion="user"> in App.
export const Reveal = ({ children, className, delay = 0, as = 'div', ...rest }) => {
  const Component = motion[as] || motion.div;
  return (
    <Component
      className={className}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -60px 0px' }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
      {...rest}
    >
      {children}
    </Component>
  );
};
