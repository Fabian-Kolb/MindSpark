import React, { useState, useRef } from 'react';
import './SuggestionsView.css';

// ─── Data ──────────────────────────────────────────────────────────────────

interface Task {
  id: string;
  name: string;
  desc: string;
  time?: string;
  completed?: boolean;
}

interface FocusMode {
  id: string;
  label: string;
  icon: string;
  effortBadge: string;
  description: string;
  actionLabel: string;
  tasks: Task[];
}

const FOCUS_MODES: FocusMode[] = [
  {
    id: 'quick-wins',
    label: 'Quick Wins',
    icon: '⚡',
    effortBadge: 'Low Effort',
    description: 'Small wins that build momentum. Perfect for when you need a gentle start to your session.',
    actionLabel: 'Start Quick Mode',
    tasks: [
      { id: 'qw1', name: 'Answer 3 Emails', desc: 'Clear the immediate backlog.', time: '10 min' },
      { id: 'qw2', name: 'Update To-Do List', desc: 'Realign priorities for today.', time: '5 min' },
      { id: 'qw3', name: 'Drink Water', desc: 'Hydration check-in.', time: '1 min' },
    ],
  },
  {
    id: 'balanced-focus',
    label: 'Balanced Focus',
    icon: '⚖️',
    effortBadge: 'Steady Pace',
    description: 'Steady pacing for standard tasks. Build on your quick wins with structured effort.',
    actionLabel: 'Start Balanced Mode',
    tasks: [
      { id: 'bf1', name: 'Review Project Plan', desc: 'Finalize Q3 roadmap.', time: '25 min' },
      { id: 'bf2', name: 'Inbox Zero', desc: 'Triage and clear your inbox.', time: '30 min' },
      { id: 'bf3', name: 'Write Weekly Update', desc: 'Summarize progress for the team.', time: '15 min' },
    ],
  },
  {
    id: 'deep-work',
    label: 'Deep Work',
    icon: '🎯',
    effortBadge: 'High Focus',
    description: 'Uninterrupted concentration mode. Turn off all notifications and delve into the core task.',
    actionLabel: 'Enter Deep Work',
    tasks: [
      { id: 'dw1', name: 'Coding Sprint', desc: 'Build the core architecture feature.', time: '90 min' },
      { id: 'dw2', name: 'Draft Specification', desc: 'Write the full spec document.', time: '60 min' },
    ],
  },
  {
    id: 'review-plan',
    label: 'Review & Plan',
    icon: '📋',
    effortBadge: 'Wind-Down',
    description: 'End of day reflection. Review what you accomplished and plan tomorrow\'s priorities.',
    actionLabel: 'Start Review',
    tasks: [
      { id: 'rp1', name: 'Daily Reflection', desc: 'Write 3 wins and 1 improvement.', time: '10 min' },
      { id: 'rp2', name: "Plan Tomorrow's Top 3", desc: 'Set your 3 most important tasks.', time: '5 min' },
    ],
  },
];

// ─── Component ─────────────────────────────────────────────────────────────

const SuggestionsView: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [completedTasks, setCompletedTasks] = useState<Set<string>>(new Set());
  const startXRef = useRef<number | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const wheelCooldown = useRef(false);

  const goTo = (index: number) => {
    setActiveIndex(Math.max(0, Math.min(index, FOCUS_MODES.length - 1)));
  };

  // Touch / pointer swipe
  const onPointerDown = (e: React.PointerEvent) => {
    startXRef.current = e.clientX;
  };

  const onPointerUp = (e: React.PointerEvent) => {
    if (startXRef.current === null) return;
    const diff = startXRef.current - e.clientX;
    if (Math.abs(diff) > 50) {
      goTo(diff > 0 ? activeIndex + 1 : activeIndex - 1);
    }
    startXRef.current = null;
  };

  // Mouse wheel scroll — throttled so one flick = one slide
  const onWheel = (e: React.WheelEvent) => {
    if (wheelCooldown.current) return;
    if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
      // Horizontal scroll
      if (e.deltaX > 30) goTo(activeIndex + 1);
      else if (e.deltaX < -30) goTo(activeIndex - 1);
    } else {
      // Vertical scroll acts as horizontal navigation
      if (e.deltaY > 30) goTo(activeIndex + 1);
      else if (e.deltaY < -30) goTo(activeIndex - 1);
    }
    wheelCooldown.current = true;
    setTimeout(() => { wheelCooldown.current = false; }, 600);
  };

  const toggleTask = (taskId: string) => {
    setCompletedTasks(prev => {
      const next = new Set(prev);
      if (next.has(taskId)) next.delete(taskId);
      else next.add(taskId);
      return next;
    });
  };

  return (
    <div className="suggestions-view">
      {/* Header */}
      <header className="suggestions-page-header">
        <h1>Focus Flow</h1>
        <p>Select a path for your current energy level.</p>
      </header>

      {/* Tab Navigation */}
      <nav className="focus-tabs" aria-label="Focus mode">
        {FOCUS_MODES.map((mode, i) => (
          <button
            key={mode.id}
            className={`focus-tab ${i === activeIndex ? 'active' : ''}`}
            onClick={() => goTo(i)}
          >
            {mode.label}
          </button>
        ))}
      </nav>

      {/* Carousel */}
      <div
        className="focus-carousel-wrapper"
        onPointerDown={onPointerDown}
        onPointerUp={onPointerUp}
        onWheel={onWheel}
      >
        <div
          ref={carouselRef}
          className="focus-carousel"
          style={{ transform: `translateX(calc(-${activeIndex} * (100% - 3rem - 2px)))` }}
        >
          {FOCUS_MODES.map((mode) => (
            <div key={mode.id} className="focus-mode-card">
              <div className="focus-mode-inner">
                {/* Card Header */}
                <div className="focus-mode-header">
                  <div className="focus-mode-title-group">
                    <div className="focus-mode-icon" aria-hidden="true">
                      {mode.icon}
                    </div>
                    <h2 className="focus-mode-title">{mode.label}</h2>
                  </div>
                  <span className="focus-effort-badge">{mode.effortBadge}</span>
                </div>

                {/* Description */}
                <p className="focus-mode-description">{mode.description}</p>

                {/* Task List */}
                <ul className="focus-task-list" role="list">
                  {mode.tasks.map((task) => {
                    const done = completedTasks.has(task.id);
                    return (
                      <li
                        key={task.id}
                        className={`focus-task-item ${done ? 'completed' : ''}`}
                        onClick={() => toggleTask(task.id)}
                        role="checkbox"
                        aria-checked={done}
                        tabIndex={0}
                        onKeyDown={(e) => e.key === 'Enter' && toggleTask(task.id)}
                      >
                        <div className="focus-task-check" />
                        <div className="focus-task-body">
                          <p className="focus-task-name">{task.name}</p>
                          <p className="focus-task-desc">{task.desc}</p>
                        </div>
                        {task.time && (
                          <span className="focus-task-time">{task.time}</span>
                        )}
                      </li>
                    );
                  })}
                </ul>

                {/* Action Button */}
                <button className="focus-action-btn">
                  {mode.actionLabel}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dot Indicators */}
      <div className="focus-dots" role="tablist" aria-label="Focus mode indicator">
        {FOCUS_MODES.map((mode, i) => (
          <button
            key={mode.id}
            className={`focus-dot ${i === activeIndex ? 'active' : ''}`}
            onClick={() => goTo(i)}
            role="tab"
            aria-selected={i === activeIndex}
            aria-label={mode.label}
          />
        ))}
      </div>
    </div>
  );
};

export default SuggestionsView;
