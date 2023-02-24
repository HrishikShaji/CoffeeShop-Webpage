/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        primary: "url('/assets/7.jpg')",
        about: "url('/assets/6.jpg')",
        menu: "url('/assets/3.jpg')",
        checkout: "url('/assets/5.jpg')",
      },
      colors: {
        "primary-coffee": "#483434",
        "primary-brown": "#6B4F4F",
        "secondary-coffee": "#EED6C4",
        "secondary-brown": "#FFF3E4",
      },
    },
  },
  plugins: [],
};
