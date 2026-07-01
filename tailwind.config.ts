import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#F0F5FA',
          100: '#E1EBF5',
          200: '#C4D7EB',
          300: '#99BAE0',
          400: '#6696D2',
          500: '#1A4D8C',
          600: '#09356A',
          700: '#072850',
          800: '#051E3E',
          900: '#031226',
          950: '#010812',
        },
        emerald: {
          50: '#ECFDF5',
          100: '#D1FAE5',
          200: '#A7F3D0',
          300: '#6EE7B7',
          400: '#34D399',
          500: '#10B981',
          600: '#059669',
          700: '#047857',
          800: '#065F46',
          900: '#064E3B',
        },
        teal: {
          500: '#06B6D4',
          600: '#0891B2',
        },
        emergency: {
          red: '#E11D48',
          pulse: '#FFE4E6',
        },
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(9, 53, 106, 0.08)',
        'glass-hover': '0 16px 48px 0 rgba(9, 53, 106, 0.16)',
        'premium': '0 20px 60px -15px rgba(5, 150, 105, 0.15)',
        'apple': '0 10px 30px -10px rgba(0, 0, 0, 0.05)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'glass-gradient': 'linear-gradient(135deg, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.4))',
      },
    },
  },
  plugins: [],
};

export default config;
