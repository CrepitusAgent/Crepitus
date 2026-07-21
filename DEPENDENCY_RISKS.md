# Dependency Risks

## Runtime dependencies

Run this before every release:

```bash
npm run audit:runtime
```

The command excludes development tools and fails on high-severity runtime findings.

## Development tooling

Hardhat and its plugin graph may produce npm audit findings in transitive development-only packages. These must be reviewed rather than hidden. Record:

- the advisory identifier;
- whether untrusted input reaches the vulnerable code;
- the affected development command;
- available mitigations;
- the upstream issue or fixed version.

Do not use `npm audit fix --force` without reviewing compiler, deployment, and lockfile changes.
