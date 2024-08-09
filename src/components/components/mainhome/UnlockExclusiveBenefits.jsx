import { Box, Container, Grid } from '@mui/material';

const UnlockExclusiveBenefits = () => {
  return (
    <div>
      <div className="mb-5 text-center">
        <div className="mb-5 text-center text-3xl font-bold text-white sm:text-3xl md:text-4xl lg:text-5xl">
          Unlock Exclusive Benefits
        </div>
        <div className="text-white">
          Seize this opportunity to be at the forefront of our project's growth{' '}
          <br /> and gain access to unique privileges
        </div>
      </div>
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <Box className="bg-color191919 h-full rounded-xl p-5">
              <div className="py-4 text-center text-3xl font-bold text-white sm:text-3xl md:text-4xl lg:text-4xl">
                Audit Results
              </div>
              <div className="py-3 text-center font-normal text-gray-400">
                We have been successfully audited by SolidProof. This milestone
                highlights our commitment to transparency and excellence
              </div>
              <div className="my-6 text-center">
                <button className="gradientBorder m-auto w-1/2 rounded-lg">
                  <div className="h-14 w-full rounded-lg bg-black py-1">
                    <img
                      src="assets/paladin-logo.png"
                      className="m-auto w-40"
                      alt=""
                    />
                  </div>
                </button>
              </div>
            </Box>
          </Grid>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <Box className="bg-color191919 h-full rounded-xl p-5">
              <div className="py-4 text-center text-3xl font-bold text-white sm:text-3xl md:text-4xl lg:text-4xl">
                Explore whitepaper
              </div>
              <div className="py-3 text-center font-normal text-gray-400">
                Details of Solana VM functionality and its mission to address
                pressing industry challenges
              </div>
              <div className="my-6 text-center">
                <button className="gradientBorder m-auto w-1/2 rounded-lg text-white transition-all hover:text-gray-300">
                  <div className="flex h-14 w-full items-center justify-center rounded-lg bg-black py-1">
                    Read More
                  </div>
                </button>
              </div>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default UnlockExclusiveBenefits;
