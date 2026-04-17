/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        orange:  "#F58027",
        teal:    "#10DEBB",
        ink:     "#0D1B2A",
        body:    "#374151",
        muted:   "#6B7280",
        base:    "#EEF1F6",
        surface: "#F8FAFC",
      },
      fontFamily: { sans: ["Inter", "sans-serif"] },
      boxShadow: {
        card:   "0 1px 3px rgba(13,27,42,0.06), 0 4px 16px rgba(13,27,42,0.06)",
        hover:  "0 8px 32px rgba(13,27,42,0.14)",
        orange: "0 4px 24px rgba(245,128,39,0.40)",
        teal:   "0 4px 20px rgba(16,222,187,0.32)",
        deep:   "0 20px 60px rgba(13,27,42,0.18)",
        glow:   "0 0 0 3px rgba(245,128,39,0.18)",
      },
      animation: {
        "spin-slow":  "spin 16s linear infinite",
        "float":      "float 4s ease-in-out infinite",
        "pulse-slow": "pulse 3s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%,100%": { transform: "translateY(0px)" },
          "50%":     { transform: "translateY(-12px)" },
        },
      },
    },
  },
  plugins: [],
}
