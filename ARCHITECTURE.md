# Architecture

## Current milestone

The repository currently contains only the protocol foundation:

- a capped ERC-20 development token;
- a mutable mock oracle for local and testnet use;
- TypeScript contract tests;
- a status-only React frontend;
- continuous integration.

## Deliberately absent

The following are not implemented yet:

- collateral custody;
- debt accounting;
- synthetic-asset minting and redemption;
- liquidation and bad-debt resolution;
- production oracle adapters;
- route reserves or automated rebalancing;
- governance, timelock, or multisig integration.

Each component must be specified and tested before being represented as available.
