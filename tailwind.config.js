/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0F52BA', // Rich blue
          50: '#EBF2FF',
          100: '#D6E4FF',
          200: '#ADC8FF',
          300: '#85ACFF',
          400: '#5B90FF',
          500: '#3274FF',
          600: '#0F52BA', // Base primary
          700: '#0A3F8E',
          800: '#072C62',
          900: '#041936',
        },
        secondary: {
          DEFAULT: '#F5F7FA', // Light grey
          50: '#FFFFFF',
          100: '#F5F7FA',
          200: '#E9ECF1',
          300: '#D9DEE5',
          400: '#C4CCD8',
          500: '#A9B6C7',
          600: '#8A9BB1',
          700: '#6B7E97',
          800: '#506178',
          900: '#364150',
        },
        accent: {
          DEFAULT: '#2E8B57', // Sea green for positive trends
          50: '#E9F5EE',
          100: '#D3EBDD',
          200: '#A7D7BB',
          300: '#7BC399',
          400: '#4FAF77',
          500: '#2E8B57', // Base accent
          600: '#256F45',
          700: '#1B5334',
          800: '#123722',
          900: '#091B11',
        },
        warning: {
          DEFAULT: '#FFA500', // Orange for warnings
          50: '#FFF8EB',
          100: '#FFF0D7',
          200: '#FFE1AF',
          300: '#FFD287',
          400: '#FFC35F',
          500: '#FFA500', // Base warning
          600: '#CC8400',
          700: '#996300',
          800: '#664200',
          900: '#332100',
        },
        danger: {
          DEFAULT: '#DC143C', // Crimson for negative trends
          50: '#FCE8ED',
          100: '#F9D1DB',
          200: '#F3A3B7',
          300: '#ED7593',
          400: '#E7476F',
          500: '#DC143C', // Base danger
          600: '#B01030',
          700: '#850C24',
          800: '#5A0818',
          900: '#2D040C',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-lexend)', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 1px 3px rgba(0, 0, 0, 0.05), 0 1px 2px rgba(0, 0, 0, 0.1)',
        'card-hover': '0 4px 6px rgba(0, 0, 0, 0.05), 0 2px 4px rgba(0, 0, 0, 0.05)',
        dropdown: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      },
      borderRadius: {
        'card': '0.75rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-in-out',
        'slide-in': 'slideIn 0.3s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideIn: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '65ch',
            color: 'var(--tw-prose-body)',
            lineHeight: '1.75',
          },
        },
      },
    },
  },
  plugins: [],
} 