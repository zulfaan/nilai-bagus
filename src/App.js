// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Explore from './components/Explore';
import Footer from './components/Footer';

// Halaman sementara
const About = () => <div className="min-h-screen flex items-center justify-center text-4xl font-bold">About Us Page</div>;
const Academics = () => <div className="min-h-screen flex items-center justify-center text-4xl font-bold">Academics Page</div>;
const Admissions = () => <div className="min-h-screen flex items-center justify-center text-4xl font-bold">Admissions Page</div>;
const StudentLife = () => <div className="min-h-screen flex items-center justify-center text-4xl font-bold">Student Life Page</div>;
const Contact = () => <div className="min-h-screen flex items-center justify-center text-4xl font-bold">Contact Page</div>;

function App() {
  return (
    <Router>
      <div className="font-plus-jakarta">
        <Header />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Benefits />
              <Testimonials />
              <FAQ />
              <Explore />
            </>
          } />
          <Route path="/about" element={<About />} />
          <Route path="/academics" element={<Academics />} />
          <Route path="/admissions" element={<Admissions />} />
          <Route path="/student-life" element={<StudentLife />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;