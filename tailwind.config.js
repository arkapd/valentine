/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        float: 'float 3s ease-in-out infinite',
        run: 'run 2s ease-in-out forwards',
        pop: 'pop 0.3s ease-out forwards',
      },
    },
  },
  plugins: [],
};