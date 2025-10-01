import React from "react";

const WhyChooseUs: React.FC = () => {
  const reasons = [
    {
      title: "Quality Guarantee",
      description:
        "Royal Step is known for offering the best computer repair & laptop repair service in Dubai. Our guaranteed repairing services will fix your devices so they'll operate like new ones. We are here to offer quality you trust and prices you'll love.",
      icon: "quality-grauntee.svg",
    },
    {
      title: "Corporate Service",
      description:
        "Our specialized team of technicians is certified to provide state-of-the-art corporate services with free consultation and estimates for both laptop and computer repair. We deliver what we promise with reliability and precision.",
      icon: "corporate-service.svg",
    },
    {
      title: "Customer Service",
      description:
        "Customer service is the experience we deliver to our customers. We strive to exceed expectations in every interaction with quick, reliable, and high-end computer repair services across Dubai.",
      icon: "customer-service.svg",
    },
  ];

  return (
    <section className="bg-primary py-16 md:py-20 lg:py-24 relative overflow-hidden">
      {/* Floating background blobs */}
      <div className="absolute w-40 h-40 left-6 top-32 md:left-16 md:top-20 bg-[#5BBBA9] opacity-30 rounded-full blur-1xl animate-float-slow"></div>
      <div className="absolute w-24 h-24 left-12 bottom-20 md:left-24 md:bottom-10 bg-[#FB6609] opacity-30 rounded-full blur-1xl animate-float"></div>
      <div className="absolute w-16 h-16 left-8 top-1/2 md:left-12 bg-[#5F96E6] opacity-30 rounded-full blur-xl animate-float-fast"></div>
      <div className="absolute w-40 h-40 right-8 bottom-12 bg-[#FF8383] opacity-30 rounded-full blur-1xl animate-float"></div>
      <div className="absolute w-20 h-20 right-10 top-24 md:top-64 bg-secondary opacity-30 rounded-full blur-1xl animate-float-slow"></div>
      <div className="absolute w-16 h-16 right-20 bottom-4 bg-[#B4E173] opacity-30 rounded-full blur-xl animate-float-fast"></div>

      <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <h2 className="font-montserrat font-bold text-2xl sm:text-3xl md:text-4xl lg:text-[38px] xl:text-[42px] text-white text-center mb-12 md:mb-16 lg:mb-20 leading-snug tracking-tight uppercase">
          Why Choose Us?
        </h2>

        {/* ✅ Cards shrink to content height */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 justify-items-center max-w-6xl mx-auto">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="flex flex-col text-center backdrop-blur-2xl bg-white/10 rounded-2xl 
                         p-6 sm:p-8 border border-white/20 
                         transition-all duration-300 transform 
                         hover:scale-105 hover:shadow-xl hover:shadow-white/20 hover:bg-white/20 
                         max-w-[350px] w-full mx-auto"
            >
              {/* Icon */}
              <div className="flex justify-center mb-6">
                <img
                  src={reason.icon}
                  alt={reason.title}
                  className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 object-contain"
                />
              </div>

              {/* Text */}
              <div>
                <h3 className="font-montserrat font-semibold text-lg sm:text-xl lg:text-[22px] text-white mb-4">
                  {reason.title}
                </h3>
                <p className="font-montserrat font-medium text-sm sm:text-base lg:text-[17px] text-white/80 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Floating Animation Styles */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translate(0px, 0px); }
          25% { transform: translate(12px, -15px); }
          50% { transform: translate(0px, -25px); }
          75% { transform: translate(-12px, -15px); }
        }
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        .animate-float-slow {
          animation: float 12s ease-in-out infinite;
        }
        .animate-float-fast {
          animation: float 5s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default WhyChooseUs;
