import React, { useState } from 'react';
import TeacherCard from '../components/TeacherCard';
import { images } from '../data/images';

const About = () => {
  // Data prestasi sekolah
  const achievements = [
    {
      id: 1,
      title: "Best Academic Performance",
      year: "2023",
      description: "Ranked #1 in National Academic Excellence Awards based on student exam results"
    },
    {
      id: 2,
      title: "Innovative Teaching Award",
      year: "2022",
      description: "Recognized for implementing cutting-edge teaching methodologies"
    },
    {
      id: 3,
      title: "STEM Education Excellence",
      year: "2023",
      description: "Gold medal in National Science & Math Olympiad for 3 consecutive years"
    },
    {
      id: 4,
      title: "Environmental Leadership",
      year: "2021",
      description: "Awarded Green School Certification for sustainability initiatives"
    },
    {
      id: 5,
      title: "Sports Championship",
      year: "2022",
      description: "National Champions in Basketball and Volleyball tournaments"
    },
    {
      id: 6,
      title: "Arts & Culture Award",
      year: "2023",
      description: "First place in National Traditional Dance Competition"
    },
    {
      id: 7,
      title: "Technology Integration",
      year: "2022",
      description: "Pioneer Award for digital learning platform implementation"
    },
    {
      id: 8,
      title: "Community Service",
      year: "2023",
      description: "Recognized for student volunteer programs impacting local community"
    }
  ];

  // Data guru
  const teachers = [
    {
      id: 1,
      name: "Budi Santoso",
      position: "Mathematics Teacher",
      qualification: "M.Sc in Mathematics Education",
      experience: "12 years of teaching experience with specialization in calculus and algebra. Awarded Best Teacher 2020.",
      image: images.testimonials[0]
    },
    {
      id: 2,
      name: "Dewi Anggraini",
      position: "Physics Teacher",
      qualification: "Ph.D in Theoretical Physics",
      experience: "Former researcher at national science institute with 8 publications. Passionate about making physics accessible to all students.",
      image: images.testimonials[1]
    },
    {
      id: 3,
      name: "Ahmad Hidayat",
      position: "Chemistry Teacher",
      qualification: "M.Sc in Chemical Engineering",
      experience: "15 years of teaching experience. Developed innovative lab experiments that won national recognition.",
      image: images.testimonials[2]
    },
    {
      id: 4,
      name: "Siti Rahayu",
      position: "Biology Teacher",
      qualification: "Ph.D in Molecular Biology",
      experience: "10 years teaching experience. Leads student research projects that have competed internationally.",
      image: images.testimonials[3]
    },
    {
      id: 5,
      name: "Rudi Hartono",
      position: "Economics Teacher",
      qualification: "M.A in Development Economics",
      experience: "Former economic analyst with 7 years teaching experience. Developed school's financial literacy program.",
      image: images.testimonials[4]
    },
    {
      id: 6,
      name: "Linda Wijaya",
      position: "Geography Teacher",
      qualification: "M.Sc in Environmental Geography",
      experience: "8 years teaching experience. Organizes annual student expeditions to study local ecosystems.",
      image: images.testimonials[5]
    },
    {
      id: 7,
      name: "Agus Setiawan",
      position: "History Teacher",
      qualification: "Ph.D in Southeast Asian History",
      experience: "12 years teaching experience. Author of 3 history textbooks used nationally.",
      image: images.testimonials[0]
    },
    {
      id: 8,
      name: "Maya Sari",
      position: "Sociology Teacher",
      qualification: "M.A in Cultural Anthropology",
      experience: "10 years teaching experience. Leads student community engagement programs.",
      image: images.testimonials[1]
    }
  ];

  // Core values yang diperbarui (6 poin)
  const coreValues = [
    { 
      title: "Excellence", 
      description: "Pursuing the highest standards in all we do" 
    },
    { 
      title: "Integrity", 
      description: "Acting with honesty and ethical principles" 
    },
    { 
      title: "Innovation", 
      description: "Embracing creativity and new approaches" 
    },
    { 
      title: "Community", 
      description: "Building meaningful connections and service" 
    },
    { 
      title: "Respect", 
      description: "Valuing diversity and treating everyone with dignity" 
    },
    { 
      title: "Lifelong Learning", 
      description: "Fostering curiosity and continuous growth" 
    }
  ];

  // State untuk slider achievements (tampilkan 3 sekaligus)
  const [startIndex, setStartIndex] = useState(0);
  
  // Fungsi untuk navigasi slider
  const nextSlide = () => {
    setStartIndex((prevIndex) => 
      (prevIndex + 3) >= achievements.length ? 0 : prevIndex + 3
    );
  };
  
  const prevSlide = () => {
    setStartIndex((prevIndex) => 
      prevIndex - 3 < 0 ? achievements.length - 3 : prevIndex - 3
    );
  };

  // Dapatkan 3 achievements untuk ditampilkan
  const visibleAchievements = achievements.slice(startIndex, startIndex + 3);

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="py-16 bg-white border-b-4 border-black">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-start gap-10">
            {/* Bagian Kiri - Overview */}
            <div className="md:w-1/2">
              <div className="inline-block bg-washgreen-100 text-washgreen-700 px-4 py-2 rounded-full text-sm font-bold mb-4 border-2 border-black shadow-neo">
                Overview
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Welcome to Nilai Bagus</h1>
              
              <div className="border-4 border-black rounded-2xl p-6 shadow-neo bg-washgreen-50">
                <img 
                  src={images.about}
                  alt="Nilai Bagus School" 
                  className="w-full h-auto rounded-xl border-2 border-black object-cover"
                  style={{ height: '300px' }}
                />
              </div>
            </div>
            
            {/* Bagian Kanan - Deskripsi */}
            <div className="md:w-1/2 mt-14">
              <p className="text-lg mb-4">
                Founded in 2005, Nilai Bagus has established itself as a premier educational institution dedicated to academic excellence and holistic development. Our name, which translates to "Good Grades," reflects our commitment to helping every student reach their full potential.
              </p>
              <p className="text-lg mb-4">
                We believe education extends beyond textbooks. Our innovative curriculum combines rigorous academics with character building, creativity, and real-world skills. With state-of-the-art facilities and a team of dedicated educators, we prepare students to excel in academics and become responsible global citizens.
              </p>
              <p className="text-lg mb-6">
                Our 5-acre campus features modern classrooms, science laboratories, sports facilities, and creative arts spaces designed to inspire learning and discovery. We serve over 800 students from diverse backgrounds, creating a vibrant learning community.
              </p>
            </div>
          </div>
          
          {/* Our Core Values - Lebar penuh dengan 6 poin */}
          <div className="mt-8 p-5 bg-washpink-50 border-2 border-black rounded-xl shadow-neo">
            <h3 className="font-bold text-xl mb-3">Our Core Values</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {coreValues.map((value, index) => (
                <div key={index} className="flex items-start">
                  <span className="inline-block w-6 h-6 bg-washgreen-500 text-white rounded-full text-center mr-2">✓</span>
                  <div>
                    <strong>{value.title}:</strong> {value.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Mission & Vision Section */}
      <section className="py-16 bg-gray-50 border-b-4 border-black">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-block bg-washpink-100 text-washpink-700 px-4 py-2 rounded-full text-sm font-bold mb-4 border-2 border-black">
              Our Foundation
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Mission & Vision</h2>
            <p className="text-gray-600">
              Guiding principles that shape our educational approach and future direction
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Mission Card */}
            <div className="border-4 border-black rounded-2xl p-6 bg-white shadow-neo">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold">Mission</h3>
                <div className="w-12 h-12 border-2 border-black rounded-full p-2 bg-washpink-100 flex items-center justify-center">
                  🎯
                </div>
              </div>
              <p className="text-gray-700">
                To provide accessible, high-quality education that empowers students to achieve academic excellence, develop strong character, and become lifelong learners who contribute positively to society. We cultivate critical thinking, creativity, and compassion through innovative teaching and meaningful experiences.
              </p>
            </div>
            
            {/* Vision Card */}
            <div className="border-4 border-black rounded-2xl p-6 bg-white shadow-neo">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold">Vision</h3>
                <div className="w-12 h-12 border-2 border-black rounded-full p-2 bg-washgreen-100 flex items-center justify-center">
                  👁️
                </div>
              </div>
              <p className="text-gray-700">
                To be Indonesia's leading educational institution recognized for developing future-ready global citizens who drive positive change. By 2030, we aim to establish a network of innovative schools that set new standards for holistic education while preserving cultural values and promoting sustainable development.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Achievements Section - Tampilkan 3 card sekaligus */}
      <section className="py-16 bg-white border-b-4 border-black">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-block bg-washgreen-100 text-washgreen-700 px-4 py-2 rounded-full text-sm font-bold mb-4 border-2 border-black">
              Recognitions
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Achievements</h2>
            <p className="text-gray-600">
              Awards and recognitions that celebrate our commitment to excellence
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto">
            {/* Achievement Cards (3 sekaligus) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {visibleAchievements.map((achievement) => (
                <div 
                  key={achievement.id} 
                  className="border-4 border-black rounded-2xl p-6 bg-gray-50 shadow-neo transition-transform duration-300 hover:scale-[1.02]"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 mr-3 border-2 border-black rounded-full p-1 bg-washpink-100 flex items-center justify-center">
                      🏆
                    </div>
                    <h3 className="text-xl font-bold">{achievement.title}</h3>
                  </div>
                  <div className="bg-washpink-100 text-washpink-700 px-3 py-1 rounded-full text-xs font-bold inline-block mb-2 border border-black">
                    {achievement.year}
                  </div>
                  <p className="text-gray-700">{achievement.description}</p>
                </div>
              ))}
            </div>
            
            {/* Navigation */}
            <div className="flex justify-between items-center">
              <button 
                className="border-2 border-black p-2 rounded-lg shadow-neo bg-white hover:bg-gray-100 flex items-center"
                onClick={prevSlide}
              >
                <span className="mr-2">←</span> Prev
              </button>
              
              <div className="text-sm font-bold">
                {Math.floor(startIndex / 3) + 1} / {Math.ceil(achievements.length / 3)}
              </div>
              
              <button 
                className="border-2 border-black p-2 rounded-lg shadow-neo bg-white hover:bg-gray-100 flex items-center"
                onClick={nextSlide}
              >
                Next <span className="ml-2">→</span>
              </button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Teachers Section */}
      <section className="py-16 bg-gray-50 border-b-4 border-black">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-block bg-washpink-100 text-washpink-700 px-4 py-2 rounded-full text-sm font-bold mb-4 border-2 border-black">
              Expertise
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Teachers With Experience</h2>
            <p className="text-gray-600">
              Dedicated educators committed to student success
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {teachers.map((teacher) => (
              <TeacherCard key={teacher.id} teacher={teacher} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;