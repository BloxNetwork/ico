import { Box, Container, Divider, Grid } from '@mui/material';
import { useState } from 'react';

const PresaleLaunchpad = () => {
  const [tabs, setTabs] = useState('Private');

  return (
    <div>
      <Box>
        <Box className="text-center">
          <div className="mb-5 text-5xl font-bold text-white">
            Presale Launchpad
          </div>
          <div className="my-10 flex items-center justify-center gap-4">
            <button
              className="Private_btn"
              onClick={() => setTabs('Private')}
              style={{
                background:
                  tabs === 'Private' ? 'var(--green-Color)' : 'transparent',
                color: tabs === 'Private' ? 'var(--text-color-111)' : 'white',
                borderColor:
                  tabs === 'Private' ? 'var(--text-color-111)' : 'white',
              }}>
              Private Round
            </button>
            <button
              className="Private_btn"
              onClick={() => setTabs('Presale')}
              style={{
                background:
                  tabs === 'Presale' ? 'var(--green-Color)' : 'transparent',
                color: tabs === 'Private' ? 'white' : 'var(--text-color-111)',
                borderColor:
                  tabs === 'Private' ? 'white' : 'var(--text-color-111)',
              }}>
              Presale Round
            </button>
          </div>
        </Box>
        <Container maxWidth="lg">
          {tabs === 'Private' && (
            <Grid container spacing={2}>
              <Grid item lg={4} md={4} sm={12} xs={12}>
                <div className="gradientBorder rounded-lg">
                  <Box className="bg-color191919 h-full rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <div className="text-lg font-normal text-white">
                        Round - 1
                      </div>
                      <div className="flex items-center gap-3 rounded bg-black px-4 py-1.5">
                        <span className="dotLive" />
                        <div className="text-Greens text-sm font-normal uppercase">
                          LIVE
                        </div>
                      </div>
                    </div>
                    <div className="my-4">
                      <Divider sx={{ borderColor: '#101010' }} />
                    </div>
                    <div className="privateSale_list">
                      <ul>
                        <li className="my-5 flex items-center justify-between gap-5">
                          <span className="w-1/2 text-right text-white">
                            Tokens :
                          </span>
                          <span className="text-Greens w-1/2">35M BLX</span>
                        </li>
                        <li className="my-5 flex items-center justify-between gap-5">
                          <span className="w-1/2 text-right text-white">
                            Price :
                          </span>

                          <span className="text-Greens w-1/2">$0.016</span>
                        </li>
                        <li className="my-5 flex items-center justify-between gap-5">
                          <span className="w-1/2 text-right text-white">
                            Cliff :
                          </span>

                          <span className="text-Greens w-1/2">03</span>
                        </li>
                        <li className="my-5 flex items-center justify-between gap-5">
                          <span className="w-1/2 text-right text-white">
                            Vesting Period :
                          </span>

                          <span className="text-Greens w-1/2">60 Days</span>
                        </li>
                        <li className="my-5 flex items-center justify-between gap-5">
                          <span className="w-1/2 text-right text-white">
                            Vesting Month :
                          </span>
                          <span className="text-Greens w-1/2">06</span>
                        </li>
                        <li className="my-5 flex items-center justify-between gap-5">
                          <span className="w-1/2 text-right text-white">
                            TGE Unlock :
                          </span>
                          <span className="text-Greens w-1/2">10%</span>
                        </li>
                        <li className="my-5 flex items-center justify-between gap-5">
                          <span className="w-1/2 text-right text-white">
                            Minimum buy :
                          </span>

                          <span className="text-Greens w-1/2">$64</span>
                        </li>
                        <li className="my-5 flex items-center justify-between gap-5">
                          <span className="w-1/2 text-right text-white">
                            Maximum buy :
                          </span>
                          <span className="text-Greens w-1/2"> $16000</span>
                        </li>
                      </ul>
                    </div>
                  </Box>
                </div>
              </Grid>
              <Grid item lg={4} md={4} sm={12} xs={12}>
                <div className="gradientBorder rounded-lg">
                  <Box className="bg-color191919 h-full rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <div className="text-lg font-normal text-white">
                        Round - 2
                      </div>
                      <div className="flex items-center gap-3 rounded bg-black px-4 py-1.5">
                        <span className="dotLive" />
                        <div className="text-Greens text-sm font-normal uppercase">
                          Upcoming
                        </div>
                      </div>
                    </div>
                    <div className="my-4">
                      <Divider sx={{ borderColor: '#101010' }} />
                    </div>
                    <div className="privateSale_list">
                      <ul>
                        <li className="my-5 flex items-center justify-between gap-5">
                          <span className="w-1/2 text-right text-white">
                            Tokens :
                          </span>
                          <span className="text-Greens w-1/2">35M BLX</span>
                        </li>
                        <li className="my-5 flex items-center justify-between gap-5">
                          <span className="w-1/2 text-right text-white">
                            Price :
                          </span>

                          <span className="text-Greens w-1/2">$0.024</span>
                        </li>
                        <li className="my-5 flex items-center justify-between gap-5">
                          <span className="w-1/2 text-right text-white">
                            Cliff :
                          </span>

                          <span className="text-Greens w-1/2">02</span>
                        </li>
                        <li className="my-5 flex items-center justify-between gap-5">
                          <span className="w-1/2 text-right text-white">
                            Vesting Period :
                          </span>

                          <span className="text-Greens w-1/2">30 Days</span>
                        </li>
                        <li className="my-5 flex items-center justify-between gap-5">
                          <span className="w-1/2 text-right text-white">
                            Vesting Month :
                          </span>

                          <span className="text-Greens w-1/2">04</span>
                        </li>
                        <li className="my-5 flex items-center justify-between gap-5">
                          <span className="w-1/2 text-right text-white">
                            TGE Unlock :
                          </span>
                          <span className="text-Greens w-1/2">17.5%</span>
                        </li>
                        <li className="my-5 flex items-center justify-between gap-5">
                          <span className="w-1/2 text-right text-white">
                            Minimum buy :
                          </span>

                          <span className="text-Greens w-1/2">$48</span>
                        </li>
                        <li className="my-5 flex items-center justify-between gap-5">
                          <span className="w-1/2 text-right text-white">
                            Maximum buy :
                          </span>
                          <span className="text-Greens w-1/2">$14400</span>
                        </li>
                      </ul>
                    </div>
                  </Box>
                </div>
              </Grid>
              <Grid item lg={4} md={4} sm={12} xs={12}>
                <div className="gradientBorder rounded-lg">
                  <Box className="bg-color191919 h-full rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <div className="text-lg font-normal text-white">
                        Round - 3
                      </div>
                      <div className="flex items-center gap-3 rounded bg-black px-4 py-1.5">
                        <span className="dotLive" />
                        <div className="text-Greens text-sm font-normal uppercase">
                          Upcoming
                        </div>
                      </div>
                    </div>
                    <div className="my-4">
                      <Divider sx={{ borderColor: '#101010' }} />
                    </div>
                    <div className="privateSale_list">
                      <ul>
                        <li className="my-5 flex items-center justify-between gap-5">
                          <span className="w-1/2 text-right text-white">
                            Tokens :
                          </span>
                          <span className="text-Greens w-1/2">40M BLX</span>
                        </li>
                        <li className="my-5 flex items-center justify-between gap-5">
                          <span className="w-1/2 text-right text-white">
                            Price :
                          </span>

                          <span className="text-Greens w-1/2">$0.032</span>
                        </li>
                        <li className="my-5 flex items-center justify-between gap-5">
                          <span className="w-1/2 text-right text-white">
                            Cliff :
                          </span>

                          <span className="text-Greens w-1/2">0</span>
                        </li>
                        <li className="my-5 flex items-center justify-between gap-5">
                          <span className="w-1/2 text-right text-white">
                            Vesting Period :
                          </span>

                          <span className="text-Greens w-1/2">30 Days</span>
                        </li>
                        <li className="my-5 flex items-center justify-between gap-5">
                          <span className="w-1/2 text-right text-white">
                            Vesting Month :
                          </span>

                          <span className="text-Greens w-1/2">03</span>
                        </li>
                        <li className="my-5 flex items-center justify-between gap-5">
                          <span className="w-1/2 text-right text-white">
                            TGE Unlock :
                          </span>
                          <span className="text-Greens w-1/2">25%</span>
                        </li>
                        <li className="my-5 flex items-center justify-between gap-5">
                          <span className="w-1/2 text-right text-white">
                            Minimum buy :
                          </span>

                          <span className="text-Greens w-1/2">$32</span>
                        </li>
                        <li className="my-5 flex items-center justify-between gap-5">
                          <span className="w-1/2 text-right text-white">
                            Maximum buy :
                          </span>
                          <span className="text-Greens w-1/2">$12800</span>
                        </li>
                      </ul>
                    </div>
                  </Box>
                </div>
              </Grid>
            </Grid>
          )}
          {/* Presale Round  Launchpad area  */}
          {tabs === 'Presale' && (
            <Grid container spacing={2}>
              <Grid item lg={4} md={4} sm={12} xs={12}>
                <div className="gradientBorder rounded-lg">
                  <Box className="bg-color191919 h-full rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <div className="text-lg font-normal text-white">
                        Round - 1
                      </div>
                      <div className="flex items-center gap-3 rounded bg-black px-4 py-1.5">
                        <span className="dotLive" />
                        <div className="text-Greens text-sm font-normal uppercase">
                          LIVE
                        </div>
                      </div>
                    </div>
                    <div className="my-4">
                      <Divider sx={{ borderColor: '#101010' }} />
                    </div>
                    <div className="privateSale_list">
                      <ul>
                        <li className="my-5 flex items-center justify-between gap-5">
                          <span className="w-1/2 text-right text-white">
                            Tokens :
                          </span>
                          <span className="text-Greens w-1/2">35M BLX</span>
                        </li>
                        <li className="my-5 flex items-center justify-between gap-5">
                          <span className="w-1/2 text-right text-white">
                            Price :
                          </span>

                          <span className="text-Greens w-1/2">$0.016</span>
                        </li>
                        <li className="my-5 flex items-center justify-between gap-5">
                          <span className="w-1/2 text-right text-white">
                            Cliff :
                          </span>

                          <span className="text-Greens w-1/2">03</span>
                        </li>
                        <li className="my-5 flex items-center justify-between gap-5">
                          <span className="w-1/2 text-right text-white">
                            Vesting Period :
                          </span>

                          <span className="text-Greens w-1/2">60 Days</span>
                        </li>
                        <li className="my-5 flex items-center justify-between gap-5">
                          <span className="w-1/2 text-right text-white">
                            Vesting Month :
                          </span>

                          <span className="text-Greens w-1/2">06</span>
                        </li>
                        <li className="my-5 flex items-center justify-between gap-5">
                          <span className="w-1/2 text-right text-white">
                            TGE Unlock :
                          </span>
                          <span className="text-Greens w-1/2">10%</span>
                        </li>
                        <li className="my-5 flex items-center justify-between gap-5">
                          <span className="w-1/2 text-right text-white">
                            Minimum buy :
                          </span>

                          <span className="text-Greens w-1/2">$64</span>
                        </li>
                        <li className="my-5 flex items-center justify-between gap-5">
                          <span className="w-1/2 text-right text-white">
                            Maximum buy :
                          </span>
                          <span className="text-Greens w-1/2"> $16000</span>
                        </li>
                      </ul>
                    </div>
                  </Box>
                </div>
              </Grid>
              <Grid item lg={4} md={4} sm={12} xs={12}>
                <div className="gradientBorder rounded-lg">
                  <Box className="bg-color191919 h-full rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <div className="text-lg font-normal text-white">
                        Round - 2
                      </div>
                      <div className="flex items-center gap-3 rounded bg-black px-4 py-1.5">
                        <span className="dotLive" />
                        <div className="text-Greens text-sm font-normal uppercase">
                          Upcoming
                        </div>
                      </div>
                    </div>
                    <div className="my-4">
                      <Divider sx={{ borderColor: '#101010' }} />
                    </div>
                    <div className="privateSale_list">
                      <ul>
                        <li className="my-5 flex items-center justify-between gap-5">
                          <span className="w-1/2 text-right text-white">
                            Tokens :
                          </span>
                          <span className="text-Greens w-1/2">35M BLX</span>
                        </li>
                        <li className="my-5 flex items-center justify-between gap-5">
                          <span className="w-1/2 text-right text-white">
                            Price :
                          </span>

                          <span className="text-Greens w-1/2">$0.024</span>
                        </li>
                        <li className="my-5 flex items-center justify-between gap-5">
                          <span className="w-1/2 text-right text-white">
                            Cliff :
                          </span>

                          <span className="text-Greens w-1/2">02</span>
                        </li>
                        <li className="my-5 flex items-center justify-between gap-5">
                          <span className="w-1/2 text-right text-white">
                            Vesting Period :
                          </span>

                          <span className="text-Greens w-1/2">30 Days</span>
                        </li>
                        <li className="my-5 flex items-center justify-between gap-5">
                          <span className="w-1/2 text-right text-white">
                            Vesting Month :
                          </span>

                          <span className="text-Greens w-1/2">04</span>
                        </li>
                        <li className="my-5 flex items-center justify-between gap-5">
                          <span className="w-1/2 text-right text-white">
                            TGE Unlock :
                          </span>
                          <span className="text-Greens w-1/2">17.5%</span>
                        </li>
                        <li className="my-5 flex items-center justify-between gap-5">
                          <span className="w-1/2 text-right text-white">
                            Minimum buy :
                          </span>

                          <span className="text-Greens w-1/2">$48</span>
                        </li>
                        <li className="my-5 flex items-center justify-between gap-5">
                          <span className="w-1/2 text-right text-white">
                            Maximum buy :
                          </span>
                          <span className="text-Greens w-1/2">$14400</span>
                        </li>
                      </ul>
                    </div>
                  </Box>
                </div>
              </Grid>
              <Grid item lg={4} md={4} sm={12} xs={12}>
                <div className="gradientBorder rounded-lg">
                  <Box className="bg-color191919 h-full rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <div className="text-lg font-normal text-white">
                        Round - 3
                      </div>
                      <div className="flex items-center gap-3 rounded bg-black px-4 py-1.5">
                        <span className="dotLive" />
                        <div className="text-Greens text-sm font-normal uppercase">
                          Upcoming
                        </div>
                      </div>
                    </div>
                    <div className="my-4">
                      <Divider sx={{ borderColor: '#101010' }} />
                    </div>
                    <div className="privateSale_list">
                      <ul>
                        <li className="my-5 flex items-center justify-between gap-5">
                          <span className="w-1/2 text-right text-white">
                            Tokens :
                          </span>
                          <span className="text-Greens w-1/2">40M BLX</span>
                        </li>
                        <li className="my-5 flex items-center justify-between gap-5">
                          <span className="w-1/2 text-right text-white">
                            Price :
                          </span>

                          <span className="text-Greens w-1/2">$0.032</span>
                        </li>
                        <li className="my-5 flex items-center justify-between gap-5">
                          <span className="w-1/2 text-right text-white">
                            Cliff :
                          </span>

                          <span className="text-Greens w-1/2">0</span>
                        </li>
                        <li className="my-5 flex items-center justify-between gap-5">
                          <span className="w-1/2 text-right text-white">
                            Vesting Period :
                          </span>

                          <span className="text-Greens w-1/2">30 Days</span>
                        </li>
                        <li className="my-5 flex items-center justify-between gap-5">
                          <span className="w-1/2 text-right text-white">
                            Vesting Month :
                          </span>

                          <span className="text-Greens w-1/2">03</span>
                        </li>
                        <li className="my-5 flex items-center justify-between gap-5">
                          <span className="w-1/2 text-right text-white">
                            TGE Unlock :
                          </span>
                          <span className="text-Greens w-1/2">25%</span>
                        </li>
                        <li className="my-5 flex items-center justify-between gap-5">
                          <span className="w-1/2 text-right text-white">
                            Minimum buy :
                          </span>

                          <span className="text-Greens w-1/2">$32</span>
                        </li>
                        <li className="my-5 flex items-center justify-between gap-5">
                          <span className="w-1/2 text-right text-white">
                            Maximum buy :
                          </span>
                          <span className="text-Greens w-1/2">$12800</span>
                        </li>
                      </ul>
                    </div>
                  </Box>
                </div>
              </Grid>
            </Grid>
          )}
        </Container>
        <div className="my-5 text-center">
          <button className="bg-Green rounded-lg px-8 py-2.5">BUY NOW</button>
        </div>
      </Box>
    </div>
  );
};

export default PresaleLaunchpad;
