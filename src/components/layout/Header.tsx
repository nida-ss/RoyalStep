// import React from 'react';
// import Button from '../ui/Button';

// const Header: React.FC = () => {
//   return (
//     <header className="w-full">
//       <div className="w-full bg-[#003B5A] text-white">
//         <div className="container mx-auto px-4 py-2 flex justify-center">
//           <p className="font-montserrat font-medium text-[13px] md:text-[15px] lg:text-[17px] leading-5 capitalize">
//             Free pick up and delivery for our online customers!
//           </p>
//         </div>
//       </div>

//       <div className="container mx-auto px-4">
//         <div className="flex items-center justify-between py-6 md:py-8">
//           <a href="#" className="flex items-center gap-3">
//             <img src="/vite.svg" alt="Royal Step" className="w-[120px] h-auto md:w-[150px]" />
//           </a>

//           <nav className="hidden lg:flex items-center gap-8 font-montserrat text-[20px] leading-6">
//             <a className="font-semibold text-black/90" href="#home">Home</a>
//             <a className="font-medium text-black/50 hover:text-black/80" href="#services">Services</a>
//             <a className="font-medium text-black/50 hover:text-black/80" href="#web-solution">Web Solution</a>
//             <a className="font-medium text-black/50 hover:text-black/80" href="#studio">Studio</a>
//             <a className="font-medium text-black/50 hover:text-black/80" href="#data-recovery">Data Recovery</a>
//             <a className="font-medium text-black/50 hover:text-black/80" href="#contact">Contact US</a>
//           </nav>

//           <div className="hidden md:block">
//             <Button variant="outline" className="px-5 py-3 text-[15px]">Book Home Visit</Button>
//           </div>
//         </div>
//       </div>

//       <div className="border-b border-[rgba(0,59,90,0.6)]" />
//     </header>
//   );
// };

// export default Header;




































//  -----------------------------------------------------------------------------

















import React, { useState } from "react";
import Button from "../ui/Button";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#home", current: true },
    { name: "Services", href: "#services" },
    { name: "Web Solution", href: "#web-olution" },
    { name: "Studio", href: "#studio" },
    { name: "Data Recovery", href: "#data-recovery" },
    { name: "Contact US", href: "#contact" },
  ];

  return (
    <header className="w-full relative z-50">
      {/* Announcement Bar */}
      <div className="w-full bg-[#003B5A]/95 backdrop-blur-sm text-white">
        <div className="container mx-auto px-4 py-2 flex justify-center">
          <p className="font-montserrat font-medium text-sm md:text-base lg:text-lg text-center capitalize">
            Free Pick Up And Delivery For Our Online Customers!
          </p>
        </div>
      </div>

      {/* Main Header */}
      <div className="w-full bg-white/60 backdrop-blur-md shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4 md:py-6">
            {/* Logo */}
            <a href="#" className="flex items-center shrink-0">
              <img
                src="/logo.png" // replace with your actual logo
                alt="Royal Step"
                className="h-12 md:h-16 w-auto"
              />
            </a>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-8 font-montserrat text-base md:text-lg">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`transition duration-200 ${
                    item.current
                      ? "font-semibold text-black/90"
                      : "font-medium text-black/60 hover:text-black/80 hover:brightness-110"
                  }`}
                >
                  {item.name}
                </a>
              ))}
            </nav>

            {/* CTA + Hamburger */}
            <div className="flex items-center gap-3">
              <div className="hidden md:block">
                <Button
                  variant="outline"
                  className="px-6 py-2.5 text-sm md:text-base rounded-full transition hover:brightness-110"
                >
                  Book Home Visit
                </Button>
              </div>

              {/* Hamburger Menu */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none"
                aria-label="Toggle menu"
              >
                {isOpen ? (
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Divider line */}
      <div className="border-b border-[rgba(0,59,90,0.6)]" />

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white/70 backdrop-blur-md border-t border-gray-200">
          <nav className="flex flex-col gap-4 px-6 py-6">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="font-medium text-gray-700 hover:brightness-110 transition"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <Button
              variant="outline"
              className="mt-4 px-6 py-2.5 text-sm rounded-full transition hover:brightness-110"
            >
              Book Home Visit
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
