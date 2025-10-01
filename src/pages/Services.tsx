import React from 'react';
import ServicesSection1 from '../components/services sections/AllService';
// import ServicesSection  from '../components/services sections/Servicesection'
import ServiceCards from '../components/services sections/othersevice'
import Lastservice from '../components/services sections/Lastservice';

const Services: React.FC = () => {
  return (
    <div className="relative overflow-x-hidden">
      <main>
    <ServicesSection1 />
<ServiceCards  />

     <Lastservice/>

      </main>
    </div>
  );
};

export default Services;