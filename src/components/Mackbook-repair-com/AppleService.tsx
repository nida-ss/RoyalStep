// src/components/AppleServiceCards.tsx
import React, { useState } from "react";

export default function AppleServiceCards() {
  const macbooks = [
    { img: "/macbook16pro.png", name: "MacBook Pro (16-inch, 2024)", desc: "Latest MacBook Pro model with M3 chip, specialized repairs available." },
    { img: "/macbook16pro.png", name: "MacBook Pro (16-inch, 2023)", desc: "We handle screen, battery, and board-level repairs." },
    { img: "/macbook16pro.png", name: "MacBook Pro (14-inch, 2023)", desc: "Expert services for display, charging, and keyboard issues." },
    { img: "/macbook16pro.png", name: "MacBook Pro (13-inch, M2, 2022)", desc: "Repairs for logic board, SSD upgrades, and performance fixes." },
    { img: "/macbook16pro.png", name: "MacBook Pro (16-inch, 2021)", desc: "Reliable maintenance for heating, speaker, and WiFi issues." },
    { img: "/macbook16pro.png", name: "MacBook Pro (14-inch, 2021)", desc: "Full diagnostics, replacement parts, and upgrades." },
    { img: "/macbook16pro.png", name: "MacBook Pro (13-inch, M1, 2020)", desc: "We fix motherboard, USB-C ports, and battery swelling." },
    { img: "/macbook16pro.png", name: "MacBook Pro (13-inch, 2020, Thunderbolt 3 Ports)", desc: "Servicing ports, charging issues, and storage upgrades." },
  ];

  return (
    <section className="container mx-auto px-4 py-12">
      {/* Section Title */}
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-900">Apple Service Centre</h2>
        <p className="text-gray-600 mt-2">We Specialized in MacBook Air Repair</p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {macbooks.map((item, index) => (
          <FlipCard key={index} img={item.img} name={item.name} desc={item.desc} />
        ))}
      </div>
    </section>
  );
}

function FlipCard({ img, name, desc }: { img: string; name: string; desc: string }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="group w-full h-64 md:h-80 [perspective:1000px] cursor-pointer"
      onClick={() => setFlipped(!flipped)} // Mobile tap flip
    >
      <div
        className={`relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] ${
          flipped
            ? "[transform:rotateY(180deg)]"
            : "group-hover:[transform:rotateY(180deg)]"
        }`}
      >
        {/* Front (Image only) */}
        <div className="absolute inset-0 bg-white border rounded-lg shadow flex items-center justify-center [backface-visibility:hidden]">
          <img
            src={img}
            alt={name}
            className="w-full h-full object-contain p-4"
          />
        </div>

        {/* Back (Text only) */}
        <div className="absolute inset-0 bg-[#003B5A] text-white rounded-lg shadow flex flex-col items-center justify-center text-center px-4 [transform:rotateY(180deg)] [backface-visibility:hidden]">
          <h3 className="text-md font-semibold mb-2">{name}</h3>
          <p className="text-sm">{desc}</p>
        </div>
      </div>
    </div>
  );
}
