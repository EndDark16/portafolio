import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        canvas: "#08090C",
        surface: "#0E1015",
        "surface-2": "#14171F",
        accent: {
          // Soft violet: fills/lines use DEFAULT (hover: `hover`), small text/labels on dark use `fg`.
          DEFAULT: "#8B5CF6",
          hover: "#7C3AED",
          fg: "#C4B5FD",
          muted: "rgba(139, 92, 246, 0.14)",
        },
        ink: "#F2F0EB",
        muted: "#A8A6A1",
        faint: "#8C8A86",
        line: "rgba(255, 255, 255, 0.08)",
        "line-strong": "rgba(255, 255, 255, 0.14)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "var(--font-sans)", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
