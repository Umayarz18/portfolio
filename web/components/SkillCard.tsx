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
        className=' h-48 w-48 md:h-32 md:w-32 rounded group focus:ring-primary-dark focus:ring-2 focus:outline-none  m-5 justify-center p-4 items-center flex flex-col-reverse '
    >
        <h3
            className=' mt-4 text-lg font-bold dark:group-hover:text-primary-dark group-hover:text-primary
                transition duration-300 ease-in-out group text-center'
        >
            {title}
        </h3>
        <img
            src={urlFor(image).url()}
            alt={''}
            className='h-32 w-32 md:h-16 md:w-16 '
        />
    </a>
);
