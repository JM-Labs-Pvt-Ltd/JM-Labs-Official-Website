# JM Labs Website Build And Deploy

## What this setup does

- Bundles the site with Vite as a multi-page app.
- Minifies HTML/CSS/JS output into `dist/`.
- Obfuscates shipped JavaScript to make casual inspection harder.
- Produces a deployable static folder that can be pushed to a public repo or static host.

## Important limit

Bundling, minification, and obfuscation do **not** make a frontend site private. Anything shipped to the browser can still be downloaded, inspected, and reverse-engineered. This setup is useful for distribution hygiene, not for secrecy.

## Local workflow

```bash
npm install
npm run dev
```

## Production build

```bash
npm install
npm run build
```

The final static output will be in:

```text
dist/
```

## Private source repo -> public deploy repo workflow

Keep this source repo private, then publish only the `dist/` folder contents into a separate public repo or deploy branch.

Example flow:

1. Build locally with `npm run build`
2. Copy the contents of `dist/` into your public deploy repo
3. Push that public deploy repo to GitHub Pages, Vercel, Netlify, or another static host

This lets the source stay private while only the compiled site is public.

## GitHub Actions workflow for public dist repo

This repo now includes:

```text
.github/workflows/deploy-public-dist.yml
```

It does this:

1. installs dependencies
2. builds the website into `dist/`
3. checks out a separate public repository
4. replaces that repository contents with `dist/`
5. commits and pushes the result

### Required GitHub secrets

Add these in the **private source repo**:

- `PUBLIC_DEPLOY_SSH_KEY`
  The private SSH key for the deploy key you add to `JM-Labs-Pvt-Ltd/JM-Labs-Website`

This workflow is already configured to publish to:

```text
JM-Labs-Pvt-Ltd/JM-Labs-Website
```

### Optional GitHub variable

- `PUBLIC_DEPLOY_BRANCH`
  Defaults to `main` if not set

### Recommended repo setup

1. Create the public deploy repo first.
2. Add the `PUBLIC_DEPLOY_SSH_KEY` secret in the private source repo.
3. Push to `main` or run the workflow manually.

The workflow can initialize the target branch automatically on first deploy if it does not exist yet.

### Deploy key setup

Create a dedicated deploy key for the public target repo:

```bash
ssh-keygen -t ed25519 -C "jm-labs-website-deploy" -f ~/.ssh/jm-labs-website-deploy -N ""
```

Then:

1. Open `JM-Labs-Pvt-Ltd/JM-Labs-Website` on GitHub.
2. Go to `Settings` -> `Deploy keys`.
3. Click `Add deploy key`.
4. Paste the contents of `~/.ssh/jm-labs-website-deploy.pub`.
5. Enable `Allow write access`.
6. Save it.
7. In the private source repo, add a repository secret named `PUBLIC_DEPLOY_SSH_KEY`.
8. Paste the contents of `~/.ssh/jm-labs-website-deploy` into that secret.

This is safer than using a personal token because the key only applies to that single repository.

Important:

- The secret must contain the **private** key, not the `.pub` key.
- Paste the raw key exactly as-is, including:
  `-----BEGIN OPENSSH PRIVATE KEY-----`
  and
  `-----END OPENSSH PRIVATE KEY-----`
- If the secret was copied from a Windows editor, hidden `CRLF` characters can break parsing. The workflow strips those now, but the cleanest option is still to paste the key directly from terminal output.

## Manual one-time local publish

If you want to publish `dist/` manually once before relying on GitHub Actions:

```bash
npm install
npm run build
./scripts/publish-dist.sh
```

Important:

- This script clones `JM-Labs-Pvt-Ltd/JM-Labs-Website`, replaces its contents with `dist/`, commits, and pushes.
- You can override the defaults with `TARGET_REPO` and `TARGET_BRANCH` if needed.
- Your original `git remote add origin ... && git push` commands would push the **current repository**, not just `dist/`.

## Hosting note

- If you deploy a static site anywhere, the compiled frontend is still public to visitors.
- If you want the repository itself to stay private, use a host that supports private source repos, or keep a separate public deploy repo that contains only `dist/`.
