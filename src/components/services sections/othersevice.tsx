import ServiceCards from "./Servicesection";

const servicesBlue = [
  {
    title: "PC And Laptop Repair In Dubai",
    description: "Quick PC and laptop repair in Dubai. PCs and laptops are getting more advanced with time, giving rise to more complicated problems. As a result, you...",
    image: "image 4.png",
  },
  {
    title: "Mobile Repair And Data Recovery",
    description: "Affordable Mobile repair and data recovery services in Dubai Mobiles or smartphones are the companions...",
    image: "image 4.png",
  },
  {
    title: "Web Solutions",
    description: "Reliable Web Solutions in Dubai. Businesses big and small need a web presence outside of their brick-and-mortar establishment. If you want to create your...",
    image: "image 4.png",
  },
  {
    title: "Additional Services",
    description: "With several relevant services for creating machines, Royal Step supports its customers. Our professional engineers and specialists have years of expertise...",
    image: "image 4.png",
  },
  {
    title: "Computer repair service in Dubai",
    description: "Royal Step offers reliable Computer Repair Services Dubai, ensuring top solutions for all your computer repair needs. Whether it's a simple issue or...",
    image: "image 4.png",
  },
  {
    title: "Home Service",
    description: "Home Service Computer Repair: Convenient, Reliable, and Efficient In today’s tech-driven world, having a functional computer is essential for both personal...",
    image: "image 4.png",
  },
  // ... add more services
];

const servicesWhite = [
  {
    title: "Home Automation System",
    description: "Welcome to our Home Automation Services, your gateway to the world of home automation. With our cutting-edge home automation system, you can...",
    image: "image 4.png",
  },
  {
    title: "Network And WiFi Services",
    description: "Royal Step is the number one choice when it comes to finding out for seamless Internet and WiFi configurations support in Dubai. If your router...",
    image: "image 4.png",
  },
  {
    title: "Remote IT Support",
    description: "Royal Step helps its customers by offering several relevant services for building machines. Our specialists and professional engineers have years of experience...",
    image: "image 4.png",
  },
  {
    title: "Custom Build Machine",
    description: "Custom built machines can provide you with a solution that is tailored to your specific needs, whether you're a gamer, content creator, or professional who...",
    image: "image 4.png",
  },
  {
    title: "Data Recovery Services in Dubai",
    description: "Best data recovery services in Dubai. People these days are highly dependent upon advanced technologies and digital devices. Such as...",
    image: "image 4.png",
  },
  {
    title: "Buy Back",
    description: "IT recycling is a popular practice among organizations these days, where you can exchange your depreciated devices like PC, laptops, and likewise for brand...",
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
