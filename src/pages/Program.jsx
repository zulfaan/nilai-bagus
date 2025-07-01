// src/pages/Program.jsx
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { images } from '../data/images';
import useCountUp from '../hooks/useCountUp';

const Program = () => {
  const programs = [
    {
      title: "Program Reguler",
      description: "Kurikulum nasional diperkaya dengan pendekatan pembelajaran aktif dan pengembangan karakter.",
      features: [
        "Pembelajaran berbasis proyek",
        "Pengembangan soft skills",
        "Konseling pendidikan rutin",
        "Ekstrakurikuler pilihan"
      ],
      icon: "📘"
    },
    {
      title: "Program Akselerasi",
      description: "Untuk siswa berbakat akademik dengan kemampuan belajar di atas rata-rata.",
      features: [
        "Penyelesaian studi lebih cepat",
        "Mentor khusus",
        "Program penelitian siswa",
        "Olimpiade sains nasional/internasional"
      ],
      icon: "🚀"
    },
    {
      title: "Program Kreativitas",
      description: "Mengembangkan bakat seni, desain, dan kreativitas melalui pendekatan praktis.",
      features: [
        "Studio seni lengkap",
        "Kolaborasi dengan praktisi industri",
        "Pameran karya rutin",
        "Program magang kreatif"
      ],
      icon: "🎨"
    },
    {
      title: "Program Teknologi",
      description: "Mempersiapkan siswa menghadapi era digital dengan keterampilan masa depan.",
      features: [
        "Koding & robotik",
        "AI & data science dasar",
        "Fab lab dengan perangkat canggih",
        "Kompetisi inovasi teknologi"
      ],
      icon: "💻"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section - Mirip halaman lain */}
      <section className="py-20 bg-gradient-to-r from-washgreen-100 to-washpink-100 border-b-4 border-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-washpink-500 text-white px-4 py-1 mb-4 border-2 border-black shadow-neo">
              <h3 className="text-xl font-bold">Program Unggulan</h3>
            </div>
            
            <h1 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight">
              Membentuk <span className="text-washpink-500">Generasi</span> Siap Hadapi Masa Depan
            </h1>
            
            <p className="text-lg text-gray-800 mb-8 bg-white p-4 border-2 border-black shadow-neo max-w-2xl mx-auto">
              Program pendidikan kami dirancang untuk mengembangkan potensi unik setiap siswa melalui pendekatan holistik dan inovatif.
            </p>
            
            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="bg-white rounded-xl shadow-neo p-4 text-center min-w-[120px] border-2 border-black">
                <div className="text-2xl font-bold text-washpink-500">4+</div>
                <div className="text-sm text-gray-600">Program Unggulan</div>
              </div>
              <div className="bg-white rounded-xl shadow-neo p-4 text-center min-w-[120px] border-2 border-black">
                <div className="text-2xl font-bold text-washpink-500">100+</div>
                <div className="text-sm text-gray-600">Kegiatan Tahunan</div>
              </div>
              <div className="bg-white rounded-xl shadow-neo p-4 text-center min-w-[120px] border-2 border-black">
                <div className="text-2xl font-bold text-washpink-500">98%</div>
                <div className="text-sm text-gray-600">Kepuasan Orang Tua</div>
              </div>
            </div>
            
            <button className="mt-4 bg-washgreen-500 text-white py-3 px-8 rounded-xl font-bold text-lg border-2 border-black shadow-neo hover:shadow-none hover:translate-y-1 transition-all">
              Konsultasi Program
            </button>
          </div>
        </div>
      </section>

      {/* Kenapa Berbeda Section */}
      <section className="py-20 bg-white border-b-4 border-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-block bg-washgreen-100 text-washgreen-700 px-4 py-2 rounded-full text-sm font-bold mb-4 border-2 border-black">
              Keunikan Kami
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Kenapa Berbeda dari Lembaga Lain?</h2>
            <p className="text-gray-600 mb-10">
              Pendekatan revolusioner kami dalam pendidikan menciptakan pengalaman belajar yang tak tertandingi.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              <div className="bg-washpink-50 p-6 rounded-2xl border-2 border-black shadow-neo">
                <h3 className="text-xl font-bold mb-3 text-washpink-700">Pendekatan Personalisasi Ekstrim</h3>
                <p className="text-gray-700">
                  Setiap siswa mendapatkan "Peta Belajar Personal" yang dirancang khusus berdasarkan minat, gaya belajar, dan tujuan karir.
                </p>
              </div>
              
              <div className="bg-washgreen-50 p-6 rounded-2xl border-2 border-black shadow-neo">
                <h3 className="text-xl font-bold mb-3 text-washgreen-700">Kolaborasi Industri Nyata</h3>
                <p className="text-gray-700">
                  Program magang dimulai sejak kelas 10 dengan mitra industri ternama, bukan sekadar teori.
                </p>
              </div>
              
              <div className="bg-washgreen-50 p-6 rounded-2xl border-2 border-black shadow-neo">
                <h3 className="text-xl font-bold mb-3 text-washgreen-700">Kurikulum Dinamis</h3>
                <p className="text-gray-700">
                  Materi pembelajaran diperbarui setiap 6 bulan untuk mengikuti perkembangan teknologi dan kebutuhan industri terbaru.
                </p>
              </div>
              
              <div className="bg-washpink-50 p-6 rounded-2xl border-2 border-black shadow-neo">
                <h3 className="text-xl font-bold mb-3 text-washpink-700">Keseimbangan Holistik</h3>
                <p className="text-gray-700">
                  Sistem penilaian mencakup 5 aspek: akademik, kreativitas, kepemimpinan, kesehatan mental, dan kontribusi sosial.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Pendidikan Section */}
      <section className="py-20 bg-washgreen-100 border-b-4 border-black">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-block bg-white text-washgreen-700 px-4 py-2 rounded-full text-sm font-bold mb-4 border-2 border-black">
              Pilihan Program
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Program Pendidikan Kami</h2>
            <p className="text-gray-600">
              Setiap program dirancang untuk mengembangkan potensi maksimal siswa dengan pendekatan khusus.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {programs.map((program, index) => (
              <div 
                key={index} 
                className="bg-white rounded-2xl shadow-neo p-6 transition-transform duration-300 hover:-translate-y-1 border-2 border-black"
              >
                <div className="flex items-start">
                  <span className="text-4xl mr-4">{program.icon}</span>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-washgreen-700">{program.title}</h3>
                    <p className="text-gray-600 mb-4">{program.description}</p>
                    
                    <ul className="space-y-2 mb-6">
                      {program.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-washpink-500 mr-2">✓</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <button className="w-full bg-washpink-100 hover:bg-washpink-200 text-washpink-700 py-2 rounded-lg font-medium transition-colors border-2 border-black">
                  Detail Program
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-washpink-100 border-b-4 border-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center bg-white rounded-2xl p-8 md:p-12 border-2 border-black shadow-neo">
            <div className="inline-block bg-washgreen-500 text-white px-4 py-1 mb-4 text-sm font-bold border-2 border-black">
              Langkah Selanjutnya
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Bersiap Menjadi Murid Nilai Bagus?</h2>
            
            <p className="text-gray-700 max-w-2xl mx-auto mb-8">
              Bergabunglah dengan komunitas pembelajar masa depan. Proses pendaftaran kami dirancang untuk menemukan siswa yang cocok dengan nilai dan visi pendidikan kami.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <button 
                onClick={() => window.location.href = '/admissions'}
                className="bg-washgreen-500 text-white py-3 px-8 rounded-xl font-bold text-lg border-2 border-black shadow-neo hover:shadow-none hover:translate-y-1 transition-all"
              >
                Info Admission
              </button>
              
              <button className="bg-white text-black py-3 px-8 rounded-xl font-bold text-lg border-2 border-black shadow-neo hover:shadow-none hover:translate-y-1 transition-all">
                Jadwalkan Tur Sekolah
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Program;