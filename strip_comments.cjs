const fs = require('fs');
const path = require('path');

function stripComments(content) {
  // Strip multiline comments /* ... */
  content = content.replace(/\/\*[\s\S]*?\*\//g, '');

  const lines = content.split('\n');
  const newLines = lines.map(line => {
    // Basic regex: find // for strip if it's not preceded by :
    const pos = line.indexOf('//');
    if (pos === -1) return line;
    
    // Check if it's preceded by : (simple protocol)
    if (pos > 0 && line[pos-1] === ':') return line;
    
    // Simplest approach: strip if it's following a space or start of line
    const match = line.match(/(?<!:)\/\/.*/);
    if (match) {
        return line.substring(0, match.index).trimEnd();
    }
    return line;
  });

  let result = newLines.join('\n');
  result = result.replace(/\n\s*\n\s*\n/g, '\n\n');
  return result;
}

function processDir(dir) {
  const absoluteDir = path.resolve(dir);
  if (!fs.existsSync(absoluteDir)) return;
  
  const files = fs.readdirSync(absoluteDir);
  for (const file of files) {
    const fullPath = path.join(absoluteDir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      processDir(fullPath);
    } else if (file.endsWith('.js') || file.endsWith('.jsx') || file.endsWith('.css')) {
      const content = fs.readFileSync(fullPath, 'utf-8');
      const stripped = stripComments(content);
      if (content !== stripped) {
        fs.writeFileSync(fullPath, stripped, 'utf-8');
      }
    }
  }
}

const rootDir = 'C:/Users/5931/Desktop/ndhn/WebsiteAgency/src';
processDir(rootDir);
console.log('Cleanup complete');
