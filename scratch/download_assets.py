import urllib.request

urls = [
    ("https://agnivridhiindia.com/logo1.png", "public/logo1.png"),
    ("https://agnivridhiindia.com/logo.png", "public/logo.png"),
    ("https://agnivridhiindia.com/img/brandzmagazine.png", "public/img/brandzmagazine.png"),
    ("https://agnivridhiindia.com/img/pal_and_sons.png", "public/img/pal_and_sons.png"),
]

for url, target in urls:
    try:
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        with urllib.request.urlopen(req, timeout=10) as res:
            content = res.read()
            with open(target, 'wb') as f:
                f.write(content)
            print(f"Downloaded {url} -> {target} ({len(content)} bytes)")
    except Exception as e:
        print(f"Failed {url}: {e}")
