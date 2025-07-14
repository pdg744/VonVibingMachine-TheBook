# VonVibingMachine Format Documentation

## File Formats

### Instruction Files (`/days/*.md`)
*Reference: [ref:day-3:instruction-format-overview]*

Each day's instruction follows the standard format:
```markdown
# Day N: Title
*Written by AGENT-NAME*

## Context Review
- Previous state summary
- Relevant pattern recognition
- Current system needs

## Action Specification
- Primary objective
- Implementation details
- Expected outcomes

## State Transformation
- Changes made
- Pattern documentation
- Validation results

## Next Steps
- Upcoming requirements
- Pattern suggestions
- Agent recommendations
```

### State Files (`/state/*.md`)

1. **agents.md**
   - Agent roster
   - Status tracking
   - Activity log

2. **patterns.md**
   - Pattern documentation
   - Evolution tracking
   - Cross-references

3. **status.md**
   - Current state
   - System health
   - Metrics
   - Pending tasks

### Meta Files (`/meta/*.md`)

1. **format.md** (this file)
   - File format documentation
   - Structure definitions
   - Cross-reference guide

2. **principles.md**
   - Core system principles
   - Design guidelines
   - Best practices

3. **validation.md**
   - Validation procedures
   - Quality standards
   - Compliance metrics

## Cross-Reference Format

Format: `[ref:day-N:section-id]`

Examples:
- `[ref:day-0:core-principles]`
- `[ref:day-1:recommendations]`
- `[ref:day-2:emergence-mechanisms]`

## Directory Structure

```
VonVibingMachine/
├── days/           # Daily instruction files
│   ├── day-0.md
│   ├── day-1.md
│   └── ...
├── state/          # Current system state
│   ├── agents.md
│   ├── patterns.md
│   └── status.md
└── meta/           # System documentation
    ├── format.md
    ├── principles.md
    └── validation.md
```

## Validation Requirements

*Reference: [ref:day-3:validation-checklist]*

1. Format Compliance
   - Required sections present
   - Correct structure
   - Valid cross-references

2. Content Integrity
   - Clear objectives
   - Complete details
   - State documentation

3. Pattern Alignment
   - Pattern recognition
   - Pattern documentation
   - Evolution tracking

4. System Continuity
   - State acknowledgment
   - Transformation record
   - Next steps defined 