with open(r"C:\Users\trive\.gemini\antigravity\brain\62d9ccf6-8d7c-4bad-b8d8-1c7681fb445b\.system_generated\steps\562\content.md", "r", encoding="utf-8", errors="ignore") as f:
    text = f.read()

import re
articles = re.findall(r'<a href="(https?://[^"]+)"[^>]*>.*?<img[^>]*alt="([^"]+)"[^>]*>.*?<h4[^>]*>([^<]+)</h4>', text, re.DOTALL)
for url, alt, title in articles:
    print(f"Publication: {alt.strip()} | Title: {title.strip()} | URL: {url.strip()}")
