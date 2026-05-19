/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./.storybook/**/*.{js,jsx,ts,tsx}",
  ],

  // Toggle dark mode by adding the `dark` class to <html>
  darkMode: "class",

  theme: {
    // ── Replace defaults ───────────────────────────────────────────────

    borderRadius: {
      none:    "0px",
      sm:      "2px",
      DEFAULT: "4px",
      md:      "8px",
      lg:      "12px",
      xl:      "16px",
      "2xl":   "24px",
      full:    "9999px",
    },

    boxShadow: {
      sm:      "0 1px 2px 0 rgba(0,0,0,0.05)",
      DEFAULT: "0 4px 6px -1px rgba(0,0,0,0.10), 0 2px 4px -2px rgba(0,0,0,0.10)",
      md:      "0 4px 6px -1px rgba(0,0,0,0.10), 0 2px 4px -2px rgba(0,0,0,0.10)",
      lg:      "0 10px 15px -3px rgba(0,0,0,0.10), 0 4px 6px -4px rgba(0,0,0,0.10)",
      xl:      "0 20px 25px -5px rgba(0,0,0,0.10), 0 8px 10px -6px rgba(0,0,0,0.10)",
      "2xl":   "0 25px 50px -12px rgba(0,0,0,0.25)",
      inner:   "inset 0 2px 4px 0 rgba(0,0,0,0.06)",
      none:    "none",
    },

    fontFamily: {
      satoshi: ["Satoshi", "system-ui", "sans-serif"],
      geist:   ["Geist", "system-ui", "sans-serif"],
      mono:    ["Geist Mono", "monospace"],
    },

    // [fontSize, { lineHeight, letterSpacing, fontWeight }]
    fontSize: {
      display:   ["48px", { lineHeight: "56px", letterSpacing: "-0.02em", fontWeight: "900" }],
      h1:        ["36px", { lineHeight: "44px", letterSpacing: "-0.02em", fontWeight: "700" }],
      h2:        ["28px", { lineHeight: "36px", letterSpacing: "-0.01em", fontWeight: "700" }],
      h3:        ["22px", { lineHeight: "28px", letterSpacing: "-0.01em", fontWeight: "700" }],
      h4:        ["18px", { lineHeight: "24px", letterSpacing: "0em",     fontWeight: "500" }],
      overline:  ["10px", { lineHeight: "16px", letterSpacing: "0.08em"  }],
      "body-lg": ["16px", { lineHeight: "24px"                           }],
      body:      ["14px", { lineHeight: "24px"                           }],
      "body-sm": ["12px", { lineHeight: "18px"                           }],
      label:     ["12px", { lineHeight: "16px", letterSpacing: "0.01em"  }],
      caption:   ["11px", { lineHeight: "16px", letterSpacing: "0.01em"  }],
      code:      ["13px", { lineHeight: "20px"                           }],
    },

    extend: {
      colors: {

        // ── Primitives ────────────────────────────────────────────────
        // Raw color scales. Use these when semantic tokens are too specific,
        // or when building new semantic aliases.

        solar: {
          50:  "#FEF0EC", 100: "#FDD9D0", 200: "#FAB5A3",
          300: "#F79078", 400: "#F56D53", 500: "#F75C38",
          600: "#D44526", 700: "#AC3519", 800: "#86280F",
          900: "#641E09", 950: "#3A1004",
        },
        pulse: {
          50:  "#EDEFFF", 100: "#D9DCFF", 200: "#B0B6FF",
          300: "#888FFF", 400: "#6F78FF", 500: "#5F6FFF",
          600: "#4451E0", 700: "#3038BF", 800: "#1F249F",
          900: "#11157F", 950: "#080A4D",
        },
        glow: {
          50:  "#FEFAEC", 100: "#FDF0CB", 200: "#FBE097",
          300: "#F9CE62", 400: "#F7BC3D", 500: "#F5A623",
          600: "#D4890F", 700: "#AD6D08", 800: "#875204",
          900: "#623B02", 950: "#3A2001",
        },
        sage: {
          50:  "#ECFDF5", 100: "#D1FAE5", 200: "#A7F3D0",
          300: "#6EE7B7", 400: "#34D399", 500: "#10B981",
          600: "#059669", 700: "#047857", 800: "#065F46",
          900: "#064E3B", 950: "#022C22",
        },
        bloom: {
          50:  "#FDF2F8", 100: "#FCE7F3", 200: "#FBCFE8",
          300: "#F9A8D4", 400: "#F472B6", 500: "#EC4899",
          600: "#DB2777", 700: "#BE185D", 800: "#9D174D",
          900: "#831843", 950: "#500724",
        },
        error: {
          50:  "#FEF2F2", 100: "#FEE2E2", 200: "#FECACA",
          300: "#FCA5A5", 400: "#F87171", 500: "#EF4444",
          600: "#DC2626", 700: "#B91C1C", 800: "#991B1B",
          900: "#7F1D1D", 950: "#450A0A",
        },
        zinc: {
          50:  "#FAFAF9", 100: "#F5F5F4", 200: "#E7E5E4",
          300: "#D6D3D1", 400: "#A8A29E", 500: "#78716C",
          600: "#57534E", 700: "#44403C", 800: "#292524",
          900: "#1C1917", 950: "#0C0A09",
        },

        // ── Semantic tokens ──────────────────────────────────────────
        // Resolve via CSS variables — switch automatically in dark mode.
        // Usage: bg-surface-default · text-text-primary · border-border-default

        surface: {
          "bg-primary":   "var(--color-surface-bg-primary)",
          "bg-secondary": "var(--color-surface-bg-secondary)",
          overlay:        "var(--color-surface-overlay)",
          default:        "var(--color-surface-default)",
          raised:         "var(--color-surface-raised)",
        },
        text: {
          primary:   "var(--color-text-primary)",
          secondary: "var(--color-text-secondary)",
          tertiary:  "var(--color-text-tertiary)",
          disabled:  "var(--color-text-disabled)",
          inverse:   "var(--color-text-inverse)",
          brand:     "var(--color-text-brand)",
        },
        border: {
          default: "var(--color-border-default)",
          strong:  "var(--color-border-strong)",
          focus:   "var(--color-border-focus)",
          error:   "var(--color-border-error)",
        },
        brand: {
          primary:   "var(--color-brand-primary)",
          secondary: "var(--color-brand-secondary)",
          accent:    "var(--color-brand-accent)",
          warning:   "var(--color-brand-warning)",
        },
        feedback: {
          error: {
            bg:     "var(--color-feedback-error-bg)",
            border: "var(--color-feedback-error-border)",
            text:   "var(--color-feedback-error-text)",
          },
          warning: {
            bg:     "var(--color-feedback-warning-bg)",
            border: "var(--color-feedback-warning-border)",
            text:   "var(--color-feedback-warning-text)",
          },
          success: {
            bg:     "var(--color-feedback-success-bg)",
            border: "var(--color-feedback-success-border)",
            text:   "var(--color-feedback-success-text)",
          },
          info: {
            bg:     "var(--color-feedback-info-bg)",
            border: "var(--color-feedback-info-border)",
            text:   "var(--color-feedback-info-text)",
          },
        },
      },
    },
  },

  plugins: [],
};
