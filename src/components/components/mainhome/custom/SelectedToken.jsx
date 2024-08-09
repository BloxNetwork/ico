import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from '@headlessui/react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';
import { useState } from 'react';

const people = [
  {
    id: 1,
    name: 'ETH',
    avatar: 'assets/Ethereum.png',
  },
  {
    id: 2,
    name: 'USDC',
    avatar: 'assets/icons-USDC.png',
  },
  {
    id: 3,
    name: 'Matic',
    avatar: 'assets/matic.png',
  },
  {
    id: 4,
    name: 'BNB',
    avatar: 'assets/bnb.png',
  },
  {
    id: 5,
    name: 'USDT',
    avatar: 'assets/Tether-USDT.png',
  },
];

const SelectedToken = () => {
  const [selected, setSelected] = useState(people[3]);

  return (
    <>
      <Listbox value={selected} onChange={setSelected}>
        <div className="relative">
          <ListboxButton className="relative w-full cursor-default rounded-xl bg-zinc-800 py-2.5 pl-3 pr-10 text-left text-white shadow-sm ring-0 focus:outline-none sm:text-sm sm:leading-6">
            <span className="flex items-center">
              <img
                alt=""
                src={selected.avatar}
                className="h-6 w-6 flex-shrink-0 rounded"
              />
              <span className="ml-3 block truncate">{selected.name}</span>
            </span>
            <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
              <ChevronUpDownIcon
                aria-hidden="true"
                className="h-5 w-5 text-gray-400"
              />
            </span>
          </ListboxButton>

          <ListboxOptions
            transition
            className="scrollBars absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-zinc-800 py-1 text-base shadow-lg ring-0 ring-black ring-opacity-5 focus:outline-none data-[closed]:data-[leave]:opacity-0 data-[leave]:transition data-[leave]:duration-100 data-[leave]:ease-in sm:text-sm">
            {people.map((person) => (
              <ListboxOption
                key={person.id}
                value={person}
                className="group relative cursor-default select-none py-2 pl-3 pr-9 text-white data-[focus]:bg-green-500 data-[focus]:text-white">
                <div className="flex items-center">
                  <img
                    alt=""
                    src={person.avatar}
                    className="h-7 w-7 flex-shrink-0 rounded-full object-contain"
                  />
                  <span className="ml-3 block truncate font-normal group-data-[selected]:font-semibold">
                    {person.name}
                  </span>
                </div>

                <span className="text-Greens absolute inset-y-0 right-0 flex items-center pr-4 group-data-[focus]:text-white [.group:not([data-selected])_&]:hidden">
                  <CheckIcon aria-hidden="true" className="h-5 w-5" />
                </span>
              </ListboxOption>
            ))}
          </ListboxOptions>
        </div>
      </Listbox>
    </>
  );
};

export default SelectedToken;
