import React, { useState } from 'react';
import styles from './AboutPage.module.css';
import AnimatedSection from '../../components/AnimatedSection/AnimatedSection';
import Header from '../../components/Header/Header';

const AboutPage = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className={styles.aboutPage}>
      <Header />
      <main>
        {/* Section 1: Meet Mansi */}
        <AnimatedSection className={`${styles.section} ${styles.meetMansi}`}>
          <div className={styles.imageContainer}>
            <img src="/images/Rectangle 38.png" alt="Mansi Kolhapurkar working on art" className={styles.profileImage} />
          </div>
          <div className={styles.content}>
            <h2 className={styles.title}>Meet Mansi Kolhapurkar</h2>
            <p className={styles.description}>
              Mansi Kolhapurkar is an innovative artist specializing in various
              mediums. Her passion for creativity flows through each piece,
              captivating audiences and inspiring future artists to explore their
              own artistic journeys.
            </p>
          </div>
        </AnimatedSection>

        {/* Section 2: Artistic Journey */}
        <AnimatedSection className={`${styles.section} ${styles.artisticJourney}`}>
          <div className={styles.journeyLeft}></div>
          <div className={styles.journeyImageContainer}>
            <img src="/images/Rectangle 14.png" alt="Artistic stone carving" className={styles.journeyImage} />
          </div>
          {/* A conditional class is added here for the animation */}
          <div className={`${styles.journeyOverlay} ${isExpanded ? styles.expanded : ''}`}>
            <h2 className={styles.journeyTitle}>Artistic Journey Ahead</h2>
            {/* This is the text that is always visible */}
            <p className={styles.journeyDescription}>
              Mansi’s connection with art began in her childhood, where colors and creativity felt as natural as breathing. Born in Sangli, Maharashtra, and later making Kolhapur her creative home, she found herself drawn to the expressive power of painting from an early age. Even as a young girl, she spent hours sketching, experimenting, and observing the beauty in everyday life, an early sign of the artist she would become.
            </p>
            
            {/* This block of text appears only when "Read More" is clicked */}
            {isExpanded && (
              <>
                <p className={styles.journeyDescription}>
                  Her artistic path has been fueled by an unwavering passion and ambition. Mansi believes that art is more than a skill; it is an evolving dialogue between the artist, their emotions, and the world around them. Over the years, she has dedicated countless hours to refining her techniques, exploring different mediums, and blending traditional Indian aesthetics with modern sensibilities. This dedication has shaped her into a versatile artist with a distinct, recognizable voice.
                </p>
                <p className={styles.journeyDescription}>
                  Driven by a deep desire to share her love for art, Mansi has not only created an extensive portfolio of captivating works but has also mentored aspiring artists through her workshops and classes. Her teaching style is rooted in patience, encouragement, and the belief that everyone has an inner artist waiting to be discovered. Whether guiding beginners through their first brushstrokes or helping advanced students refine their techniques, she brings the same level of enthusiasm and commitment.
                </p>
                <p className={styles.journeyDescription}>
                  Today, through Kalatarang by Mansi, she continues her mission of inspiring creativity and celebrating the joy of artistic expression. For her, every painting is more than a visual piece, it’s a story, a memory, and a bridge between the artist’s soul and the viewer’s heart. With each project, she aspires not just to create art, but to cultivate a community where imagination flows freely and beauty is celebrated in all its forms.
                </p>
              </>
            )}

            <button 
              className={styles.buttonSecondary}
              onClick={() => setIsExpanded(!isExpanded)}
            >
              {isExpanded ? 'Read Less' : 'Read More'}
            </button>
          </div>
        </AnimatedSection>

        {/* Section 3: Recognitions and Honors */}
        <AnimatedSection className={`${styles.section} ${styles.recognitions}`}>
          <div className={styles.recognitionsContent}>
            <h2 className={styles.title}>Recognitions and Honors</h2>
            <div className={styles.description}>
              <p>
                Mansi has participated in numerous exhibitions,
                showcasing her artwork both locally and nationally.
                She has received accolades for her commitment to
                promoting creativity and passion for teaching others.
              </p>
              <p><b>Recipient of the Sai Samradni Puraskar 2019</b></p>
              <p>
                In 2019, Mansi was honored with the Sai Samradni Puraskar, presented by Muktai Prakashan, in recognition of her dedication to women’s empowerment and her contribution to the artistic community. This award celebrates individuals who inspire, uplift, and create a lasting impact through their work.
              </p>
            </div>
          </div>
          <div className={styles.gallery}>
            <img src="/images/Rectangle 16.png" alt="Recognition 1" className={styles.galleryImage} />
            <img src="/images/Rectangle 15.png" alt="Recognition 2" className={styles.galleryImage} />
            <img src="/images/Rectangle 17.png" alt="Recognition 3" className={styles.galleryImage} />
          </div>
        </AnimatedSection>
      </main>
    </div>
  );
};

export default AboutPage;