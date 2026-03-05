/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#9E7FFF',
        secondary: '#38bdf8',
        accent: '#f472b6',
        background: '#171717',
        surface: '#262626',
        text: '#FFFFFF',
        textSecondary: '#A3A3A3',
        border: '#2F2F2F',
        glass: {
          panel: 'rgba(38, 38, 38, 0.7)',
          border: 'rgba(255, 255, 255, 0.1)',
        }
      },
      boxShadow: {
        glow: '0 0 20px rgba(158, 127, 255, 0.3)',
      }
    },
  },
  plugins: [],
};
