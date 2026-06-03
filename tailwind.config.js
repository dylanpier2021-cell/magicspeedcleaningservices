/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./landing-1/**/*.html", "./landing-2/**/*.html", "./landing-3/**/*.html"],
  theme: {
    extend: {
      colors: {
        // Corporate yellow + light blue palette, light background, deep-navy ink
        brand: {
          primary: "#F5B400", // confident corporate yellow/gold
          "primary-dark": "#C98D00",
          "primary-light": "#FFD968",
          secondary: "#2F90DB", // light blue accent
          "secondary-dark": "#1C6CAC",
          "secondary-light": "#D6EBFA",
          bg: "#FFFFFF", // chosen light background
          surface: "#F5F8FB", // soft section tint
          ink: "#0F2A43", // high-contrast primary text
          muted: "#566B7E", // secondary text
        },
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "-apple-system", "Segoe UI", "Roboto", "Arial", "sans-serif"],
      },
      maxWidth: {
        content: "1180px",
      },
      boxShadow: {
        card: "0 1px 2px rgba(15,42,67,0.04), 0 12px 30px -12px rgba(15,42,67,0.18)",
        lift: "0 18px 50px -18px rgba(15,42,67,0.32)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
