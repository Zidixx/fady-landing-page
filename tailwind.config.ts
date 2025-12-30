import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-uber-move)", "system-ui", "-apple-system", "sans-serif"],
      },
      fontWeight: {
        medium: "500",
        bold: "700",
      },
      colors: {
        "fady-purple": "#BC31FC",
        "fady-purple-light": "#E4C8FF",
        "fady-purple-dark": "#5B1899",
        "fady-purple-50": "#F5EBFF",
        "fady-purple-100": "#E4C8FF",
        "fady-purple-200": "#D4A5FF",
        "fady-purple-300": "#C882FF",
        "fady-purple-400": "#BC31FC",
        "fady-purple-500": "#A01ED9",
        "fady-purple-600": "#7B1AB6",
        "fady-purple-700": "#5B1899",
        "fady-purple-800": "#3D0F66",
        "black-soft": "#0F0F14",
        "gray-text": "#6B6B7A",
        "gray-light": "#F6F6FA",
      },
    },
  },
  plugins: [],
};
export default config;

