import React from "react";
import PopularServices from './PopularserviceNav'
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
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                What We Offer In Web Solutions
              </h2>
              <p className="text-gray-600 mb-4">
                Starting From Designing And Developing A Website Or App To Marketing
                It Through The Right Channels To Gain You Positive Online Exposure,
                We Do Everything And Beyond. Our Web Solutions Cover:
              </p>
              <ul className="list-disc pl-6 space-y-1 text-gray-700">
                <li>Web Design & Development</li>
                <li>Mobile App Development</li>
                <li>Digital Marketing Solutions</li>
                <li>Social Media Promotions</li>
                <li>Domain And Web Hosting Services</li>
                <li>CMS Development</li>
                <li>PHP Development</li>
                <li>WordPress Development</li>
              </ul>
              <p className="text-gray-600 mt-4">
                We Also Offer Online Payment Solutions, Software Solutions, And
                More. Give Us A Call For A Detailed Consultation Regarding Your
                Business Needs And The Scope Of Our Services.
              </p>
            </div>

            {/* Why Avail */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Why Avail Our Web Solutions In Dubai?
              </h2>
              <ul className="list-disc pl-6 space-y-1 text-gray-700">
                <li>
                  We Provide Our Esteemed Clients With Custom Solutions For Their
                  Diverse Business Requirements.
                </li>
                <li>
                  Our Team Comprises Experienced Professionals With Niche Expertise
                  And Knowledge.
                </li>
                <li>
                  You Can Benefit From Our Competitive Quotes That Vary Depending On
                  The Scope Of The Project.
                </li>
                <li>
                  We Are Always Available For Our Clients To Guide Them, Even After
                  The Project Has Been Delivered.
                </li>
                <li>
                  We Uphold The Highest Industry Standards In Quality And Customer
                  Service.
                </li>
              </ul>
              <p className="text-gray-600 mt-4">
                Call Us For A Quote Or To Schedule A Consultation With Our Experts.
                We Will Help You Accomplish Your Online Business Goals With
                Innovative And Actionable Web Solutions.
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
