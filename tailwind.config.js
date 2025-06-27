module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'washgreen': {
          100: '#F5FDCA',
          200: '#E9FB96',
          300: '#D6F461',
          400: '#C1EA3A',
          500: '#a4dd00',
          600: '#87BE00',
          700: '#6D9F00',
          800: '#548000',
          900: '#436A00',
        },
        'washpink': {
          100: '#FED5D7',
          200: '#FEACB8',
          300: '#FE83A1',
          400: '#FD6499',
          500: '#fc318c',
          600: '#D82386',
          700: '#B5187E',
          800: '#920F71',
          900: '#780967',
        }
      },
      fontFamily: {
        'plus-jakarta': ['"Plus Jakarta Sans"', 'sans-serif']
      }
    },
  },
  plugins: [],
}