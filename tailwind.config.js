/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,ts}',
  ],
  theme: {
    extend: {
      fontFamily: {
        pokemon: ['Pokemon', 'sans-serif'],
        pokemonTitle: ['PokemonTitle', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

