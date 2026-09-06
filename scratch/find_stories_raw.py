with open(r"C:\Users\trive\.gemini\antigravity\brain\62d9ccf6-8d7c-4bad-b8d8-1c7681fb445b\.system_generated\steps\562\content.md", "r", encoding="utf-8", errors="ignore") as f:
    text = f.read()

idx = text.find("George Martin Jose")
if idx != -1:
    clean = text[idx-100:idx+3500].encode('ascii', errors='ignore').decode('ascii')
    print(clean)
