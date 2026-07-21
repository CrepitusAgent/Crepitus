# Migration from the original repository

## 1. Back up the existing state

```bash
git checkout main
git pull
git checkout -b backup/original-2026-07-21
git push -u origin backup/original-2026-07-21
git checkout main
git checkout -b rebuild/foundation
```

## 2. Remove obsolete root configuration

Delete these files from the working branch:

```text
eslint.config.js
postcss.config.js
tailwind.config.js
```

Do not delete `.git/`.

## 3. Replace existing files

Replace these files with the versions in this package:

```text
README.md
index.html
package.json
package-lock.json
tsconfig.json
tsconfig.app.json
tsconfig.node.json
vite.config.ts
```

## 4. Add the new files and directories

Copy every other file from this package into the repository root, preserving its path.

## 5. Install and verify

```bash
nvm use
npm ci
npm run check
npm run audit:runtime
```

The first Hardhat build downloads Solidity compiler 0.8.28.

## 6. Commit

```bash
git add -A
git commit -m "build: establish testnet-only protocol foundation"
git push -u origin rebuild/foundation
```

Open a pull request from `rebuild/foundation` into `main`. Do not deploy to mainnet.
