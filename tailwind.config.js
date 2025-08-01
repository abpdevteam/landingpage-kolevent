/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f6ff',
          100: '#e0edff',
          200: '#bae1ff',
          300: '#7cc8ff',
          400: '#36c0fa',
          500: '#0ca5e8',
          600: '#0082c4',
          700: '#00669f',
          800: '#055783',
          900: '#0a4a6d',
          950: '#062f48',
        },
        purple: {
          50: '#f5f2ff',
          100: '#ede9ff',
          200: '#ddd6ff',
          300: '#c4b6ff',
          400: '#a58cff',
          500: '#8560ff',
          600: '#7938ff',
          700: '#6b21ff',
          800: '#5915e8',
          900: '#4a12c4',
          950: '#2c0785',
        },
        dark: {
          900: '#09005d',
          800: '#1a0f91',
          700: '#2d1b69',
          600: '#402540',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
