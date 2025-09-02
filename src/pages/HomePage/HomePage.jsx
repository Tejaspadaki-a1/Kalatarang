import React from 'react';

// Make sure ALL of these imports are present
import Header from '../../components/Header/Header.jsx';
import Hero from '../../components/Hero/Hero.jsx';
import WorkshopsPromo from '../../components/WorkshopsPromo/WorkshopsPromo.jsx'; // <-- This is likely the missing line
import ArtistryAwaits from '../../components/ArtistryAwaits/ArtistryAwaits.jsx';
import Explore from '../../components/Explore/Explore.jsx';
import AboutPage from '../AboutPage/AboutPage.jsx';

const HomePage = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        {/* If the import is missing, this line causes the error */}
        <WorkshopsPromo />
        <ArtistryAwaits />
        <Explore />
      </main>
    </>
  );
};

export default HomePage;