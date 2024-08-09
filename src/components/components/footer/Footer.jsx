import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="relative isolate overflow-hidden py-5">
      <footer className="mt-10">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0">
              <Link to="/" className="flex items-center">
                <img
                  src="assets/rexx-logo.png"
                  className="me-3 w-32"
                  alt="FlowBite Logo"
                />
              </Link>
            </div>
            <div className="grid grid-cols-4 gap-10 sm:grid-cols-4 sm:gap-20">
              <div>
                <h2 className="mb-6 text-sm font-normal uppercase text-white">
                  Product
                </h2>
                <ul className="">
                  <li className="mb-4">
                    <Link
                      to="/"
                      className="font-normal text-gray-300 no-underline transition-all hover:text-green-500">
                      Features
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link
                      to="/"
                      className="font-normal text-gray-300 no-underline transition-all hover:text-green-500">
                      Integration
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link
                      to="/"
                      className="font-normal text-gray-300 no-underline transition-all hover:text-green-500">
                      Updates
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link
                      to="/"
                      className="font-normal text-gray-300 no-underline transition-all hover:text-green-500">
                      FAQ
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link
                      to="/"
                      className="font-normal text-gray-300 no-underline transition-all hover:text-green-500">
                      Pricing
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-normal uppercase text-white">
                  Company
                </h2>
                <ul className="">
                  <li className="mb-4">
                    <Link
                      to="/"
                      className="font-normal text-gray-300 no-underline transition-all hover:text-green-500">
                      About
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link
                      to="/"
                      className="font-normal text-gray-300 no-underline transition-all hover:text-green-500">
                      Blog
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link
                      to="/"
                      className="font-normal text-gray-300 no-underline transition-all hover:text-green-500">
                      Careers
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link
                      to="/"
                      className="font-normal text-gray-300 no-underline transition-all hover:text-green-500">
                      Manifesto
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link
                      to="/"
                      className="font-normal text-gray-300 no-underline transition-all hover:text-green-500">
                      Press
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link
                      to="/"
                      className="font-normal text-gray-300 no-underline transition-all hover:text-green-500">
                      Contract
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-normal uppercase text-white">
                  Resources
                </h2>
                <ul className="">
                  <li className="mb-4">
                    <Link
                      to="/"
                      className="font-normal text-gray-300 no-underline transition-all hover:text-green-500">
                      Examples
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link
                      to="/"
                      className="font-normal text-gray-300 no-underline transition-all hover:text-green-500">
                      Community
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link
                      to="/"
                      className="font-normal text-gray-300 no-underline transition-all hover:text-green-500">
                      Guides
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link
                      to="/"
                      className="font-normal text-gray-300 no-underline transition-all hover:text-green-500">
                      Docs
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link
                      to="/"
                      className="font-normal text-gray-300 no-underline transition-all hover:text-green-500">
                      Press
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-normal uppercase text-white">
                  Legal
                </h2>
                <ul className="">
                  <li className="mb-4">
                    <Link
                      to="/"
                      className="font-normal text-gray-300 no-underline transition-all hover:text-green-500">
                      Privacy
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link
                      to="/"
                      className="font-normal text-gray-300 no-underline transition-all hover:text-green-500">
                      Terms
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link
                      to="/"
                      className="font-normal text-gray-300 no-underline transition-all hover:text-green-500">
                      Security
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <hr className="my-6 border-black sm:mx-auto lg:my-8" />

          <div className="sm:flex sm:items-center sm:justify-between">
            <div className="mt-4 flex gap-1 sm:mt-0 sm:justify-center">
              <Link
                to="https://www.facebook.com/"
                target="_blank"
                className="flex h-10 w-10 items-center justify-center rounded-lg text-gray-500 transition-all hover:-mt-2 hover:bg-neutral-900 hover:text-green-500">
                <svg
                  className="h-6 w-6"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 8 19">
                  <path
                    fillRule="evenodd"
                    d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
              <Link
                to="https://www.instagram.com/"
                target="_blank"
                className="flex h-10 w-10 items-center justify-center rounded-lg text-gray-500 transition-all hover:-mt-2 hover:bg-neutral-900 hover:text-green-500">
                <svg
                  className="h-6 w-6"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    fillRule="evenodd"
                    d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
              <Link
                to="https://www.youtube.com/"
                target="_blank"
                className="flex h-10 w-10 items-center justify-center rounded-lg text-gray-500 transition-all hover:-mt-2 hover:bg-neutral-900 hover:text-green-500">
                <svg
                  className="h-6 w-6"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    fillRule="evenodd"
                    d="M21.7 8.037a4.26 4.26 0 0 0-.789-1.964 2.84 2.84 0 0 0-1.984-.839c-2.767-.2-6.926-.2-6.926-.2s-4.157 0-6.928.2a2.836 2.836 0 0 0-1.983.839 4.225 4.225 0 0 0-.79 1.965 30.146 30.146 0 0 0-.2 3.206v1.5a30.12 30.12 0 0 0 .2 3.206c.094.712.364 1.39.784 1.972.604.536 1.38.837 2.187.848 1.583.151 6.731.2 6.731.2s4.161 0 6.928-.2a2.844 2.844 0 0 0 1.985-.84 4.27 4.27 0 0 0 .787-1.965 30.12 30.12 0 0 0 .2-3.206v-1.516a30.672 30.672 0 0 0-.202-3.206Zm-11.692 6.554v-5.62l5.4 2.819-5.4 2.801Z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
              <Link
                to="https://discord.com/"
                target="_blank"
                className="flex h-10 w-10 items-center justify-center rounded-lg text-gray-500 transition-all hover:-mt-2 hover:bg-neutral-900 hover:text-green-500">
                <svg
                  className="h-6 w-6"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 21 16">
                  <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z" />
                </svg>
              </Link>
              <Link
                to="https://x.com/"
                target="_blank"
                className="flex h-10 w-10 items-center justify-center rounded-lg text-gray-500 transition-all hover:-mt-2 hover:bg-neutral-900 hover:text-green-500">
                <svg
                  className="h-6 w-6"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 17">
                  <path
                    fillRule="evenodd"
                    d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
              <Link
                to="https://github.com/"
                target="_blank"
                className="flex h-10 w-10 items-center justify-center rounded-lg text-gray-500 transition-all hover:-mt-2 hover:bg-neutral-900 hover:text-green-500">
                <svg
                  className="h-6 w-6"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            </div>
            <span className="text-sm text-gray-500 sm:text-center">
              © 2024{' '}
              <Link to="/" className="transition-all hover:text-green-500">
                BLOX ICO
              </Link>
              . All Rights Reserved.
            </span>
          </div>
        </div>
      </footer>
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6">
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
        />
      </div>
    </div>
  );
};

export default Footer;
