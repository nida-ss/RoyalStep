import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Wbsolutions from '../components/web solution sections/websolutions';
import OfferAvail from '../components/web solution sections/offeravail';

const Studio: React.FC = () => {
  return (
    <div className="relative overflow-x-hidden">
      <Header />
      <main>
        <Wbsolutions />
        <OfferAvail />
      </main>
      <Footer />
    </div>
  );
};

export default Studio;