import React from 'react';
import Hero from '../components/royal step sections/Hero';
import Header from '../components/layout/Header';
import RepairServices from '../components/royal step sections/RepairServices';
import ServiceCards from '../components/royal step sections/ServiceCards';
import WhyChooseUs from '../components/royal step sections/WhyChooseUs';
import Achievements from '../components/royal step sections/Achievements';
import NewsAndBlogs from '../components/royal step sections/NewsAndBlogs';
import LeadingExperts from '../components/royal step sections/LeadingExperts';
import FAQ from '../components/royal step sections/FAQ';
import CertifiedExperts from '../components/royal step sections/CertifiedExperts';
import Footer from '../components/layout/Footer';

const HomePage: React.FC = () => {
  return (
    <div className="relative overflow-x-hidden">
      {/* Main Content - header moved into Hero component to avoid duplication */}
      <main>
        <Header />
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

      <Footer />
    </div>
  );
};

export default HomePage;

