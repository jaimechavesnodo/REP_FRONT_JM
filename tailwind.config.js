/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    colors: {
      'white': '#ffffff',
      'black': '#000000',
      'blue-primary': '#006894',
      'blue-secondary': '#006f9b',
      'gray-primary': '#b0b7bc',
      'gray-secondary': '#6a737b',
      'red': '#f50002',
      'transparent': 'transparent'
    },
    fontFamily: {
      'mp-regular': ['myriad_proregular'],
      'mp-bold': ['myriad_probold'],
      'mp-light': ['myriad_prolight'],
      'mp-bold-condensed': ['myriad_probold_condensed'],
      'mp-prosemibold': ['myriad_prosemibold'],
      'mp-condensed': ['myriad_procondensed']
    },
    borderWidth: {
      DEFAULT: '1px',
      '0': '0',
      '2': '2px',
      '3': '3px',
      '4': '4px',
      '6': '6px',
      '8': '8px',
      '30': '30px',
    },
    extend: {
      backgroundImage: {
        'fondo-boton': "url('/assets/images/fondo-boton.png')",
      },
      boxShadow: {
        '3xl': '5px 5px 7px rgb(0 0 0 / 50%)',
      }
    },
  },
  plugins: [],
}

