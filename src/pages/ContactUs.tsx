import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import ContactUs from '../components/contect us sections/contectus';
import MapSection from '../components/contect us sections/map';

const ContactUsPage: React.FC = () => {
  return (
    <div className="relative overflow-x-hidden">
      <Header />
      <main>
        <ContactUs />
        <MapSection />
      </main>
      <Footer />
    </div>
  );
};

export default ContactUsPage;