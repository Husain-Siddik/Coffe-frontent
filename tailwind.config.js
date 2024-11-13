/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // 'Rancho': ['nunito', 'sans-serif'],
        'MyFont': ['"My Font"', 'Rancho'] // Ensure fonts with spaces have " " surrounding it.
      },
    },
  },

  plugins: [
    require('daisyui'),
  ],
}

