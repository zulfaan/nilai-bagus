import React from 'react';

const Benefits = () => {
  const benefits = [
    {
      title: "Holistic Learning Approach",
      description: "Pendekatan pembelajaran yang menyeluruh mencakup aspek akademik, sosial, dan emosional.",
      icon: "📚"
    },
    {
      title: "Experienced Educators",
      description: "Guru-guru berpengalaman dan berdedikasi tinggi dalam mendidik generasi muda.",
      icon: "👩‍🏫"
    },
    {
      title: "Nurturing Environment",
      description: "Lingkungan yang mendukung dan penuh perhatian untuk tumbuh kembang anak.",
      icon: "🌱"
    },
    {
      title: "Play-Based Learning",
      description: "Metode belajar melalui bermain untuk merangsang kreativitas dan minat belajar.",
      icon: "🎲"
    },
    {
      title: "Individualized Attention",
      description: "Perhatian individual untuk memastikan setiap anak berkembang sesuai potensinya.",
      icon: "👁️"
    },
    {
      title: "Parent Involvement",
      description: "Keterlibatan orang tua dalam proses pendidikan untuk hasil yang optimal.",
      icon: "👨‍👩‍👧‍👦"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block bg-washgreen-100 text-washgreen-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Children deserve bright future
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Benefits</h2>
          <p className="text-gray-600">
            Kami menawarkan berbagai keunggulan untuk mendukung perkembangan optimal anak Anda. Setiap program dirancang dengan cermat untuk memenuhi kebutuhan individu.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all duration-300 hover:border-washgreen-300 transform hover:-translate-y-1"
            >
              <div className="text-4xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-bold mb-2 text-washgreen-700">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;