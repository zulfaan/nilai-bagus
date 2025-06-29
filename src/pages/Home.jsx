// src/pages/Home.jsx
import React from 'react';
import Hero from '../components/Hero';
import Benefits from '../components/Benefits';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import Explore from '../components/Explore';

const Home = () => {
  return (
    <>  {/* Hapus Header dan Footer di sini */}
      <Hero />
      <Benefits />
      <Testimonials />
      <FAQ />
      <Explore />
    </>
  );
};

export default Home;