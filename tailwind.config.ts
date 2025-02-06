import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-gray' : "#2F2F2E",
        'light-gray' : "#7A7A7A",
        'green' : "#01C38E",
        'black' : "#101010"
      },
      backgroundImage: {
        'bugatti-lg': "url('/bugatti-lg.png')",
        'bugatti-md': "url('/bugatti-md.png')",
        'bugatti-sm': "url('/bugatti-sm.png')",
      },
      fontFamily: {
        'dmSans': ['DM Sans', 'sans-serif'],
      },
      fontSize: {
        '5xl': '64px',
        '4xl': '59px',
        '3xl': '48px',
        '2xl': '40px',
        xl: '32px',
        lg: '24px',
        md: '20px',
        sm: '16px',
        xs: '14px',
        xxs: '13px'
      },
    },
  },
  plugins: [],
} satisfies Config;
