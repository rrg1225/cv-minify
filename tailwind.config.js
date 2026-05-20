/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'resume-green': '#1a5235',
        'resume-blue': '#1e3a8a',
      },
      fontFamily: {
        serif: ['Times New Roman', 'SimSun', 'Georgia', 'serif'],
      }
    },
  },
  plugins: [],
}