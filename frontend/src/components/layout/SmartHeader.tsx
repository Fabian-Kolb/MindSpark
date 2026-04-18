import React from 'react';
import { useLocation } from 'react-router-dom';
import { Search, Bell, User } from 'lucide-react';
import './SmartHeader.css';

const SmartHeader = () => {
  const location = useLocation();

  // Determine header context based on route
  const getHeaderContext = () => {
    switch (location.pathname) {
      case '/':
        return { title: 'Focus Dashboard', subtitle: 'Welcome back. Ready to spark some ideas?' };
      case '/spaces':
        return { title: 'Spaces Library', subtitle: 'Organize your contextual zones' };
      case '/tracker':
        return { title: 'Productivity Tracker', subtitle: 'Analyze your focus segments' };
      default:
        return { title: 'Thoxt', subtitle: 'Get things done.' };
    }
  };

  const { title, subtitle } = getHeaderContext();

  return (
    <header className="smart-header">
      <div className="header-titles">
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>

      <div className="header-actions">
        <div className="search-bar glass">
          <Search size={18} className="search-icon" />
          <input type="text" placeholder="Search spaces, tasks, dumps..." />
        </div>
        
        <button className="icon-btn ghost-border">
          <Bell size={20} />
          <span className="badge">2</span>
        </button>

        <div className="user-avatar">
          <User size={20} />
        </div>
      </div>
    </header>
  );
};

export default SmartHeader;
