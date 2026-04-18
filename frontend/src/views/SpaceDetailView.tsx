import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Search, Sigma, Code, MoreHorizontal, ArrowRight, Plus } from 'lucide-react';
import './SpaceDetailView.css';

const SpaceDetailView = () => {
  const { spaceId } = useParams();
  const navigate = useNavigate();

  // For demonstration, map routes to friendly names
  const spaceName = spaceId === 'uni' ? 'Uni' : 
                    spaceId === 'work' ? 'Work' : 'Personal';

  const subtitleText = spaceId === 'uni' 
    ? "Academic Sanctuary. Focus on your studies and track your progress."
    : "Your professional zone. Manage tasks and optimize your workflow.";

  return (
    <div className="space-detail-container">
      {/* Large Search Bar */}
      <div className="search-bar-wrapper">
        <input 
          className="search-input" 
          placeholder="Search spaces, notes..." 
          type="text" 
        />
        <Search className="search-icon" size={24} />
      </div>

      {/* Header Section */}
      <div className="header-section">
        <div className="header-top-row">
          <button className="back-button" onClick={() => navigate(-1)}>
            <ArrowLeft size={24} />
          </button>
          <h1 className="space-title">{spaceName}</h1>
        </div>
        <p className="space-subtitle">{subtitleText}</p>
      </div>

      {/* Sub Navigation Tabs */}
      <div className="sub-nav-tabs">
        <button className="tab-button active">Aufgaben</button>
        <button className="tab-button inactive">Notizen</button>
        <button className="tab-button inactive">Lern-Tracker</button>
      </div>

      {/* Content Grid (Aufgaben Tab) */}
      <div className="cards-grid">
        {/* Card 1: Mathe */}
        <div className="subject-card">
          <div className="card-glow"></div>
          <div className="card-top">
            <div className="card-icon">
              <Sigma size={28} />
            </div>
            <button className="more-btn">
              <MoreHorizontal size={24} />
            </button>
          </div>
          <div className="card-content">
            <h3 className="card-title">Mathe</h3>
            <p className="card-status">
              <span className="status-dot error"></span>
              2 Aufgaben offen
            </p>
          </div>
          <div className="card-footer">
            <div className="footer-content">
              <span>Last updated 2h ago</span>
              <ArrowRight size={18} />
            </div>
          </div>
        </div>

        {/* Card 2: Informatik */}
        <div className="subject-card is-secondary">
          <div className="card-glow"></div>
          <div className="card-top">
            <div className="card-icon">
              <Code size={28} />
            </div>
            <button className="more-btn">
              <MoreHorizontal size={24} />
            </button>
          </div>
          <div className="card-content">
            <h3 className="card-title">Informatik</h3>
            <p className="card-status">
              <span className="status-dot primary"></span>
              5 Aufgaben offen
            </p>
          </div>
          <div className="card-footer">
            <div className="footer-content">
              <span>Last updated 1d ago</span>
              <ArrowRight size={18} />
            </div>
          </div>
        </div>

        {/* Add New Sub-Space Card */}
        <div className="add-card group">
          <div className="add-icon-wrapper">
            <Plus size={36} />
          </div>
          <h3 className="add-card-title">Add Sub-Space</h3>
        </div>
      </div>
    </div>
  );
};

export default SpaceDetailView;
