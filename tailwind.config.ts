import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'custom-green': '#486349',
        'custom-yellow': '#d8c690',
        'star': '#E4A935',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        custom: ['Libre Baskerville', 'serif'],
        lora: ['Lora', 'serif'],
      },
      borderWidth: {
        '12': '12px',
    },
    height: {
      '1/2': '50%',
      '1/3': '33.333333%',
      '1/4': '25%',
      // add custom responsive heights here
    },
    maxWidth: {
      '1/2': '50%',
      '1/3': '33.333333%',
      '1/4': '25%',
      // add custom responsive max-widths here
    },
    // Add more custom breakpoints if needed
    screens: {
      '2xl': '1536px',
      // You can add more custom breakpoints here
    },
  },
},
  plugins: [],
};

export default config;
