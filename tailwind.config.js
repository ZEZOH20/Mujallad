/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {

    extend: {
      colors: {
        'mujallad-cream': '#F5F3F0',
        'mujallad-charcoal': '#2d2d2d',
        'mujallad-white': '#fff',
        'mujallad-beige': '#E8E4DF',
        'mujallad-sage': '#A8B5A0'
      }
    },
  },
  plugins: [],
}
