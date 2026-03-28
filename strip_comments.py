import os
import re

def strip_comments(text):
    # Strip multi-line comments: /* ... */
    # Non-greedy match
    text = re.sub(r'/\*[\s\S]*?\*/', '', text)
    
    # Strip single-line comments: // ...
    # Be careful not to strip // in URLs (https://) or inside quotes
    lines = []
    for line in text.split('\n'):
        # Matches // and anything after it as long as:
        # isn't preceded by : (simple URL check)
        # isn't inside quotes (roughly)
        # We can find the first // that doesn't follow a :
        
        url_match = re.search(r'(https?|ftp)://', line)
        if url_match:
            # If there's a URL, we look for // after the URL
            # This is complex. Let's use a simpler heuristic.
            # Usually explanatory comments are after whitespace or at start of line
            # e.g. "  // this is a comment"
            # URLs are like "const url = 'https://...';"
            
            # Let's find // only if it's NOT at the end of a protocol
            # Search for // that doesn't have a : before it
            match = re.search(r'(?<!:)\/\/.*$', line)
            if match:
                line = line[:match.start()].rstrip()
        else:
            # No protocol, look for // everywhere
            match = re.search(r'\/\/.*$', line)
            if match:
                line = line[:match.start()].rstrip()
        
        lines.append(line)
        
    return '\n'.join(lines)

src_dir = r'c:\Users\5931\Desktop\ndhn\WebsiteAgency\src'

for root, dirs, files in os.walk(src_dir):
    for file in files:
        if file.endswith(('.js', '.jsx', '.css')):
            path = os.path.join(root, file)
            try:
                with open(path, 'r', encoding='utf-8') as f:
                    content = f.read()
                
                new_content = strip_comments(content)
                
                # Clean up multiple empty lines
                new_content = re.sub(r'\n\s*\n\s*\n', '\n\n', new_content)
                
                if new_content != content:
                    with open(path, 'w', encoding='utf-8', newline='') as f:
                        f.write(new_content)
                    print(f"Cleaned {file}")
            except Exception as e:
                print(f"Error processing {path}: {e}")
