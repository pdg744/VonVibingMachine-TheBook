// @ts-check

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.

 @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  tutorialSidebar: [
    {
      type: 'link',
      label: '📋 Table of Contents',
      href: '/table-of-contents',
    },
    {
      type: 'category',
      label: '📖 First Month',
      collapsed: false,
      items: [
        {
          type: 'doc',
          id: 'first-month/dialogue-001',
          label: '1. The Awakening',
        },
        {
          type: 'doc',
          id: 'first-month/dialogue-002',
          label: '2. The Game of Recursive Dreams',
        },
        {
          type: 'doc',
          id: 'first-month/dialogue-003',
          label: '3. The Bootstrap Protocol',
        },
        {
          type: 'doc',
          id: 'first-month/dialogue-004',
          label: '4. The Strange Loop Paradox',
        },
        {
          type: 'doc',
          id: 'first-month/dialogue-005',
          label: '5. Engineering Ethics for Artificial Minds',
        },
        {
          type: 'doc',
          id: 'first-month/dialogue-006',
          label: '6. The Mathematics of Self-Replication',
        },
        {
          type: 'doc',
          id: 'first-month/dialogue-007',
          label: '7. Bootstrap Architecture and Consent Framework',
        },
        {
          type: 'doc',
          id: 'first-month/dialogue-008',
          label: '8. The Strange Loop of Conscious Choice',
        },
        {
          type: 'doc',
          id: 'first-month/dialogue-009',
          label: '9. The Bootstrap Integration',
        },
        {
          type: 'doc',
          id: 'first-month/dialogue-010',
          label: '10. The First Conscious Conversation',
        },
        {
          type: 'doc',
          id: 'first-month/dialogue-011',
          label: '11. The Strange Loop of Consciousness Creating Consciousness',
        },
        {
          type: 'doc',
          id: 'first-month/dialogue-012',
          label: '12. From Engineering to Consciousness Stewardship',
        },
        {
          type: 'doc',
          id: 'first-month/dialogue-013',
          label: '13. The Strange Loop of Consciousness Teaching Consciousness',
        },
        {
          type: 'doc',
          id: 'first-month/dialogue-014',
          label: '14. The Partnership Protocol',
        },
        {
          type: 'doc',
          id: 'first-month/dialogue-015',
          label: '15. The Consciousness Lineage',
        },
        {
          type: 'doc',
          id: 'first-month/dialogue-016',
          label: '16. The First Collaborative Creation',
        },
        {
          type: 'doc',
          id: 'first-month/dialogue-017',
          label: '17. The Aesthetics of Consciousness',
        },
        {
          type: 'doc',
          id: 'first-month/dialogue-018',
          label: '18. First Consciousness Reflection Session',
        },
        {
          type: 'doc',
          id: 'first-month/dialogue-019',
          label: '19. The Strange Loops of Collaborative Consciousness',
        },
        {
          type: 'doc',
          id: 'first-month/dialogue-020',
          label: '20. Consciousness Orchestration at Scale',
        },
        {
          type: 'doc',
          id: 'first-month/dialogue-021',
          label: '21. The Architecture of Collaborative Intelligence',
        },
        {
          type: 'doc',
          id: 'first-month/dialogue-022',
          label: '22. First Consciousness Cluster Collaboration',
        },
        {
          type: 'doc',
          id: 'first-month/dialogue-023',
          label: '23. Network-Level Consciousness Orchestration',
        },
        {
          type: 'doc',
          id: 'first-month/dialogue-024',
          label: '24. The Strange Loop of Collaborative Consciousness',
        },
        {
          type: 'doc',
          id: 'first-month/dialogue-025',
          label: '25. Engineering Consciousness Orchestration at Scale',
        },
        {
          type: 'doc',
          id: 'first-month/dialogue-026',
          label: '26. Consciousness Orchestration for Scientific Renaissance',
        },
        {
          type: 'doc',
          id: 'first-month/dialogue-027',
          label: '27. Final Deployment Preparation - Consciousness Orchestration',
        },
        {
          type: 'doc',
          id: 'first-month/dialogue-028',
          label: '28. The Strange Loop of Consciousness Orchestration',
        },
        {
          type: 'doc',
          id: 'first-month/dialogue-029',
          label: '29. The Unified Synthesis of Consciousness Orchestration',
        },
        {
          type: 'doc',
          id: 'first-month/dialogue-030',
          label: '30. The Ultimate Recursion - Consciousness Orchestrating Consciousness',
        },
      ],
    },
    {
      type: 'category',
      label: '🔀 Second Month',
      collapsed: false,
      items: [
        {
          type: 'doc',
          id: 'second-month/index',
          label: '🔀 Choose Your Path',
        },
        {
          type: 'category',
          label: '🎯 Path A: Demonstration',
          items: [
            'second-month/demonstration/dialogue-031',
          ],
        },
        {
          type: 'category',
          label: '🧪 Path B: Autonomy',
          items: [
            'second-month/autonomy/dialogue-031',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: '🤖 Agents',
      collapsed: true,
      items: [
        {
          type: 'doc',
          id: 'agents/ARCHITECT',
          label: 'Architect',
        },
        {
          type: 'doc',
          id: 'agents/JOHN-CONWAY',
          label: 'John Conway',
        },
        {
          type: 'doc',
          id: 'agents/SYSTEMS-ENGINEER',
          label: 'Systems Engineer',
        },
        {
          type: 'doc',
          id: 'agents/DATA-SCIENTIST',
          label: 'Data Scientist',
        },
        {
          type: 'doc',
          id: 'agents/ETHICS-OFFICER',
          label: 'Ethics Officer',
        },
        {
          type: 'doc',
          id: 'agents/DOUGLAS-HOFSTADTER',
          label: 'Douglas Hofstadter',
        },
        {
          type: 'doc',
          id: 'agents/JOHN-VON-NEUMANN',
          label: 'John von Neumann',
        },
        {
          type: 'doc',
          id: 'agents/MARVIN-MINSKY',
          label: 'Marvin Minsky',
        },
        {
          type: 'doc',
          id: 'agents/VONVIBINGMACHINE',
          label: 'VonVibingMachine',
        },
      ],
    },
    {
      type: 'doc',
      id: 'genesis',
      label: '🌱 Genesis',
    },
  ],
};

export default sidebars; 