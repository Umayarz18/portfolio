/* eslint-disable no-undef */
module.exports = {
    jit: true,
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                primary: '#776CBD',
                'primary-dark': '#4C36D3',
                'gray-950': '#292A2E',
            },
            typography: (theme) => ({
                DEFAULT: {
                    css: {
                        color: theme('colors.gray.600'),
                        p: {
                            color: theme('colors.gray.600'),
                        },
                        ol: {
                            li: {
                                color: theme('colors.gray.600'),
                                listStyleType: theme('listStyleType.disc'),
                            },
                        },
                        ul: {
                            li: {
                                color: theme('colors.gray.600'),
                            },
                        },
                        //"h2,h3,h4": {},
                        thead: {
                            borderBottomColor: theme('colors.gray.200'),
                        },
                    },
                },
                dark: {
                    css: {
                        p: {
                            color: theme('colors.gray.300'),
                        },
                        color: theme('colors.gray.300'),
                        blockquote: {
                            borderLeftColor: theme('colors.gray.700'),
                            color: theme('colors.gray.300'),
                        },
                        h1: {
                            color: theme('colors.white'),
                        },
                        'h2,h3,h4': {
                            color: theme('colors.gray.200'),
                        },
                        hr: { borderColor: theme('colors.gray.700') },
                        ol: {
                            li: {
                                color: theme('colors.gray.200'),
                            },
                        },
                        ul: {
                            li: {
                                color: theme('colors.gray.200'),
                            },
                        },
                        strong: { color: theme('colors.gray.100') },
                        bold: { color: theme('colors.gray.100') },
                        thead: {
                            color: theme('colors.gray.100'),
                            borderBottomColor: theme('colors.gray.600'),
                        },
                        tbody: {
                            tr: {
                                borderBottomColor: theme('colors.gray.700'),
                            },
                        },
                    },
                },
            }),
        },
    },

    variants: {
        typography: ['dark'],
    },
    plugins: [require('@tailwindcss/typography')],
};
