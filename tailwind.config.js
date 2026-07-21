/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        chartreuse: {
          50: '#FCFFE6',
          100: '#F6FFBF',
          200: '#EEFF80',
          300: '#DFFB40',
          400: '#D4ED2E',
          500: '#C8E600',
          600: '#A5BF00',
          700: '#7C9000',
          800: '#536000',
          900: '#2A3000',
        },
        surface: {
          50: '#FAFAFA',
          100: '#F0F0F0',
          200: '#DEDEDE',
          300: '#BEBEBE',
          400: '#9E9E9E',
          500: '#7E7E7E',
          600: '#5E5E5E',
          700: '#3E3E3E',
          800: '#2A2A2A',
          900: '#1A1A1A',
          950: '#0F0F0F',
        },
        success: {
          400: '#4ADE80',
          500: '#22C55E',
          600: '#16A34A',
        },
        warning: {
          400: '#FBBF24',
          500: '#F59E0B',
          600: '#D97706',
        },
        error: {
          400: '#F87171',
          500: '#EF4444',
          600: '#DC2626',
        },
      },
      fontFamily: {
        display: ['Space Grotesk', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
        body: ['Inter', 'sans-serif'],
      },
      animation: {
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
        'border-glow': 'border-glow 4s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'slide-up': 'slide-up 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
        'slide-in-right': 'slide-in-right 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
        'fade-in': 'fade-in 0.3s ease-out',
        'shimmer': 'shimmer 2s linear infinite',
        'spin-slow': 'spin 8s linear infinite',
        'count-up': 'count-up 1s ease-out',
      },
      keyframes: {
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 15px rgba(200, 230, 0, 0.2), inset 0 0 15px rgba(200, 230, 0, 0.04)' },
          '50%': { boxShadow: '0 0 35px rgba(200, 230, 0, 0.4), inset 0 0 30px rgba(200, 230, 0, 0.08)' },
        },
        'border-glow': {
          '0%, 100%': { borderColor: 'rgba(200, 230, 0, 0.2)' },
          '50%': { borderColor: 'rgba(200, 230, 0, 0.5)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        'slide-up': {
          '0%': { transform: 'translateY(12px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'slide-in-right': {
          '0%': { transform: 'translateX(100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'shimmer': {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'count-up': {
          '0%': { opacity: '0', transform: 'translateY(4px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'ring-pulse': {
          '0%': { transform: 'scale(1)', opacity: '0.8' },
          '100%': { transform: 'scale(3)', opacity: '0' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(var(--tw-gradient-stops))',
        'shimmer-gradient': 'linear-gradient(90deg, transparent 0%, rgba(200, 230, 0, 0.04) 50%, transparent 100%)',
      },
      backdropBlur: {
        '2xl': '40px',
        '3xl': '64px',
      },
      boxShadow: {
        'glass': '0 8px 32px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.15)',
        'glass-lg': '0 12px 48px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
        'glass-xl': '0 20px 60px rgba(0, 0, 0, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.25)',
        'glow-sm': '0 0 15px rgba(200, 230, 0, 0.25)',
        'glow-md': '0 0 30px rgba(200, 230, 0, 0.35)',
        'glow-lg': '0 0 50px rgba(200, 230, 0, 0.45)',
        'inner-glow': 'inset 0 1px 0 rgba(255, 255, 255, 0.15), inset 0 0 20px rgba(200, 230, 0, 0.05)',
      },
    },
  },
  plugins: [],
};
