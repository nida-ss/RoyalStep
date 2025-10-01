import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import Button from '../ui/Button';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const services = [
    { label: "Macbook Repair Dubai", link: "/services/macbook-repair-dubai" },
    { label: "iMac Repair Dubai", link: "/services/imac-repair-dubai" },
    { label: "iPad Repair in Dubai", link: "/services/ipad-repair-in-dubai" },
    { label: "iPhone Repair Dubai", link: "/services/iphone-repair-dubai" },
    { label: "Hard drive data Recovery", link: "/services/hard-drive-data-recovery" },
    { label: "IT support services", link: "/services/it-support-services" },
    { label: "Mobile repair & Data Recovery Dubai", link: "/services/mobile-repair-and-data-recovery-services-in-dubai" },
    { label: "PC & Laptop Repair Dubai", link: "/services/pc-and-laptop-repair-in-dubai" },
    { label: "Web Solutions", link: "/services/web-solutions" },
    { label: "Additional Services", link: "/services/additional-services" },
    { label: "Computer Repair Dubai", link: "/services/computer-repair-service-in-dubai" },
    { label: "Home Service", link: "/services/home-service" },
    { label: "Home Automation System", link: "/services/home-automation-system" },
    { label: "Network & WiFi Services", link: "/services/network-and-wifi-services" },
    { label: "Remote IT Support", link: "/services/remote-it-support" },
    { label: "Custom Build Machine", link: "/services/custom-build-machine" },
    { label: "Data Recovery Services Dubai", link: "/services/data-recovery-services-in-dubai" },
    { label: "Buy Back", link: "/services/buy-back" },
    { label: "CCTV Services Dubai", link: "/services/cctv-services-dubai" },
    { label: "Computer Repair Sharjah", link: "/services/computer-repair-sharjah" },
    { label: "Laptop Repair Dubai", link: "/services/laptop-repair-in-dubai" },
    { label: "Structured Cabling Dubai", link: "/services/structured-cabling-services-in-dubai" },
    { label: "Data Recovery Abu Dhabi", link: "/services/data-recovery-abu-dhabi" },
    { label: "Buy Back Trade in UAE", link: "/services/buy-back-trade-in-uae" },
    { label: "CCTV Installation Dubai", link: "/services/cctv-installation-company-in-dubai" },
    { label: "Website Development Dubai", link: "/services/website-development-company-in-dubai" },
    { label: "Show All Services", link: "/services" },
  ];

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
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 font-montserrat text-base xl:text-lg relative">
            <Link to="/" className="font-semibold text-black/90 hover:text-blue-600 transition-colors">
              Home
            </Link>

            {/* Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button className="flex items-center gap-1 font-medium text-black/50 hover:text-black/80 transition-colors">
                Services <ChevronDown size={18} />
              </button>
              <ul
                className={`absolute left-0 top-full mt-2 w-64 bg-white border border-gray-200 shadow-lg rounded-md z-50 
                  transition-all duration-300 ease-out origin-top
                  ${servicesOpen ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0 pointer-events-none"}`}
              >
                {services.map((item, idx) => (
                  <li key={idx}>
                    <Link
                      to={item.link}
                      className="block px-4 py-2 text-sm text-black/70 hover:bg-gray-100 hover:text-[#003B5A]"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <Link to="/web-solution" className="font-medium text-black/50 hover:text-black/80 transition-colors">
              Web Solution
            </Link>
            <Link to="/blogs" className="font-medium text-black/50 hover:text-black/80 transition-colors">
              Blogs
            </Link>
            <Link to="/data-recovery" className="font-medium text-black/50 hover:text-black/80 transition-colors">
              Data Recovery
            </Link>
            <Link to="/contact" className="font-medium text-black/50 hover:text-black/80 transition-colors">
              Contact Us
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
           <Link to={'/contact'}> <Button
              variant="outline"
              className="px-4 py-2 md:px-5 md:py-3 text-sm md:text-base"
            >
              Book Home Visit
            </Button></Link>
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
            <Link to="/" className="font-semibold text-black/90" onClick={() => setIsOpen(false)}>Home</Link>

            {/* Mobile Dropdown */}
            <div className="w-full flex flex-col items-center">
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="flex items-center gap-1 font-medium text-black/70"
              >
                Services <ChevronDown size={18} className={`${servicesOpen ? "rotate-180" : ""} transition`} />
              </button>
              <ul
                className={`mt-2 w-[90%] bg-gray-50 border border-gray-200 rounded-md shadow-sm overflow-hidden 
                  transition-all duration-300 ease-out origin-top
                  ${servicesOpen ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0 pointer-events-none"}`}
              >
                {services.map((item, idx) => (
                  <li key={idx}>
                    <Link
                      to={item.link}
                      onClick={() => {
                        setIsOpen(false);
                        setServicesOpen(false);
                      }}
                      className="block px-4 py-2 text-sm text-black/70 hover:bg-gray-100 hover:text-[#003B5A]"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <Link to="/web-solution" className="font-medium text-black/70" onClick={() => setIsOpen(false)}>Web Solution</Link>
            <Link to="/blogs" className="font-medium text-black/70" onClick={() => setIsOpen(false)}>Blogs</Link>
            <Link to="/data-recovery" className="font-medium text-black/70" onClick={() => setIsOpen(false)}>Data Recovery</Link>
            <Link to="/contact" className="font-medium text-black/70" onClick={() => setIsOpen(false)}>Contact Us</Link>

           <Link to="/contact"> <Button variant="outline" className="px-5 py-3 text-sm w-[80%]">
              Book Home Visit
            </Button></Link>
          </nav>
        </div>
      )}

      <div className="border-b border-[rgba(0,59,90,0.6)]" />
    </header>
  );
};

export default Header;
