import React from 'react';
import Card from '../ui/Card';

const ServiceCards: React.FC = () => {
  const firstRowServices = [
    {
      title: "Macbook Repair in Dubai",
      description: "You're buzzing along, firing off emails, and zooming through your digital...",
      icon: "/images/macbook-repair.svg"
    },
    {
      title: "iMac Repair in Dubai",
      description: "Welcome to Royal Step, your top choice for expert iMac repair services in Dubai...",
      icon: "/images/imac-repair.svg"
    },
    {
      title: "iPad Repair in Dubai",
      description: "Your iPad is an essential device for both personal and professional tasks, making...",
      icon: "/images/ipad-repair.svg"
    },
    {
      title: "iPhone Repair in Dubai",
      description: "Royal Step is well-known for its professional iphone repair service in Dubai...",
      icon: "/images/iphone-repair.svg"
    }
  ];

  const secondRowServices = [
    {
      title: "Hard Drive Data Recovery",
      description: "Guaranteed hard drive data recovery services in Dubai. Are you using a hard...",
      icon: "/images/hard-drive-recovery.svg"
    },
    {
      title: "IT Support Services",
      description: "In general, the setups, installations, and settings need to be done accurately when..",
      icon: "/images/it-support.svg"
    },
    {
      title: "Network and WiFi Services",
      description: "Royal Step is the number one choice when it comes to finding out for seamless...",
      icon: "/images/wifi-services.svg"
    }
  ];

  const renderServiceCard = (service: any) => (
    <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-md p-8 flex flex-col items-center h-[410px]">
      <div className="w-[180px] h-[180px] mb-6">
        <img src={service.icon} alt={service.title} className="w-full h-full object-contain" />
      </div>
      <h3 className="font-montserrat font-semibold text-2xl md:text-[28px] text-primary text-center leading-[30px] mb-4">{service.title}</h3>
      <p className="font-montserrat font-medium text-lg text-black/60 text-center">{service.description}</p>
    </div>
  );

  return (
    <section className="container mx-auto px-4 py-16 relative">
      {/* Background effect */}
      <div className="absolute w-[767px] h-[771.5px] left-0 top-0 -z-10 bg-gradient-to-br from-primary/30 to-accent/6 -translate-y-40"></div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
        {firstRowServices.map((service, index) => (
          <div key={index}>
            {renderServiceCard(service)}
          </div>
        ))}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {secondRowServices.map((service, index) => (
          <div key={index}>
            {renderServiceCard(service)}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceCards;
