import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#0B1220",
          soft: "#0E1729",
          surface: "#111A2E",
          surface2: "#15203A",
          line: "#24314F",
          linesoft: "#1B263F",
        },
        signal: {
          amber: "#F2A93B",
          amberdim: "#8A6425",
          teal: "#35D0C5",
          tealdim: "#1D6B65",
          red: "#E2665A",
        },
        ivory: {
          DEFAULT: "#E7ECF5",
          muted: "#8592AD",
          faint: "#57648B",
        },
      },
      fontFamily: {
        mono: ["'JetBrains Mono'", "ui-monospace", "SFMono-Regular", "monospace"],
        sans: ["'Inter'", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        grid: "linear-gradient(to right, #16223a 1px, transparent 1px), linear-gradient(to bottom, #16223a 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "40px 40px",
      },
      keyframes: {
        flow: {
          "0%": { strokeDashoffset: "24" },
          "100%": { strokeDashoffset: "0" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.35" },
        },
        rise: {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        flow: "flow 0.8s linear infinite",
        blink: "blink 2.2s ease-in-out infinite",
        rise: "rise 0.6s cubic-bezier(0.16,1,0.3,1) both",
        marquee: "marquee 28s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
