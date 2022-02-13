import { Menu, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { ChevronDownIcon } from '@heroicons/react/solid';
import { useRouter } from 'next/router';
import React from 'react';

type itemProps = {
    link: string;
    title: string;
    icon: (props: React.SVGProps<SVGSVGElement>) => JSX.Element;
};

type DropdownProps = {
    label: string;
    items: itemProps[];
    type: string;
};

export default function Dropdown({ label, items, type }: DropdownProps) {
    const router = useRouter();

    return (
        <Menu as='div' className='relative inline-block text-left z-50'>
            <div className='block'>
                <Menu.Button
                    className={[
                        type === 'nav-link' ? 'nav-link' : null,
                        type === 'btn-primary' ? 'dropdown-btn-primary' : null,
                        'group focus:ring-2 dark:ring-white ring-black flex flex-row',
                    ].join(' ')}
                >
                    {label}
                    <ChevronDownIcon
                        className='w-5 h-5 ml-2 -mr-1 text-gray-700 group-hover:text-primary 
          dark:text-gray-200 dark:group-hover:text-primary'
                        aria-hidden='true'
                    />
                </Menu.Button>
            </div>
            <Transition
                as={Fragment}
                enter='transition ease-out duration-100'
                enterFrom='transform opacity-0 scale-95'
                enterTo='transform opacity-100 scale-100'
                leave='transition ease-in duration-75'
                leaveFrom='transform opacity-100 scale-100'
                leaveTo='transform opacity-0 scale-95'
            >
                <Menu.Items
                    className={[
                        type === 'nav-link'
                            ? ` bg-gray-100 dark:bg-gray-900 divide-y 
            dark:divide-gray-100 divide-gray-300 rounded-md shadow-lg ring-1 ring-black 
            ring-opacity-5 focus:outline-none dark:ring-white`
                            : null,
                        type === 'btn-primary' ? null : null,
                        'md:absolute md:right-0 md:w-56 mt-2 origin-top-right ',
                    ].join(' ')}
                >
                    {items.map((Item) => (
                        <div className='px-1 py-1 ' key={`link-${Item.title}`}>
                            <Menu.Item as={Fragment}>
                                {type === 'nav-link'
                                    ? ({ active }) => (
                                          <a
                                              href={Item.link}
                                              className={`${
                                                  active
                                                      ? 'bg-opacity-90 bg-purple-200 text-primary'
                                                      : 'text-gray-700 dark:text-gray-200'
                                              } group flex rounded-md items-center  font-bold 
                        w-full px-2 py-2 text-sm md:text-base focus:outline-black`}
                                          >
                                              {active ? (
                                                  <Item.icon
                                                      className='w-5 h-5 mr-2'
                                                      aria-hidden='true'
                                                  />
                                              ) : (
                                                  <Item.icon
                                                      className='w-5 h-5 mr-2'
                                                      aria-hidden='true'
                                                  />
                                              )}
                                              {Item.title}
                                          </a>
                                      )
                                    : ({ active }) => (
                                          <button
                                              aria-hidden='false'
                                              onClick={() =>
                                                  router.push(Item.link)
                                              }
                                              className={`${
                                                  active
                                                      ? 'bg-opacity-90 bg-purple-200 text-primary'
                                                      : 'text-gray-700 dark:text-gray-200'
                                              } group flex rounded-md items-center  font-semibold w-full px-2 py-2 text-sm md:text-md focus:outline-black`}
                                          >
                                              {active ? (
                                                  <Item.icon
                                                      className='w-5 h-5 mr-2'
                                                      aria-hidden='true'
                                                  />
                                              ) : (
                                                  <Item.icon
                                                      className='w-5 h-5 mr-2'
                                                      aria-hidden='true'
                                                  />
                                              )}
                                              {Item.title}
                                          </button>
                                      )}
                            </Menu.Item>
                        </div>
                    ))}
                </Menu.Items>
            </Transition>
        </Menu>
    );
}
