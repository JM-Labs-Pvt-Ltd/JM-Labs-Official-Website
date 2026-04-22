#!/usr/bin/env bash
set -euo pipefail

TARGET_REPO="${TARGET_REPO:-git@github.com:JM-Labs-Pvt-Ltd/JM-Labs-Website.git}"
TARGET_BRANCH="${TARGET_BRANCH:-main}"
DIST_DIR="${DIST_DIR:-dist}"

if [ ! -d "${DIST_DIR}" ]; then
  echo "Missing ${DIST_DIR}/. Run 'npm run build' first."
  exit 1
fi

# Sync any public/ assets that may have been added after the last build.
# Vite copies public/ → dist/ during 'npm run build', but if new files were
# added to public/ without a full rebuild this step ensures they land in dist/.
PUBLIC_DIR="$(dirname "$0")/../public"
if [ -d "${PUBLIC_DIR}" ]; then
  echo "Syncing public/ → ${DIST_DIR}/ ..."
  rsync -a --exclude='.nojekyll' "${PUBLIC_DIR}/" "${DIST_DIR}/"
fi

"$(dirname "$0")/obfuscate-dist.sh"

TMP_DIR="$(mktemp -d)"
cleanup() {
  rm -rf "${TMP_DIR}"
}
trap cleanup EXIT

git clone --branch "${TARGET_BRANCH}" "${TARGET_REPO}" "${TMP_DIR}"
rsync -a --delete --exclude='.git/' "${DIST_DIR}/" "${TMP_DIR}/"

cd "${TMP_DIR}"
git add -A

if git diff --cached --quiet; then
  echo "No dist changes to publish."
  exit 0
fi

git commit -m "Deploy dist from local build"
git push origin "${TARGET_BRANCH}"
