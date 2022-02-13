import Layout from '../components/layout';
import React from 'react';

export default function About() {
    return (
        <Layout
            title='A Bit About Me - Roewyn Umayam'
            description='Learn more about radical ride of martial arts, clowning around, and my turn from business student to a frontend developer.'
        >
            <section className='mt-10 flex  flex-col  m-5 justify-center max-w-2xl'>
                <h1 className='text-3xl font-bold dark:text-gray-100 text-gray-900  '>
                    Just A Guy Who Codes
                </h1>
                <p className='text-gray-600 dark:text-gray-300 font-normal text-lg md:text-xl my-5'>
                    I graduated from the University of Washington Bothell Spring
                    2021 and fell in love with coding in my final year. I was a
                    business student studying in MIS but I shifted my focus from
                    project management to web development. I took programming
                    classes before but never fell in love until I worked on
                    websites for college projects and clients. From my past
                    projects, I was so shocked to see what was possible to make
                    with your wits, a keyboard, and Google. The possibilities
                    was enough for me to make a full shift to the developer
                    world.
                </p>

                <p className='text-gray-600 dark:text-gray-300 font-normal text-lg md:text-xl my-5'>
                    I&apos;m looking for opportunities as a full-time front-end
                    developer or developer advocate at companies with meaningful
                    products. I want to use my web development skills to better
                    the lives of under represented communities and my fellow
                    developers. I&apos;ve built projects that emphasize
                    community and I loved to help other developers out along
                    their journey. If you want someone to speak for you
                    developers or empower your community with web technologies,
                    I&apos;m always{' '}
                    <a href='/contact' className='link'>
                        open to chat
                    </a>
                    !
                </p>
            </section>

            <section className='flex  flex-col  m-5 justify-center max-w-2xl'>
                <h2 className='text-3xl font-bold dark:text-gray-100 text-gray-900  '>
                    What I&apos;m Up To
                </h2>
                <p className='text-gray-600 dark:text-gray-300 font-normal text-lg md:text-xl my-5'>
                    After spending the past 5 months expanding on my previous
                    college{' '}
                    <a
                        href='https://sprout-learning.vercel.app/'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='link'
                    >
                        financial literacy project
                    </a>{' '}
                    with{' '}
                    <a
                        className='link'
                        rel='noopener noreferrer'
                        href='https://www.linkedin.com/company/working-for-wealth/'
                        target='_blank '
                    >
                        Working for Wealth
                    </a>{' '}
                    and it&apos;s transformation to{' '}
                    <a
                        href='https://sproutlearning.us'
                        rel='noopener noreferrer'
                        target='_blank '
                        className='link'
                    >
                        Sprout Learning
                    </a>
                    , I have decided to keep the project independent in pursuit
                    of an open source solution with collaborations with
                    educational organizations. As that is being developed
                    further, I will actively contributing to open source and
                    assisting the developer community when I can.
                </p>
                <p className='text-gray-600 dark:text-gray-300 font-normal text-lg md:text-xl my-5'>
                    Coding is not the only big passion that takes up my time.
                    I&apos;m an active{' '}
                    <a
                        href='https://www.instagram.com/uwta_tkd_lynnwood/'
                        rel='noopener noreferrer'
                        target='_blank'
                        className='link'
                    >
                        Taekwondo Instructor
                    </a>{' '}
                    and have been training since I was 8. I love to help my
                    peers and students progress in their skills while also
                    acting as a positive role model.
                </p>
                <p className='text-gray-600 dark:text-gray-300 font-normal text-lg md:text-xl my-5'>
                    Outside of Taekwondo, I&apos;m a huge nerd for all things
                    comics, sci-fi, and fantasy. I spend my time either coding,
                    teaching, or taking in whatever fresh nerdy content is out
                    there!
                </p>
            </section>

            {/** Recent Activities */}
        </Layout>
    );
}
