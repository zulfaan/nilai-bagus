import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
// Impor halaman lainnya jika sudah dibuat

function App() {
  return (
    <Router>
      <div className="font-plus-jakarta">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* Tambahkan rute lainnya di sini */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;