import urllib.request
from html.parser import HTMLParser

class PageParser(HTMLParser):
    def __init__(self):
        super().__init__()
        self.headings = []
        self.paragraphs = []
        self.curr_tag = None
        self.curr_text = []

    def handle_starttag(self, tag, attrs):
        self.curr_tag = tag

    def handle_endtag(self, tag):
        text = " ".join("".join(self.curr_text).split())
        if text:
            if tag in ['h1', 'h2', 'h3', 'h4', 'h5', 'h6']:
                self.headings.append((tag, text))
            elif tag in ['p', 'li', 'span', 'div'] and len(text) > 35:
                self.paragraphs.append(text)
        self.curr_text = []
        self.curr_tag = None

    def handle_data(self, data):
        self.curr_text.append(data)

req = urllib.request.Request("https://agnivridhiindia.com/services", headers={'User-Agent': 'Mozilla/5.0'})
with urllib.request.urlopen(req, timeout=15) as res:
    html = res.read().decode('utf-8', errors='ignore')

parser = PageParser()
parser.feed(html)

print("=== SERVICES HEADINGS ===")
for tag, h in parser.headings:
    print(f"[{tag}] {h}")

print("\n=== SERVICES TEXT SAMPLE ===")
seen = set()
for p in parser.paragraphs:
    if p not in seen and not p.startswith('{'):
        seen.add(p)
        print(f"* {p[:120]}")
