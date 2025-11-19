/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Shippori Mincho"', '"Noto Serif JP"', 'serif'],
        sans: ['"Inter"', 'sans-serif'],
      },
      colors: {
        sumi: '#0f0f0f',
        charcoal: '#1c1c1c',
        yuki: '#f4f4f6',
        paper: '#e8e6e1',
        gold: '#a89f91',
        vermilion: '#cc3300',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      cursor: {
        none: 'none',
      }
    }
  },
  plugins: [],
}
