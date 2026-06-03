from PIL import Image, ImageDraw, ImageFont
import datetime
import os
import sys

W, H = 1200, 280
OUT = os.path.join(os.path.dirname(os.path.abspath(__file__)), "assets", "banner.png")

# Colors
BG_TOP = (13, 17, 27)
BG_BOT = (22, 27, 48)
BLUE = (88, 166, 255)
BLUE_DIM = (56, 139, 253)
WHITE = (240, 246, 252)
GRAY = (139, 148, 168)
GRID = (48, 54, 77)
BRACKET = (48, 60, 90)
TRACK = (48, 54, 61)
MUTED = (100, 108, 128)


def load_font(bold=False, mono=False, size=16):
    """Try to load a font, falling back through OS-specific paths."""
    if mono:
        names = [
            "/usr/share/fonts/truetype/dejavu/DejaVuSansMono.ttf",
            "/System/Library/Fonts/Menlo.ttc",
            "C:/Windows/Fonts/consola.ttf",
        ]
    elif bold:
        names = [
            "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf",
            "/System/Library/Fonts/Helvetica.ttc",
            "C:/Windows/Fonts/arialbd.ttf",
            "C:/Windows/Fonts/segoeuib.ttf",
        ]
    else:
        names = [
            "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf",
            "/System/Library/Fonts/Helvetica.ttc",
            "C:/Windows/Fonts/arial.ttf",
            "C:/Windows/Fonts/segoeui.ttf",
        ]

    for p in names:
        if os.path.exists(p):
            try:
                return ImageFont.truetype(p, size)
            except Exception:
                continue

    # Last resort
    try:
        return ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf", size)
    except Exception:
        return ImageFont.load_default()


def year_progress():
    now = datetime.datetime.now(datetime.timezone.utc)
    y = now.year
    start = datetime.datetime(y, 1, 1, tzinfo=datetime.timezone.utc)
    end = datetime.datetime(y, 12, 31, 23, 59, 59, tzinfo=datetime.timezone.utc)
    pct = (now.timestamp() - start.timestamp()) / (end.timestamp() - start.timestamp())
    return pct, now


def draw_bg(draw):
    # Gradient — draw in 4px bands instead of 1px lines for speed
    for y in range(0, H, 4):
        t = y / H
        r = int(BG_TOP[0] + (BG_BOT[0] - BG_TOP[0]) * t)
        g = int(BG_TOP[1] + (BG_BOT[1] - BG_TOP[1]) * t)
        b = int(BG_TOP[2] + (BG_BOT[2] - BG_TOP[2]) * t)
        draw.rectangle([(0, y), (W, y + 3)], fill=(r, g, b))

    # Subtle horizontal grid
    for y in range(40, H, 40):
        draw.line([(0, y), (W, y)], fill=GRID)


def draw_decorations(draw, mono_font):
    # Code brackets top-right
    draw.text((W - 160, 30), "<", fill=BRACKET, font=mono_font)
    draw.text((W - 90, 30), "/", fill=BRACKET, font=mono_font)
    draw.text((W - 130, 80), ">", fill=BRACKET, font=mono_font)
    # Bottom-left
    draw.text((30, H - 110), "</", fill=BRACKET, font=mono_font)
    draw.text((120, H - 110), ">", fill=BRACKET, font=mono_font)

    # Dots top-right
    for px, py in [(W - 280, 48), (W - 250, 48), (W - 220, 48), (W - 250, 78)]:
        draw.ellipse([px - 3, py - 3, px + 3, py + 3], fill=BLUE_DIM)

    # Left accent stripe
    for x in range(5):
        a = 1.0 - (x / 5) * 0.6
        draw.line([(x, 0), (x, H)], fill=(int(BLUE[0] * a), int(BLUE[1] * a), int(BLUE[2] * a)))


def draw_text(draw):
    font_name = load_font(bold=True, size=62)
    font_tag = load_font(size=22)
    font_sub = load_font(size=16)

    x = 50
    draw.text((x, 60), "Lingyunmo", fill=WHITE, font=font_name)
    draw.line([(x, 140), (x + 280, 140)], fill=BLUE, width=3)
    draw.text((x, 164), "AI Student  ·  Minecraft Modder  ·  Full-stack Developer", fill=GRAY, font=font_tag)
    draw.text((x, 198), "Monash University  —  Master of Artificial Intelligence", fill=MUTED, font=font_sub)


def draw_progress(draw):
    pct, now = year_progress()
    pct_str = f"{pct * 100:.2f}%"

    bw, bh = 200, 14
    pad = 90
    bx = W - pad - bw
    by = H - 72

    # Track
    draw.rounded_rectangle([bx, by, bx + bw, by + bh], radius=7, fill=TRACK)
    # Fill
    fw = max(int(bw * pct), 0)
    if fw > 0:
        draw.rounded_rectangle([bx, by, bx + fw, by + bh], radius=7, fill=BLUE)

    # Percentage
    fp = load_font(bold=True, size=14)
    draw.text((bx + bw + 12, by - 1), pct_str, fill=WHITE, font=fp)

    # Date label
    fl = load_font(size=11)
    label = f"Year progress  ·  updated {now.strftime('%b %d, %Y')}"
    lw = draw.textbbox((0, 0), label, font=fl)[2]
    draw.text((bx + bw - lw, by + bh + 7), label, fill=MUTED, font=fl)


def main():
    img = Image.new("RGBA", (W, H))
    draw = ImageDraw.Draw(img)

    draw_bg(draw)

    mono = load_font(mono=True, size=72)
    draw_decorations(draw, mono)

    draw_text(draw)
    draw_progress(draw)

    # Bottom edge line
    for y in range(H - 2, H):
        draw.line([(0, y), (W, y)], fill=BLUE_DIM)

    os.makedirs(os.path.dirname(OUT), exist_ok=True)
    img.save(OUT, "PNG")
    print(f"OK: {OUT}")


if __name__ == "__main__":
    try:
        main()
    except Exception as e:
        print(f"FAILED: {e}", file=sys.stderr)
        sys.exit(1)
