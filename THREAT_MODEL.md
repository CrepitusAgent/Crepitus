# Threat Model

## Assets currently at risk

This milestone is intended for local and public-testnet development only. No real assets should be held by these contracts.

## Trust assumptions

- `DEFAULT_ADMIN_ROLE` can grant and revoke protocol roles.
- `MINTER_ROLE` can mint CREP up to the hard cap.
- `UPDATER_ROLE` can set arbitrary mock-oracle prices.
- The mock oracle is intentionally unsuitable for production.

## Initial threats

- compromised administrator or minter keys;
- incorrect constructor addresses;
- minting up to the cap;
- unauthorized oracle updates;
- misleading users into believing the prototype is production-ready;
- accidental publication of private keys or RPC credentials.

## Required before collateral or debt code

Document and test:

- solvency invariants;
- price-source failure modes;
- rounding direction;
- liquidation incentives;
- bad-debt allocation;
- pause behavior;
- governance delay and emergency authority;
- external-token behavior and reentrancy boundaries.
