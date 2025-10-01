// src/pages/ServicesAll/Mackbook-repair-dubai.tsx
import React from "react";

export default function MacbookRepairDubai() {
  return (
    <section className="relative w-full">
      {/* Background Image */}
      <div className="relative w-full h-[300px] md:h-[500px]">
        <img
          src="/macbook-sc.webp"
          alt="Macbook Repair Dubai"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Bottom Overlay Card */}
      <div className="relative max-w-4xl mx-auto -mt-12 md:-mt-16 px-4">
        <div className="bg-[#003B5A] text-white p-6 md:p-8 rounded-lg shadow-lg text-center">
          <h1 className="text-2xl md:text-4xl font-bold mb-3 md:mb-4">
            Macbook Repair Dubai
          </h1>
          <p className="text-sm md:text-base lg:text-lg mb-5 md:mb-6 leading-relaxed">
            At Royal Step, we specialize in fast MacBook repair in Dubai.
            Whether it’s a hardware issue or a complex software problem, our
            skilled team is here to get your device working again. From fixing
            cracked screens to solving battery and performance issues, our
            certified technicians provide high-quality repairs tailored
            specifically to your MacBook’s needs.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4">
            <a
              href="#book-repair"
              className="w-full sm:w-auto bg-white text-[#003B5A] px-5 py-3 rounded-md font-semibold shadow hover:bg-gray-100 transition text-sm md:text-base"
            >
              Book Your Repair
            </a>
            <a
              href="#services"
              className="w-full sm:w-auto bg-white text-[#003B5A] px-5 py-3 rounded-md font-semibold shadow hover:bg-gray-100 transition text-sm md:text-base"
            >
              Visit Services Section
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
