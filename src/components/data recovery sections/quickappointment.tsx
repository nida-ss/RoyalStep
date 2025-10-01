import React from "react";
import PopularServices from '../web solution sections/PopularserviceNav'
const ServicesSection = () => {
 

  return (
    <section className="relative w-full py-16 overflow-hidden bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      {/* Background decorative blobs */}
      <div className="absolute w-[300px] h-[300px] left-[5%] top-[10%] bg-[#FF8952] rounded-full blur-[200px] opacity-50 animate-pulse"></div>
      <div className="absolute w-[280px] h-[280px] right-[5%] top-[20%] bg-[#0022FF] rounded-full blur-[250px] opacity-40 animate-pulse"></div>
      <div className="absolute w-[200px] h-[200px] right-[10%] bottom-[10%] bg-[#FF7230] rounded-full blur-[200px] opacity-50 animate-pulse"></div>
      <div className="absolute w-[120px] h-[120px] left-[40%] bottom-[5%] bg-[#FFD54F] rounded-full blur-[150px] opacity-60 animate-pulse"></div>
      <div className="absolute w-[100px] h-[100px] left-[20%] top-[70%] bg-[#FF00FF] rounded-full blur-[140px] opacity-40 animate-pulse"></div>

      <div className="relative container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Content */}
          <div className="lg:col-span-2 space-y-10">
            {/* What We Offer */}
            <div>
              <h2 className="text-2xl font-bold text-[#003B5A] mb-4">
                Quick data recovery at pocket-friendly price
              </h2>
              <p className="text-gray-600 mb-4">
               Royal Step provides hard-drive data recovery services to both individuals and organizations. We adopt modern tools and techniques to ensure delivering quality services to our clients. Whether your system is crashed or corrupted, our technicians diagnose the problem and help you recover the data without causing a delay.

Our affordable hard drive data recovery services in Dubai include-
              </p>
              <ul className="list-disc pl-6 space-y-1 text-gray-700">
                <li>Laptop hard drive data recovery</li>
                <li>Desktop hard drive data recovery</li>
                <li>Raid hard drive data recovery</li>
                <li>MacBook hard drive data recovery</li>
                <li>External hard drive data recovery</li>
                
              </ul>
              <p className="text-gray-600 mt-4">
                We also offer online payment solutions, software solutions, and more. Give us a call for a detailed consultation regarding your business needs and the scope of our services. 
              </p>
                       
              <div className="mt-4 flex flex-col md:flex-row gap-6">
               {/* NEW: other list shown in front (left on wide screens) */}
               <ul className="list-disc pl-6 space-y-1 text-gray-700 min-w-[180px]">
                <li>DOS</li>
                <li>Windows XP/Vista</li>
                <li>Windows 7, 8, 8.1, 10</li>
                <li>Linux</li>
                <li>Ubuntu</li>
                <li>NetWare</li>
               </ul>
              {/* existing OS list (kept intact) */}
              <ul className="list-disc pl-6 space-y-1 text-gray-700">
                 <li>VMware</li>
                 <li>OpenSUSE</li>
                 <li>Fedora</li>
                 <li>Mandriva</li>
                 <li>Debian</li>
              </ul>
            </div>
              <p className="text-gray-600 mt-4">
                We also offer online payment solutions, software solutions, and more. Give us a call for a detailed consultation regarding your business needs and the scope of our services. 
              </p>
            </div>

            {/* Why Avail */}
            <div>
              <h2 className="text-2xl font-bold text-[#003B5A] mb-4">
                Book an appointment for a complete hard drive data recovery
              </h2>
            
              <p className="text-gray-600 mt-4">
               Royal Step is well-known for its excellent hard disk data recovery services in Dubai. If you choose us, we will provide you with a free pick-up and timely delivery service at an affordable price. The best thing is that you can reach out to us whenever you want. It is because our experts work round the clock to serve clients with excellence. So, if you have recently experienced hard drive failure and data loss, schedule an appointment with us. We will help you get rid of the problem with our effective services.
              </p>
            </div>
          </div>
<PopularServices/>
          
      </div>
      </div>
    </section>
  );
};

export default ServicesSection;
