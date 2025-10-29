import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Testimonials from '../components/Testimonials';
import DownloadSection from '../components/Download';

const Home = () => {
  return (
    <>
      <Hero />
      <Features />
      {/* Screenshots section hidden as requested */}
      <Testimonials />
      <DownloadSection />
      {/* Footer is rendered globally in App.js */}
    </>
  );
};

export default Home;
