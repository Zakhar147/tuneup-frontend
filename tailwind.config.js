/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      fontSize: {
        title: "31px",
        subtitle: "17px"
      },
      spacing: {
        53: "53px",
        60: "60px",
        30: "30px",
        340: "340px",
        100: "100px",
        556: "556px",
        376: "376px"
      },
      borderRadius: {
        30: "30px",
      },
      rotate: {
        56: '56deg',
        '-56': '-56deg',
        73: '73deg',
        '-73': '-73deg',
        68: '68deg',
        '-68': '-68deg'
      },
      opacity: {
        8: '0.08', // 8%
        46: '0.46'
      },
      blur: {
        2: '2px',
      },
      colors: {
        accent: "#E95420",
        light: {
          bgColor: "#F9F6F3",
          textMain: "#000000",
          textSecond: "#555555",
          formBg: "#FFFFFF",
          chrodsBg: "#F5C4AE"
        },
        dark: {
          bgColor: "#0D0D0D",
          textMain: "#FFFFFF",
          textSecond: "#AAAAAA",
          formBg: "#111111",
          chrodsBg: "#2D0202"
        }
      }
    },
  },
  plugins: [],
}

