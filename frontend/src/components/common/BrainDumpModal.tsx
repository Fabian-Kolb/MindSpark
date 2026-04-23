import React, { useState } from 'react';
import { X, Send } from 'lucide-react';
import './BrainDumpModal.css';

interface BrainDumpModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const BrainDumpModal: React.FC<BrainDumpModalProps> = ({ isOpen, onClose }) => {
  const [content, setContent] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!content.trim()) return;
    // In a real app we'd dispatch this to the store/backend
    console.log('Brain dump saved:', content);
    setContent('');
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container rounded-lg">
        <div className="modal-header">
          <h3>Quick Brain-Dump</h3>
          <button className="icon-btn" onClick={onClose} type="button">
            <X size={20} />
          </button>
        </div>
        
        <form onSubmit={handleSubmit} className="dump-form">
          <textarea 
            autoFocus
            placeholder="What's on your mind? Capture it now before it's gone..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="dump-input"
          />
          <div className="modal-footer">
            <span className="info-text">Saved to your inbox automatically.</span>
            <button type="submit" className="btn-primary" disabled={!content.trim()}>
              <Send size={16} /> Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default BrainDumpModal;
