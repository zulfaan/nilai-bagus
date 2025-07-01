import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import FAQ from '../components/FAQ';
import { images } from '../data/images';

const FALLBACK_IMAGE = 'https://via.placeholder.com/600x400/ffffff/808080?text=No+Image';

const ProgramDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  // Data program detail dengan gambar dari images.js
  const programs = [
    {
      id: 1,
      title: "Program Reguler",
      tagline: "Pendidikan Holistik untuk Masa Depan Cerah",
      description: "Program Reguler di Nilai Bagus dirancang untuk memberikan pendidikan berkualitas tinggi yang mengintegrasikan kurikulum nasional dengan pendekatan pembelajaran aktif dan pengembangan karakter siswa.",
      image: images.academicsGallery.classrooms[0] || FALLBACK_IMAGE,
      longDescription: "Program Reguler kami menekankan pada pengembangan potensi akademik dan non-akademik secara seimbang. Siswa tidak hanya diajarkan materi pelajaran standar, tetapi juga dilibatkan dalam berbagai proyek kolaboratif, kegiatan ekstrakurikuler, dan program pengembangan diri yang dirancang khusus untuk membentuk siswa yang berkarakter kuat, kreatif, dan mampu berpikir kritis.",
      benefits: [
        "Pengembangan karakter melalui program khusus",
        "Pembelajaran berbasis proyek yang menantang",
        "Konseling pendidikan rutin",
        "Ekstrakurikuler pilihan yang beragam",
        "Fasilitas pembelajaran modern dan lengkap"
      ],
      features: [
        {
          title: "Kurikulum Terintegrasi",
          description: "Kurikulum nasional diperkaya dengan materi pengembangan karakter dan keterampilan abad 21"
        },
        {
          title: "Pembelajaran Aktif",
          description: "Metode pembelajaran yang menekankan partisipasi aktif siswa dalam proses belajar"
        },
        {
          title: "Pengembangan Karakter",
          description: "Program khusus untuk membangun karakter melalui kegiatan harian dan mentoring"
        },
        {
          title: "Ekstrakurikuler Unggulan",
          description: "Beragam pilihan ekstrakurikuler sesuai minat dan bakat siswa"
        }
      ],
      schedule: [
        {
          day: "Senin-Kamis",
          time: "07.30 - 14.00 WIB",
          activities: [
            "Pembelajaran inti kurikulum",
            "Proyek kelompok",
            "Istirahat & makan siang"
          ]
        },
        {
          day: "Jumat",
          time: "07.30 - 11.30 WIB",
          activities: [
            "Pembelajaran inti",
            "Kegiatan karakter building"
          ]
        },
        {
          day: "Sabtu",
          time: "08.00 - 12.00 WIB",
          activities: [
            "Ekstrakurikuler pilihan",
            "Kegiatan pengembangan diri"
          ]
        }
      ],
      testimonials: images.testimonials?.slice(0, 2).map((img, i) => ({
        name: `Orang Tua Siswa ${i+1}`,
        role: "Orang Tua",
        content: "Sangat puas dengan perkembangan anak saya sejak bergabung di program ini",
        image: img
      })) || [],
      faqs: [
        {
          question: "Apa saja persyaratan masuk Program Reguler?",
          answer: "Persyaratan utama adalah lulus tes akademik dasar dan wawancara dengan tim kesiswaan. Siswa juga diharapkan memiliki kemauan belajar yang tinggi."
        },
        {
          question: "Apakah ada program beasiswa untuk Program Reguler?",
          answer: "Ya, kami menyediakan beasiswa untuk siswa berprestasi dan dari keluarga kurang mampu. Informasi lengkap bisa dilihat di halaman beasiswa."
        },
        {
          question: "Bagaimana sistem penilaian di Program Reguler?",
          answer: "Penilaian mencakup aspek akademik (70%) dan non-akademik (30%) yang meliputi karakter, kreativitas, dan kontribusi sosial."
        }
      ],
      gallery: images.academicsGallery.classrooms || []
    },
    {
      id: 2,
      title: "Program Akselerasi",
      tagline: "Mempercepat Potensi Akademik Siswa Berbakat",
      description: "Program khusus untuk siswa dengan kemampuan akademik di atas rata-rata yang ingin menyelesaikan pendidikan lebih cepat tanpa mengorbankan kualitas pembelajaran.",
      image: images.academicsGallery.scienceLab[0] || FALLBACK_IMAGE,
      longDescription: "Program Akselerasi memberikan kesempatan bagi siswa berbakat akademik untuk menyelesaikan pendidikan lebih cepat. Dengan metode pembelajaran intensif dan mentor khusus, siswa dapat menguasai materi dengan lebih mendalam dalam waktu yang lebih singkat.",
      benefits: [
        "Penyelesaian studi lebih cepat",
        "Mentor khusus berpengalaman",
        "Program penelitian siswa",
        "Persiapan olimpiade sains"
      ],
      features: [
        {
          title: "Kurikulum Intensif",
          description: "Kurikulum yang dikompresi tanpa mengurangi kedalaman materi"
        },
        {
          title: "Pembelajaran Mandiri",
          description: "Sistem pembelajaran yang mendorong kemandirian siswa"
        },
        {
          title: "Mentor Akademik",
          description: "Pendampingan oleh mentor yang ahli di bidangnya"
        },
        {
          title: "Program Riset Siswa",
          description: "Kesempatan melakukan penelitian ilmiah sejak dini"
        }
      ],
      schedule: [
        {
          day: "Senin-Jumat",
          time: "07.30 - 15.00 WIB",
          activities: [
            "Pembelajaran inti",
            "Sesi pendalaman materi",
            "Proyek penelitian"
          ]
        },
        {
          day: "Sabtu",
          time: "08.00 - 12.00 WIB",
          activities: [
            "Konsultasi mentor",
            "Persiapan olimpiade"
          ]
        }
      ],
      testimonials: images.testimonials?.slice(0, 2).map((img, i) => ({
        name: `Orang Tua Siswa ${i+1}`,
        role: "Orang Tua",
        content: "Program ini sangat membantu anak saya yang berbakat akademik",
        image: img
      })) || [],
      faqs: [
        {
          question: "Bagaimana seleksi masuk Program Akselerasi?",
          answer: "Seleksi melalui tes IQ, tes akademik, dan wawancara dengan tim psikolog sekolah."
        },
        {
          question: "Apakah ada program percepatan untuk semua jenjang?",
          answer: "Program ini tersedia untuk jenjang SMP dan SMA."
        }
      ],
      gallery: images.academicsGallery.scienceLab || []
    },
    {
      id: 3,
      title: "Program Kreativitas",
      tagline: "Mengembangkan Bakat Seni dan Kreativitas",
      description: "Program khusus untuk siswa yang memiliki minat dan bakat di bidang seni, desain, dan kreativitas.",
      image: images.academicsGallery.garden[0] || FALLBACK_IMAGE,
      longDescription: "Program Kreativitas dirancang untuk mengasah bakat seni dan kreativitas siswa melalui berbagai kegiatan praktik langsung dan kolaborasi dengan praktisi industri.",
      benefits: [
        "Studio seni lengkap",
        "Kolaborasi dengan praktisi industri",
        "Pameran karya rutin",
        "Program magang kreatif"
      ],
      features: [
        {
          title: "Studio Seni",
          description: "Fasilitas lengkap untuk berbagai bidang seni"
        },
        {
          title: "Kelas Master",
          description: "Workshop dengan seniman dan desainer profesional"
        },
        {
          title: "Pameran Karya",
          description: "Kesempatan menampilkan karya di pameran sekolah"
        },
        {
          title: "Magang Industri",
          description: "Program magang di studio dan perusahaan kreatif"
        }
      ],
      schedule: [
        {
          day: "Senin-Rabu",
          time: "13.00 - 16.00 WIB",
          activities: [
            "Kelas seni dasar",
            "Praktik studio"
          ]
        },
        {
          day: "Kamis-Jumat",
          time: "13.00 - 17.00 WIB",
          activities: [
            "Proyek kreatif",
            "Kelas master"
          ]
        },
        {
          day: "Sabtu",
          time: "09.00 - 14.00 WIB",
          activities: [
            "Pameran karya",
            "Kolaborasi eksternal"
          ]
        }
      ],
      testimonials: images.testimonials?.slice(0, 2).map((img, i) => ({
        name: `Orang Tua Siswa ${i+1}`,
        role: "Orang Tua",
        content: "Program ini sangat membantu mengembangkan bakat seni anak saya",
        image: img
      })) || [],
      faqs: [
        {
          question: "Bidang seni apa saja yang tersedia?",
          answer: "Kami menyediakan program untuk seni lukis, desain grafis, fotografi, dan seni digital."
        }
      ],
      gallery: images.academicsGallery.garden || []
    },
    {
      id: 4,
      title: "Program Teknologi",
      tagline: "Mempersiapkan Siswa untuk Era Digital",
      description: "Program yang fokus pada pengembangan keterampilan teknologi dan digital untuk mempersiapkan siswa menghadapi masa depan.",
      image: images.academicsGallery.computerLab[0] || FALLBACK_IMAGE,
      longDescription: "Program Teknologi memberikan fondasi kuat dalam bidang coding, robotik, dan teknologi digital melalui pembelajaran praktis dan proyek nyata.",
      benefits: [
        "Laboratorium komputer canggih",
        "Pembelajaran berbasis proyek",
        "Kompetisi teknologi",
        "Koneksi industri teknologi"
      ],
      features: [
        {
          title: "Koding & Robotik",
          description: "Pembelajaran bahasa pemrograman dan robotika"
        },
        {
          title: "AI & Data Science",
          description: "Pengenalan kecerdasan buatan dan ilmu data"
        },
        {
          title: "Fab Lab",
          description: "Fasilitas pembuatan prototipe dengan perangkat canggih"
        },
        {
          title: "Kompetisi Inovasi",
          description: "Partisipasi dalam kompetisi teknologi nasional"
        }
      ],
      schedule: [
        {
          day: "Senin-Selasa",
          time: "13.00 - 16.00 WIB",
          activities: [
            "Pemrograman dasar",
            "Praktik coding"
          ]
        },
        {
          day: "Rabu-Kamis",
          time: "13.00 - 17.00 WIB",
          activities: [
            "Robotika",
            "Proyek AI"
          ]
        },
        {
          day: "Jumat-Sabtu",
          time: "09.00 - 12.00 WIB",
          activities: [
            "Fab Lab",
            "Persiapan kompetisi"
          ]
        }
      ],
      testimonials: images.testimonials?.slice(0, 2).map((img, i) => ({
        name: `Orang Tua Siswa ${i+1}`,
        role: "Orang Tua",
        content: "Anak saya sekarang sangat tertarik dengan pemrograman berkat program ini",
        image: img
      })) || [],
      faqs: [
        {
          question: "Apakah perlu memiliki latar belakang pemrograman?",
          answer: "Tidak, program ini dirancang untuk pemula hingga tingkat lanjut."
        }
      ],
      gallery: images.academicsGallery.computerLab || []
    }
  ];
  
  const program = programs.find(p => p.id === parseInt(id));
  
  if (!program) {
    return (
      <div className="min-h-screen flex flex-col">
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl font-bold mb-4">Program Tidak Ditemukan</h1>
          <p className="text-lg mb-8">Maaf, program yang Anda cari tidak tersedia.</p>
          <button 
            onClick={() => navigate('/programs')}
            className="bg-washgreen-500 text-white py-3 px-8 rounded-xl font-bold text-lg border-2 border-black shadow-neo hover:shadow-none hover:translate-y-1 transition-all"
          >
            Kembali ke Halaman Program
          </button>
        </div>
      </div>
    );
  }
  
  // Variasi animasi
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };
  
  const buttonVariants = {
    hover: {
      y: -3,
      boxShadow: "4px 4px 0px rgba(0, 0, 0, 1)",
      transition: {
        type: "spring",
        stiffness: 300
      }
    },
    tap: {
      y: 0,
      boxShadow: "2px 2px 0px rgba(0, 0, 0, 1)"
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-washgreen-100 to-washpink-100 border-b-4 border-black">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-10 items-center">
            <div className="md:w-1/2">
              <div className="inline-block bg-washpink-500 text-white px-4 py-1 mb-4 border-2 border-black shadow-neo">
                <h3 className="text-xl font-bold">{program.tagline}</h3>
              </div>
              <h1 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight">
                {program.title}
              </h1>
              <p className="text-lg text-gray-800 mb-8 bg-white p-4 border-2 border-black shadow-neo">
                {program.description}
              </p>
              <div className="flex flex-wrap gap-4">
                <motion.button
                  whileHover="hover"
                  whileTap="tap"
                  variants={buttonVariants}
                  className="bg-washgreen-500 text-white py-3 px-6 rounded-xl font-bold text-lg border-2 border-black shadow-neo"
                  onClick={() => document.getElementById('program-registration')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Daftar Sekarang
                </motion.button>
              </div>
            </div>
            
            <div className="md:w-1/2">
              <motion.div 
                initial={{ scale: 0.95, rotate: -2 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.5 }}
                className="border-4 border-black shadow-neo rounded-2xl overflow-hidden transform rotate-1"
              >
                <img 
                  src={program.image} 
                  alt={program.title} 
                  className="w-full h-96 object-cover"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = FALLBACK_IMAGE;
                  }}
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 bg-white border-b-4 border-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Tentang Program Ini</h2>
            
            <motion.div 
              className="prose prose-lg max-w-none"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.p variants={itemVariants} className="text-gray-700 mb-6">
                {program.longDescription}
              </motion.p>
              
              <motion.h3 variants={itemVariants} className="text-2xl font-bold mt-8 mb-4 text-washgreen-700">
                Manfaat Utama
              </motion.h3>
              
              <motion.ul variants={containerVariants} className="space-y-2 mb-8">
                {program.benefits?.map((benefit, index) => (
                  <motion.li key={index} variants={itemVariants} className="flex items-start">
                    <span className="text-washpink-500 mr-2">•</span>
                    <span>{benefit}</span>
                  </motion.li>
                ))}
              </motion.ul>
              
              <motion.div variants={itemVariants} className="bg-washgreen-50 p-6 rounded-2xl border-2 border-black shadow-neo">
                <h3 className="text-xl font-bold mb-3 text-washgreen-700">Visi Program</h3>
                <p className="text-gray-700">
                  Menciptakan lingkungan pembelajaran yang mendorong siswa untuk mencapai potensi akademik maksimal sambil mengembangkan karakter dan kreativitas mereka.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-washgreen-100 border-b-4 border-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Keunggulan Program</h2>
            <p className="text-gray-600">
              Fitur-fitur unggulan yang membuat program ini istimewa
            </p>
          </div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {program.features?.map((feature, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                className="bg-white rounded-2xl shadow-neo p-6 border-2 border-black hover:shadow-xl transition-shadow"
              >
                <div className="flex items-start">
                  <div className="bg-washpink-100 text-washpink-700 w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mr-4 border-2 border-black">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-washpink-500">{feature.title}</h3>
                    <p className="text-gray-700">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Schedule Section */}
      <section className="py-20 bg-white border-b-4 border-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Jadwal Kegiatan</h2>
            <p className="text-gray-600">
              Struktur kegiatan harian dalam program ini
            </p>
          </div>
          
          <motion.div 
            className="max-w-3xl mx-auto bg-washpink-50 rounded-2xl p-6 border-2 border-black shadow-neo"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="space-y-6">
              {program.schedule?.map((item, index) => (
                <motion.div 
                  key={index}
                  variants={itemVariants}
                  className="bg-white p-5 rounded-xl border-2 border-black"
                >
                  <div className="flex flex-wrap items-center mb-3">
                    <span className="text-lg font-bold mr-4">{item.day}</span>
                    <span className="bg-washgreen-100 text-washgreen-700 px-3 py-1 rounded-full text-sm border border-black">
                      {item.time}
                    </span>
                  </div>
                  
                  <ul className="space-y-2">
                    {item.activities?.map((activity, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-washpink-500 mr-2">-</span>
                        <span>{activity}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-washgreen-100 border-b-4 border-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Galeri Program</h2>
            <p className="text-gray-600">
              Dokumentasi kegiatan dalam program ini
            </p>
          </div>
          
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {program.gallery?.map((image, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                className="border-4 border-black shadow-neo rounded-xl overflow-hidden"
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <img 
                  src={image} 
                  alt={`Galeri program ${index + 1}`} 
                  className="w-full h-64 object-cover"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = FALLBACK_IMAGE;
                  }}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white border-b-4 border-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Apa Kata Mereka?</h2>
            <p className="text-gray-600">
              Pengalaman nyata dari orang tua dan siswa
            </p>
          </div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {program.testimonials?.map((testimonial, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                className="bg-white rounded-2xl shadow-neo p-6 border-2 border-black"
              >
                <div className="flex items-center mb-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-16 h-16 rounded-full border-2 border-black mr-4"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = FALLBACK_IMAGE;
                    }}
                  />
                  <div>
                    <h3 className="font-bold">{testimonial.name}</h3>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">"{testimonial.content}"</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-washpink-100 border-b-4 border-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Pertanyaan Umum</h2>
            <p className="text-gray-600">
              Temukan jawaban atas pertanyaan yang sering diajukan
            </p>
          </div>
          
          <motion.div 
            className="max-w-3xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {program.faqs?.map((faq, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                className="mb-4"
              >
                <FAQ faq={faq} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Registration CTA */}
      <section id="program-registration" className="py-20 bg-washgreen-500 border-b-4 border-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center bg-white rounded-2xl p-8 md:p-12 border-2 border-black shadow-neo">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Tertarik dengan <span className="text-washpink-500">{program.title}</span>?
            </h2>
            
            <p className="text-gray-700 max-w-2xl mx-auto mb-8">
              Daftarkan putra/putri Anda sekarang untuk mendapatkan pengalaman pendidikan terbaik di Nilai Bagus.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <motion.button
                whileHover="hover"
                whileTap="tap"
                variants={buttonVariants}
                className="bg-washpink-500 text-white py-3 px-8 rounded-xl font-bold text-lg border-2 border-black shadow-neo"
                onClick={() => navigate('/admissions')}
              >
                Daftar Sekarang
              </motion.button>
              
              <motion.button
                whileHover="hover"
                whileTap="tap"
                variants={buttonVariants}
                className="bg-white text-black py-3 px-8 rounded-xl font-bold text-lg border-2 border-black shadow-neo"
                onClick={() => navigate('/contact')}
              >
                Konsultasi Program
              </motion.button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProgramDetail;