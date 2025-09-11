import React from 'react';
import Card from '../ui/Card';

const WhyChooseUs: React.FC = () => {
  const reasons = [
    {
      title: "Quality Guarantee",
      description: "Royal Step Is Known For Offering The Best Computer Repair & Laptop Repair Service In Dubai. Our Guaranteed Repairing Services Will Fix Your Devices In Such A Way That They'll Operate Like New Ones. We Are Here To Offer Quality You Trust And Prices You'll Love.",
      icon: "/images/quality-icon.svg"
    },
    {
      title: "Corporate Service",
      description: "Our Specialized Team Of Technicians Is Certified To Provide State-Of-The-Art Corporate Services With Free Consultation And Estimates For Both Laptop Repair And Computer Repair Services Dubai. When It Comes To Delivering Services And Fulfills What Is Promised.",
      icon: "/images/corporate-service-icon.svg" // Assuming a new icon
    },
    {
      title: "Customer Service",
      description: "Customer Service Is The Experience We Deliver To Our Customers. We Strive To Deliver High-End Laptop Repair, Computer Repair Dubai To Our Customers And Surpass Their Expectations. Every Response Is Quick, Reliable. Engage When Interacting With Our Customers.",
      icon: "/images/customer-service-icon.svg"
    }
  ];

  return (
    <section className="bg-primary py-24 relative">
      {/* Background effects based on CSS spec */}
      <div className="absolute w-[171px] h-[172px] left-[63px] top-[2985px] md:left-16 md:top-32 bg-[#5BBBA9] opacity-30 rounded-full blur-[10px]"></div>
      <div className="absolute w-[83px] h-[83px] left-[99px] top-[3495px] md:left-24 md:bottom-20 bg-[#FB6609] opacity-30 rounded-full blur-[15px]"></div>
      <div className="absolute w-[53px] h-[53px] left-[46px] top-[3210px] md:left-12 md:top-1/2 bg-[#5F96E6] opacity-30 rounded-full blur-[15px]"></div>
      <div className="absolute w-[150px] h-[149px] left-[1843px] top-[3457px] md:right-12 md:bottom-12 bg-[#FF8383] opacity-30 rounded-full blur-[10px]"></div>
      <div className="absolute w-[77px] h-[77px] left-[1885px] top-[3026px] md:right-12 md:top-64 bg-secondary opacity-30 rounded-full blur-[15px]"></div>
      <div className="absolute w-[53px] h-[53px] left-[1753px] top-[3589px] md:right-20 md:bottom-4 bg-[#B4E173] opacity-30 rounded-full blur-[15px]"></div>
      
      <div className="container mx-auto px-4">
        <h2 className="font-montserrat font-bold text-3xl md:text-4xl lg:text-[42px] text-white text-center mb-20 leading-[30px] tracking-tight uppercase">
          Why Choose Us?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="backdrop-blur-[35px] bg-white/10 rounded-2xl p-8 border border-white/20" style={{minHeight: '510px'}}>
              <div className="w-20 h-20 mb-6 flex items-center justify-center">
                <img src={reason.icon} alt={reason.title} className="w-full h-full object-contain" />
              </div>
              <h3 className="font-montserrat font-semibold text-2xl text-white mb-4">{reason.title}</h3>
              <p className="font-montserrat font-medium text-lg text-white/80">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
