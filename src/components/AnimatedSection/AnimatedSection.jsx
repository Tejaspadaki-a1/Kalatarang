import React from 'react';
import { useInView } from 'react-intersection-observer';

const AnimatedSection = ({ children, className, id }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    // The global 'fade-in-section' classes from index.css handle the animation
    <div
      ref={ref}
      id={id || ''}
      className={`${className} fade-in-section ${inView ? 'is-visible' : ''}`}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;