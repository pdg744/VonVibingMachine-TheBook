const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');

// Function to extract frontmatter from a markdown file
function extractFrontmatter(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has frontmatter (starts with ---)
    if (!content.startsWith('---')) {
      console.warn(`No frontmatter found in ${filePath}`);
      return null;
    }
    
    // Find the end of frontmatter (second ---)
    const frontmatterEnd = content.indexOf('---', 3);
    if (frontmatterEnd === -1) {
      console.warn(`Malformed frontmatter in ${filePath}`);
      return null;
    }
    
    // Extract frontmatter content
    const frontmatterContent = content.substring(3, frontmatterEnd).trim();
    
    // Parse YAML
    const frontmatter = yaml.load(frontmatterContent);
    
    // Add file path for reference
    frontmatter.filePath = filePath;
    
    return frontmatter;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return null;
  }
}

// Function to recursively find all dialogue files
function findDialogueFiles(dir) {
  const files = [];
  
  function scanDirectory(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        scanDirectory(fullPath);
      } else if (item.startsWith('dialogue-') && item.endsWith('.md')) {
        files.push(fullPath);
      }
    }
  }
  
  scanDirectory(dir);
  return files;
}

// Main function
function main() {
  const docsDir = path.join(__dirname, '..', 'docs');
  const outputDir = path.join(__dirname, '..', 'src', 'data');
  
  // Create output directory if it doesn't exist
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }
  
  // Find all dialogue files
  const dialogueFiles = findDialogueFiles(docsDir);
  console.log(`Found ${dialogueFiles.length} dialogue files`);
  
  // Process all 30 dialogues
  const maxDialogues = 30;
  const limitedFiles = dialogueFiles.slice(0, maxDialogues);
  console.log(`Processing first ${maxDialogues} dialogue(s)`);
  
  // Extract frontmatter from each file
  const dialogues = [];
  
  for (const filePath of limitedFiles) {
    const frontmatter = extractFrontmatter(filePath);
    if (frontmatter) {
      dialogues.push(frontmatter);
    }
  }
  
  // Sort by day
  dialogues.sort((a, b) => a.day - b.day);
  
  // Write to JSON file
  const outputPath = path.join(outputDir, 'dialogues.json');
  fs.writeFileSync(outputPath, JSON.stringify(dialogues, null, 2));
  
  console.log(`Extracted frontmatter from ${dialogues.length} dialogues`);
  console.log(`Output written to ${outputPath}`);
  
  // Also create a TypeScript type definition
  const typeDefinition = `// Auto-generated type definitions for dialogue frontmatter
export interface DialogueFrontmatter {
  title: string;
  day: number;
  dialogueId: string;
  universe: string;
  participants: string[];
  firstUtterance: {
    speaker: string;
    words: string;
  };
  filePath: string;
}

export interface DialoguesData {
  dialogues: DialogueFrontmatter[];
}
`;
  
  const typesPath = path.join(outputDir, 'types.ts');
  fs.writeFileSync(typesPath, typeDefinition);
  console.log(`Type definitions written to ${typesPath}`);
}

// Run the script
if (require.main === module) {
  main();
}

module.exports = { extractFrontmatter, findDialogueFiles }; 