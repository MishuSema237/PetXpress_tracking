/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(40px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        marquee: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-out forwards',
        slideUp: 'slideUp 0.5s ease-out forwards',
        marquee: 'marquee 20s linear infinite',
        float: 'float 3s ease-in-out infinite',
      },
      colors: {
        primary: {
          blue: '#3A86FF',
          purple: '#8338EC',
        },
        accent: {
          teal: '#48CAE4',
          lavender: '#D0BFFF',
        },
        neutral: {
          white: '#FFFFFF',
          slate: '#343A40',
        },
      },
    },
  },
  plugins: [],
} 