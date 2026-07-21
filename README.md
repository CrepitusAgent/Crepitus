# Crepitus Protocol

A DeFi protocol for synthetic equity trading on the EVM. Lock $CREP as collateral, mint synthetic shares of real-world assets (sAAPL, sTSLA, etc.) priced via oracle feeds, and route yield across venues automatically.

## Architecture

```
                    ┌──────────────┐
                    │  CREPToken   │  ERC-20 collateral token (capped supply)
                    └──────┬───────┘
                           │
                    ┌──────▼───────────┐
                    │ CollateralVault  │  Locks CREP, tracks per-wallet debt
                    └──────┬───────────┘
                           │
            ┌──────────────▼──────────────┐
            │    SyntheticEquity           │  Mints/redeems sEQ shares
            │    (reads IOracle prices)    │  against locked collateral
            └──────────────┬──────────────┘
                           │
                    ┌──────▼───────────┐
                    │  RouteReserve    │  Per-venue pools + agent rebalancing
                    └──────────────────┘
```

### Smart Contracts

| Contract | Purpose |
|---|---|
| `CREPToken.sol` | ERC-20 collateral token with mint/burn access control, capped at 1B supply, EIP-2612 permit support |
| `CollateralVault.sol` | Locks $CREP, enforces minimum collateral ratio (150% default), tracks per-wallet debt shares |
| `SyntheticEquity.sol` | Mints/redeems synthetic shares using oracle NAV, enforces staleness checks, charges mint fee |
| `RouteReserve.sol` | Manages per-venue CREP pools, agent-triggered rebalancing, on-chain rebalance history |
| `IOracle.sol` | Price feed interface (8-decimal USD price + last-updated timestamp) |

### Off-chain Components

- **Supabase** — stores agent state, oracle feed snapshots, rebalance history, user deposits, alerts
- **Edge Functions** — `crepitus-agent` (rebalancing), `crepitus-oracle` (price sync), `crepitus-mint` (mint/redeem), `crepitus-chat` (AI assistant), `crepitus-tick` (scheduler)
- **Frontend** — Vite + React + TypeScript dashboard with live polling, charts, and wallet integration

## Setup

### Prerequisites

- Node.js 20+
- MetaMask or any EVM wallet

### Install

```bash
npm install
```

### Compile Contracts

```bash
npx hardhat compile
```

### Run Frontend

The dev server starts automatically. To build for production:

```bash
npm run build
```

### Deploy Contracts

Set these environment variables:

```
DEPLOYER_PRIVATE_KEY=0x...
SEPOLIA_RPC_URL=https://rpc.sepolia.org
```

Then:

```bash
npx hardhat run scripts/deploy.ts --network sepolia
```

After deployment, set the contract addresses in `.env`:

```
VITE_CREP_TOKEN_ADDRESS=0x...
VITE_COLLATERAL_VAULT_ADDRESS=0x...
VITE_SYNTHETIC_EQUITY_ADDRESS=0x...
VITE_ROUTE_RESERVE_ADDRESS=0x...
VITE_ORACLE_ADDRESS=0x...
```

## Collateral Flow

1. **Acquire CREP** — minted by the treasury role or purchased on DEX
2. **Lock collateral** — call `CollateralVault.depositCollateral(amount)` after approving the vault
3. **Mint synthetic shares** — call `SyntheticEquity.mint(assetId, crepAmount)`; the contract checks the oracle price and enforces the collateral ratio
4. **Redeem** — call `SyntheticEquity.redeem(assetId, shares)` to burn shares and receive CREP back
5. **Withdraw collateral** — call `CollateralVault.withdrawCollateral(amount)` once debt is cleared

## Security

- All contracts use OpenZeppelin's `AccessControl`, `ReentrancyGuard`, and `SafeERC20`
- Oracle prices have a 1-hour staleness window
- Minimum collateral ratio is 150% (configurable by admin)
- $CREP supply is hard-capped at 1 billion tokens
- Rebalances require the `AGENT_ROLE` and emit on-chain audit events

## License

MIT
