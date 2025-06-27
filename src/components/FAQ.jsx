// src/components/FAQ.jsx
import React, { useState } from 'react';

const FAQItem = ({ faq }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="border-2 border-black rounded-xl overflow-hidden mb-4 transition-all duration-300">
      <div 
        className="p-5 bg-white cursor-pointer flex justify-between items-center hover:bg-gray-50"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="font-bold text-lg">{faq.question}</h3>
        <span className={`text-xl font-bold transform transition-transform ${isOpen ? 'rotate-180' : ''}`}>
          ▼
        </span>
      </div>
      
      <div 
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <div className="p-5 bg-gray-50 border-t-2 border-black">
          <p className="text-gray-700">{faq.answer}</p>
        </div>
      </div>
    </div>
  );
};

const FAQ = () => {
  const faqs = [
    {
      question: "Apa saja persyaratan pendaftaran?",
      answer: "Persyaratan pendaftaran meliputi formulir pendaftaran, fotokopi akta kelahiran, pas foto, dan rapor tahun terakhir."
    },
    {
      question: "Apakah ada program beasiswa?",
      answer: "Ya, kami menawarkan beasiswa untuk siswa berprestasi dan siswa dari keluarga kurang mampu. Silakan hubungi bagian administrasi untuk informasi lebih lanjut."
    },
    {
      question: "Bagaimana sistem pembelajaran di Nilai Bagus?",
      answer: "Kami menggunakan pendekatan pembelajaran aktif dengan fokus pada pengembangan karakter dan keterampilan abad 21."
    },
    {
      question: "Apakah menyediakan fasilitas asrama?",
      answer: "Saat ini kami belum menyediakan fasilitas asrama, tetapi kami memiliki rencana untuk membangun asrama di tahun-tahun mendatang."
    },
    {
      question: "Bagaimana cara mengikuti ujian masuk?",
      answer: "Ujian masuk dilaksanakan setiap bulan Juni dan Desember. Pendaftaran dapat dilakukan secara online melalui website kami."
    },
    {
      question: "Apakah ada ekstrakurikuler yang ditawarkan?",
      answer: "Ya, kami menawarkan berbagai ekstrakurikuler seperti robotik, seni, olahraga, dan bahasa asing."
    },
    {
      question: "Berapa rasio guru dan siswa?",
      answer: "Rasio guru dan siswa adalah 1:10 untuk memastikan setiap siswa mendapat perhatian yang cukup."
    },
    {
      question: "Apakah kurikulumnya mengikuti standar nasional?",
      answer: "Ya, kurikulum kami mengikuti standar nasional yang diperkaya dengan program unggulan kami."
    }
  ];

  return (
    <section className="py-20 bg-white border-b-4 border-black">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block bg-washgreen-100 text-washgreen-700 px-4 py-2 rounded-full text-sm font-bold mb-4 border-2 border-black">
            Pertanyaan yang Sering Diajukan
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-600">
            Temukan jawaban atas pertanyaan umum seputar pendaftaran, program, dan fasilitas di Nilai Bagus.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <FAQItem key={index} faq={faq} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;