#!/usr/bin/env bash
set -euo pipefail

DIST_DIR="${DIST_DIR:-dist}"
OBFUSCATE_DIST="${OBFUSCATE_DIST:-1}"

case "${OBFUSCATE_DIST}" in
  0|false|FALSE|no|NO)
    echo "Skipping dist obfuscation."
    exit 0
    ;;
esac

if [ ! -d "${DIST_DIR}" ]; then
  echo "Missing ${DIST_DIR}/. Run 'npm run build' first."
  exit 1
fi

ASSET_DIR="${DIST_DIR}/assets"
if [ ! -d "${ASSET_DIR}" ]; then
  echo "No ${ASSET_DIR}/ directory found. Nothing to obfuscate."
  exit 0
fi

JS_COUNT="$(find "${ASSET_DIR}" -type f -name '*.js' | wc -l | tr -d ' ')"

if [ "${JS_COUNT}" = "0" ]; then
  echo "No JS bundles found in ${ASSET_DIR}."
  exit 0
fi

echo "Obfuscating ${JS_COUNT} JavaScript bundle(s)..."

find "${ASSET_DIR}" -type f -name '*.js' -print0 | while IFS= read -r -d '' file; do
  echo "  - ${file}"
  npx --yes javascript-obfuscator "${file}" \
    --output "${file}" \
    --compact true \
    --control-flow-flattening true \
    --control-flow-flattening-threshold 0.1 \
    --identifier-names-generator hexadecimal \
    --rename-globals false \
    --self-defending false \
    --simplify true \
    --split-strings true \
    --split-strings-chunk-length 8 \
    --string-array true \
    --string-array-threshold 0.75 \
    --transform-object-keys true \
    --unicode-escape-sequence false
done

find "${DIST_DIR}" -type f -name '*.map' -delete

echo "Dist obfuscation complete."
