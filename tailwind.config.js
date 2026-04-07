/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      /**
       * Custom colour palette for the portfolio.  The site uses a very light
       * neutral base for backgrounds, a soft blue primary for interactive
       * elements, and a handful of highlight colours to draw attention in
       * charts and KPI widgets.  Feel free to adjust these values to suit
       * your personal brand.
       */
      colors: {
        // Base background colour used for the body and panels.
        base: '#f8fafc',
        // Card background colour for widgets and sections.
        card: '#ffffff',
        // Primary accent colour.  This controls links, buttons and charts.
        primary: {
          DEFAULT: '#2563eb',
        },
        // Highlight colours used in charts and sparklines.
        highlight: {
          yellow: '#fbbf24',
          red: '#f87171',
          green: '#34d399',
        },
      },
      /**
       * Font family definitions.  Poppins provides a clean, modern feel.
       */
      fontFamily: {
        sans: ['Poppins', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};