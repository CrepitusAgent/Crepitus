# Contributing

## Before opening a pull request

1. Create a branch from `main`.
2. Keep each pull request focused on one change.
3. Add or update tests for behavior changes.
4. Run `npm run check` locally.
5. Explain security and economic consequences in the pull-request description.

## Smart-contract changes

Contract changes must document:

- trust assumptions;
- privileged roles;
- storage and accounting effects;
- possible reentrancy or oracle interactions;
- new invariants and tests.

Do not merge contract code that introduces minting, collateral, liquidation, upgrades, or external calls without a written threat-model update.
