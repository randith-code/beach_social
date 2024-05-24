/** @type {import('tailwindcss').Config} */
const { Roboto, Anton } = require("next/font/google");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        main: "#31DAEA",
        gradiantLftBtm: "#00B6FF",
        gradiantRghtTop: "#2ED8EB",
        valuesBg: "rgba(0, 182, 255, 0.07)",
        lightBlue: "#DCF5FF",
        backgroundBlur: "rgba(255, 255, 255, 0.6)",
        balckMask: "rgba(0, 0, 0, 0.3)",
      },
      fontFamily: {
        Roboto: ["var(--font-roboto)"],
        Anton: ["var(--font-anton)"],
      },
      fontSize: {
        xxs: "0.5rem",
      },
      height: {
        "25vh": "25vh",
      },
      zIndex: {
        100: "10000",
      },
      backgroundSize: {
        "120%": "120%",
        "100%": "100%",
        "80%": "80%",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".no-scrollbar::-webkit-sccrollbar": {
          display: "none",
        },
        ".no-scrollbar": {
          "-ms-overflow-style": "none",
          "scrollbar-width": "none",
        },
      };

      addUtilities(newUtilities);
    },
    require("tailwindcss-animated"),
  ],
};
