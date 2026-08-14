#!/usr/bin/env bash
# ──────────────────────────────────────────────────────────
# transcode-video.sh
# Converts Renders animados .MOV → MP4 (H.264) + WebM (VP9) + poster
# Output: public/video/hero.mp4, hero.webm, hero-poster.webp
# Idempotent: skips if outputs already exist.
# ──────────────────────────────────────────────────────────
set -euo pipefail

SOURCE="Renders Aquadelta/Renders animados/renders_animados_aquadelta.MOV"
OUTDIR="public/video"

MP4_OUT="$OUTDIR/hero.mp4"
WEBM_OUT="$OUTDIR/hero.webm"
POSTER_OUT="$OUTDIR/hero-poster.webp"

# Check if all outputs exist — skip if yes
if [ -f "$MP4_OUT" ] && [ -f "$WEBM_OUT" ] && [ -f "$POSTER_OUT" ]; then
  echo "[transcode-video] Outputs already exist, skipping."
  exit 0
fi

# Check for ffmpeg
if ! command -v ffmpeg &>/dev/null; then
  echo "[transcode-video] WARNING: ffmpeg not found — skipping video transcode."
  echo "[transcode-video] Build will proceed; video will use slideshow fallback at runtime."
  exit 0
fi

# Check source exists
if [ ! -f "$SOURCE" ]; then
  echo "[transcode-video] WARNING: Source .MOV not found at '$SOURCE' — skipping."
  exit 0
fi

mkdir -p "$OUTDIR"

echo "[transcode-video] Transcoding MP4 (H.264 720p)..."
ffmpeg -y -i "$SOURCE" \
  -vf "scale=1280:720" \
  -c:v libx264 -crf 28 -preset medium \
  -c:a aac -b:a 96k \
  -movflags +faststart \
  -fs 15000000 \
  "$MP4_OUT" 2>/dev/null

echo "[transcode-video] Transcoding WebM (VP9 720p)..."
ffmpeg -y -i "$SOURCE" \
  -vf "scale=1280:720" \
  -c:v libvpx-vp9 -crf 35 -b:v 0 \
  -c:a libopus -b:a 64k \
  -fs 8000000 \
  "$WEBM_OUT" 2>/dev/null

echo "[transcode-video] Generating poster frame (WebP 1280x720)..."
ffmpeg -y -i "$SOURCE" \
  -vf "select=eq(n\,0),scale=1280:720" \
  -frames:v 1 \
  "$POSTER_OUT" 2>/dev/null

echo "[transcode-video] Done. Outputs in $OUTDIR/"
