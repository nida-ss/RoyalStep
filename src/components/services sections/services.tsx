import React from 'react';

const ServicesSection: React.FC = () => {
    return (
        <div className="relative w-full h-screen overflow-hidden bg-gradient-to-br from-pink-100 via-blue-50 to-orange-50">
            {/* Background decorative elements */}
            
            {/* Large blue blur - top right */}
            <div className="absolute w-[392px] h-[398px] left-[904px] top-[260px] bg-blue-600 rounded-full blur-[400px] opacity-60"></div>
            
            {/* Orange blur - left side */}
            <div className="absolute w-[306px] h-[300px] left-[70px] top-[324px] bg-orange-400 rounded-full blur-[225px] opacity-70"></div>
            
            {/* Orange blur - far right */}
            <div className="absolute w-[236px] h-[232px] left-[1794px] top-[275px] bg-orange-500 rounded-full blur-[225px] opacity-70"></div>
            
            {/* Yellow circle - top right */}
            <div className="absolute w-[122px] h-[122px] left-[1712px] top-[275px] bg-yellow-300 rounded-full blur-[10px] opacity-80"></div>
            
            {/* Pink circle - bottom left */}
            <div className="absolute w-[122px] h-[122px] left-[222px] top-[586px] bg-pink-500 rounded-full blur-[10px] opacity-80 transform -rotate-[150deg]"></div>
            
            {/* Small blue circle - right */}
            <div className="absolute w-[54px] h-[54px] left-[1807px] top-[447px] bg-sky-400 rounded-full blur-[15px] opacity-70"></div>
            
            {/* Small orange circle - bottom left */}
            <div className="absolute w-[54px] h-[54px] left-[142px] top-[549px] bg-orange-600 rounded-full blur-[15px] opacity-70 transform -rotate-[150deg]"></div>
            
            {/* Main content */}
            <div className="relative z-10">
                {/* Services title */}
                <h1 className="absolute left-[875px] top-[312px] w-[313px] h-[80px] font-montserrat font-bold text-[74px] leading-[80px] tracking-[-0.02em] capitalize text-[#003B5A]">
                    Services
                </h1>
                
                {/* Description text */}
                <p className="absolute left-[459px] top-[422px] w-[1147px] h-[68px] font-montserrat font-normal text-[26px] leading-[34px] text-center capitalize text-black/70">
                    We are here for your service at anytime in dubai. having any issue with your device or gadgets? just contact us instantly!
                </p>
                
                {/* Go Back button */}
                <div className="absolute left-[922px] top-[516px] w-[222px] h-[66px]">
                    <button className="w-full h-full bg-[#003B5A] hover:bg-[#004d73] transition-colors duration-300 rounded-lg flex items-center justify-center text-white font-montserrat font-medium text-lg group">
                        Go Back
                        <svg 
                            className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ServicesSection;