import React from "react";
import Button from "../ui/Button";
import { Link } from 'react-router-dom';
const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-tr from-[#fdfbfb] ">
      {/* Background colorful blobs */}
      <div aria-hidden className="absolute inset-0 -z-10">
        {/* Orange (bottom-left) */}
        <div className="absolute w-[420px] h-[420px] rounded-full bg-[#FF8952] opacity-70 blur-[160px] bottom-[-50px] left-[-80px]" />
        {/* Pink (top-right) */}
        <div className="absolute w-[480px] h-[480px] rounded-full bg-[#FC4798] opacity-70 blur-[180px] top-[-80px] right-[-80px]" />
        {/* Cyan (center area) */}
        <div className="absolute w-[360px] h-[360px] rounded-full bg-[#47FFFC] opacity-60 blur-[160px] top-[35%] left-[40%]" />
        {/* Green (bottom-right) */}
        <div className="absolute w-[320px] h-[320px] rounded-full bg-[#6FFFD9] opacity-60 blur-[150px] bottom-[-60px] right-[120px]" />
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-16 lg:py-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="max-w-2xl">
            <h1 className="font-montserrat font-bold text-4xl md:text-6xl lg:text-[64px] leading-tight text-[#003B5A] mb-6">
              Hire The Best Computer Repair Services In Dubai
            </h1>
            <p className="font-montserrat text-lg md:text-xl text-black/70 mb-8">
              We Are Here For Your Service At Anytime In Dubai. Having Any Issue
              With Your Device Or Gadgets? Just Contact Us Instantly!
            </p>
            <div className="flex gap-4">
             <Link to={'/services'}> <Button className="px-8 py-3 flex items-center gap-2">
                See Services →
              </Button></Link>
              <Button variant="outline" className="px-8 py-3">
                More
              </Button>
            </div>
          </div>

          {/* Right Card */}
          <div className="w-full max-w-lg bg-white/70 backdrop-blur-xl border border-white/30 shadow-lg rounded-2xl p-8">
            <h3 className="font-montserrat font-bold text-2xl text-[#003B5A] mb-2">
              Repair Services
            </h3>
            <p className="text-black/70 mb-6">
              Please Select Your Device With Model & Color Of Your Mobile. Select
              The Desired Service And Find Pricing.
            </p>

            {/* Input */}
            <input
              placeholder="Device Name"
              className="w-full h-12 px-4 rounded-md border border-black/20 mb-4 outline-none focus:ring-2 focus:ring-[#003B5A]/40"
            />

            {/* Proceed Button */}
            <Button className="w-full h-12 mb-6">Proceed</Button>

            {/* Features Row */}
           {/* Features Row */}
<div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
  {[
    {
      icon: "/electrition.svg",
      title: "Enter Device Address",
      desc: "WE REPAIR ALL TYPES OF ELECTRONICS",
    },
    {
      icon: "/address.svg",
      title: "Enter Device Address",
      desc: "ENTER THE DELIVERY ADDRESS",
    },
    {
      icon: "/pickndrop.svg",
      title: "Free Diagnosis",
      desc: "FREE DIAGNOSIS, PICKUP AND DROP",
    },
    {
      icon: "/oldstuff.svg",
      title: "We Bring Back",
      desc: "BUY BACK GET RID OF YOUR OLD STUFF",
    },
  ].map((f, i) => (
    <div key={i} className="flex flex-col items-center">
      <img
        src={f.icon}
        alt={f.title}
        className="w-12 h-12 mb-3 object-contain"
      />
      
      <div className="text-xs text-black/60 leading-4">{f.desc}</div>
    </div>
  ))}
</div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
