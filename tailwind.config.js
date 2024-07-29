/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
    // add paths to your other files as needed
  ],
  theme: {
    extend: {
      backdropBlur: {
        'md': '10px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'), // Ensure this line is included
  ],
}