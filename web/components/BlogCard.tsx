import React from 'react';

export type BlogCardProps = {
    /** The minimized blog data to be displayed as a card */
    data: {
        slug: {
            current: string;
        };
        title: string;
        description: string;
    };
};

export const BlogCard = ({ data }: BlogCardProps) => {
    return (
        <a
            className='w-full h-full flex flex-row'
            href={`/blog/${data.slug.current}`}
        >
            <div
                className='overflow-hidden  rounded-xl h-90 
      md:w-full cursor-pointer md:m-auto group '
            >
                <div className=' w-full text-lg'>
                    <h3
                        className=' text-2xl font-semibold mb-2 
           ease-in-out group-hover:underline text-gray-700 dark:text-gray-200'
                    >
                        {data.title}
                    </h3>
                    <p className='text-gray-600 dark:text-gray-400 text-md mb-2'>
                        {data.description}
                    </p>
                </div>
            </div>
        </a>
    );
};
