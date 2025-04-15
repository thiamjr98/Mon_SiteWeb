module.exports = {
  content: ['./src/**/*.{html,js}', "/index.html"],
  theme: {
    extend: {
      colors: {
        primary: '#6366f1',
        secondary: '#3b82f6',
        dark: '#0f172a'
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography')
  ]
}