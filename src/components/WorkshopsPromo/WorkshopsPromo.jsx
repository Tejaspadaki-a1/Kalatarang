import React from 'react';
import AnimatedSection from '../AnimatedSection/AnimatedSection';
import styles from './WorkshopsPromo.module.css';
import { Link } from 'react-router-dom';

const WorkshopsPromo = () => {
  return (
    <AnimatedSection className={styles.workshopsPromoSection} id="workshops">
      <div className={styles.workshopsPromoContent}>
        <h2 className={styles.workshopsPromoTitle}>
          Join our workshops for creative expression.
        </h2>
        <p className={styles.workshopsPromoSubtitle}>Discover Your Artistic Side</p>
        <Link to={'/workshops'} className={styles.buttonPrimary}>Join</Link>
      </div>
      <img
        src='/images/Rectangle 3.png'
        alt="Painting of a window with flowers"
        className={styles.workshopsPromoImage}
      />
    </AnimatedSection>
  );
};

export default WorkshopsPromo;