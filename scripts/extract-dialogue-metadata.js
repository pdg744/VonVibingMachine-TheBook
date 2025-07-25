const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const baseDir = path.join(__dirname, '../docs/first-month');

// Find all dialogue-XXX.md files in the directory
const dialogueFiles = fs.readdirSync(baseDir)
  .filter(f => /^dialogue-\d+\.md$/.test(f))
  .sort((a, b) => {
    // Sort numerically by dialogue number
    const numA = parseInt(a.match(/dialogue-(\d+)\.md/)[1], 10);
    const numB = parseInt(b.match(/dialogue-(\d+)\.md/)[1], 10);
    return numA - numB;
  })
  .slice(0, 10); // Only first 10 dialogues for now

const dialogues = dialogueFiles.map(filename => {
  const filePath = path.join(baseDir, filename);
  const fileContent = fs.readFileSync(filePath, 'utf8');
  const { data } = matter(fileContent);
  return {
    id: filename.replace('.md', ''),
    ...data,
  };
});

console.log(JSON.stringify(dialogues, null, 2)); 