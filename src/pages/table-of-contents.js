import React, { useState } from 'react';
import Layout from '@theme/Layout';
import dialoguesData from '../data/dialogues.json';

export default function Timeline() {
  const [expandedPreviews, setExpandedPreviews] = useState(new Set());

  const togglePreview = (dialogueId) => {
    const newExpanded = new Set(expandedPreviews);
    if (newExpanded.has(dialogueId)) {
      newExpanded.delete(dialogueId);
    } else {
      newExpanded.add(dialogueId);
    }
    setExpandedPreviews(newExpanded);
  };

  // Function to render participant links
  const renderParticipants = (participants) => {
    if (!participants || participants.length === 0) return 'N/A';
    
    return participants.map((participant, index) => {
      const isLast = index === participants.length - 1;
      return (
        <span key={participant}>
          <a 
            href={`/agents/${participant}`} 
            className="participant-link"
            title={`View ${participant} character description`}
          >
            {participant}
          </a>
          {!isLast && ', '}
        </span>
      );
    });
  };

  return (
    <Layout title="Timeline">
      <main className="container margin-vert--lg">
        <div className="row">
          <div className="col col--12">
            <div className="timeline">
              {dialoguesData.map((dialogue, index) => (
                <div key={dialogue['dialogue-id']} className="timeline-item">
                  <div className="timeline-marker">
                    <span>{dialogue.day}</span>
                  </div>
                  <div className="timeline-content">
                    <h3>
                      <a href={`/${dialogue.filePath.split('/docs/')[1].replace('.md', '')}`}>
                        {dialogue.title}
                      </a>
                    </h3>
                    <p><strong>Universe:</strong> {dialogue.universe || 'N/A'}</p>
                    <p><strong>Participants:</strong> {renderParticipants(dialogue.participants)}</p>
                    {dialogue['first-utterance'] && (
                      <p className="first-utterance-click">
                        <strong>Preview:</strong> 
                        <button 
                          className="click-trigger" 
                          onClick={() => togglePreview(dialogue['dialogue-id'])}
                        >
                          💭💭💭
                        </button>
                        {expandedPreviews.has(dialogue['dialogue-id']) && (
                          <div className="click-content">
                            <strong>{dialogue['first-utterance'].speaker}:</strong> {dialogue['first-utterance'].words}
                            <br />
                            <a href={`/${dialogue.filePath.split('/docs/')[1].replace('.md', '')}`} className="read-more-link">
                              Read full dialogue →
                            </a>
                          </div>
                        )}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
} 