# Payment Form

![Desktop Vesion Design](Untitled%204.png)

Desktop Vesion Design

![Mobile Version Structure (Adaptivenss Example)](Untitled%205.png)

Mobile Version Structure (Adaptivenss Example)

### Initial API Connection

Upon loading the page, the backend makes initial API requests to fetch mandatory properties required for the form. During this process, the form displays a "Loading" status to indicate that data is being retrieved.

### Form Status

- **Loading**: Displayed while API requests are being made.
- **Ready**: Displayed once all values are fetched successfully.
- **Error Handling**: If the request fails, the loader remains indefinitely (until the page reloads).

### API Loading Workflow

The workflow starts by fetching presale details from the `/api/presale` endpoint, which provides information on the presale's status, funds raised, goal, and token pricing. Next, the backend requests a list of available payment methods from `/api/payment/methods`, detailing the tokens and their supported blockchain networks. When a user selects a token and network, the backend retrieves conversion rates from `/api/payment/method/{chain_id}/{symbol}` to calculate the value of tokens in USD and enable the purchase. This process ensures that users receive up-to-date presale information and accurate conversion rates for a smooth transaction experience.

## User Flow

1. **Connect Wallet**:
   - If the wallet is not connected, the user clicks the "Connect Wallet" button.
   - The WalletConnect modal opens, allowing the user to connect their wallet by scanning a QR code with their mobile wallet app.
   - Upon successful connection, the user's address and balance are retrieved and displayed.
2. **Select Payment Method**:
   - The user selects the desired payment method, including the token and chain (e.g., USDT on Ethereum, BNB on BSC Chain). After that the backend retrieves conversion rates from `/api/payment/method/{chain_id}/{symbol}` to calculate the value of tokens in USD and enable the purchase.
3. **Input Value in Tokens or USD**:
   - The user inputs the amount they wish to invest in either tokens or USD.
   - The form calculates and displays the corresponding number of tokens they will receive based on the current price.
4. **Click Buy and Proceed with Transaction**:
   - The user clicks the "Buy" button to initiate the transaction.
   - A confirmation modal appears, showing the transaction details and prompting the user to confirm.
   - Once confirmed, the transaction is submitted to the blockchain.
5. **Update Balance Locally**:
   - To provide a better user experience, the balance is updated locally immediately after the transaction is made, without waiting for blockchain confirmations.
6. **On-chain Transaction Listener**:
   - The backend service listens for the on-chain transaction using a callback mechanism.
   - Once the transaction is detected, the database is updated with the transaction details, including token amount, chain, current token price, and received token amount.

# Widgets

## FormHeader

![Untitled](Untitled%206.png)

The `FormHeader` widget displays the progress of the ICO fundraising, current and total values raised, and the live status of the ICO. It accepts the following parameters:

- `active` (boolean): Indicates whether the ICO is currently active.
- `current` (number): The current amount of funds raised.
- `total` (number): The total fundraising goal.

### Features:

- **Progressbar**: Animates from left to right over 1 second on page load. Optionally updates live every 30 seconds via `GET /api/presale` requests.
- **Current / Total Values**: Displays real-time progress to encourage participation.
- **Live Status**: Shows whether the ICO is "Live," "Upcoming," or "Ended."

## FormPriceTag

![Untitled](Untitled%207.png)

The `FormPriceTag` widget displays the current and next price of the token in the ICO. It is included twice within a `FormPriceTags` widget and accepts the following parameters:

- `current` (number): The current price of the token.
- `next` (number): The anticipated price of the token for the next stage.
- `final` (number): The final price of the token.

### Features:

- **Listing Price**: Shows the current cost per token.
- **Next Price**: Highlights potential price increases to incentivize early participation.
- **Calculated Ratios**:
  - `const finalOverCurrent = (final / current - 1) * 100;`
  - `const nextOverCurrent = -(1 - next / current) * 100;`

## FormSwap

![Untitled](Untitled%208.png)

The `FormSwap` widget allows users to select their preferred payment method and input the amount they wish to invest. It accepts the following parameters:

- `currentBalance` (number): The user’s current balance in BLOX Tokens.

### Features:

- **Inputting Token or USD Value**: Validates input to ensure only valid numbers are entered.
  - `Number(value.replace(/[^0-9]/g, ''))`
- **Updates on Input Change**: After selecting a payment method, every valid change triggers an input event that updates the USD and token values using `/api/payment/method/{chain_id}/{symbol}`.
- **Current Balance**: Displays the user's current BLOX token balance, fetched from `/api/balance/{address}`.

## FormPaymentMethodPopup

![Untitled](Untitled%209.png)

The `FormPaymentMethodPopup` widget displays a list of available payment methods. Each method is represented by a `FormPaymentMethodPopupRow` widget.

### Features:

- **Parameters** for `FormPaymentMethodPopupRow`:
  - `icon` (path): Path to the payment method icon.
  - `chain_id` (number): Chain ID of the payment method.
  - `symbol` (string): Symbol of the token.
- **Fetching Prices**: After selecting a value, it stores the chain ID and symbol and fetches prices from `/api/payment/method/{chain_id}/{symbol}`.

## FormButton

![Untitled](Untitled%2010.png)

The `FormButton` widget connects or disconnects the user's wallet and does not accept parameters. Instead, it listens to the `currentAddress` of the connected wallet and updates its state accordingly.

### Features:

- **Connect / Disconnect Wallet**: Integrates with **Web3Modal** for wallet connection management.

## FormFooter

![Untitled](Untitled%2011.png)

The `FormFooter` widget provides links and information to guide users through the buying process and encourages referral sharing.

### Features:

- **How to Buy?**: Offers step-by-step instructions on participating in the ICO.
- **Referral Buttons**: Encourages participants to promote the ICO by sharing referral links.
