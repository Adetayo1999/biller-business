/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        primarybg:
          "linear-gradient(135deg, #10462E 0%, #068568 54.17%, #01ACA3 100%)",
        btnbg:
          "linear-gradient(135deg, #10462E 0%, #068568 54.17%, #01ACA3 100%)",
      },
      colors: {
        primary: "#068568",
      },
      fontFamily: {
        raleway: "var(--font-raleway)",
      },
    },
  },
  plugins: [],
};
