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
        "bg-100": "hsl(var(--clr-bg-light))",
        primary: "hsl(var(--clr-primary))",
        primaryDark: "hsl(var(--clr-primary-dark))",
      },
      fontFamily: {
        body: ["Poppins"],
      },
      transitionTimingFunction: {
        "in-expo": "cubic-bezier(.8,.13,.83,.67)",
        "out-expo": "cubic-bezier(.95,.95,.46,.98)",
      },
      keyframes: {
        moveDown: {
          "0%": {
            transform: "translateY(-75vh)",
          },
          "100%": {
            transform: "translateY(0)",
          },
        },
        "preloader-out": {
          "0%": {
            right: "0",
          },
          "100%": {
            right: "-100%",
          },
        },
        "preloader-in": {
          "0%": {
            left: "-100%",
          },
          "100%": {
            left: "0",
          },
        },
      },
      animation: {
        moveDown: "moveDown 3s ease-out",
        preloaderIn: "preloader-in 700ms ease-out",
        preloaderOut: "preloader-out 700ms ease-out",
      },
    },
  },
  plugins: [],
};
