import re

with open(r"C:\Users\trive\.gemini\antigravity\brain\62d9ccf6-8d7c-4bad-b8d8-1c7681fb445b\.system_generated\steps\562\content.md", "r", encoding="utf-8", errors="ignore") as f:
    text = f.read()

# Look for founder mentions
for match in re.finditer(r'(?:founder|director|ceo|visionary)[^.<>\n]{0,200}', text, re.IGNORECASE):
    clean = match.group(0).encode('ascii', errors='ignore').decode('ascii')
    print(clean)
