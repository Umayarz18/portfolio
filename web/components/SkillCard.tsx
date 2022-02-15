import React from 'react';
import { urlFor } from '../lib/sanity';

type SkillCardProps = {
    title: string;
    image: {
        src: string;
        alt: string;
    };
    link: string;
};

export const SkillCard = ({ title, image, link }: SkillCardProps) => (
    <a
        href={link}
        target='_blank'
        rel='noopener noreferrer'
        className='h-64 w-64 md:h-48 md:w-48 rounded transition duration-300 ease-in-out group focus:ring-primary-dark focus:ring-2 focus:outline-none  m-3'
    >
        <div
            className=' rounded flex place-content-start h-full w-full 
              bg-gradient-to-r p-0.5 from-primary to-primary-dark'
        >
            <div
                className='justify-center  w-full p-4 items-center flex flex-col-reverse dark:bg-gray-400
              bg-gray-200'
            >
                <h3
                    className=' mt-4 text-lg font-bold dark:group-hover:text-primary-dark group-hover:text-primary
                transition duration-300 ease-in-out group'
                >
                    {title}
                </h3>
                <img
                    src={urlFor(image).url()}
                    alt={''}
                    className='h-32 w-32 md:h-16 md:w-16 grayscale '
                />
            </div>
        </div>
    </a>
);
