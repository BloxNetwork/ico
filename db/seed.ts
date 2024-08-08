import { Chain, Presale, PresaleAddress, Token, db } from 'astro:db';

// https://astro.build/db/seed
export default async function seed() {
  const chains = [
    { id: 1, name: 'Ethereum' },
    { id: 10, name: 'OP Mainnet' },
    { id: 56, name: 'Binance Smart Chain' },
    { id: 137, name: 'Polygon Mainnet' },
    { id: 8453, name: 'Base' },
    { id: 42161, name: 'Arbitrum One' },
    { id: 59144, name: 'Linea' },
  ];
  await db.insert(Chain).values(chains);

  await db.insert(Token).values([
    // Mainnet Currencies
    { id: 1, chain_id: 1, symbol: 'ETH', name: 'ETH (Ethereum)' },
    { id: 2, chain_id: 10, symbol: 'ETH', name: 'ETH (OP Mainnet)' },
    { id: 3, chain_id: 56, symbol: 'BNB', name: 'BNB (Binance Smart Chain)' },
    { id: 4, chain_id: 137, symbol: 'MATIC', name: 'MATIC (Polygon Mainnet)' },
    { id: 5, chain_id: 8453, symbol: 'ETH', name: 'ETH (Base)' },
    { id: 6, chain_id: 42161, symbol: 'ETH', name: 'ETH (Arbitrum One)' },
    { id: 7, chain_id: 59144, symbol: 'ETH', name: 'ETH (Linea)' },
    // Extra Currencies
    { id: 8, chain_id: 1, symbol: 'USDC', name: 'USDC (Ethereum)' },
    { id: 9, chain_id: 1, symbol: 'USDT', name: 'USDT (Ethereum)' },
  ]);

  const presales = [
    {
      id: 1,
      name: 'Presale Round 1',
      starts_at: new Date('2024-08-10'),
      ends_at: null,
      price: 0.016,
      minimum_buy: 4_000,
      maximum_buy: 1_000_000,
      total_supply: 35_000_000,
      vesting_initial_unlock: 10 / 100,
      vesting_starts_after: 3,
      vesting_period: 2,
      vesting_period_count: 3,
    },
    {
      id: 2,
      name: 'Presale Round 2',
      starts_at: new Date('2024-08-20'),
      ends_at: null,
      price: 0.024,
      minimum_buy: 2_000,
      maximum_buy: 600_000,
      total_supply: 35_000_000,
      vesting_initial_unlock: 17.5 / 100,
      vesting_starts_after: 2,
      vesting_period: 1,
      vesting_period_count: 4,
    },
    {
      id: 3,
      name: 'Presale Round 3',
      starts_at: new Date('2024-08-30'),
      ends_at: null,
      price: 0.032,
      minimum_buy: 1_000,
      maximum_buy: 400_000,
      total_supply: 40_000_000,
      vesting_initial_unlock: 25 / 100,
      vesting_starts_after: 0,
      vesting_period: 1,
      vesting_period_count: 3,
    },
  ];
  await db.insert(Presale).values(presales);

  const addresses = [];
  for (const presale of presales) {
    for (const chain of chains) {
      addresses.push({
        id: addresses.length + 1,
        chain_id: chain.id,
        presale_id: presale.id,
        address: '0x0000000000000000000000000000000000000000',
      });
    }
  }
  await db.insert(PresaleAddress).values(addresses);
}
