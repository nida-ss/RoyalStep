import React from 'react';

const RepairServices: React.FC = () => {
  const serviceCategories = [
    { name: 'Laptop', icon: '/images/laptop-icon.svg' },
    { name: 'Computer', icon: '/images/computer-icon.svg' },
    { name: 'Printer', icon: '/images/printer-icon.svg' },
    { name: 'Camera', icon: '/images/camera-icon.svg' },
    { name: 'Gadgets', icon: '/images/gadgets-icon.svg' },
    { name: 'Tablet', icon: '/images/tablet-icon.svg' },
    { name: 'Cctv', icon: '/images/cctv-icon.svg' },
    { name: 'Data Recovery', icon: '/images/data-recovery-icon.svg' },
    { name: 'Development', icon: '/images/development-icon.svg' },
    { name: 'Mobile', icon: '/images/mobile-icon.svg' },
  ];

  const featured = [
    {
      title: 'Macbook Repair In Dubai',
      body: `You're buzzing along, firing off emails, and zooming through your digital...`,
      icon: '/images/laptop-icon.svg'
    },
    {
      title: 'IMac Repair In Dubai',
      body: `Welcome to Royal Step, your top choice for expert iMac repair services in Dubai...`,
      icon: '/images/computer-icon.svg'
    },
    {
      title: 'IPad Repair In Dubai',
      body: `Your iPad is an essential device for both personal and professional tasks...`,
      icon: '/images/tablet-icon.svg'
    },
    {
      title: 'IPhone Repair In Dubai',
      body: `Royal Step is well-known for its professional iPhone repair service in Dubai...`,
      icon: '/images/mobile-icon.svg'
    },
    {
      title: 'Hard Drive Data Recovery',
      body: `Guaranteed hard drive data recovery services in Dubai. Are you using a hard ...`,
      icon: '/images/data-recovery-icon.svg'
    },
    {
      title: 'IT Support Services',
      body: `In general, the setups, installations, and settings need to be done accurately when...`,
      icon: '/images/development-icon.svg'
    },
  ];

  return (
    <section className="relative container mx-auto px-4 py-16 mt-12">
      {/* Vector 5 background highlight (absolute) */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          width: '767px',
          height: '771.5px',
          left: -1,
          top: 2004,
          background: 'linear-gradient(146.18deg, rgba(0, 59, 90, 0.3) -28.52%, rgba(0, 126, 192, 0.06) 114.1%)',
          borderRadius: '0px',
          pointerEvents: 'none',
        }}
      />

      <h2 className="font-montserrat font-bold text-[42px] text-[#003B5A] text-center mb-12 leading-[30px] tracking-tight capitalize">
        REPAIR SERVICES WE OFFER
      </h2>

      {/* Icons row */}
      <div className="flex items-center justify-center gap-10 mb-8 flex-wrap">
        {serviceCategories.map((service, idx) => (
          <div key={idx} className="flex flex-col items-center">
            <div className="w-[118px] h-[118px] flex items-center justify-center mb-3 bg-white rounded-lg shadow-sm">
              <img src={service.icon} alt={service.name} className="w-20 h-20 object-contain" />
            </div>
            <div className="text-[18px] font-medium text-black/80 mb-2 font-montserrat">{service.name}</div>
            <div className="flex flex-col items-center gap-1">
              <div style={{ height: '1.4px', width: '40px', background: '#003B5A' }} />
              <div style={{ height: '1.4px', width: '28px', background: '#003B5A' }} />
            </div>
          </div>
        ))}
      </div>

      {/* Featured service cards: two rows of three cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        {featured.map((card, i) => (
          <div key={i} className="rounded-xl">
            {/* gradient border wrapper */}
            <div className="p-[2px] rounded-xl" style={{ background: 'linear-gradient(135deg,#f0d6ff, #dbeafe, #fff0f6)' }}>
              <div className="bg-white rounded-lg h-[410px] flex flex-col items-center p-6">
                <div className="w-28 h-28 flex items-center justify-center mb-4 rounded-lg bg-[#f8fafc]">
                  <img src={card.icon} alt="" className="w-16 h-16 object-contain" />
                </div>
                <h3 className="text-[28px] font-semibold text-[#003B5A] text-center mb-3">
                  {card.title}
                </h3>
                <p className="text-[19px] text-black/60 text-center max-w-[336px]">{card.body}</p>
                <div className="mt-auto pt-4">
                  <button className="mt-6 bg-transparent border border-[#003B5A] text-[#003B5A] px-6 py-2 rounded-full">Learn More</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RepairServices;
