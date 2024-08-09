import { Container, Grid } from '@mui/material';

const HowtoBuy = () => {
  return (
    <div className="py-10 sm:py-20 md:py-32 lg:py-44">
      <div className="mb-10 text-center">
        <div className="mb-5 text-5xl font-bold text-white">How to Buy?</div>
        <div className="text-1xl font-normal text-white">
          Unlock the future of innovation!
        </div>
      </div>
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item lg={12} md={12} sm={12} xs={12} className="relative">
            <div className="vertical-lr">
              <div className="text-Greens text-lg sm:text-xl md:text-2xl lg:text-2xl">
                Step-1
              </div>
            </div>
            <div className="cardBox mb-6">
              <div className="bg-color191919 rounded-xl p-4">
                <div className="relative mb-7 mt-5">
                  <div className="text-gradients inline-block bg-gradient-to-r from-green-400 via-purple-600 to-sky-400 bg-clip-text text-2xl font-medium text-transparent">
                    Connect your Wallet
                  </div>
                  <div className="gradient_border" />
                </div>
                <div className="">
                  <div className="mb-4 block items-center justify-start gap-5 sm:block md:flex lg:flex">
                    <div className="img_row mb-3 flex items-center justify-center text-center sm:mb-3 md:mb-0 lg:mb-0">
                      <img
                        src="assets/blox-icon.png"
                        className="h-16 w-16 rounded-lg object-cover text-center"
                        alt=""
                      />
                    </div>
                    <div className="text-content text-white">
                      Mobile: open Metamask or trust wallet app on your phone
                      visit our website using the integrated browser and click
                      connect. select the app from connect wallet and click
                      Approve
                    </div>
                  </div>
                  <div className="mb-4 block items-center justify-start gap-5 sm:block md:flex lg:flex">
                    <div className="img_row mb-3 flex items-center justify-center text-center sm:mb-3 md:mb-0 lg:mb-0">
                      <img
                        src="assets/blox-icon.png"
                        className="h-16 w-16 rounded-lg object-cover text-center"
                        alt=""
                      />
                    </div>
                    <div className="text-content text-white">
                      Desktop: open Metamask or trust wallet app on your phone
                      visit our website using the integrated browser and click
                      connect. select the app from connect wallet and click
                      Approve
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Grid>
          <Grid item lg={12} md={12} sm={12} xs={12} className="relative">
            <div className="vertical-lr">
              <div className="text-Greens text-lg sm:text-xl md:text-2xl lg:text-2xl">
                Step-2
              </div>
            </div>
            <div className="cardBox mb-6">
              <div className="bg-color191919 rounded-xl p-4">
                <div className="relative mb-7 mt-5">
                  <div className="text-gradients inline-block bg-gradient-to-r from-green-400 via-purple-600 to-sky-400 bg-clip-text text-2xl font-medium text-transparent">
                    Select Payment Method
                  </div>
                  <div className="gradient_border gradient_border2" />
                </div>
                <Grid container spacing={2}>
                  <Grid item lg={4} md={4} sm={6} xs={12}>
                    <div className="bg-color252525 h-full rounded-xl p-4">
                      <div className="mb-4 flex items-center justify-start gap-3">
                        <div className="img_row flex h-16 w-16 items-center justify-center rounded-lg bg-black">
                          <img
                            src="../../assets/icons-tether.png"
                            className="h-12 w-12 rounded-lg object-cover"
                            alt=""
                          />
                        </div>
                        <div className="heading text-2xl font-medium text-white">
                          Buy with USDT
                        </div>
                      </div>
                      <div className="text-content text-sm font-normal text-white">
                        <ul className="ml-4 list-disc">
                          <li className="mb-2">
                            Enter amount of currency/token
                          </li>
                          <li className="mb-2">Press "Buy Now" button</li>
                          <li className="mb-2">
                            Check "Metamask" and "Use default" in custom
                            spending cap
                          </li>
                          <li className="mb-2">Click "Next" and "Approve" </li>
                          <li className="mb-2">Wait for confirmation</li>
                          <li className="mb-2">Click "Approve" again</li>
                        </ul>
                      </div>
                    </div>
                  </Grid>
                  <Grid item lg={4} md={4} sm={6} xs={12}>
                    <div className="bg-color252525 h-full rounded-xl p-4">
                      <div className="mb-4 flex items-center justify-start gap-3">
                        <div className="img_row flex h-16 w-16 items-center justify-center rounded-lg bg-black">
                          <img
                            src="assets/icons-USDC.png"
                            className="h-12 w-12 rounded-lg object-cover"
                            alt=""
                          />
                        </div>
                        <div className="heading text-2xl font-medium text-white">
                          Buy with USDC
                        </div>
                      </div>
                      <div className="text-content text-sm font-normal text-white">
                        <ul className="ml-4 list-disc">
                          <li className="mb-2">
                            Enter amount of currency / tokens
                          </li>
                          <li className="mb-2">Press "Buy Now" button</li>
                          <li className="mb-2">
                            Accept transaction in Metamask
                          </li>
                        </ul>
                      </div>
                    </div>
                  </Grid>
                  <Grid item lg={4} md={4} sm={6} xs={12}>
                    <div className="bg-color252525 h-full rounded-xl p-4">
                      <div className="mb-4 flex items-center justify-start gap-3">
                        <div className="img_row flex h-16 w-16 items-center justify-center rounded-lg bg-black">
                          <img
                            src="assets/icons-ETH.png"
                            className="h-12 w-12 rounded-lg object-cover"
                            alt=""
                          />
                        </div>
                        <div className="heading text-2xl font-medium text-white">
                          Buy with ETH
                        </div>
                      </div>
                      <div className="text-content text-sm font-normal text-white">
                        <ul className="ml-4 list-disc">
                          <li className="mb-2">
                            Enter amount of currency / tokens
                          </li>
                          <li className="mb-2">Press "Buy Now" button</li>
                          <li className="mb-2">
                            Accept transaction in Metamask
                          </li>
                        </ul>
                      </div>
                    </div>
                  </Grid>
                  <Grid item lg={4} md={4} sm={6} xs={12}>
                    <div className="bg-color252525 h-full rounded-xl p-4">
                      <div className="mb-4 flex items-center justify-start gap-3">
                        <div className="img_row flex h-16 w-16 items-center justify-center rounded-lg bg-black">
                          <img
                            src="assets/icons-BNB.png"
                            className="h-12 w-12 rounded-lg object-cover"
                            alt=""
                          />
                        </div>
                        <div className="heading text-2xl font-medium text-white">
                          Buy with BNB
                        </div>
                      </div>
                      <div className="text-content text-sm font-normal text-white">
                        <ul className="ml-4 list-disc">
                          <li className="mb-2">
                            Enter amount of currency/token
                          </li>
                          <li className="mb-2">Press "Buy Now" button</li>
                          <li className="mb-2">
                            Accept transaction in Metamask
                          </li>
                        </ul>
                      </div>
                    </div>
                  </Grid>
                  <Grid item lg={4} md={4} sm={6} xs={12}>
                    <div className="bg-color252525 h-full rounded-xl p-4">
                      <div className="mb-4 flex items-center justify-start gap-3">
                        <div className="img_row flex h-16 w-16 items-center justify-center rounded-lg bg-black">
                          <img
                            src="assets/icons-matic.png"
                            className="h-12 w-12 rounded-lg object-cover"
                            alt=""
                          />
                        </div>
                        <div className="heading text-2xl font-medium text-white">
                          Buy with MATIC
                        </div>
                      </div>
                      <div className="text-content text-sm font-normal text-white">
                        <ul className="ml-4 list-disc">
                          <li className="mb-2">
                            Enter amount of currency/token
                          </li>
                          <li className="mb-2">Press "Buy Now" button</li>
                          <li className="mb-2">
                            Complete the step-by-step KYC process
                          </li>
                          <li className="mb-2">
                            Insert your Card information
                          </li>
                          <li className="mb-2">Accept payment</li>
                        </ul>
                      </div>
                    </div>
                  </Grid>
                  <Grid item lg={4} md={4} sm={6} xs={12}>
                    <div className="bg-color252525 h-full rounded-xl p-4">
                      <div className="mb-4 flex items-center justify-start gap-3">
                        <div className="img_row flex h-16 w-16 items-center justify-center rounded-lg bg-black">
                          <img
                            src="assets/icons-arbitrum-arb.png"
                            className="h-12 w-12 rounded-lg object-cover"
                            alt=""
                          />
                        </div>
                        <div className="heading text-2xl font-medium text-white">
                          Buy with ARB
                        </div>
                      </div>
                      <div className="text-content text-sm font-normal text-white">
                        <ul className="ml-4 list-disc">
                          <li className="mb-2">
                            Enter amount of currency/token
                          </li>
                          <li className="mb-2">Press "Buy Now" button</li>
                          <li className="mb-2">
                            Complete the step-by-step KYC process
                          </li>
                          <li className="mb-2">
                            Insert your Card information
                          </li>
                          <li className="mb-2">Accept payment</li>
                        </ul>
                      </div>
                    </div>
                  </Grid>
                </Grid>
              </div>
            </div>
          </Grid>
          <Grid item lg={12} md={12} sm={12} xs={12} className="relative">
            <div className="vertical-lr">
              <div className="text-Greens text-lg sm:text-xl md:text-2xl lg:text-2xl">
                Step-3
              </div>
            </div>
            <div className="cardBox mb-6">
              <div className="bg-color191919 rounded-xl p-4">
                <div className="relative mb-7 mt-5">
                  <div className="text-gradients inline-block bg-gradient-to-r from-green-400 via-purple-600 to-sky-400 bg-clip-text text-2xl font-medium text-transparent">
                    Check your balance in the dashboard
                  </div>
                  <div className="gradient_border gradient_border3" />
                </div>
                <div className="">
                  <div className="mb-4">
                    <div className="text-content text-white">
                      Once the transaction has been completed and confirmed,
                      you "Connect Wallet" and check your current balance of
                      tokens.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Grid>
          <Grid item lg={12} md={12} sm={12} xs={12} className="relative">
            <div className="vertical-lr">
              <div className="text-Greens text-lg sm:text-xl md:text-2xl lg:text-2xl">
                Step-4
              </div>
            </div>
            <div className="cardBox mb-6">
              <div className="bg-color191919 rounded-xl p-4">
                <div className="relative mb-7 mt-5">
                  <div className="text-gradients inline-block bg-gradient-to-r from-green-400 via-purple-600 to-sky-400 bg-clip-text text-2xl font-medium text-transparent">
                    Claim
                  </div>
                  <div className="gradient_border gradient_border4" />
                </div>
                <div className="">
                  <div className="mb-4">
                    <div className="text-content text-white">
                      When the presale ends, you will be able to connect your
                      wallet and claim your tokens. Click the "Claim tokens"
                      button and accept the transaction in Metamask.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default HowtoBuy;
