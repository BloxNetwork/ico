import { Box, Container, Grid } from '@mui/material';
import { useState } from 'react';
import CompetitiveAdvantage from './CompetitiveAdvantage';
import FrequentlyAskedQuestion from './FrequentlyAskedQuestion';
import HowtoBuy from './HowtoBuy';
import InviteYourFriends from './InviteYourFriends';
import PresaleLaunchpad from './PresaleLaunchpad';
import ProgressBar from './ProgressBar';
import UnlockExclusiveBenefits from './UnlockExclusiveBenefits';
import SelectedToken from './custom/SelectedToken';

const Home = () => {
  const [progress, setProgress] = useState(70);

  return (
    <>
      <Box
        sx={{ paddingY: { lg: '5rem', md: '4rem', xs: '3rem', sm: '3rem' } }}
        className="relative isolate">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>
        <Box>
          <Container maxWidth="lg">
            <Grid container spacing={2}>
              <Grid item lg={12} md={12} sm={12} xs={12}>
                <div className="card-color rounded-2xl p-3 sm:p-5 md:p-8 lg:p-9">
                  <div className="progress_liver_content mb-10">
                    <div className="flex items-center justify-between">
                      <div className="list_presale flex items-center gap-3">
                        <span className="dotLive"></span>
                        <h4 className="text-sm text-white sm:text-lg md:text-xl lg:text-xl">
                          Presale is Live
                        </h4>
                      </div>
                      <div className="raised_prices flex items-center gap-3">
                        <span className="text-lg text-white">Raised:</span>
                        <div className="text-Greens text-lg font-medium sm:text-xl md:text-2xl lg:text-2xl">
                          $6,938,245
                        </div>
                      </div>
                    </div>
                    <div className="progressBars my-3">
                      <ProgressBar progress={progress} />
                    </div>
                    <div className="text-right text-lg text-white">
                      Target: $7,500,000
                    </div>
                  </div>
                  <div className="mb-4 block gap-4 sm:block md:flex lg:flex">
                    <div className="mb-3 w-full rounded-xl bg-zinc-800 p-3 sm:w-full md:w-1/2 lg:w-1/2">
                      <div className="flex items-center justify-center gap-7 text-center text-white">
                        <span>Listing Price </span>
                        <span>
                          $0.01 <span className="text-Greens">(165.96%)</span>
                        </span>
                      </div>
                    </div>
                    <div className="mb-3 w-full rounded-xl bg-zinc-800 p-3 sm:w-full md:w-1/2 lg:w-1/2">
                      <div className="flex items-center justify-center gap-7 text-center text-white">
                        <span>Next Price </span>
                        <span>
                          $0.00433{' '}
                          <span className="text-Greens">(15.16%)</span>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="stakingSwap relative">
                    <div className="absolute bottom-0 left-2 right-0 top-0 m-auto flex items-center justify-center rounded-full">
                      <img
                        src="assets/blox-icon.png"
                        className="w-18 h-w-18 rounded-full bg-white p-2"
                        alt=""
                      />
                    </div>
                    <div className="mb-4 block gap-4 sm:block md:flex lg:flex">
                      <div className="mb-3 w-full rounded-xl bg-black p-6 sm:w-full md:w-1/2 lg:w-1/2">
                        <div className="text-center text-xl font-medium text-gray-500">
                          <span>Select Payment method</span>
                        </div>
                        <div className="my-3">
                          <SelectedToken />
                        </div>
                      </div>
                      <div className="mb-3 w-full rounded-xl bg-black p-6 sm:w-full md:w-1/2 lg:w-1/2">
                        <div className="flex items-center justify-center gap-3 text-center text-xl">
                          <span className="font-medium text-gray-500">
                            USD Cost:
                          </span>
                          <span className="font-medium text-white">
                            $0.002
                          </span>
                        </div>
                        <div className="my-3">
                          <div className="relative">
                            <div className="absolute bottom-0 left-2 top-0 flex items-center">
                              <img
                                src="assets/dollar.png"
                                className="h-6 w-6 rounded-full"
                                alt=""
                              />
                            </div>
                            <input
                              type="text"
                              className="h-12 w-full rounded-xl bg-zinc-800 py-2.5 pl-10 pr-4 text-right text-white ring-0 focus:outline-none"
                              placeholder="0"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mb-4 block gap-4 sm:block md:flex lg:flex">
                      <div className="mb-3 w-full rounded-xl bg-black p-6 sm:w-full md:w-1/2 lg:w-1/2">
                        <div className="flex items-center justify-center gap-3 text-center text-xl">
                          <span className="font-medium text-gray-500">
                            Balance:
                          </span>
                          <span className="font-medium text-white">
                            0 Blox
                          </span>
                        </div>
                        <div className="my-3 h-1 border-t-2 border-zinc-800" />
                        <div className="text-center text-xl font-medium text-white">
                          BLOX
                        </div>
                      </div>
                      <div className="mb-3 w-full rounded-xl bg-black p-6 sm:w-full md:w-1/2 lg:w-1/2">
                        <div className="flex items-center justify-center gap-3 text-center text-xl">
                          <span className="font-medium text-gray-500">
                            USD Cost:
                          </span>
                          <span className="font-medium text-white">$0.00</span>
                        </div>
                        <div className="my-3 h-1 border-t-2 border-zinc-800" />
                        <div className="text-center">
                          <span className="text-xl font-medium text-white">
                            0
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="my-5">
                    <button className="bg-Green flex w-full items-center justify-center gap-1 rounded-lg px-4 py-3 font-medium transition-all hover:bg-green-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-6 text-black">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21 12a2.25 2.25 0 0 0-2.25-2.25H15a3 3 0 1 1-6 0H5.25A2.25 2.25 0 0 0 3 12m18 0v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 9m18 0V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v3"
                        />
                      </svg>
                      Connect Wallet
                    </button>
                  </div>
                  <div className="text-center font-normal text-white">
                    <span>How to Buy? | Referral</span>
                  </div>
                </div>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
      <Box>
        <HowtoBuy />
      </Box>
      <Box className="relative isolate">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>
        <PresaleLaunchpad />
      </Box>
      <Box
        sx={{ paddingY: { lg: '5rem', md: '4rem', xs: '3rem', sm: '3rem' } }}>
        <InviteYourFriends />
      </Box>
      <Box
        sx={{
          paddingBottom: { lg: '5rem', md: '4rem', xs: '3rem', sm: '3rem' },
        }}
        className="relative isolate">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>
        <CompetitiveAdvantage />
      </Box>
      <Box
        sx={{ paddingY: { lg: '5rem', md: '4rem', xs: '3rem', sm: '3rem' } }}>
        <Container maxWidth="lg">
          <Grid container spacing={2}>
            <Grid item lg={8} md={8} sm={12} xs={12} margin="auto">
              <Box className="mb-36 sm:mb-36 md:mb-48 lg:mb-52">
                <Box className="mb-5 text-center text-3xl font-bold text-white sm:text-3xl md:text-4xl lg:text-5xl">
                  Staking
                </Box>
              </Box>
              <Box className="relative text-center">
                <img
                  src="assets/blox-token.png"
                  className="blox-token-img md:h-3w-36 m-auto h-28 w-28 sm:h-28 sm:w-28 md:w-36 lg:h-36 lg:w-36"
                  alt=""
                />
                <img
                  src="assets/staking-img.png"
                  className="m-auto w-full"
                  alt=""
                />
              </Box>
              <Box className="my-5">
                <div className="text-center text-white">
                  Staking offers SVM token holders the chance to contribute
                  their digital assets to support blockchain operations. By
                  staking their SVM tokens, holders can earn rewards while
                  retaining ownership of their assets
                </div>
              </Box>
              <div className="text-center">
                <button className="Coming-Soon-Btn">Coming Soon</button>
              </div>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box
        sx={{ paddingY: { lg: '5rem', md: '4rem', xs: '3rem', sm: '3rem' } }}>
        <UnlockExclusiveBenefits />
      </Box>
      <Box>
        <FrequentlyAskedQuestion />
      </Box>
    </>
  );
};

export default Home;
