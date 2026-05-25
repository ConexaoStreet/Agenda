import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          white: '#FFFFFF',
          ice: '#FDFBFF',
          lavender: '#F5EDFF',
          lilac: '#EDE3FF',
          mid: '#C8A2FF',
          purple: '#7C3AED',
          vibrant: '#8B5CF6',
          deep: '#4C1D95',
          neon: '#A855F7',
          text: '#1F1235',
          subtext: '#6B5A7A'
        }
      },
      boxShadow: {
        glow: '0 12px 40px rgba(124,58,237,.22)'
      }
    },
  },
  plugins: [],
};

export default config;
