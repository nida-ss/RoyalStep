import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import DataRecovery from '../components/data recovery sections/datarecovery';
import PopularServices from '../components/data recovery sections/popularsevices';
import QuickAppointment from '../components/data recovery sections/quickappointment';

const DataRecoveryPage: React.FC = () => {
  return (
    <div className="relative overflow-x-hidden">
      <Header />
      <main>
        <DataRecovery />
        <PopularServices />
        <QuickAppointment />
      </main>
      <Footer />
    </div>
  );
};

export default DataRecoveryPage;