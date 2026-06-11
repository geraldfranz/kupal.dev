/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  // Safelist classes that may be generated dynamically or appear in template literals
  safelist: [
    'font-display',
    'font-sans',
    'font-mono',
    'bg-dark-950',
    'bg-dark-50',
    'bg-accent-red',
    'hover-glow-black',
    'hover-glow-white'
  ],
  theme: {
    fontFamily: {
      'sans': ['"Inter"', 'sans-serif'],
      'mono': ['"JetBrains Mono"', 'monospace'],
      'display': ['"Syne"', 'sans-serif'],
    },
    extend: {
      colors: {
        dark: {
          50: "#F0EDE8",
          950: "#0A0A0F",
        },
        accent: {
          red: "#EF4444",
          violet: "#A78BFA",
        },
        brand: {
          facebook: "#1877F2",
          instagram: "#E1306C",
        },
      },
      borderRadius: {
        card: "16px",
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease-out",
        "slide-up": "slideUp 0.3s ease-out",
        glow: "glow 2s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        glow: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(239, 68, 68, 0.5)" },
          "50%": { boxShadow: "0 0 30px rgba(239, 68, 68, 0.8)" },
        },
      },
    },
  },
  plugins: [],
};
