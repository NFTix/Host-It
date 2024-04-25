/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
  ],
  prefix: "",
  theme: {
    screens: {
      xs: "320px",
      sm: "540px",
      md: "768px",
      mdl: "976px",
      lg: "1024px",
      mxl: "1162px",
      xl: "1440px",
      "2xl": "1570px",
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      colors: {
        hero: "#121212",
        "font-color": "#B0B0B0",
        "spi-blue": "#ade2ffc7",
        "spi-pink": "#ffadd5c5",
        "spi-purple": "#e16affb9",
        "spi-pink-2": "#E32882",
        "spi-blue-2": "#2C8BC0",
        "spi-purple-2": "#BB0CE7",
        "spi-pink-1": "#e32882a8",
        "spi-blue-1": "#2c8cc0ab",
        "spi-purple-1": "#bb0ce7a2",
        "pink-3": "#EBC0DB",
        "black-1": "#1B1B1B",
        "black-2": "#0C0C0C",
        "b-pink": "#ffadd59d",
        "b-blue": "#ade2ff9a",
        "b-purple": "#e16affb9",
        primaryColor: "#ff7324",
        white: "#fff",
        white: "#efe3facc",
        black: "#000",
        lightGray: "#D7D6DA",
        grey: "#BABABA",
        darkBrown: "#D81A77",
        slateBlack: "#2C2C2C",
        lightOrange: "#F5841F",
        darkBlue: "#210053",
        deepBlue: "#19253E",
        red: "#D81A77",
        lightWhite: "rgba(242, 242, 242, 0.10)",
        lightBlack: "rgba(255, 255, 255, 0.05)",
        lightGrey: "rgba(241, 218, 96, 0.10)",
        deepPink: "#6F133F",
        amberYellow: "#F1DA60",
        deepPurple: "#332668",
        cardText: "#4F4F4F",
        modalBg: "rgba(0, 0, 0, 0.40)",
        gradientColor:
          "linear-gradient(124deg, #6F133F -232.39%, #332668 243.87%)",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
