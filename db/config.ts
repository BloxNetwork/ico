import { column, defineDb, defineTable, NOW } from 'astro:db';

const Chain = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    name: column.text({ multiline: false }),
    created_at: column.date({ default: NOW }),
    updated_at: column.date({ default: NOW }),
  },
});

const Token = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    chain_id: column.number(),
    symbol: column.text({ multiline: false }),
    name: column.text({ multiline: false }),
    created_at: column.date({ default: NOW }),
    updated_at: column.date({ default: NOW }),
  },
  foreignKeys: [
    {
      columns: ['chain_id'],
      references: () => [Chain.columns.id],
    },
  ],
  indexes: [{ on: ['chain_id', 'symbol'], unique: true }],
});

const Presale = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    name: column.text({ multiline: false }),
    starts_at: column.date(),
    ends_at: column.date({ optional: true }),
    price: column.number(),
    minimum_buy: column.number({ optional: true }),
    maximum_buy: column.number({ optional: true }),
    total_supply: column.number(),
    vesting_initial_unlock: column.number(),
    vesting_starts_after: column.number(),
    vesting_period: column.number(),
    vesting_period_count: column.number(),
    created_at: column.date({ default: NOW }),
    updated_at: column.date({ default: NOW }),
  },
});

const PresaleAddress = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    presale_id: column.number(),
    chain_id: column.number(),
    address: column.text({ multiline: false }),
    created_at: column.date({ default: NOW }),
    updated_at: column.date({ default: NOW }),
  },
  foreignKeys: [
    {
      columns: ['presale_id'],
      references: () => [Presale.columns.id],
    },
    {
      columns: ['chain_id'],
      references: () => [Chain.columns.id],
    },
  ],
});

const Purchase = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    hash: column.text(),
    chain_id: column.number(),
    token_symbol: column.text({ multiline: false }),
    presale_id: column.number({ references: () => Presale.columns.id }),
    address: column.text({ multiline: false }),
    amount: column.number(),
    purchased_at: column.date(),
  },
  foreignKeys: [
    {
      columns: ['chain_id', 'token_symbol'],
      references: () => [Token.columns.chain_id, Token.columns.symbol],
    },
  ],
  indexes: [{ on: ['chain_id', 'hash'], unique: true }],
});

const Claim = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    address: column.text(),
    unlocked_at: column.date(),
    amount: column.number(),
    hash: column.text({ multiline: false, optional: true }),
    claimed_at: column.date({ optional: true }),
  },
});

// https://astro.build/db/config
export default defineDb({
  tables: { Chain, Token, Presale, PresaleAddress, Purchase, Claim },
});
