import type { Config } from "tailwindcss";
import { createThemes } from "tw-colors";
import colors from "tailwindcss/colors";

const baseColors = [
    "gray",
    "red",
    "yellow",
    "green",
    "blue",
    "indigo",
    "purple",
    "pink",

  ];

const shadeMapping = {
  "50": "900",
  "100": "800",
  "200": "700",
  "300": "600",
  "400": "500",
  "500": "400",
  "600": "300",
  "700": "200",
  "800": "100",
  "900": "50",
};

const generateThemeObject = (colors: any, mapping: any, invert = false) => {
    const theme: any = {};
    baseColors.forEach((color) => {
      theme[color] = {};
      Object.entries(mapping).forEach(([key, value]: any) => {
        const shadeKey = invert ? value : key;
        theme[color][key] = colors[color][shadeKey];
      });
    });
    return theme;
};

const lightTheme = generateThemeObject(colors, shadeMapping);
const darkTheme = generateThemeObject(colors, shadeMapping, true);

const themes = {
  light: {
    ...lightTheme,
    white: "#ffffff",
  },
  dark: {
    ...darkTheme,
    white: colors.gray["950"],
    black: colors.gray["50"],

  },
};

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: {
          50: '#fafafa',
          100: '#f4f4f5',
          200: '#e4e4e7',
          300: '#d4d4d8',
          400: '#a1a1aa',
          500: '#71717a',
          600: '#52525b',
          700: '#3f3f46',
          800: '#27272a',
          900: '#18181b',
        },
        blueGray: {
            50: '#F8FAFC',
            100: '#F1F5F9',
            200:'#E2E8F0',
            300:'#CBD5E1',
            400:'#94A3B8',
            500:'#64748B',
            600:'#475569',
            700:'#334155',
            800:'#1E293B',
            900:'#0F172A',
        },
        zinc: {
            50: '#fafafa',
            100: '#f4f4f5',
            200:'#e4e4e7',
            300:'#d4d4d8',
            400:'#a1a1aa',
            500:'#52525b',
            600:'#52525b',
            700:'#3f3f46',
            800:'#27272a',
            900:'#18181b',
            950: '#09090b',
        },
            black: colors.black,
            white: colors.white,
            gray: colors.gray,
            red: colors.red,
            yellow: colors.amber,
            green: colors.emerald,
            blue: colors.blue,
            indigo: colors.indigo,
            purple: colors.violet,
            pink: colors.pink,



    },
    },
  },
  plugins: [createThemes(themes)],
};

export default config;
