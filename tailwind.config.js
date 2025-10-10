/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,ts,scss}",       // ✅ catches everything inside src
    "./src/app/**/*.{html,ts,scss}",   // ✅ explicitly include all Angular components
    "./src/app/auth/**/*.{html,ts,scss}" // ✅ ensure Tailwind sees your login component
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

