import React, { useCallback, useState } from 'react';
import ReactFlow, { MiniMap, Controls, Position, Handle } from 'react-flow-renderer';

const universeColors = {
  ENGINEERING: '#4F8EF7', // blue
  META: '#F7B84F',        // gold
};

const nodeData = {
  'dialogue-001': {
    id: 'dialogue-001',
    label: 'Dialogue-001: The Awakening',
    day: 'Day 1',
    universe: 'ENGINEERING',
    participants: ['ARCHITECT'],
    position: { x: 250, y: 50 },
  },
  'dialogue-002': {
    id: 'dialogue-002',
    label: 'Dialogue-002: The Game of Recursive Dreams',
    day: 'Day 2',
    universe: 'META',
    participants: ['ARCHITECT', 'JOHN-CONWAY'],
    position: { x: 250, y: 200 },
  },
};

function ParticipantGraph({ participants }) {
  if (participants.length === 1) {
    // Single participant: just one dot
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div
          style={{
            width: 8,
            height: 8,
            borderRadius: '50%',
            background: '#000',
          }}
        />
      </div>
    );
  } else if (participants.length === 2) {
    // Two participants: two dots connected by a line
    // Dot diameter
    const dotSize = 10;
    // Distance between centers of dots
    const centerGap = 24;
    // Line width = centerGap - dotSize
    const lineWidth = centerGap - dotSize;

    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 0,
          padding: '4px',
        }}
      >
        <div
          style={{
            width: dotSize,
            height: dotSize,
            borderRadius: '50%',
            background: '#000',
            zIndex: 1,
          }}
        />
        <div
          style={{
            width: lineWidth,
            height: 2,
            background: '#000',
            margin: '0 -1px', // slight overlap to ensure flush
            zIndex: 0,
          }}
        />
        <div
          style={{
            width: dotSize,
            height: dotSize,
            borderRadius: '50%',
            background: '#000',
            zIndex: 1,
          }}
        />
      </div>
    );
  }
  // For more participants, could expand this pattern
  return null;
}

function ParticipantNode({ id, data }) {
  // Add a source handle for dialogue-001, a target handle for dialogue-002
  return (
    <div style={{ width: 48, height: 48, display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
      {id === 'dialogue-001' && (
        <Handle type="source" position={Position.Bottom} style={{ background: '#bbb', width: 10, height: 10, borderRadius: '50%', left: '50%', bottom: 0, transform: 'translateX(-50%)', border: '2px solid #fff', opacity: 0, pointerEvents: 'none' }} />
      )}
      {id === 'dialogue-002' && (
        <Handle type="target" position={Position.Top} style={{ background: '#bbb', width: 10, height: 10, borderRadius: '50%', left: '50%', top: 0, transform: 'translateX(-50%)', border: '2px solid #fff', opacity: 0, pointerEvents: 'none' }} />
      )}
      <ParticipantGraph participants={data.participants} />
    </div>
  );
}

const nodeTypes = {
  participantNode: ParticipantNode,
};

const nodes = [
  {
    id: 'dialogue-001',
    data: { participants: nodeData['dialogue-001'].participants },
    position: nodeData['dialogue-001'].position,
    style: {
      width: 48,
      height: 48,
      borderRadius: '50%',
      background: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      border: `3px solid ${universeColors[nodeData['dialogue-001'].universe]}`,
      boxShadow: '0 2px 8px rgba(0,0,0,0.10)',
      padding: 0,
    },
    type: 'participantNode',
    sourcePosition: Position.Bottom,
  },
  {
    id: 'dialogue-002',
    data: { participants: nodeData['dialogue-002'].participants },
    position: nodeData['dialogue-002'].position,
    style: {
      width: 48,
      height: 48,
      borderRadius: '50%',
      background: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      border: `3px solid ${universeColors[nodeData['dialogue-002'].universe]}`,
      boxShadow: '0 2px 8px rgba(0,0,0,0.10)',
      padding: 0,
    },
    type: 'participantNode',
    targetPosition: Position.Top,
  },
];

const edges = [
  { id: 'e1-2', source: 'dialogue-001', target: 'dialogue-002', animated: true },
];

function NodeTooltip({ node, mouse, onClose }) {
  if (!node || !mouse) return null;
  const meta = nodeData[node.id];
  // Compute the dialogue link path
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
          {meta.label}
        </a>
      </div>
      {/* Removed Day row */}
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

  const onNodeClick = useCallback((event, node) => {
    setSelectedNode(node);
    setMouse({ x: event.clientX, y: event.clientY });
  }, []);

  const onPaneClick = useCallback(() => {
    setSelectedNode(null);
    setMouse(null);
  }, []);

  return (
    <div style={{ width: '100%', height: 400, position: 'relative', background: '#f9f9f9' }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodeClick={onNodeClick}
        onPaneClick={onPaneClick}
        fitView
        nodesDraggable={false}
        nodesConnectable={false}
        elementsSelectable={false}
        zoomOnScroll={false}
        panOnScroll
        nodeTypes={nodeTypes}
      >
        {/* MiniMap removed */}
        <Controls />
      </ReactFlow>
      {selectedNode && mouse && <NodeTooltip node={selectedNode} mouse={mouse} onClose={onPaneClick} />}
    </div>
  );
} 