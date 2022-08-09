/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{vue,js}"],
  prefix: 'tw-',
  theme: {
    extend: {},
    fontFamily: {
      display: ['-apple-system', 'BlinkMacSystemFont', 'Roboto', 'sans-serif']
    },
    colors: {
      primary: '#CBB04F',
      secondary: '#F5F5FA',
      white: '#FFFFFF',
      dark: '#333144',
      black: '#000000',
      gray800: '#F2F2F2',
      gray900: '#A6A6A6',
      negative: '#C71F1F',
      positive: '#23C71F'
    }
  },
  plugins: [],
}
