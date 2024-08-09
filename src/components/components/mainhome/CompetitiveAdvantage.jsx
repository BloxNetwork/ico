import { Box, Container, Grid } from '@mui/material';

const CompetitiveAdvantage = () => {
  return (
    <div>
      <Box className="my-10 text-center">
        <div className="mb-5 text-3xl font-bold text-white sm:text-3xl md:text-4xl lg:text-5xl">
          Competitive Advantage
        </div>
      </Box>
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item lg={12} md={12} sm={12} xs={12}>
            <Box className="overflow-x-auto">
              <table className="min-w-full">
                <thead>
                  <tr>
                    <th className="w-1/5 min-w-1.5 px-1 text-left tracking-wider">
                      <div className="bg-color252525 flex h-24 items-center justify-center rounded-lg p-4 text-center font-normal text-gray-300"></div>
                    </th>
                    <th className="w-1/5 min-w-1.5 px-1 text-left tracking-wider">
                      <div className="bg-color252525 flex h-24 items-center justify-center rounded-lg p-4 text-center font-normal text-gray-300">
                        Ethereum
                      </div>
                    </th>
                    <th className="w-1/5 min-w-1.5 px-1 text-left tracking-wider">
                      <div className="bg-color252525 flex h-24 items-center justify-center rounded-lg p-4 text-center font-normal text-gray-300">
                        Solana
                      </div>
                    </th>
                    <th className="w-1/5 min-w-1.5 px-1 text-left tracking-wider">
                      <div className="bg-color252525 flex h-24 items-center justify-center rounded-lg p-4 text-center font-normal text-gray-300">
                        Binance Smart Chain
                      </div>
                    </th>
                    <th className="w-1/5 min-w-1.5 px-1 text-left tracking-wider">
                      <div className="bg-color252525 text-Greens flex h-24 items-center justify-center rounded-lg p-4 text-center font-normal">
                        Solana VM
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody className="">
                  <tr>
                    <td className="px-1 pb-1 pt-2">
                      <div className="bg-color252525 flex h-24 items-center justify-center rounded-lg p-4 text-center font-normal text-gray-300">
                        Using Solidity and Vyper languages
                      </div>
                    </td>
                    <td className="px-1 py-1">
                      <div className="flex h-24 items-center justify-center rounded-lg p-4 text-center font-normal text-gray-300">
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="size-8 text-white">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
                            />
                          </svg>
                        </span>
                      </div>
                    </td>
                    <td className="px-1 py-1">
                      <div className="flex h-24 items-center justify-center rounded-lg p-4 text-center font-normal text-gray-300">
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="size-8 text-white">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                            />
                          </svg>
                        </span>
                      </div>
                    </td>
                    <td className="px-1 py-1">
                      <div className="flex h-24 items-center justify-center rounded-lg p-4 text-center font-normal text-gray-300">
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="size-8 text-white">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
                            />
                          </svg>
                        </span>
                      </div>
                    </td>
                    <td className="px-1 py-1">
                      <div className="flex h-24 items-center justify-center rounded-lg p-4 text-center font-normal text-gray-300">
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="text-Greens size-8">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
                            />
                          </svg>
                        </span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-1 pb-1 pt-2">
                      <div className="bg-color252525 flex h-24 items-center justify-center rounded-lg p-4 text-center font-normal text-gray-300">
                        TPS
                      </div>
                    </td>
                    <td className="px-1 py-1">
                      <div className="flex h-24 items-center justify-center rounded-lg p-4 text-center font-normal text-gray-300">
                        <span>100</span>
                      </div>
                    </td>
                    <td className="px-1 py-1">
                      <div className="flex h-24 items-center justify-center rounded-lg p-4 text-center font-normal text-gray-300">
                        <span>1500</span>
                      </div>
                    </td>
                    <td className="px-1 py-1">
                      <div className="flex h-24 items-center justify-center rounded-lg p-4 text-center font-normal text-gray-300">
                        <span>1600</span>
                      </div>
                    </td>
                    <td className="px-1 py-1">
                      <div className="text-Greens flex h-24 items-center justify-center rounded-lg p-4 text-center font-normal">
                        <span>1600</span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-1 pb-1 pt-2">
                      <div className="bg-color252525 flex h-24 items-center justify-center rounded-lg p-4 text-center font-normal text-gray-300">
                        Transaction Fee
                      </div>
                    </td>
                    <td className="px-1 py-1">
                      <div className="flex h-24 items-center justify-center rounded-lg p-4 text-center font-normal text-gray-300">
                        <span>$1</span>
                      </div>
                    </td>
                    <td className="px-1 py-1">
                      <div className="flex h-24 items-center justify-center rounded-lg p-4 text-center font-normal text-gray-300">
                        <span>$0.01</span>
                      </div>
                    </td>
                    <td className="px-1 py-1">
                      <div className="flex h-24 items-center justify-center rounded-lg p-4 text-center font-normal text-gray-300">
                        <span>$0.15</span>
                      </div>
                    </td>
                    <td className="px-1 py-1">
                      <div className="flex h-24 items-center justify-center rounded-lg p-4 text-center font-normal text-gray-300">
                        $0.15
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-1 pb-1 pt-2">
                      <div className="bg-color252525 flex h-24 items-center justify-center rounded-lg p-4 text-center font-normal text-gray-300">
                        Ethereum RPC API
                      </div>
                    </td>
                    <td className="px-1 py-1">
                      <div className="flex h-24 items-center justify-center rounded-lg p-4 text-center font-normal text-gray-300">
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="size-8 text-white">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
                            />
                          </svg>
                        </span>
                      </div>
                    </td>
                    <td className="px-1 py-1">
                      <div className="flex h-24 items-center justify-center rounded-lg p-4 text-center font-normal text-gray-300">
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="size-8 text-white">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                            />
                          </svg>
                        </span>
                      </div>
                    </td>
                    <td className="px-1 py-1">
                      <div className="flex h-24 items-center justify-center rounded-lg p-4 text-center font-normal text-gray-300">
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="size-8 text-white">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                            />
                          </svg>
                        </span>
                      </div>
                    </td>
                    <td className="px-1 py-1">
                      <div className="flex h-24 items-center justify-center rounded-lg p-4 text-center font-normal">
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="text-Greens size-8">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                            />
                          </svg>
                        </span>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default CompetitiveAdvantage;
