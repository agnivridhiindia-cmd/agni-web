import re
import urllib.request

with open(r"C:\Users\trive\.gemini\antigravity\brain\62d9ccf6-8d7c-4bad-b8d8-1c7681fb445b\.system_generated\steps\562\content.md", "r", encoding="utf-8", errors="ignore") as f:
    text = f.read()

imgs = re.findall(r'src="(/img/[^"]+)"', text)
print("Found images:", set(imgs))

for img_path in set(imgs):
    url = f"https://agnivridhiindia.com{img_path}"
    target = f"public{img_path}"
    try:
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        with urllib.request.urlopen(req, timeout=10) as res:
            data = res.read()
            import os
            os.makedirs(os.path.dirname(target), exist_ok=True)
            with open(target, 'wb') as f:
                f.write(data)
            print(f"Downloaded {url} -> {target} ({len(data)} bytes)")
    except Exception as e:
        print(f"Error {url}: {e}")
