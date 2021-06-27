module.exports = {
  future: {},
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors:{
        "vibrant-blue": "#00008b",
        "vibrant-blue-dk": "#01015e",
        "vibrant-purple":"#7e20bc",
        "vibrant-purple-dk":"#68199e",
        "txt-white": "rgb(249, 252, 255)"
      }
    },
  },

  variants: {},
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
  ]
}