import React from 'react';

import ContactUs from '../components/contect us sections/contectus';
import MapSection from '../components/contect us sections/map';

const ContactUsPage: React.FC = () => {
  return (
    <div className="relative overflow-x-hidden">
     
      <main>
        <ContactUs />
        <MapSection />
      </main>
   
    </div>
  );
}; 

export default ContactUsPage;