/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html", // لو عندك ملف HTML ثابت
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1D9BF0", // لون شعار X
        dark: "#000000",     // اللون الأسود
      },
    },
  },
  plugins: [],
}
