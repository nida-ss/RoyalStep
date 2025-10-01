import React from "react";

const services = [
  {
    title: "Macbook Repair In Dubai",
    description:
      "You're Buzzing Along, Firing Off Emails, And Zooming Through Your Digital World On Your MacBook. Suddenly, Disaster Strikes. Your Screen Glitches Or Worse...",
    image: "image 4.png",
  },
  {
    title: "IMac Repair In Dubai",
    description:
      "Welcome To Royal Step, Your Top Choice For Expert iMac Repair Services In Dubai. Since The iMac’s Debut In 1998, Apple Has Set The Standard For Sleek Design...",
    image: "image 4.png",
  },
  {
    title: "IPad Repair In Dubai",
    description:
      "Your iPad Is An Essential Device For Both Personal And Professional Tasks. Making Accidental Drops Or Water Exposure Highly Inconvenient. These Accidents...",
    image: "image 4.png",
  },
  {
    title: "IPhone Repair In Dubai",
    description:
      "Royal Step Is Well-Known For Its Professional iPhone Repair Service In Dubai, Delivering A One-Stop Repair Solution For Different Versions Of iPhone Devices...",
    image: "image 4.png",
  },
  {
    title: "Hard Drive Data Recovery",
    description:
      "Guaranteed Hard Drive Data Recovery Services In Dubai. Are You Using A Hard Disk Or A Hard Drive To Store Large Volumes Of Data? If So, Losing The Data...",
    image: "image 4.png",
  },
  {
    title: "IT Support Services",
    description:
      "In General, The Setups, Installations, And Settings Need To Be Done Accurately When Buying New Computers, Laptops, Or Workstations, Whether For The Home...",
    image: "image 4.png",
  },
];

export default function ServicesSection() {
  return (
    <section className="relative px-6 py-20 overflow-hidden">
      {/* 🎨 Blob Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-[392px] h-[398px] left-[70%] top-[-50px] bg-[#0022FF] rounded-full blur-[400px] opacity-60"></div>
        <div className="absolute w-[306px] h-[300px] left-[70px] top-[20px] bg-[#FF8952] rounded-full blur-[225px] opacity-70"></div>
        <div className="absolute w-[236px] h-[232px] right-[-50px] top-[-25px] bg-[#FF7230] rounded-full blur-[225px] opacity-70"></div>
        <div className="absolute w-[122px] h-[122px] right-[100px] top-[-25px] bg-[#FFDD94] rounded-full blur-[10px] opacity-80"></div>
        <div className="absolute w-[122px] h-[122px] left-[220px] top-[280px] bg-pink-500 rounded-full blur-[10px] opacity-80"></div>
        <div className="absolute w-[54px] h-[54px] right-[60px] top-[140px] bg-[#73B6D5] rounded-full blur-[15px] opacity-70"></div>
        <div className="absolute w-[54px] h-[54px] left-[140px] top-[240px] bg-[#FB6609] rounded-full blur-[15px] opacity-70 transform -rotate-[150deg]"></div>
      </div>

      {/* Content Wrapper */}
      <div className="relative max-w-7xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Services</h2>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          We Are Here For Your Service At Anytime In Dubai. Having Any Issue
          With Your Device Or Gadgets? Just Contact Us Instantly!
        </p>

        {/* Go Back Button */}
        <div className="mt-6">
          <a
            href="/"
            className="inline-flex items-center px-6 py-2 bg-blue-600 text-white font-medium rounded-full shadow hover:bg-blue-700 transition"
          >
            Go Back →
          </a>
        </div>

        {/* Service Cards */}
        <div className="mt-12 grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-800">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm text-gray-600">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
