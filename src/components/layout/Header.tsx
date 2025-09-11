import React from 'react';
import Button from '../ui/Button';

const Header: React.FC = () => {
  return (
    <header className="w-full">
      <div className="w-full bg-[#003B5A] text-white">
        <div className="container mx-auto px-4 py-2 flex justify-center">
          <p className="font-montserrat font-medium text-[13px] md:text-[15px] lg:text-[17px] leading-5 capitalize">
            Free pick up and delivery for our online customers!
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-6 md:py-8">
          <a href="#" className="flex items-center gap-3">
            <img src="/vite.svg" alt="Royal Step" className="w-[120px] h-auto md:w-[150px]" />
            <div className="hidden sm:block">
              <div className="font-montserrat font-semibold text-[#003B5A] text-xl leading-6">Royal Step</div>
              <div className="text-xs text-black/60 -mt-0.5">Connect IT Perfectly</div>
            </div>
          </a>

          <nav className="hidden lg:flex items-center gap-8 font-montserrat text-[20px] leading-6">
            <a className="font-semibold text-black/90" href="#home">Home</a>
            <a className="font-medium text-black/50 hover:text-black/80" href="#services">Services</a>
            <a className="font-medium text-black/50 hover:text-black/80" href="#web-solution">Web Solution</a>
            <a className="font-medium text-black/50 hover:text-black/80" href="#studio">Studio</a>
            <a className="font-medium text-black/50 hover:text-black/80" href="#data-recovery">Data Recovery</a>
            <a className="font-medium text-black/50 hover:text-black/80" href="#contact">Contact US</a>
          </nav>

          <div className="hidden md:block">
            <Button variant="outline" className="px-5 py-3 text-[15px]">Book Home Visit</Button>
          </div>
        </div>
      </div>

      <div className="border-b border-[rgba(0,59,90,0.6)]" />
    </header>
  );
};

export default Header;
