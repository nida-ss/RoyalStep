import React from 'react';
import Wbsolutions from '../components/web solution sections/websolutions';
import WebService from '../components/web solution sections/WebService';
import PopularServices from '../components/web solution sections/PopularserviceNav'
const WebSolutions: React.FC = () => {
  return (
    <div className="relative overflow-x-hidden">
      {/* Main Content - header moved into Hero component to avoid duplication */}
      <main>
        <Wbsolutions />

        <WebService/>
        {/* <PopularServices/>? */}
              </main>

    </div>
  );
};

export default WebSolutions;
