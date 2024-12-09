/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "brown": {
          100: "#ECE0D1",
          300: "#DBC1AC",
          600: "#967259",
          900: "#634832"
        }
      },
      boxShadow: {
        "normal": " 0px 1px 10px 0px #0000000D",
      },
      borderRadius: {
        "4xl": "2rem"
      },
      fontFamily: {
        "Dana": "Dana",
        "DanaMedium": "Dana Medium",
        "DanaDemiBold": "Dana DemiBold",
        "MorabbaLight": "Morabba Light",
        "MorabbaMedium": "Morabba Medium",
        "MorabbaBold": "Morabba Bold",
      },
      letterSpacing: {
        "tightest": "-0.065em"
      },
      spacing: {
        "4.5": "1.125rem",
        "25": "6.25rem",
        "30": "7.5rem",
        "50": "12.5rem"
      },
      container: {
        center: true,
        padding: {
          default: "1rem",
          lg: "0.625rem"
        }
      },
      backgroundImage: {
        "home-mobile": "url(/public/images/headerBgMobile.webp)",
        "home-desktop": "url(/public/images/headerBgDesktop.webp)"
      }
    },
    screens: {
      'xs': "480px",
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
    }
  },
  plugins: [
    function ({ addVariant }) {
      addVariant('child', '& > *');
      addVariant('child-hover', '& > *:hover');
    }],
}

