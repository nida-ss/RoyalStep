// components/Footer.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => (
  <footer className="relative bg-primary text-white pt-16 pb-8 overflow-hidden">
    {/* Decorative blurred circles */}
    <div
      aria-hidden
      className="pointer-events-none absolute -left-16 -top-16 w-80 h-80 rounded-full bg-[#23947F] opacity-20 blur-3xl"
    />
    <div
      aria-hidden
      className="pointer-events-none absolute right-0 top-0 w-72 h-72 rounded-full bg-[#FC4798] opacity-15 blur-2xl"
    />

    <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
      <div className="grid grid-cols-1 lg:grid-cols-6 gap-10">
        {/* Brand & Contact */}
        <div className="lg:col-span-2 space-y-6">
          <div>
            <img src="header-logo.png" alt="Royal Step" />
          </div>

          <p className="text-sm text-white leading-relaxed max-w-xs">
            Rely on us for computer repair service and laptop repair service in Dubai.
          </p>

          {/* Contact Info */}
          <div className="space-y-4 text-sm text-white">
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-[#FB6609] rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 3 5.18 2 2 0 0 1 5 3h3a2 2 0 0 1 2 1.72c.12.81.36 1.6.7 2.34a2 2 0 0 1-.45 2.11L9.1 9.9a16 16 0 0 0 6 6l.73-.85a2 2 0 0 1 2.11-.45c.74.34 1.53.58 2.34.7A2 2 0 0 1 22 16.92z"/>
                </svg>
              </div>
              <div>
                <div>04 3420080</div>
                <div>050 5088819</div>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-[#FB6609] rounded-full flex items-center justify-center mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
                </svg>
              </div>
              <div className="leading-relaxed text-xs">
                Marasi Drive 51, DAMAC<br />
                Business Tower 907 –<br />
                Business Bay, Dubai UAE
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <div className="w-6 h-6 bg-[#FB6609] rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </div>
              <span className="text-white">Support@RoyalStep.ae</span>
            </div>
          </div>

          {/* Social */}
          <div className="flex space-x-3">
            {/* Instagram */}
            <Link to="#" className="w-8 h-8 rounded-full flex items-center justify-center transition">
              <div className="w-full h-full rounded-full flex items-center justify-center bg-gradient-to-tr from-[#f58529] via-[#dd2a7b] to-[#8134af]">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm10 2c1.654 0 3 1.346 3 3v10c0 1.654-1.346 3-3 3H7c-1.654 0-3-1.346-3-3V7c0-1.654 1.346-3 3-3h10zm-5 3a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm4.5-2a1.5 1.5 0 100 3 1.5 1.5 0 000-3z"/>
                </svg>
              </div>
            </Link>

            {/* LinkedIn */}
            <Link to="#" className="w-8 h-8 rounded-full flex items-center justify-center bg-[#0A66C2] transition hover:opacity-90">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.783-1.75-1.75 0-.967.784-1.75 1.75-1.75s1.75.783 1.75 1.75c0 .967-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.027-3.059-1.865-3.059-1.867 0-2.154 1.46-2.154 2.965v5.698h-3v-10h2.885v1.367h.041c.401-.76 1.381-1.559 2.844-1.559 3.043 0 3.609 2.004 3.609 4.611v5.581z"/>
              </svg>
            </Link>

            {/* Behance */}
            <Link to="#" className="w-8 h-8 rounded-full flex items-center justify-center bg-[#1769FF] transition hover:opacity-90">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.5 10.5c-2.07 0-3.75 1.68-3.75 3.75s1.68 3.75 3.75 3.75 3.75-1.68 3.75-3.75-1.68-3.75-3.75-3.75zm0 6c-1.242 0-2.25-1.008-2.25-2.25s1.008-2.25 2.25-2.25 2.25 1.008 2.25 2.25-1.008 2.25-2.25 2.25zm-9.5-6c-1.242 0-2.25 1.008-2.25 2.25s1.008 2.25 2.25 2.25c1.242 0 2.25-1.008 2.25-2.25s-1.008-2.25-2.25-2.25zm0 6c-2.07 0-3.75-1.68-3.75-3.75s1.68-3.75 3.75-3.75 3.75 1.68 3.75 3.75-1.68 3.75-3.75 3.75z"/>
              </svg>
            </Link>

            {/* Twitter */}
            <Link to="#" className="w-8 h-8 rounded-full flex items-center justify-center bg-[#1DA1F2] transition hover:opacity-90">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775a4.932 4.932 0 0 0 2.165-2.724c-.951.564-2.005.974-3.127 1.195a4.916 4.916 0 0 0-8.384 4.482c-4.084-.205-7.7-2.16-10.125-5.144a4.822 4.822 0 0 0-.664 2.475c0 1.708.87 3.216 2.188 4.099a4.904 4.904 0 0 1-2.228-.616c-.054 2.385 1.693 4.623 4.188 5.118a4.935 4.935 0 0 1-2.224.084c.63 1.953 2.445 3.377 4.6 3.417a9.868 9.868 0 0 1-6.102 2.105c-.396 0-.788-.023-1.176-.069a13.945 13.945 0 0 0 7.548 2.213c9.058 0 14.01-7.496 14.01-13.986 0-.213-.005-.425-.014-.636A10.025 10.025 0 0 0 24 4.557z"/>
              </svg>
            </Link>
          </div>
        </div>

        {/* Navigation & Locations */}
        <div className="lg:col-span-4 space-y-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-sm text-white">
            {[
              { title: 'Home', links: ['Company','Blogs','Privacy Policy','Terms & Conditions'] },
              { title: 'About Us', links: ['IT Support','Buy Back','Home Service','Contact Us'] },
              { title: 'Apple Services', links: ['Macbook Repair','iPhone Repair','iMac Repair','iPad Repair','Hard Drive','Additional Services'] },
              { title: 'Other Services', links: ['Web Solution','Computer Repair','Mobile Repair','IT Solution','Custom Build'] },
            ].map((col) => (
              <div key={col.title}>
                <h4 className="font-semibold mb-3 text-white">{col.title}</h4>
                <ul className="space-y-2">
                  {col.links.map((link) => (
                    <li key={link}>
                      <Link to="#" className="text-white hover:text-white/70 transition">
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-sm text-white">
            {[
              { title: 'The Spring', links: ['Jumeirah Village Triangle','Barsha Heights','Al Sufouh','Dubai Marina'] },
              { title: 'Emirates Hills', links: ['Al Aweer','The Greens','Jumeirah Village Residence','Jabel Ali'] },
              { title: 'Umm Al Sheif', links: ['Madinat Jumeirah','Meadows Lake','Jumeirah Heights','Discovery Gardens'] },
              { title: 'Al Nahda', links: ['Al Barsha 1','Al Barsha 2','Al Barsha 3','Jumeirah Village Circle'] },
            ].map((col) => (
              <div key={col.title}>
                <h4 className="font-semibold mb-3 text-white">{col.title}</h4>
                <ul className="space-y-2">
                  {col.links.map((link) => (
                    <li key={link}>
                      <Link to="#" className="text-white hover:text-white/70 transition">
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-12 pt-6 border-t border-white/20 flex flex-col md:flex-row items-center justify-between text-white/70 text-xs">
        <span>© {new Date().getFullYear()} Royal Step Computer Solutions</span>
        <div className="flex space-x-4 my-2 md:my-0">
          <Link to="#" className="hover:text-white">Privacy Policy</Link>
          <Link to="#" className="hover:text-white">Terms of Use</Link>
        </div>
        <span>Designed by MediaDunes</span>
      </div>
    </div>
  </footer>
);

export default Footer;
