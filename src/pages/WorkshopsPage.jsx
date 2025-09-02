import React from 'react';
import styles from './WorkshopsPage.module.css';
import AnimatedSection from '../components/AnimatedSection/AnimatedSection';
import Header from '../components/Header/Header';

// Data for the main alternating list
const workshopsListData = [
  {
    title: 'Painting Workshop',
    description: 'Unleash your creativity as you explore brush techniques, color mixing, and artistic expression. Perfect for beginners and enthusiasts looking to refine their skills.',
    image: '/images/Rectangle 28.png',
  },
  {
    title: 'Ganpati making workshop',
    description: 'Celebrate tradition by crafting your own eco-friendly Ganpati idol. Learn sculpting techniques while connecting with cultural artistry in a fun, hands-on session.',
    image: '/images/Rectangle 29.png',
  },
  {
    title: 'Gokulashtami Special Workshop',
    description: 'Celebrate the spirit of Krishna with a festive art session! Learn to create beautiful Gokulashtami-themed paintings and crafts inspired by vibrant traditions, perfect to adorn your home for the season.',
    image: '/images/Rectangle 30.png',
  },
  {
    title: 'Dussehra Workshop For kids',
    description: 'A fun-filled creative session where children explore the story of Dussehra through colors and crafts. Learn festive-themed art while enjoying games and activities that spark imagination.',
    image: '/images/Rectangle 36.png',
  },
  {
    title: 'Christmas ladies Painting Workshop',
    description: 'An exclusive festive gathering for women to unwind, paint, and get in the holiday spirit. Create beautiful Christmas-themed paintings in a warm, creative, and laughter-filled atmosphere.',
    image: '/images/Rectangle 37.png',
  },
];


const WorkshopsPage = () => {
  return (
    <div className={styles.workshopsPage}>
      <Header />
      <main>
        <AnimatedSection className={styles.section}>
          {/* <div className={styles.gridHeader}>
            <h2 className={styles.gridTitle}>Upcoming Workshops</h2>
            <p className={styles.gridSubtitle}>
              Explore our exciting range of workshops designed for artists
              and creatives. Join us to enhance your skills and discover your
              artistic potential.
            </p>
          </div> */}
          {/* <div className={styles.workshopsGrid}>
            <div className={styles.workshopCard}>
              <img src="/images/Rectangle38(1).png" alt="Ganpati making workshop" className={styles.cardImage} />
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>Ganpati making workshop</h3>
                <p className={styles.cardDescription}>
                  Celebrate tradition by crafting your own eco-friendly Ganpati idol. Learn sculpting techniques while connecting with cultural artistry in a fun, hands-on session.
                </p>
              </div>
            </div>
            <div className={styles.workshopCard}>
              <img src="/images/Rectangle 39.png" alt="Painting Workshop" className={styles.cardImage} />
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>Painting Workshop</h3>
                <p className={styles.cardDescription}>
                  Unleash your creativity as you explore brush techniques, color mixing, and artistic expression. Perfect for beginners and enthusiasts looking to refine their skills.
                </p>
              </div>
            </div>
          </div> */}
        </AnimatedSection>
        <div className={styles.workshopList}>
          {workshopsListData.map((item, index) => (
            <AnimatedSection key={index} className={styles.workshopItem}>
              <div className={styles.workshopContent}>
                <h2 className={styles.workshopTitle}>{item.title}</h2>
                <p className={styles.workshopDescription}>{item.description}</p>
              </div>
              <div className={styles.workshopImageContainer}>
                <img src={item.image} alt={item.title} className={styles.workshopImage} />
              </div>
            </AnimatedSection>
          ))}
        </div>


        <AnimatedSection className={`${styles.section} ${styles.detailsSection}`}>
          <div className={styles.detailCard}>
            <a href="https://maps.app.goo.gl/tALr11X1yGMnxCTY6">
            <img src="/images/Address.png" alt="Location Icon" className={styles.detailIcon} />
            <h3 className={styles.detailTitle}>Location</h3>
            <p className={styles.detailDescription}>
              Join us at our cozy studio located in the heart of Kolhapur, where creativity flourishes and artists find inspiration.
            </p>
            </a>
          </div>
          <div className={styles.detailCard}>
            <img src="/images/Paint Palette.png" alt="Materials Icon" className={styles.detailIcon} />
            <h3 className={styles.detailTitle}>Materials Needed</h3>
            <p className={styles.detailDescription}>
              All necessary materials will be provided for each workshop. Just bring your enthusiasm and a willingness to learn!
            </p>
          </div>
          <div className={styles.detailCard}>
            <img src="/images/Call.png" alt="Contact Icon" className={styles.detailIcon} />
            <h3 className={styles.detailTitle}>Contact</h3>
            <p className="">+919545518881</p>
            <p className={styles.detailDescription}>
             
              For any inquiries, please contact us via the contact form or directly at the provided phone number. We are here to help!
            </p>
          </div>
        </AnimatedSection>
      </main>
    </div>
  );
};

export default WorkshopsPage;