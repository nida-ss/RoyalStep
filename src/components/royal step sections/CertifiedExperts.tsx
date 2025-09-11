import React from 'react';

const CertifiedExperts: React.FC = () => {
  const brands = [
    { name: 'Apple', logo: '/images/apple-logo.png' },
    { name: 'Dell', logo: '/images/dell-logo.png' },
    { name: 'LG', logo: '/images/lg-logo.png' },
    { name: 'HP', logo: '/images/hp-logo.png' },
    { name: 'Lenovo', logo: '/images/lenovo-logo.png' },
    { name: 'Bose', logo: '/images/bose-logo.png' },
    { name: 'Asus', logo: '/images/asus-logo.png' },
    { name: 'Sony', logo: '/images/sony-logo.png' },
  ];

  return (
    <section className="container mx-auto px-4 py-24">
      <h2 className="font-montserrat font-bold text-3xl md:text-4xl lg:text-[42px] text-primary text-center mb-12 leading-10 tracking-tight uppercase">
        Certified experts
      </h2>

      <h3 className="font-montserrat font-semibold text-2xl md:text-[29px] text-black/80 text-center mb-8 leading-tight tracking-tight">
        What are your certifications and trusted companies?
      </h3>

      <p className="font-montserrat font-medium text-xl md:text-2xl text-black/50 text-center mb-16 leading-relaxed max-w-6xl mx-auto">
        For people working in business, education, and other industries, Apple offers certification programs. Our team of professionals is educated and certified in their respective industries, and they also receive advanced training from renowned organizations like Apple, Samsung, LG, and Acer, among others. Technicians are qualified and completed the trainings with certificates such as Apple Certified Macintosh Technician, Apple Certified Desktop Technician and Apple certified Portable Technician.
      </p>

      <div className="flex flex-wrap justify-center items-center gap-12">
        {brands.map((brand, index) => (
          <div key={index} className="w-24 h-24 grayscale hover:grayscale-0 transition-all">
            <img src={brand.logo} alt={brand.name} className="w-full h-full object-contain" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default CertifiedExperts;
