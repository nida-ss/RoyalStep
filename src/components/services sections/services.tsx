import React from 'react';

const ServicesSection: React.FC = () => {
    return (
        <div className="relative w-full py-32 overflow-hidden bg-gradient-to-br from-pink-100 via-blue-50 to-orange-50">
            {/* Background decorative elements */}
            
            {/* Large blue blur - top right */}
            <div className="absolute w-[392px] h-[398px] left-[904px] top-[-50px] bg-[#0022FF] rounded-full blur-[400px] opacity-60"></div>
            
            {/* Orange blur - left side */}
            <div className="absolute w-[306px] h-[300px] left-[70px] top-[20px] bg-[#FF8952] rounded-full blur-[225px] opacity-70"></div>
            
            {/* Orange blur - far right */}
            <div className="absolute w-[236px] h-[232px] left-[1794px] top-[-25px] bg-[#FF7230] rounded-full blur-[225px] opacity-70"></div>
            
            {/* Yellow circle - top right */}
            <div className="absolute w-[122px] h-[122px] left-[1712px] top-[-25px] bg-[#FFDD94] rounded-full blur-[10px] opacity-80"></div>
            
            {/* Pink circle - bottom left */}
            <div className="absolute w-[122px] h-[122px] left-[222px] top-[280px] bg-pink-500 rounded-full blur-[10px] opacity-80"></div>
            
            {/* Small blue circle - right */}
            <div className="absolute w-[54px] h-[54px] left-[1807px] top-[140px] bg-[#73B6D5] rounded-full blur-[15px] opacity-70"></div>
            
            {/* Small orange circle - bottom left */}
            <div className="absolute w-[54px] h-[54px] left-[142px] top-[240px] bg-[#FB6609] rounded-full blur-[15px] opacity-70 transform -rotate-[150deg]"></div>
            
            {/* Main content */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full">
                {/* Services title */}
                <h1 className="font-montserrat font-bold text-[74px] leading-[80px] tracking-[-0.02em] capitalize text-[#003B5A]">
                    Services
                </h1>
                
                {/* Description text */}
                <p className="mt-8 w-[1147px] font-montserrat font-normal text-[26px] leading-[34px] text-center capitalize text-black/70">
                    We Are Here For Your Service At Anytime In Dubai. Having Any Issue With Your Device Or Gadgets? Just Contact Us Instantly!
                </p>
                
                {/* Go Back button */}
                <div className="mt-12">
                    <button className="w-[222px] h-[66px] bg-[#003B5A] hover:bg-[#004d73] transition-colors duration-300 rounded-[33px] flex items-center justify-center text-white font-montserrat font-medium text-lg group">
                        Go Back
                        <svg 
                            className="ml-2 w-5 h-5 transform transition-transform duration-300" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ServicesSection;