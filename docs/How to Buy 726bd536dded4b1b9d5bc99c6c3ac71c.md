# How to Buy

![Desktop Design (Figma)](Untitled%2012.png)

Desktop Design (Figma)

The "How to Buy" section is designed to guide users through the process of purchasing tokens during the ICO. It consists of four clear steps, each with detailed instructions for both mobile and desktop users.

**\*Note:** On the mobile version, payment methods stack one after another. On tablets, there may be two in a row. The steps are arranged vertically, as they are in the desktop version.\*

### **Step 1: Connect Wallet**

- **Mobile:**
  - Open the "Metamask" or "Trust Wallet" app on your phone.
  - Visit our website using the integrated browser in the wallet app.
  - Click the "Connect" button on our website.
  - Select the app from the "Connect Wallet" options.
  - Click "Approve" to connect your wallet to our site.
- **Desktop:**
  - Open the "Metamask" extension in your web browser.
  - Visit our website.
  - Click the "Connect" button on our website.
  - Select "Metamask" from the "Connect Wallet" options.
  - Click "Approve" to connect your wallet to our site.

### **Step 2: Select Payment Method**

- Choose your preferred payment method, such as buying with USDT.
- **Instructions:**
  - Enter the amount of currency or tokens you wish to spend.
  - Press the "Buy Now" button.
  - Check Metamask and select "Use default" in the custom spending cap.
  - Click "Next" and then "Approve".
  - Wait for the confirmation.
  - Click "Approve" again to complete the transaction.

### **Step 3: Check Your Balance in the Dashboard**

- After completing and confirming the transaction, you can check your balance.
- **Instructions:**
  - Connect your wallet to our site.
  - Navigate to the dashboard.
  - Your current balance of tokens will be displayed.

### **Step 4: Claim**

- When the presale ends, you will be able to claim your tokens.
- **Instructions:**
  - Connect your wallet to our site.
  - Click the "Claim tokens" button.
  - Accept the transaction in Metamask.
  - Your tokens will be transferred to your wallet.

# Widgets

## HowToBuyStep

![Untitled](Untitled%2013.png)

The `HowToBuyStep` widget is designed to represent a single step in the "How to Buy" section. It provides a clear and structured way to present each step of the buying process. This widget has the following parameters:

- **Parameters:**
  - `index`: This parameter represents the step number, indicating the order of the step in the process (e.g., 1, 2, 3, 4).
  - `title`: This parameter represents the title of the step, providing a brief and clear description of the step (e.g., "Connect Wallet", "Select Payment Method").
- **Slot:**
  - The widget also includes a slot inside, which allows for the insertion of detailed content related to the step. This can include instructions, images, or any other relevant information needed to complete the step.

### Example Usage

```html
<HowToBuyStep :index="1" title="Connect Wallet">
  <!-- Detailed instructions and content for step 1 -->
  <p>Open the "Metamask" or "Trust Wallet" app on your phone...</p>
</HowToBuyStep>

<HowToBuyStep :index="2" title="Select Payment Method">
  <!-- Detailed instructions and content for step 2 -->
  <p>Choose your preferred payment method, such as buying with USDT...</p>
</HowToBuyStep>
```

This setup allows for a modular and flexible way to create each step in the buying process, ensuring that each step is clearly labeled and detailed, making it easy for users to follow along.

## HowToBuyPaymentMethod

![Untitled](Untitled%2014.png)

The `HowToBuyPaymentMethod` widget is designed to be placed inside the `HowToBuyStep` widget. It provides a detailed breakdown of how to use a specific payment method, enhancing the clarity and usability of the "How to Buy" section. This widget has the following parameters:

- **Parameters:**
  - `icon`: This parameter specifies the path to the icon representing the payment method, helping users quickly identify the method visually.
  - `title`: This parameter represents the title of the payment method, such as "Buy with USDT".
  - `steps`: This parameter is a list of strings, each describing a step in the process of using the payment method.

### Example Usage

```html
<HowToBuyStep :index="2" title="Select Payment Method">
  <!-- Payment Method: Buy with USDT -->
  <HowToBuyPaymentMethod
    icon="/path/to/usdt-icon.png"
    title="Buy with USDT"
    :steps="[
      'Enter the amount of currency or tokens you wish to spend.',
      'Press the "Buy Now" button.',
      'Check Metamask and select "Use default" in the custom spending cap.',
      'Click "Next" and then "Approve".',
      'Wait for the confirmation.',
      'Click "Approve" again to complete the transaction.'
    ]"
  ></HowToBuyPaymentMethod>
</HowToBuyStep>

```

### Example Structure

```html
<!-- How to Buy Section -->
<section>
  <!-- Step 1: Connect Wallet -->
  <HowToBuyStep :index="1" title="Connect Wallet">
    <!-- Detailed instructions for connecting wallet -->
    <p>Mobile: Open "Metamask" or "Trust Wallet App" on your phone, visit our website using the integrated browser and click connect. Select the app from "Connect Wallet" and click "Approve".</p>
    <p>Desktop: Open "Metamask" in your web browser, visit our website, click connect, select the app from "Connect Wallet", and click "Approve".</p>
  </HowToBuyStep>

  <!-- Step 2: Select Payment Method -->
  <HowToBuyStep :index="2" title="Select Payment Method">
    <!-- Payment Method: Buy with USDT -->
    <HowToBuyPaymentMethod
      icon="/path/to/usdt-icon.png"
      title="Buy with USDT"
      :steps="[
        'Enter the amount of currency or tokens you wish to spend.',
        'Press the "Buy Now" button.',
        'Check Metamask and select "Use default" in the custom spending cap.',
        'Click "Next" and then "Approve".',
        'Wait for the confirmation.',
        'Click "Approve" again to complete the transaction.'
      ]"
    ></HowToBuyPaymentMethod>
    <!-- Additional payment methods can be added similarly -->
  </HowToBuyStep>

  <!-- Step 3: Check Your Balance in the Dashboard -->
  <HowToBuyStep :index="3" title="Check Your Balance in the Dashboard">
    <!-- Instructions for checking balance -->
    <p>After completing and confirming the transaction, connect your wallet to our site, navigate to the dashboard, and your current balance of tokens will be displayed.</p>
  </HowToBuyStep>

  <!-- Step 4: Claim -->
  <HowToBuyStep :index="4" title="Claim">
    <!-- Instructions for claiming tokens -->
    <p>When the presale ends, connect your wallet to our site, click the "Claim tokens" button, and accept the transaction in Metamask. Your tokens will be transferred to your wallet.</p>
  </HowToBuyStep>
</section>

```
