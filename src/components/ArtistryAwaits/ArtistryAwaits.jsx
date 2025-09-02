 import React from 'react';

import AnimatedSection from '../AnimatedSection/AnimatedSection.jsx';
import styles from './ArtistryAwaits.module.css';


const ArtistryAwaits = () => {
  return (
    <AnimatedSection className={styles.artistrySection} id="about">
      <img src='/images/Rectangle 5.png' alt="Landscape painting of a lake" className={styles.artistryBg} />
      <div className={styles.artistryOverlay}></div>
      <p className={styles.artistryText}>
        Kalatarang by Mansi invites you into a world where art ignites
        imagination. Explore inspiring artworks and book enriching workshops.
      </p>
      <h2 className={styles.artistryTitle}>ARTISTRY AWAITS</h2>
    </AnimatedSection>
  );
};

export default ArtistryAwaits;