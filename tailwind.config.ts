import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: "#F7F7F5",
        surface: "#FFFFFF",
        "surface-subtle": "#F2F2F0",
        primary: "#171717",
        secondary: "#6E6E73",
        tertiary: "#86868B",
        border: "#E5E5E3",
        "border-subtle": "#ECECE9",
        accent: {
          DEFAULT: "#0071E3",
          hover: "#0077ED",
          subtle: "#EBF4FD",
        },
        dark: {
          canvas: "#0B0C0E",
          surface: "#121418",
          card: "#191C23",
          border: "#252A36",
          text: "#F5F5F7",
          muted: "#86868B",
        },
      },
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          '"SF Pro Text"',
          '"SF Pro Display"',
          '"Segoe UI"',
          "Roboto",
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
      },
      letterSpacing: {
        tighter: "-0.035em",
        tight: "-0.02em",
        normal: "-0.01em",
      },
      boxShadow: {
        subtle: "0 1px 3px rgba(0,0,0,0.03), 0 4px 12px rgba(0,0,0,0.02)",
        card: "0 2px 8px rgba(0,0,0,0.04), 0 12px 32px rgba(0,0,0,0.03)",
        elevated: "0 8px 24px rgba(0,0,0,0.06), 0 24px 64px rgba(0,0,0,0.04)",
      },
      borderRadius: {
        "2xl": "1.25rem",
        "3xl": "1.75rem",
      },
    },
  },
  plugins: [],
};

export default config;
