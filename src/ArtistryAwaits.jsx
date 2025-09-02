import AnimatedSection from './components/AnimatedSection/AnimatedSection';

const ArtistryAwaits = () => {
  return (
    <AnimatedSection className="artistry-section" id="about">
      <img src='/images/Rectangle 5.png' alt="Landscape painting of a lake" className="artistry-bg" />
      <div className="artistry-overlay"></div>
      <p className="artistry-text">
        Kalatarang by Mansi invites you into a world where art ignites
        imagination. Explore inspiring artworks and book enriching workshops.
      </p>
      <a href="#learn-more" className="button-primary">Learn More</a>
      <h2 className="artistry-title">ARTISTRY AWAITS</h2>
    </AnimatedSection>
  );
};

export default ArtistryAwaits;