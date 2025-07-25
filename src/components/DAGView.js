import React, { useCallback, useState, useEffect } from 'react';
import ReactFlow, { Controls, Position, Handle, useReactFlow, ReactFlowProvider } from 'react-flow-renderer';
import dialogueMetadata from '../dialogue-metadata.json';

const universeColors = {
  ENGINEERING: '#4F8EF7', // blue
  META: '#F7B84F',        // gold
};

function ParticipantGraph({ participants }) {
  const n = participants.length;
  if (n === 1) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#000' }} />
      </div>
    );
  } else if (n === 2) {
    return (
      <svg width="40" height="32" style={{ display: 'block', margin: '0 auto' }}>
        <circle cx="8" cy="16" r="4" fill="#000" />
        <circle cx="32" cy="16" r="4" fill="#000" />
        <line x1="8" y1="16" x2="32" y2="16" stroke="#000" strokeWidth="2" />
      </svg>
    );
  } else if (n === 3) {
    return (
      <svg width="32" height="32" style={{ display: 'block', margin: '0 auto' }}>
        <circle cx="16" cy="7" r="4" fill="#000" />
        <circle cx="7" cy="25" r="4" fill="#000" />
        <circle cx="25" cy="25" r="4" fill="#000" />
        <line x1="16" y1="7" x2="7" y2="25" stroke="#000" strokeWidth="2" />
        <line x1="16" y1="7" x2="25" y2="25" stroke="#000" strokeWidth="2" />
        <line x1="7" y1="25" x2="25" y2="25" stroke="#000" strokeWidth="2" />
      </svg>
    );
  } else if (n > 3) {
    // Draw n dots in a circle, connect each to its neighbors
    const R = 12;
    const cx = 16;
    const cy = 16;
    const points = Array.from({ length: n }, (_, i) => {
      const angle = (2 * Math.PI * i) / n - Math.PI / 2;
      return {
        x: cx + R * Math.cos(angle),
        y: cy + R * Math.sin(angle),
      };
    });
    return (
      <svg width="32" height="32" style={{ display: 'block', margin: '0 auto' }}>
        {/* Edges: connect each dot to its next neighbor (polygon) */}
        {points.map((p, i) => {
          const next = points[(i + 1) % n];
          return (
            <line key={i} x1={p.x} y1={p.y} x2={next.x} y2={next.y} stroke="#000" strokeWidth="2" />
          );
        })}
        {/* Dots */}
        {points.map((p, i) => (
          <circle key={i} cx={p.x} cy={p.y} r="4" fill="#000" />
        ))}
      </svg>
    );
  }
  return null;
}

function ParticipantNode({ id, data }) {
  return (
    <div style={{ width: 48, height: 48, display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
      {id !== 'dialogue-001' && (
        <Handle type="target" position={Position.Top} style={{ background: '#bbb', width: 10, height: 10, borderRadius: '50%', left: '50%', top: 0, transform: 'translateX(-50%)', border: '2px solid #fff', opacity: 0, pointerEvents: 'none' }} />
      )}
      {id !== `dialogue-0${dialogueMetadata.length}` && (
        <Handle type="source" position={Position.Bottom} style={{ background: '#bbb', width: 10, height: 10, borderRadius: '50%', left: '50%', bottom: 0, transform: 'translateX(-50%)', border: '2px solid #fff', opacity: 0, pointerEvents: 'none' }} />
      )}
      <ParticipantGraph participants={data.participants} />
    </div>
  );
}

const nodeTypes = {
  participantNode: ParticipantNode,
};

// Generate nodes and edges from metadata
const nodes = dialogueMetadata.map((d, i) => ({
  id: d.id,
  data: { participants: d.participants },
  position: { x: 250, y: 50 + i * 80 }, // was 150, now 80 for less vertical bloat
  style: {
    width: 48,
    height: 48,
    borderRadius: '50%',
    background: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: `3px solid ${universeColors[d.universe]}`,
    boxShadow: '0 2px 8px rgba(0,0,0,0.10)',
    padding: 0,
  },
  type: 'participantNode',
  sourcePosition: Position.Bottom,
  targetPosition: Position.Top,
}));

const edges = dialogueMetadata.slice(1).map((d, i) => ({
  id: `e${i + 1}-${i + 2}`,
  source: dialogueMetadata[i].id,
  target: d.id,
  animated: true,
}));

function NodeTooltip({ node, mouse, onClose }) {
  if (!node || !mouse) return null;
  const meta = dialogueMetadata.find(d => d.id === node.id);
  const dialoguePath = `/first-month/${meta.id}`;
  return (
    <div
      style={{
        position: 'fixed',
        left: mouse.x + 16,
        top: mouse.y - 10,
        background: 'white',
        border: 'none',
        borderRadius: 14,
        padding: '18px 22px 16px 22px',
        zIndex: 1000,
        minWidth: 220,
        boxShadow: '0 6px 32px 0 rgba(0,0,0,0.13)',
        fontFamily: 'inherit',
        fontSize: 17,
        color: '#222',
        lineHeight: 1.6,
        transition: 'opacity 0.15s',
        pointerEvents: 'auto',
      }}
    >
      <div style={{fontWeight: 600, fontSize: 18, marginBottom: 6}}>
        <a
          href={dialoguePath}
          style={{
            color: '#4F8EF7',
            textDecoration: 'none',
            borderBottom: '1.5px solid #4F8EF7',
            paddingBottom: 2,
            transition: 'color 0.15s',
          }}
          target="_blank"
          rel="noopener noreferrer"
        >
          {meta.title}
        </a>
      </div>
      <div style={{marginBottom: 2, display: 'flex', alignItems: 'center'}}>
        Universe:
        <span style={{
          display: 'inline-block',
          width: 14,
          height: 14,
          borderRadius: '50%',
          background: universeColors[meta.universe],
          margin: '0 8px 0 6px',
          border: '1.5px solid #bbb',
        }} />
        <span style={{fontWeight: 500}}>{meta.universe}</span>
      </div>
      <div style={{marginBottom: 2}}>Participants: <span style={{fontWeight: 500}}>{meta.participants.join(', ')}</span></div>
      {meta.first_utterance && (
        <div style={{margin: '10px 0 0 0', fontStyle: 'italic', fontSize: 15, color: '#444', borderLeft: '3px solid #eee', paddingLeft: 10}}>
          {meta.first_utterance}
        </div>
      )}
      <button
        style={{
          marginTop: 10,
          background: '#f7f7f7',
          border: 'none',
          borderRadius: 8,
          padding: '6px 14px',
          fontSize: 15,
          cursor: 'pointer',
          color: '#444',
          boxShadow: '0 1px 4px rgba(0,0,0,0.07)',
        }}
        onClick={onClose}
      >
        Close
      </button>
    </div>
  );
}

export default function DAGView() {
  const [selectedNode, setSelectedNode] = useState(null);
  const [mouse, setMouse] = useState(null);

  // Move the hook and effect inside the provider
  function InnerDAG() {
    const reactFlowInstance = useReactFlow();
    useEffect(() => {
      // Center on the third node (y = 50 + 2*80 = 210), zoom = 1
      reactFlowInstance.setViewport({ x: 240, y: -40, zoom: 1.5 });
    }, [reactFlowInstance]);

    const onNodeClick = useCallback((event, node) => {
      setSelectedNode(node);
      setMouse({ x: event.clientX, y: event.clientY });
    }, []);

    const onPaneClick = useCallback(() => {
      setSelectedNode(null);
      setMouse(null);
    }, []);

    return (
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodeClick={onNodeClick}
        onPaneClick={onPaneClick}
        nodesDraggable={false}
        nodesConnectable={false}
        elementsSelectable={false}
        zoomOnScroll={false}
        panOnScroll
        nodeTypes={nodeTypes}
      >
        <Controls />
      </ReactFlow>
    );
  }

  return (
    <div style={{ width: '100%', maxHeight: 600, height: '100%', overflowY: 'auto', position: 'relative', background: '#f9f9f9' }}>
      <ReactFlowProvider>
        <InnerDAG />
        {selectedNode && mouse && <NodeTooltip node={selectedNode} mouse={mouse} onClose={() => { setSelectedNode(null); setMouse(null); }} />}
      </ReactFlowProvider>
    </div>
  );
} 