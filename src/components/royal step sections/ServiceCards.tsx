import React from "react"; 

const services = [
  { title: "Laptop", icon: "laptop-icon.svg" },
  { title: "Computer", icon: "computer-icon.svg" },
  { title: "Printer", icon: "printer-icon.svg" },
  { title: "Camera", icon: "camera-icon.svg" },
  { title: "Gadgets", icon: "gadgets-icon.svg" },
  { title: "Tablet", icon: "tablet-icon.svg" },
  { title: "CCTV", icon: "ctv-icon.svg" },
  { title: "Data Recovery", icon: "data-recovery-icon.svg" },
  { title: "Development", icon: "development-icon.svg" },
  { title: "Mobile", icon: "mobile-icon.svg" },
];

const repairCards = [
  {
    title: "Macbook Repair In Dubai",
    desc: "You’re Buzzing Along, Firing Off Emails, And Zooming Through Your Digital...",
    icon: "mackbook.svg",
  },
  {
    title: "iMac Repair In Dubai",
    desc: "Welcome To Royal Step, Your Top Choice For Expert iMac Repair Services In Dubai...",
    icon: "imac.svg",
  },
  {
    title: "iPad Repair In Dubai",
    desc: "Your iPad Is An Essential Device For Both Personal And Professional Tasks...",
    icon: "ipad.svg",
  },
  {
    title: "iPhone Repair In Dubai",
    desc: "Royal Step Is Well-Known For Its Professional iPhone Repair Service In Dubai...",
    icon: "iphone.svg",
  },
  {
    title: "Hard Drive Data Recovery",
    desc: "Guaranteed Hard Drive Data Recovery Services In Dubai. Are You Using A Hard...",
    icon: "harddrive.svg",
  },
  {
    title: "IT Support Services",
    desc: "In General, The Setups, Installations, And Settings Need To Be Done Accurately When...",
    icon: "it-support.svg",
  },
  {
    title: "Network And WiFi Services",
    desc: "Royal Step Is The Number One Choice When It Comes To Finding Out For Seamless...",
    icon: "wifi.svg",
  },
];

export default function ServicesSection() {
  return (
    <section className="py-16 bg-gradient-to-tr from-blue-50 via-pink-50 to-purple-50 relative">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
          REPAIR SERVICES WE OFFER
        </h2>

        {/* Top Icons Row */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-10 gap-6 mb-16">
          {services.map((s, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center text-sm font-medium text-gray-700"
            >
              <div className="p-3 rounded-xl">
                <img src={s.icon} alt={s.title} className="w-10 h-10 object-contain" />
              </div>
              <span className="mt-2">{s.title}</span>
            </div>
          ))}
        </div>

        {/* Cards with gradient outline */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {repairCards.map((card, i) => (
            <div
              key={i}
              className="relative w-full max-w-[440px] h-[410px] p-[2px] rounded-xl animate-borderMove 
                         bg-gradient-to-r from-[#0088FF] via-[#FB6609] via-[#FC4798] via-[#5BBBA9] to-[#8A38F5] 
                         bg-[length:400%_400%]"
            >
              {/* Inner card */}
              <div className="bg-white rounded-xl h-full flex flex-col justify-center items-center text-center shadow-md p-6 hover:shadow-xl transition">
                <img
                  src={card.icon}
                  alt={card.title}
                  className="w-16 h-16 object-contain mb-4"
                />
                <h3 className="font-semibold text-lg mb-3">{card.title}</h3>
                <p className="text-sm text-gray-600 line-clamp-3 min-h-[72px]">
                  {card.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Animated gradient border keyframes */}
      <style>{`
        @keyframes borderMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-borderMove {
          animation: borderMove 8s linear infinite;
        }
      `}</style>
    </section>
  );
}
