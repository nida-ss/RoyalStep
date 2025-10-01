import React from 'react';

const DataRecoverySection: React.FC = () => {
  return (
    <section className="relative w-full bg-gradient-to-br from-slate-50 to-blue-50 overflow-hidden">
      {/* Background Decorative Ellipses */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Large blur ellipses */}
        <div className="absolute w-72 h-72 bg-pink-500 rounded-full blur-[250px] opacity-60 top-[70%] right-[10%]" />
        <div className="absolute w-64 h-64 bg-blue-600 rounded-full blur-[250px] opacity-50 top-[30%] left-[5%]" />
        <div className="absolute w-64 h-64 bg-orange-400 rounded-full blur-[250px] opacity-50 top-[50%] left-[40%]" />
        <div className="absolute w-56 h-56 bg-orange-500 rounded-full blur-[200px] opacity-50 top-[15%] right-[15%]" />

        {/* Small decorative ellipses */}
        <div className="absolute w-20 h-20 bg-yellow-300 rounded-full blur-sm opacity-70 bottom-[15%] left-[10%]" />
        <div className="absolute w-12 h-12 bg-red-400 rounded-full blur-sm opacity-70 bottom-[10%] left-[20%]" />
        <div className="absolute w-16 h-16 bg-green-400 rounded-full blur-sm opacity-70 bottom-[20%] right-[10%]" />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 container mx-auto px-4 py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          
          {/* Left Content Section */}
          <div className="space-y-6 lg:space-y-8">
            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 leading-tight tracking-tight capitalize font-montserrat">
              Hard drive data Recovery
            </h1>
            
            {/* First Paragraph */}
            <p className="text-lg md:text-xl text-black/60 leading-relaxed font-montserrat max-w-3xl">
              Are you using a hard disk or a hard drive to store large volumes of data? If so, losing the data due to device failure can bring a big problem. It is when you need hard drive data recovery services from Royal Step. 
              Royal Step has specialization in offering hard-drive data recovery services in Dubai. Whether it is an internal hard drive of a laptop/desktop or an external hard disk, we know how to fix the problem and retrieve all data. We have certified experts to handle hard drive data-related issues and restore the required data at your preferred location.
            </p>
            
            {/* Second Paragraph */}
            <p className="text-lg md:text-xl text-black/60 leading-relaxed font-montserrat max-w-3xl">
              Do you need immediate hard drive data recovery services? Contact Royal Step.
            </p>
            
            {/* CTA Button */}
            <div className="pt-4">
              <button className="group relative inline-flex items-center gap-3 bg-slate-800 hover:bg-slate-700 text-white px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold text-base md:text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
                See Services
                <svg 
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </div>
          
          {/* Right Image Section */}
          <div className="relative">
            {/* Main Image */}
            <div className="relative">
              <img 
                src="harddrive-data.png" 
                alt="Hard drive recovery service" 
                className="w-full max-w-xl h-auto rounded-2xl shadow-2xl object-cover mx-auto"
              />
              
              {/* Overlay Badge */}
              <div className="absolute bottom-6 left-6 bg-slate-800 text-white px-4 py-2 md:px-6 md:py-3 rounded-lg font-semibold shadow-lg text-sm md:text-base">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0-1-1h-2z" />
                  </svg>
                  Guaranteed data recovery services in Dubai
                </div>
              </div>
            </div>
            
            {/* Secondary Image */}
            <div className="absolute -top-6 -right-6 hidden lg:block">
              <img 
                src="drive-data.png" 
                alt="External drive recovery" 
                className="w-52 h-52 rounded-2xl shadow-xl object-cover border-4 border-white"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DataRecoverySection;
