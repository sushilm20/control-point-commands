#!/bin/bash
# Run on the VM by the command poller:  sudo bash /opt/bruno-commands/repo/deploy/run-deploy.sh
# Deploys the staged build in deploy/dist and any backend files under
# deploy/backend/<repo-relative path> into /opt/control-point, with backups.
set -euo pipefail
R=/opt/bruno-commands/repo/deploy
C=/opt/control-point
TS=$(date +%Y%m%d-%H%M%S)
test -f "$R/dist/index.html" || { echo "ABORT: no staged dist"; exit 1; }

cp -a "$C/dist" "$C/dist.bak-$TS"
echo "backup: dist.bak-$TS"

if [ -d "$R/backend" ]; then
  mkdir -p "$C/server-bak-$TS"
  (cd "$R/backend" && find . -type f) | while read -r f; do
    f="${f#./}"
    if [ -f "$C/$f" ]; then
      mkdir -p "$C/server-bak-$TS/$(dirname "$f")"
      cp -a "$C/$f" "$C/server-bak-$TS/$f"
    fi
    mkdir -p "$C/$(dirname "$f")"
    cp "$R/backend/$f" "$C/$f"
    chown controlpoint:controlpoint "$C/$f"
    echo "backend: $f $(md5sum "$C/$f" | cut -c1-32)"
  done
  echo "backup: server-bak-$TS"
fi

rm -rf "$C/dist" && mkdir -p "$C/dist" && cp -r "$R/dist/." "$C/dist/"
chown -R controlpoint:controlpoint "$C/dist" && chmod -R 755 "$C/dist"

systemctl restart control-point
sleep 15
echo "service: $(systemctl is-active control-point)"
journalctl -u control-point --since "-30s" --no-pager | grep -E "Server running|rror|xception" | grep -viE "key|token" | tail -5 || true
echo "bundle: $(grep -o 'index-[A-Za-z0-9_-]*\.js' "$C/dist/index.html" | head -1)"
echo "local http: $(curl -s -o /dev/null -w '%{http_code}' http://localhost:3000/)"
