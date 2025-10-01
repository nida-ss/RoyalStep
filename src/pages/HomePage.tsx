import React from 'react';
import Hero from '../components/royal step sections/Hero';
import RepairServices from '../components/royal step sections/RepairServices';
import ServiceCards from '../components/royal step sections/ServiceCards';
import WhyChooseUs from '../components/royal step sections/WhyChooseUs';
import Achievements from '../components/royal step sections/Achievements';
import NewsAndBlogs from '../components/royal step sections/NewsAndBlogs';
import LeadingExperts from '../components/royal step sections/LeadingExperts';
import FAQ from '../components/royal step sections/FAQ';
import CertifiedExperts from '../components/royal step sections/CertifiedExperts';

const HomePage: React.FC = () => {
  return (
    <div className="relative overflow-x-hidden">
      {/* Main Content - header moved into Hero component to avoid duplication */}
      <main>
      
        <Hero />
        <RepairServices />
        {/* <ServiceCards /> */}
        <WhyChooseUs />
        <Achievements />
        <NewsAndBlogs />
        <LeadingExperts />
        <FAQ />
        <CertifiedExperts />
      </main>

    
    </div>
  );
};

export default HomePage;

