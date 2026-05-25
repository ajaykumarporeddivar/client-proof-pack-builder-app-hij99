/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'brand-primary': '#0258FF', // A strong blue for primary actions and branding
        'brand-secondary': '#22C55E', // A vibrant green for success and secondary actions
        'neutral-light': '#F9FAFB', // A very light gray for subtle backgrounds
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
      },
    },
  },
  plugins: [],
}