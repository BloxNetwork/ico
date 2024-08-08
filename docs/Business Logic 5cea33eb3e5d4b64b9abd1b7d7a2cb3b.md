# Business Logic

## TGE: August 7, 2024

## Private Sale SOLD OUT!

## Claiming Mechanism

1. **Post-Presale Processing**: After a presale round concludes, the server calculates the vesting schedule based on the TGE date and updates the database with claims, setting the `hash` fields to `null` initially.
2. **Claiming Tokens**: When the tokens reach their `unlocked_at` date, users can claim them. Upon claiming, the server updates the `claimed_at` field with the current timestamp and records the transaction hash in the `hash` field.
3. **Handling Multiple Claims**: If a user has multiple claims that need to be processed simultaneously, the server sums the amounts of these claims and updates each claim record with the same transaction hash, ensuring accurate tracking of the total claimed amount.

## **Determine the Vesting Amount**

### **1. Tokens Purchased**

$$
Tokens Purchased=Amount Spent / Token Price
$$

Where:

- **Amount Spent** is the total amount spent in the presale (in USD or equivalent).
- **Token Price** is the price per token at the time of purchase (in USD or equivalent).

### **2. Vesting Amount**

To determine the total amount of tokens vested, you need to account for cliff periods and vesting schedules.

**For tokens vested with a cliff period and periodic vesting:**

- **Cliff Period (in months)**: Initial period before any tokens are vested.
- **Vesting Frequency (in months)**: Interval at which tokens are vested after the cliff period.
- **Total Lock-up Period (in months)**: Total duration for which tokens are locked up, including the cliff period.

**Number of Vesting Periods:**

$$
Number of Vesting Periods=(Total Lockup Period − Cliff Period) / Vesting Frequency
$$

**Tokens Vested Per Period:**

$$
Tokens Vested Per Period=Total Tokens Purchased / Number of Vesting Periods
$$

## **Calculate Unlock Dates**

The date when tokens become available for claiming is based on the vesting schedule. It is determined by the TGE (Token Generation Event) date, cliff period, and the vesting intervals.

1. **Determine Cliff End Date**:
   - The cliff period is the time from the TGE when no tokens are unlocked.
   - **Cliff End Date**: Add the cliff period to the TGE date.
   - **Calculation**: August 7, 2024 + 4 months (120 days) = December 5, 2024
2. **Calculate Vesting Dates**:
   - After the cliff period, tokens are unlocked at regular intervals (e.g., quarterly).
   - **First Vesting Date**: The cliff end date is the start point. Add the vesting interval to this date.
   - **Calculation**: December 5, 2024 + 3 months (90 days) = March 5, 2024
   - **Second Vesting Date**: Add another vesting interval.
   - **Calculation**: March 5, 2024 + 3 months (90 days) = June 3, 2024
   - **Subsequent Dates**: Continue adding the vesting interval for each subsequent date.

## Presale Phases and Vesting Details

1. **Private Sale**
   - **Allocation**: 7% of total supply (70,000,000 BLOX coins)
   - **Vesting**: Quarterly over 12 months with a 4-month cliff, total lock-up of 16 months
   - **Unlock Schedule**: No coins unlocked on TGE. 14,000,000 BLOX coins unlocked quarterly starting 4 months after TGE.
2. **Presale Round 1**
   - **Allocation**: 3.5% of total supply (35,000,000 BLOX coins)
   - **Vesting**: Bimonthly over 6 months with a 3-month cliff, total lock-up of 9 months
   - **Unlock Schedule**: 10% (3,500,000 BLOX coins) unlocked on TGE. 7,875,000 BLOX coins unlocked every 2 months thereafter.
   - **Pricing**: $0.016 per BLOX (50% discount from launch price of $0.032)
   - **Value on TGE**: $56,000 worth of BLOX coins unlocked
   - **Purchase Limits**: Minimum $64 (4,000 BLOX), Maximum $16,000 (1,000,000 BLOX)
3. **Presale Round 2**
   - **Allocation**: 3.5% of total supply (35,000,000 BLOX coins)
   - **Vesting**: Monthly over 4 months with a 2-month cliff, total lock-up of 6 months
   - **Unlock Schedule**: 17.5% (6,125,000 BLOX coins) unlocked on TGE. 5,775,000 BLOX coins unlocked monthly after 2-month cliff.
   - **Pricing**: $0.024 per BLOX (25% discount from launch price of $0.032)
   - **Value on TGE**: $147,000 worth of BLOX coins unlocked
   - **Purchase Limits**: Minimum $48 (2,000 BLOX), Maximum $14,400 (600,000 BLOX)
4. **Presale Round 3**
   - **Allocation**: 4% of total supply (40,000,000 BLOX coins)
   - **Vesting**: Monthly over 3 months with no cliff, total lock-up of 3 months
   - **Unlock Schedule**: 25% (10,000,000 BLOX coins) unlocked on TGE. 10,000,000 BLOX coins unlocked monthly.
   - **Pricing**: $0.032 per BLOX (no discount from launch price of $0.032)
   - **Value on TGE**: $320,000 worth of BLOX coins unlocked
   - **Purchase Limits**: Minimum $32 (1,000 BLOX), Maximum $12,800 (400,000 BLOX)

# Example

To calculate the number of BLOX tokens bought and the vesting dates for each purchase based on the provided information, follow these steps:

## 1. **Calculate Tokens Purchased**

### **Private Sale:**

- **Token Price:** $0.01 per BLOX
- **ETH Price:** $1,800 per ETH
- **Amount Spent:** 1 ETH

**Number of BLOX Tokens Purchased in Private Sale:**

$$
Tokens Purchased = Amount Spent (in USD) / Token Price
$$

$$
Tokens Purchased=1,800 / 0.01=180,000 BLOX
$$

### **Presale #1:**

- **Token Price:** $0.016 per BLOX
- **BNB Price:** $300 per BNB
- **Amount Spent:** 2 BNB

**Number of BLOX Tokens Purchased in Public #1:**

$$
Amount Spent= 2 × 300 = 600  USD
$$

$$
Tokens Purchased=600 / 0.016 =37,500 BLOX
$$

### **Presale #2:**

- **Token Price:** $0.024 per BLOX
- **MATIC Price:** $1.50 per MATIC
- **Amount Spent:** 10 MATIC

**Number of BLOX Tokens Purchased in Public #2:**

$$
Amount Spent= 10 × 1.5 = 15 USD
$$

$$
Tokens Purchased=15 / 0.024 =625 BLOX
$$

### **Presale #3:**

- **Token Price:** $0.032 per BLOX
- **ARB Price:** $2.50 per ARB
- **Amount Spent:** 25 ARB

**Number of BLOX Tokens Purchased in Public #3:**

$$
Amount Spent= 25 × 2.5 = 62.50 USD
$$

$$
Tokens Purchased=62.50 / 0.032 ≈1,953 BLOX
$$

## 2. **Calculate Vesting Dates**

Assuming the TGE date is August 7, 2024, and applying the vesting schedules:

### **Private Sale:**

- **Vesting Start:** 4 months after TGE (December 5, 2024)
- **Vesting Frequency:** Quarterly (every 3 months)
- **Total Lock-up Period:** 16 months (4 months cliff + 12 months vesting)

  - **1st Unlock:** December 5, 2024 (0 BLOX unlocked on TGE date)
  - **2nd Unlock:** March 5, 2025
  - **3rd Unlock:** June 3, 2025
  - **4th Unlock:** September 1, 2025

  Total vested over time: 180,000 BLOX, unlocked quarterly.

### **Presale #1:**

- **Vesting Start:** 3 months after TGE (November 5, 2024)
- **Vesting Frequency:** Bimonthly (every 2 months)
- **Total Lock-up Period:** 9 months (3 months cliff + 6 months vesting)

  - **1st Unlock:** November 5, 2024
  - **2nd Unlock:** January 4, 2025
  - **3rd Unlock:** March 5, 2025

  Total vested over time: 37,500 BLOX, unlocked bimonthly.

### **Presale #2:**

- **Vesting Start:** 2 months after TGE (October 6, 2024)
- **Vesting Frequency:** Monthly (every 1 month)
- **Total Lock-up Period:** 6 months (2 months cliff + 4 months vesting)

  - **1st Unlock:** October 6, 2024
  - **2nd Unlock:** November 5, 2024
  - **3rd Unlock:** December 5, 2024
  - **4th Unlock:** January 4, 2025

  Total vested over time: 625 BLOX, unlocked monthly.

### **Presale #3:**

- **Vesting Start:** Immediately after TGE (August 7, 2024)
- **Vesting Frequency:** Monthly (every 1 month)
- **Total Lock-up Period:** 3 months

  - **1st Unlock:** August 7, 2024
  - **2nd Unlock:** September 6, 2024
  - **3rd Unlock:** October 6, 2024

  Total vested over time: 1,953 BLOX, unlocked monthly.

## Summary of Token Vesting Schedule

- **Private Sale**: **180,000 BLOX**
  - December 7, 2024: **0 BLOX**
  - March 7, 2025: **60,000 BLOX**
  - June 7, 2025: **60,000 BLOX**
  - September 7, 2025: **60,000 BLOX**
- **Presale #1**: **37,500 BLOX**
  - November 7, 2024: **12,500 BLOX**
  - January 7, 2025: **12,500 BLOX**
  - March 7, 2025: **12,500 BLOX**
- **Presale #2**: **625 BLOX**
  - October 6, 2024: **156.25 BLOX**
  - November 5, 2024: **156.25 BLOX**
  - December 5, 2024: **156.25 BLOX**
  - January 4, 2025: **156.25 BLOX**
- **Presale #3**: **1,953 BLOX**
  - August 7, 2024: **651 BLOX**
  - September 6, 2024**: 651 BLOX**
  - October 6, 2024: **651 BLOX**
