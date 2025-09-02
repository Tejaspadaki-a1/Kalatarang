import React from 'react';
import AnimatedSection from '../AnimatedSection/AnimatedSection';
import styles from './hero.module.css';
import ArtistryAwaits from '../ArtistryAwaits/ArtistryAwaits';
import WorkshopsPromo from '../WorkshopsPromo/WorkshopsPromo';
import Explore from '../Explore/Explore';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="">
      <AnimatedSection className={styles.heroSection} id="home">
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>
          Kalatarang
          {/* <span>by <img src='/images/logo.png' alt="MK icon" className='pl-2'/> Mansi</span> */}
          <span>by  Mansi</span>
        </h1>
        <p className={styles.heroText}>
          Where Art Flows, Stories Begin.
        </p>
        {/* <a href="/portfolio" className={styles.buttonPrimary}>Explore Gallery</a> */}
        <Link to='/portfolio' className={styles.buttonPrimary}>Explore Gallery</Link>
      </div>
      <div className={styles.heroGallery}>
        <img src='/images/rect40.jpg' alt="Artwork 1" className={`${styles.heroImg} ${styles.heroImg1}`} />
        <img src='/images/Rectangle 8.png' alt="Artwork 2" className={`${styles.heroImg} ${styles.heroImg2}`} />
        <img src='/images/Rectangle 9.png' alt="Artwork 3" className={`${styles.heroImg} ${styles.heroImg3}`} />
      </div>
    </AnimatedSection>
      <WorkshopsPromo/>
      <ArtistryAwaits/>
      <Explore/>
    </div>
    

  );
};

export default Hero;