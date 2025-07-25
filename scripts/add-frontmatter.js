const fs = require('fs');
const path = require('path');

// Function to extract dialogue info from existing headers
function extractDialogueInfo(content) {
  const lines = content.split('\n');
  
  // Find the title line (starts with # Dialogue-XXX:)
  const titleLine = lines.find(line => line.match(/^# Dialogue-\d+:/));
  if (!titleLine) return null;
  
  // Extract dialogue number and title
  const titleMatch = titleLine.match(/^# Dialogue-(\d+): (.+)$/);
  if (!titleMatch) return null;
  
  const dialogueNum = titleMatch[1];
  const title = titleMatch[2];
  
  // Find the day and universe line
  const dayLine = lines.find(line => line.includes('Day') && line.includes('Universe'));
  if (!dayLine) return null;
  
  const dayMatch = dayLine.match(/Day (\d+)/);
  const universeMatch = dayLine.match(/(\w+) Universe/);
  if (!dayMatch || !universeMatch) return null;
  
  const day = parseInt(dayMatch[1]);
  const universe = universeMatch[1];
  
  // Find participants line
  const participantsLine = lines.find(line => line.includes('Participants:'));
  if (!participantsLine) return null;
  
  const participantsMatch = participantsLine.match(/Participants: (.+)/);
  if (!participantsMatch) return null;
  
  const participants = participantsMatch[1].split(',').map(p => p.trim());
  
  // Find first utterance (first speaker after the ---)
  let firstUtterance = null;
  let foundSeparator = false;
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (line.trim() === '---') {
      foundSeparator = true;
      continue;
    }
    
    if (foundSeparator && line.includes('**') && line.includes(':')) {
      const utteranceMatch = line.match(/\*\*([^*]+)\*\*: \*?\[?([^*\]]+)\]?\*?/);
      if (utteranceMatch) {
        const speaker = utteranceMatch[1];
        const words = utteranceMatch[2];
        
        // Find the next line that contains the actual words
        for (let j = i + 1; j < lines.length; j++) {
          const nextLine = lines[j].trim();
          if (nextLine && !nextLine.startsWith('*') && !nextLine.startsWith('**')) {
            firstUtterance = {
              speaker: speaker,
              words: nextLine
            };
            break;
          }
        }
        break;
      }
    }
  }
  
  return {
    dialogueNum,
    title,
    day,
    universe,
    participants,
    firstUtterance
  };
}

// Function to add frontmatter to a file
function addFrontmatter(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Check if frontmatter already exists
    if (content.startsWith('---')) {
      console.log(`Frontmatter already exists in ${path.basename(filePath)}`);
      return;
    }
    
    const info = extractDialogueInfo(content);
    if (!info) {
      console.log(`Could not extract info from ${path.basename(filePath)}`);
      return;
    }
    
    // Generate frontmatter
    const frontmatter = `---
title: "${info.title}"
day: ${info.day}
dialogue-id: "dialogue-${info.dialogueNum.padStart(3, '0')}"
universe: "${info.universe}"
participants: ${JSON.stringify(info.participants)}
${info.firstUtterance ? `first-utterance:
  speaker: "${info.firstUtterance.speaker}"
  words: "${info.firstUtterance.words.replace(/"/g, '\\"')}"` : ''}
---

`;
    
    // Write the new content
    const newContent = frontmatter + content;
    fs.writeFileSync(filePath, newContent);
    
    console.log(`Added frontmatter to ${path.basename(filePath)}`);
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
}

// Main function
function main() {
  const docsDir = path.join(__dirname, '..', 'docs', 'first-month');
  
  // Find all dialogue files
  const files = fs.readdirSync(docsDir)
    .filter(file => file.startsWith('dialogue-') && file.endsWith('.md'))
    .sort();
  
  console.log(`Found ${files.length} dialogue files`);
  
  // Process each file
  for (const file of files) {
    const filePath = path.join(docsDir, file);
    addFrontmatter(filePath);
  }
  
  console.log('Frontmatter addition complete!');
}

// Run the script
if (require.main === module) {
  main();
}

module.exports = { extractDialogueInfo, addFrontmatter }; 