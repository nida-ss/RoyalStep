import React from 'react';

const Achievements: React.FC = () => {
  const stats = [
    {
      value: "4.5",
      description: "Our official rating on Google.",
      icon: "/images/rating-icon.svg"
    },
    {
      value: "10k+",
      description: "Total repairing completed.",
      icon: "/images/repairing-icon.svg"
    },
    {
      value: "15+",
      description: "Businesses we're running.",
      icon: "/images/businesses-icon.svg"
    },
    {
      value: "90%",
      description: "CSAT all over countries we serve",
      icon: "/images/csat-icon.svg"
    }
  ];

  return (
    <section className="container mx-auto px-4 py-24 relative">
      {/* Decorative background gradient (Vector 6) */}
      <div 
        aria-hidden="true" 
        className="absolute top-0 right-0 transform -translate-y-1/4 translate-x-1/4"
        style={{
          width: '767px',
          height: '771.5px',
          background: 'linear-gradient(140.23deg, rgba(0, 126, 192, 0.06) 46.87%, rgba(0, 59, 90, 0.3) 166.67%)',
          transform: 'rotate(180deg)',
          pointerEvents: 'none',
          zIndex: -1
        }}
      />

      <h2 className="font-montserrat font-bold text-3xl md:text-4xl lg:text-[42px] text-primary text-center mb-20 leading-[30px] tracking-tight uppercase">
        Our Achievement
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((stat, index) => (
          <div 
            key={index} 
            className="p-1 rounded-2xl bg-gradient-to-br from-purple-200 via-pink-200 to-blue-200"
          >
            <div className="bg-white rounded-xl p-8 flex flex-col items-center justify-center h-full">
              <div className="w-24 h-24 mb-6">
                <img src={stat.icon} alt="" className="w-full h-full object-contain" />
              </div>
              <h3 
                className="font-montserrat font-medium text-6xl md:text-7xl lg:text-[90px] text-primary text-center leading-[80px] tracking-tighter mb-4"
                style={{ letterSpacing: '-0.04em' }}
              >
                {stat.value}
              </h3>
              <p 
                className="font-montserrat font-medium text-xl md:text-2xl text-black/60 text-center leading-[30px] tracking-tight"
                style={{ letterSpacing: '-0.02em' }}
              >
                {stat.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
