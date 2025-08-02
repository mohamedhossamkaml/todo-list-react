/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html", // لو عندك ملف HTML ثابت
  ],
  theme: {
    extend: {
      colors: {
        deepMint_50: '#fcdc73',
        deepMint_100: '#d8c99b',
        deepMint_200: '#efd7cf',
        deepMint_300: '#f1dafb',
        deepMint_400: '#193948',
        deepMint_500: ' #e76268',
        deepMint_600: '#334640',
        deepMint_700: '#013333',
        deepMint_800: '#061e1f',
        deepMint_900: '#021616',
        primary: "#1D9BF0", // لون شعار X
        dark: "#000000",     // اللون الأسود
      },
    },
  },
  plugins: [],
}
