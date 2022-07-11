/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "hsl(var(--clr-bg))",
        bgLight: "hsl(var(--clr-bg-light))",
        primary: "hsl(var(--clr-primary))",
        primaryDark: "hsl(var(--clr-primar-dark))",
      },
      fontFamily: {
        text: ["Poppins"],
      },
      transitionTimingFunction: {
        "in-expo": "cubic-bezier(.8,.13,.83,.67)",
        "out-expo": "cubic-bezier(.95,.95,.46,.98)",
      },
    },
  },
  plugins: [],
};
