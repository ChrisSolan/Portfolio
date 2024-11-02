/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      keyframes: {
        bounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-0.25rem)' },
        },
      },
      animation: {
        bounce: 'bounce 1s infinite', // Adjust duration and iteration as needed
      },

      fontFamily: {
        calibre: ['Calibre', 'sans-serif']
      },
      boxShadow: {
        'bottomRight': '8px 8px 10px rgba(0, 0, 0, 0.1)',  // Shadow at the bottom and the right side
        'bottomLeft': '-8px 8px 10px rgba(0, 0, 0, 0.1)'
      },
    },
  },
  plugins: [],
}

