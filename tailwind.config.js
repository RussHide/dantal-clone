/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'leftLight': "url('/src/images/leftLightBg.png')",
        'teeth': "url('/src/images/teethBg.png')",
        'tooth': "url('/src/images/toothBg.png')",
        'hero': "url('/src/images/heroBg.png')",
        'middleLight': "url('/src/images/middleLight.png')",
        'allLight': "url('/src/images/allLight.png')",
      },
    },
  },
  plugins: [],
}

