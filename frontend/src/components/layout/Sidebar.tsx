import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, Layers, BarChart2, Lightbulb, Plus } from 'lucide-react';
import './Sidebar.css';

interface SidebarProps {
  onOpenBrainDump?: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ onOpenBrainDump }) => {
  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <img src="/logo.svg" alt="Thoxt Logo" style={{ height: '40px', objectFit: 'contain' }} />
      </div>

      <nav className="sidebar-nav">
        <NavLink to="/" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`} end>
          <LayoutDashboard size={20} />
          <span>Focus</span>
        </NavLink>
        <NavLink to="/spaces" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
          <Layers size={20} />
          <span>Spaces</span>
        </NavLink>
        
        {/* Mobile Brain-Dump Button (Hidden on Desktop) */}
        <button className="mobile-brain-dump" onClick={onOpenBrainDump} aria-label="Quick Brain-Dump">
          <div className="brain-dump-icon-wrapper">
             <Plus size={24} color="#fff" />
          </div>
          <span className="sr-only">Brain-Dump</span>
        </button>

        <NavLink to="/tracker" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
          <BarChart2 size={20} />
          <span>Tracker</span>
        </NavLink>
      </nav>

      <div className="sidebar-bottom">
        <button className="btn-tertiary" onClick={onOpenBrainDump}>
          <Lightbulb size={20} />
          <span>Quick Brain-Dump</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
