import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-primary text-white py-12 overflow-hidden min-h-[500px]">
      {/* Decorative blurred ellipses to mimic design */}
      <div aria-hidden className="pointer-events-none absolute -left-20 -top-32 w-[414px] h-[408px] rounded-full bg-[#23947F] blur-[500px] -rotate-90 opacity-30" />
      <div aria-hidden className="pointer-events-none absolute right-20 -top-10 w-[414px] h-[408px] rounded-full bg-[#88C057] blur-[550px] -rotate-90 opacity-25" />
      <div aria-hidden className="pointer-events-none absolute right-10 bottom-16 w-[414px] h-[408px] rounded-full bg-[#FC4798] blur-[600px] -rotate-[105deg] opacity-30" />
      <div aria-hidden className="pointer-events-none absolute right-32 bottom-0 w-[372px] h-[368px] rounded-full bg-[#FF6469] blur-[650px] -rotate-90 opacity-25" />

      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-8 lg:gap-12">
          {/* Left brand column - takes 2 columns */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
                <span className="text-primary font-bold text-lg">R</span>
              </div>
              <div>
                <div className="text-xl font-semibold text-white">Royal Step</div>
                <div className="text-xs text-[#FB6609] font-medium">Connect IT Perfectly</div>
              </div>
            </div>
            
            <p className="font-montserrat text-white/80 text-sm mb-6 max-w-xs leading-relaxed">
              Rely on us for computer repair service and laptop repair service in Dubai.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-[#FB6609] rounded flex items-center justify-center">
                  <svg className="text-white" xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.09 4.2 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.89.3 1.76.54 2.6a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.48-1.1a2 2 0 0 1 2.11-.45c.84.24 1.71.42 2.6.54A2 2 0 0 1 22 16.92z"/>
                  </svg>
                </div>
                <div className="text-white/90">
                  <div>04 3420080</div>
                  <div>050 5088819</div>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 bg-[#FB6609] rounded flex items-center justify-center mt-0.5">
                  <svg className="text-white" xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.14 2 5 5.14 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.86-3.14-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z"/>
                  </svg>
                </div>
                <span className="text-white/90 text-xs leading-relaxed max-w-[200px]">
                  Marasi Drive 51, DAMAC<br/>
                  Business Tower 907 -<br/>
                  Business Bay - Dubai UAE
                </span>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-[#FB6609] rounded flex items-center justify-center">
                  <svg className="text-white" xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                </div>
                <span className="text-white/90">Support@Royalstep.ae</span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="mt-6 flex gap-2">
              <a href="#" className="w-8 h-8 rounded-full border border-[#FB6609] text-[#FB6609] flex items-center justify-center hover:bg-[#FB6609]/10">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="#" className="w-8 h-8 rounded-full border border-[#FB6609] text-[#FB6609] flex items-center justify-center hover:bg-[#FB6609]/10">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="#" className="w-8 h-8 rounded-full border border-[#FB6609] text-[#FB6609] flex items-center justify-center hover:bg-[#FB6609]/10">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                </svg>
              </a>
              <a href="#" className="w-8 h-8 rounded-full border border-[#FB6609] text-[#FB6609] flex items-center justify-center hover:bg-[#FB6609]/10">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M7.5 6.2c0-.8.4-1.2 1.2-1.2h6.5c.8 0 1.2.4 1.2 1.2v11.5c0 .8-.4 1.2-1.2 1.2H8.7c-.8 0-1.2-.4-1.2-1.2V6.2zM24 7.3v9.3c0 2.5-1.9 4.4-4.4 4.4H4.4C1.9 21 0 19.1 0 16.6V7.3C0 4.8 1.9 2.9 4.4 2.9h15.2C22.1 2.9 24 4.8 24 7.3z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation columns - 4 columns for links */}
          <div className="lg:col-span-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm">
              <div>
                <h4 className="font-semibold mb-3 text-white">Home</h4>
                <ul className="space-y-1.5 text-white/70">
                  <li><a href="#" className="hover:text-white transition-colors">Company</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Blogs</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Terms & Conditions</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-3 text-white">About Us</h4>
                <ul className="space-y-1.5 text-white/70">
                  <li><a href="#" className="hover:text-white transition-colors">IT Support</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Buy Back</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Home Service</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-3 text-white">Apple Services</h4>
                <ul className="space-y-1.5 text-white/70">
                  <li><a href="#" className="hover:text-white transition-colors">Macbook Repair</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">iPhone Repair</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">iMac Repair</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">iPad Repair</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Hard Drive</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Additional Services</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-3 text-white">Other Services</h4>
                <ul className="space-y-1.5 text-white/70">
                  <li><a href="#" className="hover:text-white transition-colors">Web Solution</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Computer Repair</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Mobile Repair</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">IT Solution</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Custom Build</a></li>
                </ul>
              </div>
            </div>

            {/* Location columns */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm mt-8">
              <div>
                <h4 className="font-semibold mb-3 text-white">The Spring</h4>
                <ul className="space-y-1.5 text-white/70">
                  <li><a href="#" className="hover:text-white transition-colors">Jumeirah Village Triangle</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Barsha Heights</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Al Sufouh</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Dubai Marina</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-3 text-white">Emirates Hills</h4>
                <ul className="space-y-1.5 text-white/70">
                  <li><a href="#" className="hover:text-white transition-colors">Al Aweer</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">The Greens</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Jumeirah Village Residence</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Jabel Ali</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-3 text-white">Umm Al Sheif</h4>
                <ul className="space-y-1.5 text-white/70">
                  <li><a href="#" className="hover:text-white transition-colors">Madinat Jumeirah</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Meadows Lake</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Jumeirah Heights</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Discovery Gardens</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-3 text-white">Al Nahda</h4>
                <ul className="space-y-1.5 text-white/70">
                  <li><a href="#" className="hover:text-white transition-colors">Al Barsha 1</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Al Barsha 2</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Al Barsha 3</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Jumeirah Village Circle</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 pt-6 border-t border-white/10 flex flex-col md:flex-row gap-4 items-center justify-between text-white/60 text-xs">
          <div>Copyright © {new Date().getFullYear()} Royal Step Computer Solutions</div>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Term of use</a>
          </div>
          <div>Designed by MediaDunes</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
