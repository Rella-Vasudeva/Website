/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9f0',
          100: '#dcf0dc',
          200: '#bde3be',
          300: '#92ce95',
          400: '#65b46a',
          500: '#439a49',
          600: '#337e39',
          700: '#2b632f',
          800: '#254f28',
          900: '#1f4222',
          950: '#0f2612',
        },
        secondary: {
          50: '#f6f7f2',
          100: '#e6e9dd',
          200: '#ccd3bc',
          300: '#adb895',
          400: '#8e9a71',
          500: '#717c56',
          600: '#5c6545',
          700: '#4a503a',
          800: '#3e4232',
          900: '#353a2c',
          950: '#1a1d16',
        },
        earth: {
          50: '#f9f6f2',
          100: '#f0e9df',
          200: '#e2d2bc',
          300: '#d1b695',
          400: '#be966b',
          500: '#b18153',
          600: '#9d6946',
          700: '#82523b',
          800: '#6c4535',
          900: '#5b3b2f',
          950: '#301e18',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Montserrat', 'system-ui', 'sans-serif'],
      },
      animation: {
        'grow': 'grow 0.5s ease-out',
        'fade-in': 'fade-in 0.8s ease-out',
      },
      keyframes: {
        grow: {
          '0%': { transform: 'scale(0.97)', opacity: '0.7' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};