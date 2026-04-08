/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      colors: {
        // Deep dark base palette
        dark: {
          950: '#050A15',
          900: '#0A1128',
          850: '#0C1630',
          800: '#111D3A',
          700: '#1A2744',
        },
        // Championship gold system
        gold: {
          300: '#F5D680',
          400: '#F0C94C',
          500: '#E8B930',
          600: '#D4A520',
          700: '#B8910A',
        },
        // Athletic red accent
        scarlet: {
          400: '#F25C5C',
          500: '#E63946',
          600: '#C72D39',
        },
      },
      fontFamily: {
        display: ['"Syne"', 'sans-serif'],
        body: ['"Manrope"', 'sans-serif'],
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-right': 'slideRight 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'float': 'float 6s ease-in-out infinite',
        'marquee': 'marquee 30s linear infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideRight: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(232, 185, 48, 0.2)' },
          '100%': { boxShadow: '0 0 40px rgba(232, 185, 48, 0.5)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'diagonal-lines': 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(232,185,48,0.03) 10px, rgba(232,185,48,0.03) 11px)',
      },
      fontSize: {
        'display-lg': ['clamp(1.75rem, 8vw, 9rem)', { lineHeight: '0.85', letterSpacing: '-0.04em', fontWeight: '800' }],
        'display-md': ['clamp(1.75rem, 5vw, 5rem)', { lineHeight: '0.9', letterSpacing: '-0.03em', fontWeight: '800' }],
        'display-sm': ['clamp(1.25rem, 3vw, 2.5rem)', { lineHeight: '1', letterSpacing: '-0.02em', fontWeight: '700' }],
      },
    }
  },
  plugins: [],
}
