/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  mode: "jit",

  theme: {
    container: {
      padding: {
        DEFAULT: '15px',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960',
      xl: '1310px'
    },
    extend: {
      backgroundImage: {
        singerOverlay: 'url(/public/assets/gradient_clearbluis.png)',
        newsletter: 'url(/public/assets/gradient_clearbluis.png)'
      },
      fontFamily: {
        silkScreen: ['var(--font-silkScreen)'],
        alexBrush: [`var(--font-alexBrush)`],
        montserrat: [`var(--font-montserrat)`],
      },
      colors: {
        primary: '#06062a',
        Secondary: '#151538',
        tertiary: '#242445',
        accent: {
          DEFAULT: '#7f1cfc',
          hover: '#6519c6',
        }
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar')
  ],
}
