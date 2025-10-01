import React from 'react';

const LeadingExperts: React.FC = () => {
  return (
    <section className="relative py-20 bg-gradient-to-br from-white via-blue-50/30 to-white">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Heading */}
        <h2 className="font-montserrat font-bold text-2xl sm:text-3xl md:text-4xl lg:text-[40px] text-primary text-center mb-14 leading-snug tracking-tight uppercase max-w-4xl mx-auto">
          Leading Experts of Computer Repair Service & Laptop Repair Service in Dubai
        </h2>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Section */}
          <div className="order-2 lg:order-1 max-w-[520px] mx-auto lg:mx-0">
            <p className="font-montserrat font-medium text-lg md:text-xl text-black/70 mb-8 leading-relaxed">
              Royal Step, the best computer repair service shop in Dubai, provides a wide range of repair services 
              for PCs, laptops, cameras, iPhones, and more. With the right knowledge and expertise, we ensure your 
              devices function at their best. We also deliver customized software solutions for businesses across 
              diverse industries. Reach us today.
            </p>

            <h3 className="font-montserrat font-semibold text-xl md:text-2xl text-black/90 mb-5 tracking-tight">
              Computer Repair Shop Near Me in Dubai, UAE
            </h3>

            <p className="font-montserrat font-medium text-lg md:text-xl text-black/70 leading-relaxed">
              Just type <span className="font-semibold text-primary">computer repair shop near me</span> if you're 
              in Dubai, UAE. Our team is ready to assist you at your doorstep within minutes. Contact us now!
            </p>
          </div>

          {/* Image Section */}
          <div className="order-1 lg:order-2 flex justify-center">
            <img
              src="computer-repair-expert.png"
              alt="Computer Repair Expert"
              className="w-full max-w-[480px] lg:max-w-[520px] rounded-2xl shadow-lg object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadingExperts;
