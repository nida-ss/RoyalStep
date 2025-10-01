import React from 'react';

const CertifiedExperts: React.FC = () => {
  const brands = [
    { name: 'Apple', logo: 'apple-logo.svg' },
    { name: 'Dell', logo: 'dell-logo.svg' },
    { name: 'LG', logo: 'lg-logo.svg' },
    { name: 'HP', logo: 'hp-logo.svg' },
    { name: 'Lenovo', logo: 'lenovo-logo.svg' },
    { name: 'Bose', logo: 'bose-logo.svg' },
    { name: 'Asus', logo: 'asus-logo.svg' },
    { name: 'Sony', logo: 'sony-logo.svg' },
  ];

  // Duplicate logos for seamless loop
  const loopedBrands = [...brands, ...brands];

  return (
    <section className="container mx-auto px-4 py-24 overflow-hidden">
      <h2 className="font-montserrat font-bold text-3xl md:text-4xl lg:text-[42px] text-primary text-center mb-12 leading-10 tracking-tight uppercase">
        Certified experts
      </h2>

      <h3 className="font-montserrat font-semibold text-2xl md:text-[29px] text-black/80 text-center mb-8 leading-tight tracking-tight">
        What are your certifications and trusted companies?
      </h3>

      <p className="font-montserrat font-medium text-xl md:text-2xl text-black/50 text-center mb-16 leading-relaxed max-w-6xl mx-auto">
        For people working in business, education, and other industries, Apple offers certification programs. Our team of professionals is educated and certified in their respective industries, and they also receive advanced training from renowned organizations like Apple, Samsung, LG, and Acer, among others. Technicians are qualified and completed the trainings with certificates such as Apple Certified Macintosh Technician, Apple Certified Desktop Technician and Apple Certified Portable Technician.
      </p>

      {/* Infinite Scroll Logos */}
      <div className="relative w-full overflow-hidden">
        <div className="flex animate-scroll gap-12">
          {loopedBrands.map((brand, index) => (
            <div
              key={index}
              className="w-28 h-28 flex-shrink-0 grayscale hover:grayscale-0 transition-all"
            >
              <img
                src={brand.logo}
                alt={brand.name}
                className="w-full h-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Animation Keyframes */}
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 20s linear infinite;
          width: max-content;
        }
      `}</style>
    </section>
  );
};

export default CertifiedExperts;