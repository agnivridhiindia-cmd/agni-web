import re

with open(r"C:\Users\trive\.gemini\antigravity\brain\62d9ccf6-8d7c-4bad-b8d8-1c7681fb445b\.system_generated\steps\562\content.md", "r", encoding="utf-8", errors="ignore") as f:
    text = f.read()

emails = re.findall(r'[\w\.-]+@[\w\.-]+\.\w+', text)
phones = re.findall(r'(?:\+91[\s-]?)?[6789]\d{9}', text)
socials = re.findall(r'https?://(?:www\.)?(?:facebook|twitter|linkedin|instagram|youtube)\.com/[^\s"\'<>]+', text)

print("Emails found:", set(emails))
print("Phones found:", set(phones))
print("Socials found:", set(socials))
