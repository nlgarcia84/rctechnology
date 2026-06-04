export default {
  content: ['./src/**/*.{astro,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      screens: {
        xs: '425px',
      },
      colors: {
        brand: {
          50: '#ffe5ea',
          100: '#ffb3c2',
          200: '#ff819a',
          300: '#ff4267',
          400: '#ff1d49',
          500: '#ff0435',
          600: '#cc032a',
          700: '#99021f',
          800: '#660115',
          900: '#3f010d',
          950: '#260007',
        },
      },
    },
  },
  plugins: [],
};
