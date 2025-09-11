import React from 'react';
import Button from '../ui/Button';

// Hero section re-created according to the provided CSS spec and demo image
const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden">

  {/* Decorative blurred ellipses */}
      <div aria-hidden className="absolute inset-0 pointer-events-none hidden lg:block">
        {/* Ellipse 1 */}
        <div className="absolute w-[356px] h-[362px] rounded-full bg-[#0022FF] blur-[400px] opacity-70 left-1/2 -translate-x-1/2 top-[20rem]" />
        {/* Ellipse 2 */}
        <div className="absolute w-[384px] h-[379px] rounded-full bg-[#FC4798] blur-[320px] opacity-70 right-[2rem] bottom-[8rem]" />
        {/* Ellipse 3 */}
        <div className="absolute w-[292px] h-[288px] rounded-full bg-[#47FFFC] blur-[300px] opacity-70 left-[2rem] bottom-[6rem]" />
        {/* Ellipse 7 */}
        <div className="absolute w-[306px] h-[300px] rounded-full bg-[#FF8952] blur-[225px] opacity-70 left-[7rem] top-[20rem]" />
        {/* Ellipse 8 + 4 + 5 cluster */}
        <div className="absolute w-[236px] h-[232px] rounded-full bg-[#FF7230] blur-[225px] opacity-70 right-[2rem] top-[10rem]" />
        <div className="absolute w-[176px] h-[176px] rounded-full bg-[#FF8383] blur-[10px] opacity-80 right-[2.5rem] top-[9rem]" />
        <div className="absolute w-[82px] h-[82px] rounded-full bg-[#6FFFD9] blur-[15px] opacity-90 right-[1rem] top-[18rem]" />
        {/* Ellipse 6 */}
        <div className="absolute w-[218px] h-[218px] rounded-full bg-[#FFA46F] blur-[10px] opacity-80 left-1/2 top-[48rem]" />
      </div>

      {/* Main hero content */}
      <div className="container mx-auto px-4 py-10 md:py-14 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-start">
          {/* Left content */}
          <div className="relative z-10 max-w-3xl">
            <h1 className="font-montserrat font-bold text-4xl md:text-6xl lg:text-[80px] leading-tight lg:leading-[90px] text-[#003B5A] tracking-tight capitalize mb-6">
              Hire the best Computer repair services in dubai
            </h1>
            <p className="font-montserrat text-lg md:text-2xl lg:text-[30px] lg:leading-[38px] text-black/70 mb-8 md:mb-10 capitalize">
              We are here for your service at anytime in dubai. having any issue with your device or gadgets? just contact us instantly!
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="px-8 py-3">See Services</Button>
              <Button variant="outline" className="px-8 py-3">More</Button>
            </div>
          </div>

          {/* Right blurred panel (Frame 10) */}
          <div className="relative z-10">
            <div className="w-full lg:w-[749px] h-auto rounded-2xl bg-white/40 backdrop-blur-[60px] border border-[#003B5A]/20 shadow-[0_8px_40px_rgba(0,0,0,0.08)] p-6 md:p-8">
              <div className="mb-4">
                <h3 className="font-montserrat font-bold text-2xl md:text-3xl text-[#003B5A]">Repair Services</h3>
                <p className="font-montserrat text-black/70 mt-1">Please select your device with model & color of your mobile, select the desired service and find pricing.</p>
              </div>
              <div className="space-y-4">
                <label className="block">
                  <span className="block text-sm font-medium text-black/70 mb-1">Device Name</span>
                  <input
                    className="w-full h-12 rounded-md border border-black/15 bg-white/70 px-4 outline-none focus:ring-2 focus:ring-[#003B5A]/40"
                    placeholder="Select device"
                  />
                </label>
                <Button className="w-full h-12">Proceed</Button>
              </div>

              {/* Feature row */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6 p-4 border border-[#003B5A]/20 rounded-xl">
                {[
                  { title: 'We pickup device', desc: 'from selected location' },
                  { title: 'Enter device address', desc: 'for pickup' },
                  { title: 'Free diagnosis', desc: 'no fix no fee' },
                  { title: 'We bring back', desc: 'your fixed stuff' },
                ].map((f, i) => (
                  <div key={i} className="text-center">
                    <div className="mx-auto mb-2 size-9 rounded-md bg-[#003B5A]/10" />
                    <div className="text-sm font-semibold text-black/80 leading-5">{f.title}</div>
                    <div className="text-xs text-black/60 leading-4">{f.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
