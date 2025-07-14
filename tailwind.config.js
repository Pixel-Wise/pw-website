import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        inter: ['var(--font-inter)', 'sans-serif'],
        'uncut-sans': ['var(--font-uncut-sans)', 'sans-serif'],
      },
      colors:{
        primary: {
          50: '#eef7ff',
          100: '#cce6ff',
          200: '#7db2ff',
          300: '#cbe2ef',
          400: '#21406d',
          500: '#21406d',
          600: '#1a3356',
          700: '#142640',
          800: '#0e1a2b',
          900: '#070d15',
        },
        light: {
          bg: '#ffffff',
          surface: '#eef7ff',
          accent: '#cce6ff',
          text: '#21406d',
          muted: '#7db2ff',
        },
        dark: {
          bg: '#21406d',
          surface: '#1a3356',
          accent: '#7db2ff',
          text: '#ffffff',
          muted: '#cbe2ef',
        },
      },

      fontSize: {
        xs: ['0.75rem', { lineHeight: '1.5' }],
        sm: ['0.875rem', { lineHeight: '1.5715' }],
        base: ['1rem', { lineHeight: '1.5', letterSpacing: '-0.01em' }],
        lg: ['1.125rem', { lineHeight: '1.5', letterSpacing: '-0.01em' }],
        xl: ['1.25rem', { lineHeight: '1.5', letterSpacing: '-0.01em' }],
        '2xl': ['1.5rem', { lineHeight: '1.415', letterSpacing: '-0.01em' }],
        '3xl': ['1.875rem', { lineHeight: '1.333', letterSpacing: '-0.01em' }],
        '4xl': ['2.25rem', { lineHeight: '1.277', letterSpacing: '-0.01em' }],
        '5xl': ['3rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        '6xl': ['3.75rem', { lineHeight: '1.166', letterSpacing: '-0.01em' }],
        '7xl': ['5rem', { lineHeight: '1', letterSpacing: '-0.01em' }],
      },
      letterSpacing: {                       
        tighter: '-0.02em',
        tight: '-0.01em',
        normal: '0',
        wide: '0.01em',
        wider: '0.02em',
        widest: '0.4em',
      },
    },
  },
  plugins: [forms],
};
