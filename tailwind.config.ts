import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#8B0000',
          50: '#FFE5E5',
          100: '#FFCCCC',
          200: '#FF9999',
          300: '#FF6666',
          400: '#FF3333',
          500: '#8B0000',
          600: '#A00000',
          700: '#700000',
          800: '#5C0000',
          900: '#470000',
        },
        secondary: {
          DEFAULT: '#FFC300',
          50: '#FFF9E5',
          100: '#FFF3CC',
          200: '#FFE799',
          300: '#FFDB66',
          400: '#FFCF33',
          500: '#FFC300',
          600: '#E6B000',
          700: '#CC9D00',
          800: '#B38A00',
          900: '#997700',
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
