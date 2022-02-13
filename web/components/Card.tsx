/* eslint-disable jsx-a11y/anchor-has-content */
import React, { useEffect, useState } from 'react';
import { GoNote } from 'react-icons/go';
import { VscTools } from 'react-icons/vsc';

type CardProps = {
    title: string;
    color: string;
    description: string;
    link: string;
    logo: string;
};
export default function Card({
    title,
    color,
    description,
    link,
    logo,
}: CardProps) {
    const [opened, isOpened] = useState(false);

    return (
        <div className='overflow-hidden rounded  max-w-sm my-3 md:m-5 justify-center flex flex-row items-center   '>
            <div className={opened ? 'hidden' : 'block'}>
                <div className=' flex justify-center items-center h-56 w-56 '>
                    <img
                        src={logo}
                        className=' hover:transform hover:scale-50 '
                        alt={`Logo for ${title}`}
                        style={{ maxHeight: '200px', maxWidth: '200px' }}
                    />
                </div>
            </div>
            <div
                className={[
                    'hidden px-6  font-bold text-gray-700 text-lg md:text-xl lg:text-2xl mt-3  row-span-1 col-span-3',
                    opened ? 'block' : '',
                ].join('')}
                style={{ color: color }}
            >
                <h3 className='my-3 text-2xl'>{title}</h3>
                {/** Display only on hover, takes up the whole container */}
                <p className=' clamp-6 font-normal text-gray-600 text-base  '>
                    {description}
                </p>
                <div className=' pl-6  pt-3 pb-3 flex flex-row self-start justify-start h items-center row-auto col-span-3'>
                    {link ? (
                        <>
                            <span className=' text-sm lg:text-md font-semibold text-gray-500 mr-2 mb-2 hover:text-gray-700 '>
                                <a
                                    href={'link'}
                                    target='_blank'
                                    className='inline-block'
                                    rel='noopener noreferrer'
                                >
                                    Website
                                </a>
                            </span>
                            <span className=' text-sm lg:text-md font-semibold text-gray-500 mr-2 mb-2 hover:text-gray-700 '>
                                <a href={`/projects/${title.toLowerCase()}`}>
                                    Project Details
                                    <GoNote className='inline-block ml-1' />
                                </a>
                            </span>
                        </>
                    ) : (
                        <span className=' text-sm lg:text-md font-semibold text-gray-600 mr-2 mb-2'>
                            In Development
                            <VscTools className='inline-block mr-1' />
                            <a href={`/projects/${title.toLowerCase()}`}>
                                Project Details
                                <GoNote className='inline-block ml-1' />
                            </a>
                        </span>
                    )}
                </div>
            </div>
        </div>
    );
}
