/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        orange: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#f97316',
          600: '#ea580c',
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
        },
      },
      animation: {
        'bounce-right': 'bounce-right 1s infinite',
        'spin-slow': 'spin 8s linear infinite',
        'bounce-subtle': 'bounce-subtle 2s ease-in-out infinite',
        'sparkle-1': 'sparkle 1.5s ease-in-out infinite',
        'sparkle-2': 'sparkle 1.5s ease-in-out 0.2s infinite',
        'sparkle-3': 'sparkle 1.5s ease-in-out 0.4s infinite',
        gradient: 'gradient 8s linear infinite',
        float1: 'float1 4s ease-in-out infinite',
        float2: 'float2 6s ease-in-out infinite',
        float3: 'float3 5s ease-in-out infinite',
        'fade-in-up': 'fade-in-up 0.8s ease-out',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        'bounce-right': {
          '0%, 100%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(-20px)' }
        },
        'bounce-subtle': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-4px)' }
        },
        'sparkle': {
          '0%': { transform: 'scale(0) rotate(0deg)', opacity: 0 },
          '50%': { transform: 'scale(1) rotate(180deg)', opacity: 1 },
          '100%': { transform: 'scale(0) rotate(360deg)', opacity: 0 }
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        float1: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '50%': { transform: 'translate(10px, -10px) scale(1.5)' }
        },
        float2: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1.5)' },
          '50%': { transform: 'translate(-10px, -10px) scale(1)' }
        },
        float3: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '50%': { transform: 'translate(10px, 10px) scale(1.5)' }
        },
        'fade-in-up': {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          },
        },
        'float': {
          '0%, 100%': {
            transform: 'translateY(0)'
          },
          '50%': {
            transform: 'translateY(-10px)'
          },
        }
      },
      perspective: {
        '1000': '1000px',
      },
      screens: {
        'xs': '475px',
      },
      zIndex: {
        '50': '50',
        '100': '100',
      },
    },
  },
  plugins: [],
};
