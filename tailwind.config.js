/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        
      },
      colors: [
        {
          'primary': '#f97316',
          'secondary': '#64748b',
          'accent': '#facc15',
          'neutral': '#3d4451',
          'base-100': '#ffffff',
          'info': '#3abff8',
          'success': '#36d399',
          'warning': '#fbbf24',
          'error': '#f87272',
        }
      ]
    },
  },
  plugins: [],
}

