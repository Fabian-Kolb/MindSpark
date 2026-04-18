
import { Terminal, GraduationCap, Lightbulb, CalendarDays, Star, ArrowUp, ListPlus } from 'lucide-react';
import './TrackerView.css';

const TrackerView = () => {
  return (
    <div className="tracker-canvas">
      {/* Header Section */}
      <section className="tracker-header">
        <h1 className="tracker-title">Weekly Rhythm</h1>
        <p className="tracker-subtitle">
          A detailed breakdown of your time investment across core focus areas. The glow indicates sustained deep work sessions.
        </p>
      </section>

      {/* Main Chart Card */}
      <section className="chart-card">
        <div className="chart-card-glow"></div>
        <div className="chart-header-row">
          <div>
            <h2 className="chart-title">Productivity Distribution</h2>
            <div className="chart-subtitle">
              <CalendarDays size={16} />
              <span>Oct 24 - Oct 30</span>
            </div>
          </div>
          
          {/* Legend */}
          <div className="chart-legend">
            <div className="legend-item">
              <div className="legend-color coding"></div>
              <span className="legend-label">Coding</span>
            </div>
            <div className="legend-item">
              <div className="legend-color uni"></div>
              <span className="legend-label">Uni</span>
            </div>
            <div className="legend-item">
              <div className="legend-color ideas"></div>
              <span className="legend-label">Ideas</span>
            </div>
            <div className="legend-item">
              <div className="legend-color life"></div>
              <span className="legend-label">Life</span>
            </div>
          </div>
        </div>

        {/* Active Chart Area */}
        <div className="chart-body">
          {/* Y-Axis Grid Lines */}
          <div className="chart-y-grid">
            <div className="grid-line"></div>
            <div className="grid-line"></div>
            <div className="grid-line"></div>
            <div className="grid-line"></div>
            <div className="grid-line"></div>
          </div>
          
          {/* Y-Axis Labels */}
          <div className="chart-y-labels">
            <span>12h</span>
            <span>9h</span>
            <span>6h</span>
            <span>3h</span>
            <span>0h</span>
          </div>

          <div className="bars-container">
            {/* Day 1: Mon */}
            <div className="bar-column">
              <div className="bar-stack-wrapper" style={{ height: '80%' }}>
                <div className="bar-segment segment-ideas" style={{ height: '15%' }}></div>
                <div className="bar-segment segment-uni" style={{ height: '30%' }}></div>
                <div className="bar-segment segment-coding" style={{ height: '40%' }}></div>
                <div className="bar-segment segment-life" style={{ height: '15%' }}></div>
              </div>
              <span className="bar-day-label">Mon</span>
            </div>

            {/* Day 2: Tue */}
            <div className="bar-column">
              <div className="bar-stack-wrapper" style={{ height: '65%' }}>
                <div className="bar-segment segment-uni" style={{ height: '40%' }}></div>
                <div className="bar-segment segment-coding" style={{ height: '20%' }}></div>
                <div className="bar-segment segment-life" style={{ height: '40%' }}></div>
              </div>
              <span className="bar-day-label">Tue</span>
            </div>

            {/* Day 3: Wed */}
            <div className="bar-column strong-day">
              <div className="bar-stack-wrapper" style={{ height: '90%' }}>
                <div className="bar-glow-aura"></div>
                <div className="bar-segment segment-ideas" style={{ height: '20%' }}></div>
                <div className="bar-segment segment-coding" style={{ height: '60%' }}></div>
                <div className="bar-segment segment-life" style={{ height: '20%' }}></div>
              </div>
              <span className="bar-day-label">Wed</span>
            </div>

            {/* Day 4: Thu */}
            <div className="bar-column">
              <div className="bar-stack-wrapper" style={{ height: '50%' }}>
                <div className="bar-segment segment-uni" style={{ height: '20%' }}></div>
                <div className="bar-segment segment-life" style={{ height: '80%' }}></div>
              </div>
              <span className="bar-day-label">Thu</span>
            </div>

            {/* Day 5: Fri */}
            <div className="bar-column">
              <div className="bar-stack-wrapper" style={{ height: '75%' }}>
                <div className="bar-segment segment-ideas" style={{ height: '30%' }}></div>
                <div className="bar-segment segment-uni" style={{ height: '30%' }}></div>
                <div className="bar-segment segment-coding" style={{ height: '20%' }}></div>
                <div className="bar-segment segment-life" style={{ height: '20%' }}></div>
              </div>
              <span className="bar-day-label">Fri</span>
            </div>

            {/* Day 6: Sat */}
            <div className="bar-column">
              <div className="bar-stack-wrapper" style={{ height: '40%' }}>
                <div className="bar-segment segment-ideas" style={{ height: '40%' }}></div>
                <div className="bar-segment segment-life" style={{ height: '60%' }}></div>
              </div>
              <span className="bar-day-label">Sat</span>
            </div>

            {/* Day 7: Sun */}
            <div className="bar-column">
              <div className="bar-stack-wrapper" style={{ height: '30%' }}>
                <div className="bar-segment segment-life" style={{ height: '100%' }}></div>
              </div>
              <span className="bar-day-label">Sun</span>
            </div>
          </div>
        </div>
      </section>

      {/* Secondary Insights Grid */}
      <section className="insights-grid">
        {/* Insight Card 1 */}
        <div className="insight-card">
          <div>
            <div className="insight-header">
              <div className="insight-icon-ring icon-ring-coding">
                <Terminal size={18} />
              </div>
              <h3 className="insight-title">Deep Work Peak</h3>
            </div>
            <p className="insight-value">Wed, 4:00 PM</p>
          </div>
          <div className="insight-footer">
            <p>Sustained coding block lasted 4.5 hours with high focus scores.</p>
          </div>
        </div>

        {/* Insight Card 2 */}
        <div className="insight-card highlighted">
          <div className="insight-bg-glow"></div>
          <div>
            <div className="insight-header">
              <div className="insight-icon-ring icon-ring-uni">
                <GraduationCap size={18} />
              </div>
              <h3 className="insight-title">Uni Allocation</h3>
            </div>
            <div className="insight-value-group">
              <p className="insight-value">18.5h</p>
              <p className="insight-trend">
                <ArrowUp size={14} /> 12%
              </p>
            </div>
          </div>
          <div className="insight-progress-container">
            <div className="insight-progress-track">
              <div className="insight-progress-fill"></div>
            </div>
            <span className="insight-progress-label">65% of weekly goal</span>
          </div>
        </div>

        {/* Insight Card 3 */}
        <div className="insight-card">
          <div>
            <div className="insight-header">
              <div className="insight-icon-ring icon-ring-ideas">
                <Lightbulb size={18} />
              </div>
              <h3 className="insight-title">Idea Incubation</h3>
            </div>
            <p className="insight-value">5 Sessions</p>
          </div>
          <div className="insight-session-circles">
            <div className="session-circle sc-1"><Star size={14} strokeWidth={2.5} /></div>
            <div className="session-circle sc-2"><Star size={14} fill="currentColor" /></div>
            <div className="session-circle sc-3"><Star size={14} fill="currentColor" /></div>
            <div className="session-circle sc-empty"></div>
            <div className="session-circle sc-empty"></div>
          </div>
        </div>
      </section>

      <div className="tracker-divider"></div>

      {/* Action Area */}
      <section className="tracker-actions">
        <button className="btn-primary">
          <ListPlus size={20} />
          Log New Session
        </button>
      </section>
    </div>
  );
};

export default TrackerView;
