module.exports = {
  jit: true,
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#7D72C3",
        "primary-dark": "#5141B4",
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme("colors.gray.600"),
            p: {
              color: theme("colors.gray.600"),
            },
            a: {
              color: theme("colors.purple.500"),
              "&:hover": {
                color: theme("colors.purple.600"),
              },
              code: { color: theme("colors.blue.400") },
            },
            //"h2,h3,h4": {},
            thead: {
              borderBottomColor: theme("colors.gray.200"),
            },
            code: { color: theme("colors.pink.500") },
            "blockquote p:first-of-type::before": false,
            "blockquote p:last-of-type::after": false,
          },
        },
        dark: {
          css: {
            p: {
              color: theme("colors.gray.300"),
            },
            color: theme("colors.gray.300"),
            a: {
              color: theme("colors.purple.400"),
              "&:hover": {
                color: theme("colors.purple.500"),
              },
              code: { color: theme("colors.purple.400") },
            },
            blockquote: {
              borderLeftColor: theme("colors.gray.700"),
              color: theme("colors.gray.300"),
            },
            "h2,h3,h4": {
              color: theme("colors.gray.200"),
            },
            hr: { borderColor: theme("colors.gray.700") },
            ol: {
              li: {
                color: theme("colors.gray.200"),
              },
            },
            ul: {
              li: {
                color: theme("colors.gray.200"),
              },
            },
            strong: { color: theme("colors.gray.100") },
            bold: { color: theme("colors.gray.100") },
            thead: {
              color: theme("colors.gray.100"),
              borderBottomColor: theme("colors.gray.600"),
            },
            tbody: {
              tr: {
                borderBottomColor: theme("colors.gray.700"),
              },
            },
          },
        },
      }),
    },
  },

  variants: {
    typography: ["dark"],
  },
  plugins: [require("@tailwindcss/typography")],
};
