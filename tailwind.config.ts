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
    },
  },
  plugins: [],
} satisfies Config;
