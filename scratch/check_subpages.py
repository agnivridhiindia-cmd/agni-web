import urllib.request
from html.parser import HTMLParser

class SimpleParser(HTMLParser):
    def __init__(self):
        super().__init__()
        self.text = []
    def handle_data(self, data):
        t = data.strip()
        if t:
            self.text.append(t)

def check_url(url):
    try:
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        with urllib.request.urlopen(req, timeout=10) as response:
            html = response.read().decode('utf-8', errors='ignore')
            p = SimpleParser()
            p.feed(html)
            print(f"=== {url} ===")
            content = " ".join(p.text)
            # Find keywords
            keywords = ["services", "marketing", "digital", "software", "development", "funding", "cgtmse", "pmegp"]
            for kw in keywords:
                count = content.lower().count(kw)
                print(f"Keyword '{kw}': {count}")
    except Exception as e:
        print(f"Error fetching {url}: {e}")

check_url("https://agnivridhiindia.com/services")
check_url("https://agnivridhiindia.com/about")
