/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},

    colors: {
      'primary-white': '#fff',
      'primary-new-blue': '#003DA0',
      'primary-light-blue': '#0375f3',
      'primary-gray': '#333333',
      'icon-triangle': 'transparent transparent #fff transparent',
      'icon-sale': 'transparent #eba81d transparent #eba81d'
    }
  },
  plugins: []
}
