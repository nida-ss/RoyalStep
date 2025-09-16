import React from "react";

const WhyChooseUs: React.FC = () => {
  const reasons = [
    {
      title: "Quality Guarantee",
      description:
        "Royal Step Is Known For Offering The Best Computer Repair & Laptop Repair Service In Dubai. Our Guaranteed Repairing Services Will Fix Your Devices In Such A Way That They'll Operate Like New Ones. We Are Here To Offer Quality You Trust And Prices You'll Love.",
      icon: "quality-grauntee.svg",
    },
    {
      title: "Corporate Service",
      description:
        "Our Specialized Team Of Technicians Is Certified To Provide State-Of-The-Art Corporate Services With Free Consultation And Estimates For Both Laptop Repair And Computer Repair Services Dubai. When It Comes To Delivering Services And Fulfills What Is Promised.",
      icon: "corporate-service.svg",
    },
    {
      title: "Customer Service",
      description:
        "Customer Service Is The Experience We Deliver To Our Customers. We Strive To Deliver High-End Laptop Repair, Computer Repair Dubai To Our Customers And Surpass Their Expectations. Every Response Is Quick, Reliable. Engage When Interacting With Our Customers.",
      icon: "customer-service.svg",
    },
  ];

  return (
    <section className="bg-primary py-16 md:py-24 relative overflow-hidden">
      {/* Decorative background blobs */}
      <div className="absolute w-40 h-40 left-6 top-32 md:left-16 md:top-20 bg-[#5BBBA9] opacity-30 rounded-full blur-2xl"></div>
      <div className="absolute w-24 h-24 left-12 bottom-20 md:left-24 md:bottom-10 bg-[#FB6609] opacity-30 rounded-full blur-xl"></div>
      <div className="absolute w-16 h-16 left-8 top-1/2 md:left-12 bg-[#5F96E6] opacity-30 rounded-full blur-xl"></div>
      <div className="absolute w-40 h-40 right-8 bottom-12 bg-[#FF8383] opacity-30 rounded-full blur-2xl"></div>
      <div className="absolute w-20 h-20 right-10 top-24 md:top-64 bg-secondary opacity-30 rounded-full blur-xl"></div>
      <div className="absolute w-16 h-16 right-20 bottom-4 bg-[#B4E173] opacity-30 rounded-full blur-xl"></div>

      <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <h2 className="font-montserrat font-bold text-2xl sm:text-3xl md:text-4xl lg:text-[42px] text-white text-center mb-12 md:mb-20 leading-snug tracking-tight uppercase">
          Why Choose Us?
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="flex flex-col justify-start text-center backdrop-blur-2xl bg-white/10 rounded-2xl p-6 sm:p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 h-full"
            >
              {/* Top: Icon */}
              <div className="flex justify-center mb-6">
                <img
                  src={reason.icon}
                  alt={reason.title}
                  className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 object-contain"
                />
              </div>

              {/* Middle: Title + Description */}
              <div className="flex-1 flex flex-col">
                <h3 className="font-montserrat font-semibold text-lg sm:text-xl md:text-2xl text-white mb-4">
                  {reason.title}
                </h3>
                <p className="font-montserrat font-medium text-sm sm:text-base md:text-lg text-white/80 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
