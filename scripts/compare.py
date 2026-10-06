# Une capturas v5 | Astro lado a lado en tramos. Uso: python3 scripts/compare.py <nombre>
import sys, glob, os
from PIL import Image
name = sys.argv[1]
for f in glob.glob(f'docs/capturas/{name}-*-v5-vs-astro-*.png'): os.remove(f)
for vp, label, ch in [('desktop', 'escritorio', 2000), ('mobile', 'mobile', 3400)]:
    a = Image.open(f'screenshots/{name}-{vp}-v5.png'); b = Image.open(f'screenshots/{name}-{vp}-astro.png')
    print(vp, a.size, b.size)
    W = a.width + b.width + 40; H = max(a.height, b.height)
    c = Image.new('RGB', (W, H), '#ff00ff'); c.paste(a, (0, 0)); c.paste(b, (a.width + 40, 0))
    for n, y in enumerate(range(0, H, ch)):
        part = c.crop((0, y, W, min(H, y + ch)))
        part = part.resize((part.width // 2, part.height // 2))
        part.save(f'docs/capturas/{name}-{label}-v5-vs-astro-{n + 1}.png')
