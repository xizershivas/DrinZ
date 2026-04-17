/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        orange:  "#d4820a",
        teal:    "#2c3e55",
        ink:     "#1e3a5c",
        body:    "#1e3a5c",
        muted:   "#4a6580",
        base:    "#ffffff",
        surface: "#f4f7fb",
        alt:     "#eaf0f8",
      },
      fontFamily: { sans: ["Inter", "sans-serif"] },
      boxShadow: {
        card:   "0 1px 3px rgba(44,62,85,0.08), 0 4px 16px rgba(44,62,85,0.06)",
        hover:  "0 8px 32px rgba(44,62,85,0.14)",
        orange: "0 4px 24px rgba(212,130,10,0.26)",
        teal:   "0 4px 20px rgba(44,62,85,0.16)",
        deep:   "0 20px 60px rgba(44,62,85,0.18)",
        glow:   "0 0 0 3px rgba(212,130,10,0.16)",
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
