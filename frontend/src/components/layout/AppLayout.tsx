import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import SmartHeader from './SmartHeader';
import BrainDumpModal from '../common/BrainDumpModal';
import './AppLayout.css';

const AppLayout = () => {
  const [isBrainDumpOpen, setBrainDumpOpen] = useState(false);

  return (
    <div className="app-container">
      <Sidebar onOpenBrainDump={() => setBrainDumpOpen(true)} />
      <div className="main-content">
        <SmartHeader />
        <main className="page-content">
          <Outlet />
        </main>
      </div>
      <BrainDumpModal isOpen={isBrainDumpOpen} onClose={() => setBrainDumpOpen(false)} />
    </div>
  );
};

export default AppLayout;
