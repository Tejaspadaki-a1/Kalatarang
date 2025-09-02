import React from 'react';
import { Link } from 'react-router-dom';
import AnimatedSection from '../AnimatedSection/AnimatedSection.jsx';
import styles from './Explore.module.css';

const Explore = () => {
  return (
    <AnimatedSection className={styles.exploreSection} id="contact">
      <div className={styles.exploreNav}>
        <h2 className={styles.exploreTitle}>Explore</h2>
        <p className={styles.exploreSubtitle}>
          Quick links to navigate our vibrant offerings.
        </p>
        <Link to={'/contact'} className={styles.buttonPrimary}>Contact</Link>
      </div>
      <div className={styles.exploreLinks}>
        <div className={styles.exploreLinkItem}>
          <h3 className={styles.exploreLinkTitle}>Workshops</h3>
          <p className={styles.exploreLinkDesc}>
            Register for enlightening workshops with Mansi.
          </p>
        </div>
        <div className={styles.exploreLinkItem}>
          <h3 className={styles.exploreLinkTitle}>Classes</h3>
          <p className={styles.exploreLinkDesc}>
            Join our art classes to unleash your creativity.
          </p>
        </div>
      
      </div>
    </AnimatedSection>
  );
};

export default Explore;