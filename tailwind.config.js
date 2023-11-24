/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        web:"web",
      },
      backgroundImage: {
        'hero-bg': "url('..//images/61f11c12ccb99e089078fc33_Main Image BG.png')",
      },
      keyframes: {
        'shadow-photo': {
          '0%, 100%': { boxShadow: '0 0 50px 22px' },
          '50%': { boxShadow: '0 0 50px 4px' },
        },
      },
      animation: {
        shadow: 'shadow-photo 3s linear infinite',
      },
    },
  },
  plugins: [],
}
