with open(r"C:\Users\trive\.gemini\antigravity\brain\62d9ccf6-8d7c-4bad-b8d8-1c7681fb445b\.system_generated\steps\562\content.md", "r", encoding="utf-8", errors="ignore") as f:
    text = f.read()

import re
# Find sections under Success Stories
stories = re.findall(r'<h3[^>]*>([^<]+)</h3>\s*<h4[^>]*>([^<]+)</h4>\s*<p[^>]*>([^<]+)</p>', text)
for s in stories:
    print(f"Client: {s[0].strip()} | Tag: {s[1].strip()} | Story: {s[2].strip()}")
