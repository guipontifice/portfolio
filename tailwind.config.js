/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        nunito: ['Nunito', 'cursive'],
        roboto: ['Roboto', 'sans']
      },
      screens: {
        'xxs': { 'min': '0px', 'max': '374px' },
        'xs': { 'min': '375px', 'max': '639px' },
        'sm': { 'min': '640px', 'max': '767px' },
        // => @media (min-width: 640px and max-width: 767px) { ... }

        'md': { 'min': '768px', 'max': '1023px' },
        // => @media (min-width: 768px and max-width: 1023px) { ... }

        'lg': { 'min': '1024px', 'max': '1279px' },
        // => @media (min-width: 1024px and max-width: 1279px) { ... }

        'xl': { 'min': '1280px', 'max': '1535px' },
        // => @media (min-width: 1280px and max-width: 1535px) { ... }

        '2xl': { 'min': '1536px' },
        // => @media (min-width: 1536px) { ... }
      },
    },
    colors: {
      'zinc900': '#18181b',
      'zinc800': '#212123',
      'white': '#FFFFFF',
      'gray': '#808080',
      "whiteShade": "#e5e5e5",
      "black": "#000000",
      "purple": "#7B4AE2",
      "page": "#0C0F17",
      "navbar": "#1c1031",
      "green": "#4AE291",
      // "navbar": "#1e113e"
      // rgba(123, 74, 226, 0.15
    },
  },

  plugins: [],
}
