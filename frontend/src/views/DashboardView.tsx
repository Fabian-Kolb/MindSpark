
import './DashboardView.css';
import { Check, Clock, Flame, Sparkles } from 'lucide-react';

const DashboardView = () => {
  return (
    <div className="dashboard-grid">
      {/* Left Column: Brain Dump */}
      <section className="dashboard-col">
        <h1 className="font-headline page-title text-on-surface">Brain-Dump</h1>
        <div className="brain-dump-container rounded-xl glow-primary ghost-border">
          <textarea 
            className="brain-dump-textarea" 
            placeholder="Was schwirrt dir im Kopf herum? Tippe es hier rein und mach den Kopf frei..."
          ></textarea>
          <div className="atmospheric-divider"></div>
          <button className="btn-primary brain-dump-btn glow-primary">
            Magie wirken lassen <Sparkles size={20} />
          </button>
        </div>
      </section>

      {/* Right Column: Focus Tasks & Motivation */}
      <section className="dashboard-col">
        <div className="tasks-section">
          <div className="tasks-header">
            <h2>Dein Fokus für jetzt</h2>
            <span className="task-count ghost-border">3 / 3</span>
          </div>
          <div className="task-list mt-6">
            {/* Task 1 */}
            <div className="task-card rounded-lg">
              <div className="task-checkbox">
                <Check strokeWidth={3} />
              </div>
              <div className="task-content">
                <p className="task-title">Vorlesungsskript Mathematik Kapitel 4 zusammenfassen</p>
                <div className="task-meta">
                  <span className="task-tag">Uni / Mathe</span>
                  <span className="task-time"><Clock strokeWidth={2.5} /> 45 min</span>
                </div>
              </div>
            </div>
            
            {/* Task 2 */}
            <div className="task-card rounded-lg">
              <div className="task-checkbox">
                <Check strokeWidth={3} />
              </div>
              <div className="task-content">
                <p className="task-title">WG-Putzplan für nächsten Monat erstellen</p>
                <div className="task-meta">
                  <span className="task-tag">Life Admin</span>
                </div>
              </div>
            </div>

            {/* Task 3 */}
            <div className="task-card rounded-lg">
              <div className="task-checkbox">
                <Check strokeWidth={3} />
              </div>
              <div className="task-content">
                <p className="task-title">Literaturrecherche für Seminararbeit beginnen</p>
                <div className="task-meta">
                  <span className="task-tag">Uni / Seminar</span>
                  <span className="task-time"><Clock strokeWidth={2.5} /> 90 min</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Motivation Box */}
        <div className="motivation-box rounded-xl glow-primary">
          <div className="motivation-icon">
            <Flame size={24} />
          </div>
          <div className="motivation-content">
            <h3>Bleib dran!</h3>
            <p>Du hast diese Woche schon 12 Stunden fokussiert gearbeitet. Noch ein kleiner Push!</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DashboardView;
