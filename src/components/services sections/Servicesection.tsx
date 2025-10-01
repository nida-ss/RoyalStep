import React from "react";

const ServiceCards = ({ services }) => {
  return (
    <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
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
            <p className="mt-2 text-sm text-gray-600">{service.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default function ServicesSection({
  title = "",
  subtitle,
  services,
  bg = "bg-white", // default white background
  blobs = false, // toggle blob background
}) {
  return (
    <section className={`relative px-6 py-16 overflow-hidden ${bg}`}>
      {/* 🎨 Optional Blob Background */}
      {blobs && (
        <div className="absolute inset-0 -z-10">
          <div className="absolute w-[392px] h-[398px] left-[70%] top-[-50px] bg-[#0022FF] rounded-full blur-[400px] opacity-60"></div>
          <div className="absolute w-[306px] h-[300px] left-[70px] top-[20px] bg-[#FF8952] rounded-full blur-[225px] opacity-70"></div>
          <div className="absolute w-[236px] h-[232px] right-[-50px] top-[-25px] bg-[#FF7230] rounded-full blur-[225px] opacity-70"></div>
          <div className="absolute w-[122px] h-[122px] right-[100px] top-[-25px] bg-[#FFDD94] rounded-full blur-[10px] opacity-80"></div>
          <div className="absolute w-[122px] h-[122px] left-[220px] top-[280px] bg-pink-500 rounded-full blur-[10px] opacity-80"></div>
          <div className="absolute w-[54px] h-[54px] right-[60px] top-[140px] bg-[#73B6D5] rounded-full blur-[15px] opacity-70"></div>
          <div className="absolute w-[54px] h-[54px] left-[140px] top-[240px] bg-[#FB6609] rounded-full blur-[15px] opacity-70 transform -rotate-[150deg]"></div>
        </div>
      )}

      <div className="relative max-w-7xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">{title}</h2>
        {subtitle && (
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}

        {/* Cards */}
        <div className="mt-12">
          <ServiceCards services={services} />
        </div>
      </div>
    </section>
  );
}
