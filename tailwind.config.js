/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    screens:{
    sm: "340px",
    md: "540px",
    lg: "768px",
    xl: "1180px"
    },
    extend: {},
    container: {
      center: true,
      padding: {
        default: "12px",
        md: "32px"
      }
    }
  },
  plugins: [],
}