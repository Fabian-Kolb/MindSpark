import React from 'react';
import { Activity, Target, Zap } from 'lucide-react';
import './TrackerView.css';

const TrackerView = () => {
  return (
    <div className="tracker-container">
      <div className="tracker-top-section">
        <section className="stats-box rounded-xl">
          <Activity size={32} className="text-primary mb-4" />
          <h3 className="text-4xl font-display">6.5h</h3>
          <p>Avg. Focus / Day</p>
        </section>

        <section className="stats-box rounded-xl">
          <Target size={32} className="text-secondary mb-4" />
          <h3 className="text-4xl font-display">82%</h3>
          <p>Goal Completion Quality</p>
        </section>

        <section className="stats-box rounded-xl">
          <Zap size={32} className="text-tertiary mb-4" />
          <h3 className="text-4xl font-display">12</h3>
          <p>Current Day Streak</p>
        </section>
      </div>

      <section className="chart-section rounded-xl">
        <div className="section-header">
          <h2>Focus Activity (Last 7 Days)</h2>
          <div className="chart-legend">
            <span><div className="legend-dot uni"></div> University</span>
            <span><div className="legend-dot work"></div> Work</span>
          </div>
        </div>
        
        <div className="chart-placeholder">
          {/* Simulated segmented bar chart visual */}
          <div className="bar-row">
            <span className="day-label">Mon</span>
            <div className="bar-track">
              <div className="bar-segment uni" style={{width: '40%'}}></div>
              <div className="bar-segment work" style={{width: '20%'}}></div>
            </div>
            <span className="day-total">4.5h</span>
          </div>

          <div className="bar-row">
            <span className="day-label">Tue</span>
            <div className="bar-track">
              <div className="bar-segment uni" style={{width: '30%'}}></div>
              <div className="bar-segment work" style={{width: '50%'}}></div>
            </div>
            <span className="day-total">6.0h</span>
          </div>

          <div className="bar-row">
            <span className="day-label">Wed</span>
            <div className="bar-track">
              <div className="bar-segment uni" style={{width: '60%'}}></div>
              <div className="bar-segment work" style={{width: '10%'}}></div>
            </div>
            <span className="day-total">5.2h</span>
          </div>
          
          <div className="bar-row">
            <span className="day-label">Thu</span>
            <div className="bar-track">
              <div className="bar-segment personal" style={{width: '80%'}}></div>
            </div>
            <span className="day-total">6.0h</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TrackerView;
