/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        "md-800": "800px",
        "md-900": "900px",
      },

      colors: {
        primaryBgColor: "var(--primary-bg-color)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
