import React, { useState } from "react";
import { Menu, X } from "lucide-react"; 
import Button from "../ui/Button";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full">
      {/* Top Bar */}
      <div className="w-full bg-[#003B5A] text-white">
        <div className="container mx-auto px-4 py-2 flex justify-center">
          <p className="font-montserrat font-medium text-[13px] md:text-[15px] lg:text-[17px] leading-5 capitalize text-center">
            Free pick up and delivery for our online customers!
          </p>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4 md:py-6">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3">
            <img
              src="/header-logo.png"
              alt="Royal Step"
              className="w-[110px] md:w-[130px] lg:w-[140px] h-auto"
            />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 font-montserrat text-base xl:text-lg">
            <a className="font-semibold text-black/90" href="#home">
              Home
            </a>
            <a className="font-medium text-black/50 hover:text-black/80" href="#services">
              Services
            </a>
            <a className="font-medium text-black/50 hover:text-black/80" href="#web-solution">
              Web Solution
            </a>
            <a className="font-medium text-black/50 hover:text-black/80" href="#studio">
              Studio
            </a>
            <a className="font-medium text-black/50 hover:text-black/80" href="#data-recovery">
              Data Recovery
            </a>
            <a className="font-medium text-black/50 hover:text-black/80" href="#contact">
              Contact Us
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              variant="outline"
              className="px-4 py-2 md:px-5 md:py-3 text-sm md:text-base"
            >
              Book Home Visit
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-[#003B5A]"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 shadow-md">
          <nav className="flex flex-col items-center gap-6 py-6 font-montserrat text-base">
            <a className="font-semibold text-black/90" href="#home" onClick={() => setIsOpen(false)}>Home</a>
            <a className="font-medium text-black/70" href="#services" onClick={() => setIsOpen(false)}>Services</a>
            <a className="font-medium text-black/70" href="#web-solution" onClick={() => setIsOpen(false)}>Web Solution</a>
            <a className="font-medium text-black/70" href="#studio" onClick={() => setIsOpen(false)}>Studio</a>
            <a className="font-medium text-black/70" href="#data-recovery" onClick={() => setIsOpen(false)}>Data Recovery</a>
            <a className="font-medium text-black/70" href="#contact" onClick={() => setIsOpen(false)}>Contact Us</a>
            <Button variant="outline" className="px-5 py-3 text-sm w-[80%]">
              Book Home Visit
            </Button>
          </nav>
        </div>
      )}

      <div className="border-b border-[rgba(0,59,90,0.6)]" />
    </header>
  );
};

export default Header;
