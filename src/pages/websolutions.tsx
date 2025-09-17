import React from 'react';
import Wbsolutions from '../components/web solution sections/websolutions';
import Footer from '../components/layout/Footer';
import Header from '../components/layout/Header';

const WebSolutions: React.FC = () => {
  return (
    <div className="relative overflow-x-hidden">
      {/* Main Content - header moved into Hero component to avoid duplication */}
      <main>
        <Header />
        <Wbsolutions />
      </main>

      <Footer />
    </div>
  );
};

export default WebSolutions;
