// src/components/BrandCarousel.tsx
import React from "react";

export default function BrandCarousel() {
  return (
    <div className="bg-[#2E213B] py-6 overflow-hidden relative">
      <h2 className="text-center text-white font-medium mb-6">
        Trusted by major brands in Dubai
      </h2>

      {/* Loop Wrapper */}
      <div className="relative w-full overflow-hidden">
        <div className="flex space-x-16 animate-marquee">
          {/* First set */}
          <img src="/brandcoursel01.png" alt="ADNOC" className="h-12 object-contain" />
          <img src="/brandcoursel02.png" alt="CAFU" className="h-12 object-contain" />
          <img src="/brandcoursel03.png" alt="Amazon" className="h-12 object-contain" />
          <img src="/brandcoursel04.png" alt="Panasonic" className="h-12 object-contain" />

          {/* Duplicate set for seamless loop */}
          <img src="/brandcoursel01.png" alt="ADNOC" className="h-12 object-contain" />
          <img src="/brandcoursel02.png" alt="CAFU" className="h-12 object-contain" />
          <img src="/brandcoursel03.png" alt="Amazon" className="h-12 object-contain" />
          <img src="/brandcoursel04.png" alt="Panasonic" className="h-12 object-contain" />
        </div>
      </div>
    </div>
  );
}
