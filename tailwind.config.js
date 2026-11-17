// tailwind.config.js
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
        // Legacy `font-serif` usages now resolve to the brand sans for consistency
        serif: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        brand: {
          DEFAULT: '#FFD700', // Bytyqi & Partners gold – primary identity colour
          hover: '#F2C900',
          dark: '#8A6D00', // gold that is readable as text on white (AA)
          soft: '#FFF8D6',
        },
        ink: {
          DEFAULT: '#111111',
          soft: '#2B2B2B',
        },
        surface: '#F7F7F5',
      },
      maxWidth: {
        page: '72rem',
      },
      boxShadow: {
        card: '0 1px 2px rgba(17,17,17,0.04), 0 4px 16px rgba(17,17,17,0.06)',
        'card-hover': '0 2px 4px rgba(17,17,17,0.06), 0 12px 32px rgba(17,17,17,0.10)',
      },
    },
  },
  plugins: [],
};
