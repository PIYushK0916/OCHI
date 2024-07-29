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
      fontFamily: {
        'neue-montreal': ['Neue_Montreal', 'sans-serif'],
        'founders-grotesk': ['Test_Founders_Grotesk_X_Condensed', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'), // Ensure this line is included
  ],
}
