import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
    "./docs/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // --- PRIMARY TEAL SCALE (Anchor: 600 = #0891B2) ---
        teal: {
          50: "#F0FDFA",
          100: "#CCFBF1",
          200: "#99F6E4",
          300: "#5EEAD4",
          400: "#2DD4BF",
          500: "#14B8A6",
          600: "#0891B2", // Primary Brand Anchor
          700: "#0E7490",
          800: "#155E75",
          900: "#164E63",
          950: "#083344",
        },

        // --- SOPHISTICATED GOLD ACCENT SCALE ("Agni" / Growth / Prestige) ---
        gold: {
          50: "#FFFDF5",
          100: "#FEF9E6",
          200: "#FDF0C3",
          300: "#F9E396",
          400: "#EFCF63",
          500: "#DCAE32",
          600: "#B8891F", // Muted burnished gold anchor
          700: "#936719",
          800: "#77511B",
          900: "#64431B",
          950: "#3B240B",
        },

        // --- NEUTRAL SLATE HIERARCHY ---
        slate: {
          50: "#F8FAFC",
          100: "#F1F5F9",
          200: "#E2E8F0",
          300: "#CBD5E1",
          400: "#94A3B8",
          500: "#64748B",
          600: "#475569",
          700: "#334155",
          800: "#1E293B",
          900: "#0F172A",
          950: "#020617",
        },

        // --- SEMANTIC SYSTEM TOKENS (Bridged to CSS Variables) ---
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          hover: "hsl(var(--primary-hover))",
          active: "hsl(var(--primary-active))",
          muted: "hsl(var(--primary-muted))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
          hover: "hsl(var(--accent-hover))",
          muted: "hsl(var(--accent-muted))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
          hover: "hsl(var(--secondary-hover))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },

        // Functional Feedback Status Tokens
        success: {
          DEFAULT: "#059669", // emerald-600
          subtle: "#ECFDF5",
          foreground: "#065F46",
        },
        warning: {
          DEFAULT: "#D97706", // amber-600
          subtle: "#FFFBEB",
          foreground: "#92400E",
        },
        error: {
          DEFAULT: "#DC2626", // red-600
          subtle: "#FEF2F2",
          foreground: "#991B1B",
        },
        info: {
          DEFAULT: "#0284C7", // sky-600
          subtle: "#F0F9FF",
          foreground: "#075985",
        },

        // Surfaces and Borders
        background: "hsl(var(--background))",
        "background-subtle": "hsl(var(--background-subtle))",
        "background-elevated": "hsl(var(--background-elevated))",
        surface: "hsl(var(--surface))",
        "surface-hover": "hsl(var(--surface-hover))",
        foreground: "hsl(var(--foreground))",
        "foreground-muted": "hsl(var(--foreground-muted))",
        "foreground-subtle": "hsl(var(--foreground-subtle))",
        border: "hsl(var(--border))",
        "border-subtle": "hsl(var(--border-subtle))",
        "border-strong": "hsl(var(--border-strong))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },

      fontFamily: {
        sans: ["var(--font-inter)", ...fontFamily.sans],
        serif: ["var(--font-fraunces)", ...fontFamily.serif],
        display: ["var(--font-fraunces)", ...fontFamily.serif],
      },

      // --- RESTRAINED RADIUS SYSTEM ---
      borderRadius: {
        none: "0px",
        sm: "0.25rem", // 4px (badges, controls)
        DEFAULT: "0.375rem", // 6px
        md: "0.5rem", // 8px (buttons, inputs)
        lg: "0.75rem", // 12px (cards, standard surfaces)
        xl: "1rem", // 16px (large feature panels)
        pill: "9999px", // tags, chips
      },

      // --- RESTRAINED SHADOW SYSTEM ---
      boxShadow: {
        subtle: "0 1px 2px 0 rgba(15, 23, 42, 0.04)",
        card: "0 1px 3px 0 rgba(15, 23, 42, 0.06), 0 1px 2px -1px rgba(15, 23, 42, 0.04)",
        elevated: "0 4px 6px -1px rgba(15, 23, 42, 0.07), 0 2px 4px -2px rgba(15, 23, 42, 0.04)",
        floating: "0 12px 24px -4px rgba(15, 23, 42, 0.08), 0 4px 8px -2px rgba(15, 23, 42, 0.04)",
        "glow-teal": "0 0 20px -4px rgba(8, 145, 178, 0.25)",
        "glow-gold": "0 0 20px -4px rgba(184, 137, 31, 0.25)",
      },

      // --- LAYOUT & SPACING RHYTHM ---
      maxWidth: {
        reading: "65ch",
        content: "1200px",
        wide: "1440px",
      },

      // --- ACCORDION & DISCLOSURE ANIMATIONS ---
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
  plugins: [],
};

export default config;
