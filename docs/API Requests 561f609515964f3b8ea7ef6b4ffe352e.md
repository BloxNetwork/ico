# API Requests

## GET /api/activePresale

This request retrieves the current active presale status and details, including calculated fields from the presales table. If no active presale is found, it returns information about the most recent presale.

### **Example Response**:

```json
{
  "current": 999.99,
  "total": 1111.11,
  "minBuy": 100,
  "maxBuy": 1000,
  "price": {
    "current": 0.01,
    "next": 0.1,
    "final": 0.2
  },
  "name": "Presale Round 1",
  "status": "Live",
  "tokens": 35000000,
  "cliff": 3,
  "vestingPeriod": 6,
  "vestingMonth": 2,
  "tgeUnlock": 0.1
}
```

### **Fields**:

- `current`: The current amount of funds raised.
- `total`: The total fundraising goal.
- `minBuy`: The minimum amount a user can buy.
- `maxBuy`: The maximum amount a user can buy.
- `price.current`: The current price per token.
- `price.next`: The next stage price per token.
- `price.final`: The maximum price from the last presale in the database.
- `name`: The name of the active or most recent presale event.
- `status`: The current status of the presale event (e.g., "Llve", “Upcoming” or "Ended").
- `tokens`: The total number of tokens allocated for the presale.
- `cliff`: The vesting cliff period in months before tokens start unlocking.
- `vestingPeriod`: The total duration in months over which tokens will be vested.
- `vestingMonth`: The number of vesting periods (typically months).
- `tgeUnlock`: The initial percentage of tokens unlocked at the Token Generation Event (TGE).

### **Response Details**:

1. **Active Presale Determination**:
   - Query the `presales` table to find the presale with a `starts_at` before the current date and `ends_at` after the current date.
2. **Fundraising Details**:
   - Retrieve the current amount of funds raised (`current`) and the total fundraising goal (`total`).
3. **Purchase Constraints**:
   - Retrieve the `minBuy` and `maxBuy` from the active presale.
4. **Price Information**:
   - Retrieve the `current` and `next` prices per token for the active presale.
5. **Calculated Fields**:
   - Retrieve and calculate additional presale fields such as `name`, `status`, `tokens`, `cliff`, `vestingPeriod`, `vestingMonth`, and `tgeUnlock`.
6. **Fallback for Most Recent Presale**:
   - If no active presale is found, return the details of the most recent presale.
7. **Final Price Calculation**:
   - Retrieve the maximum price from the last presale in the database.

## **GET /api/presales**

The `/api/presales` endpoint retrieves information about all presale events, including some calculated fields. Below are the details.

### **Example Response**:

```json
[
  {
    "name": "Private Sale",
    "status": "Upcoming",
    "tokens": 70000000,
    "price": 0.01,
    "cliff": "4 months",
    "vesting_period": "12 months",
    "vesting_month": 4,
    "tge_unlock": 0,
    "minimum_buy": 64,
    "maximum_buy": 16000
  },
  {
    "name": "Presale Round 1",
    "status": "Live",
    "tokens": 35000000,
    "price": 0.016,
    "cliff": "3 months",
    "vesting_period": "6 months",
    "vesting_month": 2,
    "tge_unlock": 0.1,
    "minimum_buy": 64,
    "maximum_buy": 16000
  },
  {
    "name": "Presale Round 2",
    "status": "Upcoming",
    "tokens": 35000000,
    "price": 0.024,
    "cliff": "2 months",
    "vesting_period": "4 months",
    "vesting_month": 2,
    "tge_unlock": 0.175,
    "minimum_buy": 48,
    "maximum_buy": 14400
  },
  {
    "name": "Presale Round 3",
    "status": "Ended",
    "tokens": 40000000,
    "price": 0.032,
    "cliff": "0 months",
    "vesting_period": "3 months",
    "vesting_month": 3,
    "tge_unlock": 0.25,
    "minimum_buy": 32,
    "maximum_buy": 12800
  }
]
```

### Descriptions of Calculated Fields

1. **Name**: Directly retrieved from the `name` field in the database.
2. **Status**: Calculated based on the current date compared to the `starts_at` and `ends_at` fields:
   - `Live`: If the current date is between `starts_at` and `ends_at`.
   - `Upcoming`: If the current date is before `starts_at`.
   - `Ended`: If the current date is after `ends_at`.
3. **Tokens**: Directly retrieved from the `total_supply` field in the database.
4. **Price**: Directly retrieved from the `price` field in the database.
5. **Cliff**: Calculated from the `vesting_starts_after` field, representing the delay before vesting begins.
6. **Vesting Period**: Calculated from the `vesting_period` field, representing the duration over which tokens are vested.
7. **Vesting Month**: Retrieved from the `vesting_period_count` field, representing the number of periods (typically months) over which vesting occurs.
8. **TGE Unlock**: Retrieved from the `vesting_initial_unlock` field, representing the percentage of tokens unlocked at the Token Generation Event.
9. **Minimum buy**: Retrieved from the `minimum_buy` field in the database.
10. **Maximum buy**: Retrieved from the `maximum_buy` field in the database.

## **GET /api/payment/methods**

- This request retrieves a list of available payment methods (tokens) along with their corresponding blockchain networks. Example response includes:

  ```json
  [
    {
      "chain_id": 1,
      "symbol": "ETH",
      "name": "ETH (Ethereum)"
    },
    {
      "chain_id": 56,
      "symbol": "BNB",
      "name": "BNB (BSC Chain)"
    },
    {
      "chain_id": 8453,
      "symbol": "BASE",
      "name": "BASE (Base)"
    },
    {
      "chain_id": 137,
      "symbol": "MATIC",
      "name": "MATIC (Polygon)"
    },
    {
      "chain_id": 42161,
      "symbol": "ARB",
      "name": "ARB (Arbitrum One)"
    },
    {
      "chain_id": 1,
      "symbol": "USDT",
      "name": "USDT (Ethereum)"
    },
    {
      "chain_id": 56,
      "symbol": "USDT",
      "name": "USDT (BSC Chain)"
    },
    {
      "chain_id": 8453,
      "symbol": "USDT",
      "name": "USDT (Base)"
    },
    {
      "chain_id": 137,
      "symbol": "USDT",
      "name": "USDT (Polygon)"
    },
    {
      "chain_id": 42161,
      "symbol": "USDT",
      "name": "USDT (Arbitrum One)"
    },
    {
      "chain_id": 1,
      "symbol": "USDC",
      "name": "USDC (Ethereum)"
    },
    {
      "chain_id": 56,
      "symbol": "USDC",
      "name": "USDC (BSC Chain)"
    },
    {
      "chain_id": 8453,
      "symbol": "USDC",
      "name": "USDC (Base)"
    },
    {
      "chain_id": 137,
      "symbol": "USDC",
      "name": "USDC (Polygon)"
    },
    {
      "chain_id": 42161,
      "symbol": "USDC",
      "name": "USDC (Arbitrum One)"
    }
  ]
  ```

- **Fields**:
  - `chain_id`: The ID of the blockchain network.
  - `symbol`: The symbol of the token.
  - `name`: The token name with associated blockchain network.

## **GET /api/payment/method/{chain_id}/{symbol}**

- This request retrieves the conversion rates for the specified token symbol on a given blockchain network. It is used after user selects a payment methods from the list.
- **URL Parameters**:
  - `chain_id`: The ID of the blockchain network (e.g., 1 for Ethereum).
  - `symbol`: The symbol of the token (e.g., USDT, ETH).
- **Response**:

  ```json
  {
    "chain_id": 1,
    "symbol": "USDT",
    "usd_conversion_rate": 1.0,
    "token_conversion_rate": 0.01
  }
  ```

- **Fields**:
  - `chain_id`: The ID of the blockchain network.
  - `symbol`: The symbol of the token.
  - `usd_conversion_rate`: The conversion rate of one unit of the token to USD.
  - `token_conversion_rate`: The conversion rate of one USD to the token.

### **GET /api/balance/{address}**:

- This request retrieves the user's balance and vesting information. The response includes:

  ```json
  {
    "total": 1111.11,
    "vesting": [
      {
        "id": 1,
        "address": "0x",
        "unlocked_at": "2024-08-14T19:54:14+00:00",
        "hash": null,
        "claimed_at": null,
        "amount": 1111.11
      }
    ]
  }
  ```

- **Fields**:
  - `total`: Represents the total balance available to the user.
  - `vesting`: An array of objects detailing vested tokens. Each object includes:
    - `id`: Unique identifier for the vesting record.
    - `address`: The wallet address associated with the vesting record.
    - `unlocked_at`: Timestamp when the tokens were unlocked.
    - `hash`: Optional transaction hash related to the vesting (can be `null`).
    - `claimed_at`: Optional timestamp when the tokens were claimed (can be `null`).
    - `amount`: Amount of tokens vested.
