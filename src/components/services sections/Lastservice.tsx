import ServiceCards from "./Servicesection";

const servicesBlue = [
  {
    title: "CCTV Services Dubai",
    description: "Royal step cctv service provider Protect Your Property with Reliable CCTV Services. Whether it's your home or business, you want to ensure ...",
    image: "image 4.png",
  },
  {
    title: "Computer Repair Sharjah",
    description: "In today's digital world, businesses heavily rely on their IT infrastructure. Managing and maintaining this complex technology .....",
    image: "image 4.png",
  },
  {
    title: "laptop repair in Dubai ",
    description: "Home Service Computer Repair: Convenient, Reliable, and Efficient In today’s tech-driven world, having a functional computer is essential for both personal...",
    image: "image 4.png",
  },
  {
    title: "Structured Cabling Services in Dubai",
    description: "Your Trusted Partner for Structured Cabling Services in Dubai. in Dubai, committed to delivering ...",
    image: "image 4.png",
  },
  {
    title: "Data Recovery Abu Dhabi",
    description: "Guaranteed Hard Disk Data Recovery Service in Dubai. Are you using a hard disk or a hard drive to store large volumes of data? It’s when you need ...",
    image: "image 4.png",
  },
  {
    title: "Buy Back Trade in UAE",
    description: "Your Trusted Partner for Buy Back Trade in UAE. Royal Step is a leading name in Buy Back Trade in the UAE, devices. Whether you have an iPhone, MacBook ...",
    image: "image 4.png",
  },
  // ... add more services
];

const servicesWhite = [
  {
    title: "CCTV Installation Company in Dubai",
    description: "Your Trusted Partner for CCTV Installation Service in Dubai. in Dubai, dedicated to delivering ......",
    image: "image 4.png",
  },
  {
    title: "Website Development Company in Dubai",
    description: "Your Trusted Partner for Web Solutions in Dubai. Royal Step is proud to be known as the best website",
    image: "image 4.png",
  },
  
  // ... add more services
];

export default function ServicesPage() {
  return (
    <>
      {/* 🔵 Blue Gradient Background Section */}
      <ServiceCards
        services={servicesBlue}
        bg="bg-[#003B5A]"
      />

      {/* ⚪ White Background Section */}
      <ServiceCards services={servicesWhite} bg="bg-white" />
    </>
  );
}
