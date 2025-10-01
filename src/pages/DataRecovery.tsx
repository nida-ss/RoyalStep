import React from 'react';

import DataRecovery from '../components/data recovery sections/datarecovery';
import PopularServices from '../components/data recovery sections/popularsevices';
import QuickAppointment from '../components/data recovery sections/quickappointment';

const DataRecoveryPage: React.FC = () => {
  return (
    <div className="relative overflow-x-hidden">
    
      <main>
        <DataRecovery />
        {/* <PopularServices /> */}
        <QuickAppointment />
      </main>
   
    </div>
  );
};

export default DataRecoveryPage;