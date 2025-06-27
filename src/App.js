import React from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Benefits from './components/Benefits.jsx';
import Testimonials from './components/Testimonials.jsx';
import FAQ from './components/FAQ.jsx';
import Explore from './components/Explore.jsx';
import Footer from './components/Footer.jsx';

// Tambahkan ini di akhir file
function App() {
  return (
    <div className="font-plus-jakarta">
      <Header />
      <main>
        <Hero />
        <Benefits />
        <Testimonials />
        <FAQ />
        <Explore />
      </main>
      <Footer />
    </div>
  );
}

// Pastikan ada export default
export default App; // <-- INI HARUS ADA