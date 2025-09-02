import React from 'react';
import AnimatedSection from './components/AnimatedSection/AnimatedSection.jsx';

const Explore = () => {
  return (
    <AnimatedSection className="section-container explore-section" id="contact">
      <div className="explore-nav">
        <h2 className="explore-title">Explore</h2>
        <p className="explore-subtitle">
          Quick links to navigate our vibrant offerings.
        </p>
        <a href="#contact-form" className="button-primary">Contact</a>
      </div>
      <div className="explore-links">
        <div className="explore-link-item">
          <h3 className="explore-link-title">Workshops</h3>
          <p className="explore-link-desc">
            Register for enlightening workshops with Mansi.
          </p>
        </div>
        <div className="explore-link-item">
          <h3 className="explore-link-title">Classes</h3>
          <p className="explore-link-desc">
            Join our art classes to unleash your creativity.
          </p>
        </div>
        <div className="explore-link-item">
          <h3 className="explore-link-title">Blog</h3>
          <p className="explore-link-desc">
            Read inspiring articles about art and creativity.
          </p>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Explore;