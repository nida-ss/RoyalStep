import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Button from '../ui/Button';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className='w-full'>
      {/* Top Bar */}
      <div className='w-full bg-[#003B5A] text-white'>
        <div className='container mx-auto px-4 py-2 flex justify-center'>
          <p className='font-montserrat font-medium text-[13px] md:text-[15px] lg:text-[17px] leading-5 capitalize text-center'>
            Free pick up and delivery for our online customers!
          </p>
        </div>
      </div>

      {/* Main Header */}
      <div className='container mx-auto px-4'>
        <div className='flex items-center justify-between py-4 md:py-6'>
          {/* Logo */}
          <a href='#' className='flex items-center gap-3'>
            <img
              src='/header-logo.png'
              alt='Royal Step'
              className='w-[110px] md:w-[130px] lg:w-[140px] h-auto'
            />
          </a>

          {/* Desktop Nav */}
          <nav className='hidden lg:flex items-center gap-6 xl:gap-8 font-montserrat text-base xl:text-lg'>
            <Link to="/" className='font-semibold text-black/90 hover:text-blue-600 transition-colors'>
              Home
            </Link>
            <Link to="/services" className='font-medium text-black/50 hover:text-black/80 transition-colors'>
              Services
            </Link>
            <Link to="/web-solution" className='font-medium text-black/50 hover:text-black/80 transition-colors'>
              Web Solution
            </Link>
            <Link to="/studio" className='font-medium text-black/50 hover:text-black/80 transition-colors'>
              Studio
            </Link>
            <Link to="/data-recovery" className='font-medium text-black/50 hover:text-black/80 transition-colors'>
              Data Recovery
            </Link>
            <Link to="/contact" className='font-medium text-black/50 hover:text-black/80 transition-colors'>
              Contact Us
            </Link>
          </nav>

          {/* CTA Button */}
          <div className='hidden md:block'>
            <Button
              variant='outline'
              className='px-4 py-2 md:px-5 md:py-3 text-sm md:text-base'
            >
              Book Home Visit
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className='lg:hidden p-2 text-[#003B5A]'
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className='lg:hidden bg-white border-t border-gray-200 shadow-md'>
          <nav className='flex flex-col items-center gap-6 py-6 font-montserrat text-base'>
            <Link to="/" className='font-semibold text-black/90' onClick={() => setIsOpen(false)}>Home</Link>
            <Link to="/services" className='font-medium text-black/70' onClick={() => setIsOpen(false)}>Services</Link>
            <Link to="/web-solution" className='font-medium text-black/70' onClick={() => setIsOpen(false)}>Web Solution</Link>
            <Link to="/studio" className='font-medium text-black/70' onClick={() => setIsOpen(false)}>Studio</Link>
            <Link to="/data-recovery" className='font-medium text-black/70' onClick={() => setIsOpen(false)}>Data Recovery</Link>
            <Link to="/contact" className='font-medium text-black/70' onClick={() => setIsOpen(false)}>Contact Us</Link>
            <Button variant='outline' className='px-5 py-3 text-sm w-[80%]'>
              Book Home Visit
            </Button>
          </nav>
        </div>
      )}

      <div className='border-b border-[rgba(0,59,90,0.6)]' />
    </header>
  );
};

export default Header;
