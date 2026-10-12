#!/usr/bin/env bash
set -euo pipefail

plugin_root="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
workspace_root="$(cd "$plugin_root/.." && pwd)"
viewer_root="$workspace_root/porisViewer"
[[ -f "$viewer_root/package-lock.json" ]] || { echo "Missing porisViewer submodule or package-lock.json" >&2; exit 1; }
viewer_revision=$(git -C "$viewer_root" rev-parse HEAD)

if [[ ! -d "$viewer_root/node_modules" ]]; then
  npm --prefix "$viewer_root" ci
fi

mkdir -p "$plugin_root/assets/javascripts/poris_viewer"
npm --prefix "$viewer_root" run build -- --mode csys-plugin --outDir "$plugin_root/assets/javascripts/poris_viewer" --emptyOutDir
printf '{"repository":"https://github.com/cosmoBots/porisViewer","revision":"%s"}\n' "$viewer_revision" > "$plugin_root/assets/javascripts/poris_viewer/build-info.json"
echo "Built porisViewer assets into cosmosys_poris/assets/javascripts/poris_viewer."
