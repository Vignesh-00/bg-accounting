/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#37474F", // Dark Grey (charcoal)
          light: "#CFD8DC", // Light Grey (soft silver)
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "#0D47A1", // Darker Rich Blue for better contrast
          foreground: "#FFFFFF",
          light: "#90CAF9", // Lighter blue for better contrast on dark backgrounds
        },
        accent: {
          DEFAULT: "#FFA000", // Darker Gold for better contrast
          foreground: "#263238",
        },
        heading: "#263238", // Dark charcoal for headings
        bodytext: "#455A64", // Darker Medium Grey for body text for better contrast
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "#CFD8DC", // Light Grey
          foreground: "#37474F", // Dark Grey
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
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      fontFamily: {
        montserrat: ["var(--font-montserrat)"],
        poppins: ["var(--font-poppins)"],
        opensans: ["var(--font-opensans)"],
        roboto: ["var(--font-roboto)"],
      },
      backgroundImage: {
        "gradient-primary": "linear-gradient(to right, #263238, #37474F, #546E7A)", // Darker gradient for better contrast
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}

