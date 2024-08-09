import { Box, Container, Grid } from '@mui/material';

const InviteYourFriends = () => {
  return (
    <Box>
      <Box className="mb-10 text-center">
        <div className="mb-5 text-3xl font-bold text-white sm:text-3xl md:text-4xl lg:text-5xl">
          Invite Your Friends
        </div>
        <div className="text-gradients inline-block bg-gradient-to-r from-green-400 via-purple-600 to-sky-400 bg-clip-text text-6xl font-bold text-transparent">
          Earn <span className="md:text-9xl lg:text-9xl">10%</span>
        </div>
      </Box>
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item lg={12} md={12} sm={12} xs={12}>
            <Box className="bg-color191919 rounded-xl p-4">
              <Box className="py-5 text-center text-2xl font-bold text-white sm:text-2xl md:text-3xl lg:text-4xl">
                Invite your friend and earn rewards
              </Box>
              <Box className="relative m-auto text-center md:w-1/2 lg:w-1/2">
                <input
                  placeholder="Connect BLOX wallet first"
                  className="bg-color252525 h-12 w-full rounded-md p-3 text-white ring-0 focus:outline-none"
                />
                <Box className="absolute bottom-0 right-1 top-0 flex items-center">
                  <button className="bg-Green rounded-lg px-4 py-2.5 font-medium">
                    Connect Wallet
                  </button>
                </Box>
              </Box>
              <div className="mt-8 block items-center justify-around gap-4 sm:block md:flex lg:flex">
                <div className="mb-3 text-xl font-medium">
                  <span className="mr-3 text-gray-500">Total Earned:</span>
                  <span className="text-white">$ 0.00</span>
                </div>
                <div className="mb-3 text-xl font-medium">
                  <span className="mr-3 text-gray-500">$BLX Earned:</span>
                  <span className="text-white">$ 0.00</span>
                </div>
                <div className="mb-3 text-xl font-medium">
                  <span className="mr-3 text-gray-500">
                    Available for Withdrawal:
                  </span>
                  <span className="text-white">$ 0.00</span>
                </div>
              </div>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default InviteYourFriends;
