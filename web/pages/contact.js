import Layout from '../components/layout';
import React from 'react';
import { useRouter } from 'next/router';

export default function Contact() {
    const router = useRouter();
    const confirmationScreenVisible =
        router.query.success && router.query.success === 'true';
    const formVisible = !confirmationScreenVisible;

    const ConfirmationMessage = (
        <React.Fragment>
            <p className='max-w-2xl m-5 md:m-0 text-gray-600 dark:text-gray-300 font-normal text-lg md:text-xl my-5'>
                Thank you for submitting this form. I should get back to you
                within 24-48 hours.
            </p>
            <div className='max-w-2xl justify-center flex my-3'>
                <button
                    className='btn font-medium focus:ring focus:ring-primary-dark'
                    onClick={() =>
                        router.replace('/contact', undefined, { shallow: true })
                    }
                >
                    Submit Another Response
                </button>
            </div>
        </React.Fragment>
    );
    return (
        <Layout
            title='Say Hello - Roewyn Umayam'
            description='You can chat with me about collaborations, opportunities, memes, or martial arts.'
        >
            <section className='max-w-2xl m-5 md:m-0'>
                <h1 className='text-3xl font-bold dark:text-gray-100 text-gray-900  '>
                    Up For A Chat?
                </h1>
                <p className='text-gray-600 dark:text-gray-300 font-normal text-lg md:text-xl my-5'>
                    If you&apos;re curious about my work, would like a
                    developer, or just an excuse for coffee, feel free to reach
                    out to me on my socials or just shoot me an email here.
                </p>
            </section>
            {formVisible ? (
                <form
                    className='flex-1 dark:bg-gray-900 bg-gray-200 w-full p-6 rounded  
          border-gray-400 border-2 dark:border-gray-700 self-center my-4'
                    name='contact'
                    method='POST'
                    data-netlify='true'
                    data-netlify-honeypot='bot-field'
                    data-splitbee-event='Contact Form'
                    action='contact/?success=true'
                >
                    <label className='hidden' htmlFor='bot-field'>
                        Don’t fill this out if you’re human:
                        <input name='bot-field' id='bot-field' />
                    </label>
                    <input type='hidden' name='form-name' value='contact' />
                    <div className='flex flex-wrap  mb-6'>
                        <div className='w-full md:w-1/2 px-3 md:pr-3 mb-6 md:mb-0'>
                            <label
                                htmlFor='name'
                                className='block uppercase  text-gray-700 dark:text-gray-300 text-xs font-bold mb-2'
                            >
                                Name
                            </label>
                            <input
                                required
                                className='appearance-none block w-full bg-gray-100 dark:bg-gray-200 text-gray-700 
                border border-gray-200 rounded py-3 px-4 mb-3 leading-tight 
                focus:outline-none focus:ring focus:ring-primary-dark dark:text-gray-300'
                                id='name'
                                type='text'
                                placeholder='Jane'
                                name='name'
                            />
                        </div>
                        <div className='w-full md:w-1/2 px-3'>
                            <label
                                className='block uppercase tracking-wide text-gray-700 text-xs 
              font-bold mb-2 dark:text-gray-300 '
                                htmlFor='subject'
                            >
                                Subject
                            </label>
                            <input
                                required
                                className='appearance-none block w-full bg-gray-100 dark:bg-gray-200 text-gray-700 
                border border-gray-200 rounded py-3 px-4 leading-tight 
                focus:outline-none focus:ring focus:ring-primary-dark focus:border-gray-1000'
                                id='subject'
                                type='text'
                                placeholder='Doe'
                                name='subject'
                            />
                        </div>
                    </div>
                    <div className='flex flex-wrap  mb-6'>
                        <div className='w-full px-3'>
                            <label
                                className='block uppercase tracking-wide text-gray-700 text-xs 
              font-bold mb-2 dark:text-gray-300'
                                htmlFor='email'
                            >
                                E-mail
                            </label>
                            <input
                                required
                                className='appearance-none block w-full bg-gray-100 dark:bg-gray-200 text-gray-700 
                border border-gray-200 rounded py-3 px-4 mb-3 leading-tight 
                focus:outline-none focus:ring focus:ring-primary-dark focus:border-gray-1000'
                                id='email'
                                name='email'
                                type='email'
                            />
                        </div>
                    </div>
                    <div className='flex flex-wrap  mb-6'>
                        <div className='w-full px-3'>
                            <label
                                className='block uppercase tracking-wide text-gray-700 text-xs 
              font-bold mb-2 dark:text-gray-300'
                                htmlFor='message'
                            >
                                Message
                            </label>
                            <textarea
                                required
                                name='message'
                                className=' no-resize appearance-none block w-full bg-gray-100 dark:bg-gray-200 
              text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 
              leading-tight focus:outline-none focus:ring focus:ring-primary-dark focus:border-gray-1000 h-48 resize-none'
                                id='message'
                            ></textarea>
                        </div>
                    </div>
                    <div className='px-3 mb-6'>
                        <button
                            className='btn focus:ring focus:ring-primary-dark text-gray-100 
            font-bold py-2  rounded w-full'
                            type='submit'
                        >
                            Send
                        </button>
                    </div>
                </form>
            ) : (
                ConfirmationMessage
            )}
        </Layout>
    );
}
