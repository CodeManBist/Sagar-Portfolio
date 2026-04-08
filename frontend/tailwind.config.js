/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary Brand Colors
        "primary-navy": "#0F2847",
        "primary-teal": "#1DD1A1",
        "primary-purple": "#5B4EE8",
        "primary-charcoal": "#1A202C",
        "primary-amber": "#F59E0B",
        
        // Semantic Colors
        "brand": {
          50: "#F0F7FF",
          100: "#E0EFFF",
          200: "#BAE0FF",
          300: "#7ECEFF",
          400: "#36BFFF",
          500: "#0F9AFF",
          600: "#0078D4",
          700: "#106EDA",
          800: "#125A8F",
          900: "#0F2847", // navy
        },
        "success": {
          50: "#F0FDF4",
          500: "#1DD1A1",
          600: "#10A981",
        },
        "accent": {
          50: "#FEF3F2",
          100: "#FEE4E2",
          300: "#FDAC8B",
          500: "#F59E0B", // amber
          600: "#D97706",
        },
        "neutral": {
          50: "#F7FAFC",
          100: "#EDF2F7",
          200: "#E2E8F0",
          300: "#CBD5E0",
          400: "#A0AEC0",
          500: "#718096",
          600: "#4A5568",
          700: "#2D3748",
          800: "#1A202C",
          900: "#0B0E11",
        },
      },
      
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },

      fontSize: {
        xs: ["12px", { lineHeight: "1.5" }],
        sm: ["14px", { lineHeight: "1.5" }],
        base: ["16px", { lineHeight: "1.6" }],
        lg: ["18px", { lineHeight: "1.6" }],
        xl: ["20px", { lineHeight: "1.6" }],
        "2xl": ["24px", { lineHeight: "1.4" }],
        "3xl": ["30px", { lineHeight: "1.3" }],
        "4xl": ["36px", { lineHeight: "1.3" }],
        "5xl": ["48px", { lineHeight: "1.2" }],
        "6xl": ["60px", { lineHeight: "1.1" }],
      },

      boxShadow: {
        // Stripe-inspired premium shadows
        xs: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
        sm: "0 1px 3px 0 rgba(0, 0, 0, 0.08), 0 1px 2px 0 rgba(0, 0, 0, 0.04)",
        base: "0 4px 6px -1px rgba(0, 0, 0, 0.08), 0 2px 4px -1px rgba(0, 0, 0, 0.04)",
        md: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
        lg: "0 20px 25px -5px rgba(0, 0, 0, 0.12), 0 10px 10px -5px rgba(0, 0, 0, 0.06)",
        xl: "0 25px 50px -12px rgba(0, 0, 0, 0.15)",
        "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
        premium: "0 20px 40px -10px rgba(91, 78, 232, 0.2)",
        "premium-teal": "0 20px 40px -10px rgba(29, 209, 161, 0.15)",
      },

      borderRadius: {
        xs: "6px",
        sm: "8px",
        base: "12px",
        md: "16px",
        lg: "20px",
        xl: "24px",
      },

      animation: {
        "fade-in": "fadeIn 0.3s ease-in",
        "scale-in": "scaleIn 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
        "slide-in-up": "slideInUp 0.5s ease-out",
        "slide-in-down": "slideInDown 0.5s ease-out",
        "float": "float 3s ease-in-out infinite",
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },

      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        scaleIn: {
          "0%": { 
            opacity: "0", 
            transform: "scale(0.95)" 
          },
          "100%": { 
            opacity: "1", 
            transform: "scale(1)" 
          },
        },
        slideInUp: {
          "0%": { 
            opacity: "0", 
            transform: "translateY(20px)" 
          },
          "100%": { 
            opacity: "1", 
            transform: "translateY(0)" 
          },
        },
        slideInDown: {
          "0%": { 
            opacity: "0", 
            transform: "translateY(-20px)" 
          },
          "100%": { 
            opacity: "1", 
            transform: "translateY(0)" 
          },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },

      spacing: {
        18: "4.5rem",
        22: "5.5rem",
        30: "7.5rem",
      },
    },
  },
  plugins: [],
};
