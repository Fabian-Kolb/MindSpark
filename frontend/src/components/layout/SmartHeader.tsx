
import { useLocation } from 'react-router-dom';
import { Search, Bell, User, Settings } from 'lucide-react';
import './SmartHeader.css';

const SmartHeader = () => {
  const location = useLocation();

  // Determine header context based on route
  const getHeaderContext = () => {
    switch (location.pathname) {
      case '/dashboard':
        return { title: 'Focus Dashboard', subtitle: 'Welcome back. Ready to spark some ideas?' };
      case '/dashboard/spaces':
        return { title: 'Spaces Library', subtitle: 'Organize your contextual zones' };
      case '/dashboard/tracker':
        return { title: 'Productivity Tracker', subtitle: 'Analyze your focus segments' };
      case '/dashboard/suggestions':
        return { title: 'AI Insights', subtitle: 'Smart suggestions for your day' };
      default:
        return { title: 'MindSpark', subtitle: 'Cultivating digital intelligence.' };
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
        <div className="search-bar">
          <Search size={18} className="search-icon" />
          <input type="text" placeholder="Search spaces, tasks, dumps..." />
        </div>

        <button className="icon-btn">
          <Bell size={20} />
        </button>
        <button className="icon-btn">
          <Settings size={20} />
        </button>

        <div className="user-avatar">
          <User size={20} />
        </div>
      </div>
    </header>
  );
};

export default SmartHeader;
