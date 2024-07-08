/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {      
      colors: {
        customBlue: '#030022',
        customBlue100:'#808CF5',
        customPurple300:'#512885',
        customPurple100:'#9F53FF'
      },
    },
  },
  plugins: [],
};
