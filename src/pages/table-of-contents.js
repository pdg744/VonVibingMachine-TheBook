import React from 'react';
import Layout from '@theme/Layout';
import dialoguesData from '../data/dialogues.json';

export default function Timeline() {
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
                    <p><strong>Participants:</strong> {dialogue.participants?.join(', ') || 'N/A'}</p>
                    {dialogue['first-utterance'] && (
                      <p className="first-utterance-hover">
                        <strong>Preview:</strong> <a href={`/${dialogue.filePath.split('/docs/')[1].replace('.md', '')}`} className="hover-trigger">💭💭💭</a>
                        <div className="hover-content">
                          <strong>{dialogue['first-utterance'].speaker}:</strong> {dialogue['first-utterance'].words}
                        </div>
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