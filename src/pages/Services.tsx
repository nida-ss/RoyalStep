import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import ServicesSection from '../components/services sections/services';
import ServicesList1 from '../components/services sections/list_1';
import ServicesList2 from '../components/services sections/list_2';
import ServicesList3 from '../components/services sections/list_3';
import ServicesList4 from '../components/services sections/list_4';
import ServicesList5 from '../components/services sections/list_5';

const Services: React.FC = () => {
  return (
    <div className="relative overflow-x-hidden">
      <Header />
      <main>
        <ServicesSection />
        <ServicesList1 />
        <ServicesList2 />
        <ServicesList3 />
        <ServicesList4 />
        <ServicesList5 />
      </main>
      <Footer />
    </div>
  );
};

export default Services;