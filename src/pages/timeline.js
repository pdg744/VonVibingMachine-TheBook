import React from 'react';
import Layout from '@theme/Layout';
import DAGView from '../components/DAGView';

export default function Timeline() {
  return (
    <Layout title="Timeline" description="Explore the progression of dialogues through the VonVibingMachine universe">
      <main style={{ padding: '2rem 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <img 
              src="/img/social-card.png" 
              alt="VonVibingMachine Social Card" 
              style={{ maxWidth: '100%', height: 'auto', marginBottom: '2rem' }}
            />
            
          </div>
          
          <div style={{ height: '600px', marginTop: '2rem' }}>
            <DAGView />
            <h1> </h1>
            <p style={{ fontSize: '1.2rem', color: '#666', maxWidth: '600px', margin: '0 auto' }}>
              Explore the progression of dialogues through the VonVibingMachine universe. 
              Each node represents a dialogue, colored by universe and showing the participant structure within.
            </p>
          </div>
        </div>
      </main>
    </Layout>
  );
} 