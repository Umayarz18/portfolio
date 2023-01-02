import React from 'react';
import { NavItem, NavItemProps } from './NavItem';

type FooterProps = {
    footerLinks: NavItemProps[][]; //array of an array of navitems
};
export const Footer = ({ footerLinks }: FooterProps) => {
    return (
        <footer className='border-t-2 self-center flex flex-wrap mx-auto   justify-center items-center'>
            <section className=' py-4 flex flex-col md:flex-row  justify-between items-start space-y-3 w-full '>
                <div className='flex-row flex justify-between w-full  md:w-1/2 p-2 min-w-min'>
                    {footerLinks.map((column, index) => (
                        <section
                            className='flex flex-col items-start md:mt-0'
                            key={`footer-column-${index}`}
                        >
                            {column.map(({ link, title, outsideLink }) => (
                                <NavItem
                                    key={`footer-column=${index}-item-${title}`}
                                    link={link}
                                    title={title}
                                    outsideLink={outsideLink}
                                    type='bottom'
                                />
                            ))}
                        </section>
                    ))}
                </div>
                <div className=' flex flex-wrap justify-center items-center w-full md:w-1/2 mx-auto'>
                    <section className='flex flex-wrap  gap-3 items-start  justify-center md:justify-end mx-auto'>
                        <a
                            className='bg-gray-200 dark:bg-gray-100 p-2 px-3 rounded text-xs text-gray-700'
                            href='https://www.sanity.io'
                            target={'_blank'}
                            rel='noopener noreferrer'
                        >
                            <p className='mb-1 text-xs uppercase font-semibold'>
                                Powered by
                            </p>
                            <img
                                src='/sanity-logo.svg'
                                alt='Powered by Sanity'
                                className='h-3 '
                            />
                        </a>

                        <a
                            className='bg-gray-200 dark:bg-gray-100 p-2 px-2 rounded text-xs text-gray-700'
                            href='https://www.tailwindcss.com'
                            target={'_blank'}
                            rel='noopener noreferrer'
                        >
                            <p className='mb-1 text-xs uppercase font-semibold'>
                                Styled with
                            </p>
                            <img
                                src='/tailwind-logo.svg'
                                alt='Styled with Tailwindcss'
                                className='h-3'
                            />
                        </a>
                        <a
                            href='https://timeline.roewynumayam.com'
                            target={'_blank'}
                            rel='noopener noreferrer'
                            className='bg-gray-300 dark:text-gray-400 dark:bg-gray-800 py-2 px-2 rounded text-xs text-gray-700'
                        >
                            <p className='text-xs font-semibold  text-center md:text-md p-0.5'>
                                Made by me with
                            </p>
                            🐼🥡, 💪🏾, + ❤️
                        </a>
                        <a
                            href='https://www.netlify.com'
                            target={'_blank'}
                            rel='noopener noreferrer'
                        >
                            <img
                                src='https://www.netlify.com/img/global/badges/netlify-color-accent.svg'
                                alt='Deploys by Netlify'
                            />
                        </a>
                    </section>
                </div>
            </section>
        </footer>
    );
};
