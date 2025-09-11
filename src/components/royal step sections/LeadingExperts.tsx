import React from 'react';

const LeadingExperts: React.FC = () => {
  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="font-montserrat font-bold text-3xl md:text-4xl lg:text-[42px] text-primary text-center mb-16 leading-10 tracking-tight uppercase">
        LEADING EXPERTS OF COMPUTER REPAIR SERVICE<br />& LAPTOP REPAIR SERVICE IN DUBAI
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="order-2 lg:order-1">
          <p className="font-montserrat font-medium text-xl md:text-2xl lg:text-2xl text-black/50 mb-10 leading-relaxed">
            Royal Step, the best computer repair Service shop in Dubai, provides a wide range of repair services for a gamut of devices including PCs, laptops, cameras, iphones, and more. With the right level of knowledge and expertise, we are here to ensure your devices function at their best. We are also experienced in offering customized software solutions to businesses across varied industry verticals. Reach us now.
          </p>

          <h3 className="font-montserrat font-semibold text-2xl text-black/80 mb-6 tracking-tight">
            Computer Repair Shop Near Me in Dubai, UAE
          </h3>

          <p className="font-montserrat font-medium text-xl md:text-2xl lg:text-2xl text-black/50 leading-relaxed">
            Just Type computer repair shop near me If you're in Dubai, UAE, we're here to help with your computer repair needs. Our team is ready to assist you at your doorstep within minutes. Contact us now!
          </p>
        </div>

        <div className="order-1 lg:order-2">
          <img 
            src="/images/computer-repair-expert.jpg" 
            alt="Computer Repair Expert"
            className="w-full h-auto rounded-2xl" 
          />
        </div>
      </div>
    </section>
  );
};

export default LeadingExperts;
