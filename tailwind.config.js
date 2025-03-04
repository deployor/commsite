/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        accent: {
          9: '#CC0000', // Soviet red
          11: '#FFCC00', // Gold
          12: '#FFFFFF', // White
        },
      },
      animation: {
        shake: 'shake 5s infinite',
        float: 'float 6s ease-in-out infinite',
        glow: 'glow 2s ease-in-out infinite',
        grow: 'grow 2s ease-in-out infinite',
        slideLeft: 'slideLeft 0.5s ease-out forwards',
        slideRight: 'slideRight 0.5s ease-out forwards',
        fadeIn: 'fadeIn 0.5s ease-out forwards',
        pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        shake: {
          '0%, 100%': { transform: 'translateX(0)' },
          '2%, 6%': { transform: 'translateX(-1px)' },
          '4%, 8%': { transform: 'translateX(1px)' },
          '10%': { transform: 'translateX(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%, 100%': { textShadow: '3px 3px 0px #CC0000' },
          '50%': { textShadow: '3px 3px 20px #CC0000' },
        },
        grow: {
          '0%, 100%': { transform: 'scaleX(1)' },
          '50%': { transform: 'scaleX(1.2)' },
        },
      },
    },
  },
  plugins: [],
}