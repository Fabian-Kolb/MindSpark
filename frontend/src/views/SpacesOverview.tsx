import React from 'react';
import { useNavigate } from 'react-router-dom';
import { GraduationCap, Code, Lightbulb, Coffee, ArrowRight, ListFilter } from 'lucide-react';
import './SpacesOverview.css';

const SpacesOverview = () => {
  const navigate = useNavigate();

  const handleSpaceClick = (spaceId: string) => {
    navigate(`/spaces/${spaceId}`);
  };

  return (
    <div className="spaces-page-canvas">
      {/* Header Section */}
      <div className="spaces-page-header">
        <div className="spaces-page-title-group">
          <h1 className="spaces-page-title">Spaces</h1>
          <p className="spaces-page-subtitle">Your luminous sanctuary for focus and creation.</p>
        </div>
        {/* Quick Actions */}
        <div className="spaces-page-actions">
          <button className="spaces-filter-btn">
            <ListFilter size={18} />
            <span>Filter</span>
          </button>
        </div>
      </div>

      {/* Dynamic Grid */}
      <div className="spaces-grid-enhanced">
        {/* Card 1: Uni */}
        <div className="space-card-enhanced uni-glow" onClick={() => handleSpaceClick('uni')}>
          <div className="space-card-bg-glow uni-bg-glow"></div>
          <div className="space-card-top">
            <div className="space-card-icon shadow-uni">
              <GraduationCap size={28} />
            </div>
            <span className="space-card-badge badge-default">
              3 anstehend
            </span>
          </div>
          <div className="space-card-content">
            <h2 className="title-uni">Uni</h2>
            <p>Lectures, assignments, and study materials.</p>
          </div>
          <div className="atmospheric-divider"></div>
          <div className="space-card-footer">
            <span>Updated 2h ago</span>
            <button className="footer-btn transition-uni">
              <ArrowRight size={18} />
            </button>
          </div>
        </div>

        {/* Card 2: Coding & Projekte */}
        <div className="space-card-enhanced coding-glow" onClick={() => handleSpaceClick('coding')}>
          <div className="space-card-bg-glow coding-bg-glow"></div>
          <div className="space-card-top">
            <div className="space-card-icon shadow-coding">
              <Code size={28} />
            </div>
            <span className="space-card-badge badge-coding">
              Active Sprint
            </span>
          </div>
          <div className="space-card-content">
            <h2 className="title-coding">Coding & Projekte</h2>
            <p>Development environments, repositories, and technical specs.</p>
          </div>
          <div className="atmospheric-divider"></div>
          <div className="space-card-footer">
            <span>Updated just now</span>
            <button className="footer-btn transition-coding">
              <ArrowRight size={18} />
            </button>
          </div>
        </div>

        {/* Card 3: Ideen-Tresor */}
        <div className="space-card-enhanced idea-glow" onClick={() => handleSpaceClick('ideas')}>
          <div className="space-card-bg-glow idea-bg-glow"></div>
          <div className="space-card-top">
            <div className="space-card-icon shadow-idea">
              <Lightbulb size={28} />
            </div>
            <span className="space-card-badge badge-default">
              12 Unsorted
            </span>
          </div>
          <div className="space-card-content">
            <h2 className="title-idea">Ideen-Tresor</h2>
            <p>Raw thoughts, inspiration, and future explorations.</p>
          </div>
          <div className="atmospheric-divider"></div>
          <div className="space-card-footer">
            <span>Updated 1d ago</span>
            <button className="footer-btn transition-idea">
              <ArrowRight size={18} />
            </button>
          </div>
        </div>

        {/* Card 4: Life & Freizeit */}
        <div className="space-card-enhanced life-glow" onClick={() => handleSpaceClick('life')}>
          <div className="space-card-bg-glow life-bg-glow"></div>
          <div className="space-card-top">
            <div className="space-card-icon shadow-life">
              <Coffee size={28} />
            </div>
            <span className="space-card-badge badge-default">
              Relax Mode
            </span>
          </div>
          <div className="space-card-content">
            <h2 className="title-life">Life & Freizeit</h2>
            <p>Personal goals, hobbies, and downtime planning.</p>
          </div>
          <div className="atmospheric-divider"></div>
          <div className="space-card-footer">
            <span>Updated 4h ago</span>
            <button className="footer-btn transition-life">
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpacesOverview;
