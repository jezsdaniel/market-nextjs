/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin');

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './features/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-montserrat)'],
        display: ['var(--font-oswald)'],
      },
      colors: {
        amber: '#FF961F',
        stone: '#35363A',
        slate: '#4D5066',
        neutral: {
          50: '#FFFFFF',
          100: '#FAFAFA',
          200: '#E5E5E5',
          300: '#CCCCCC',
          500: '#999999',
          550: '#808080',
          600: '#666666',
          700: '#333333',
          900: '#1A1A1A',
        },
        green: {
          300: '#B8F4E0',
          700: '#159C6F',
        },
        red: {
          300: '#F8C9C9',
          700: '#B41818',
        },
        sky: {
          300: '#BAD9ED',
          700: '#2A6083',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.no-scrollbars': {
          /* IE and Edge */
          '-ms-overflow-style': 'none',
          /* Firefox */
          'scrollbar-width': 'none',
          /* Safari and Chrome */
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        },
      });
    }),
  ],
};
