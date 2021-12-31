module.exports = {
  purge: ["./src/**/*.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'xxs': '50px',
      // => @media (min-width: 450px) { ... }

      'xs': '450px',
      // => @media (min-width: 450px) { ... }
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

    },
    colors: {
      beige: '#fff8dc',
      negro: '#101010',
      salmon: '#f98c8c',
      gris: '#212529',
      amarillo: '#f6e05e',
      gris2: '#272822',
      azul: '#4481D8',
      blanco: '#F8F9FB',
      rojo: '#F06451',
      rojo2: '#F62020',
      gris3: '#F3ECEB',
      gris4: '#999898',
      verde: '#198754',
      verde2: '#12643E',
      verde3: '#0E5032',
      gris5: '#ADADAD'
    },


    fontFamily: {
      nunito: ['Nunito', 'sans-serif'],
      leck: ['Leckerli One', 'cursive'],
      undog: ['Underdog', 'sans-serif']
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
