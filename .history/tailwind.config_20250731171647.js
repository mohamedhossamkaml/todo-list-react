/** @type {import('tailwindcss').Config} */

export default {
  darkMode: 'class', // ✅ تفعيل الدارك مود بالـ class
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        deepMint_50: '#fcdc73',
        deepMint_100: '#d8c99b',
        deepMint_200: '#efd7cf',
        deepMint_300: '#f1dafb',
        deepMint_400: '#193948',
        deepMint_500: '#e76268', // ✅ شيل المسافة الزائدة
        deepMint_600: '#334640',
        deepMint_700: '#013333',
        deepMint_800: '#061e1f',
        deepMint_900: '#021616',
        primary: "#1D9BF0",
        dark: "#000000",
      },
    },
  },
  plugins: [],
}
