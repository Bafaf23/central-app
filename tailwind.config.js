/** @type {import('tailwindcss').Config} */

module.exports = {
  // 'content' define los archivos donde Tailwind buscará clases
  content: ["./src/**/*.{html,js,jsx,ts,tsx}", "./index.html"],
  theme: {
    // 'extend' permite añadir o sobreescribir configuraciones predeterminadas
    extend: {
      fontFamily: {
        titulos: ["Montserrat", "Roboto"],
      },
      colors: {
        primary: "#00843D",
        acento: "#E30613",
        secondary: "#7e5bef",
      },
      spacing: {
        128: "32rem",
      },
    },
  },
};
