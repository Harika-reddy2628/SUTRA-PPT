/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        canvas: {
          DEFAULT: '#FAF7F2', // Warm Sandstone Alabaster
          raised: '#F4ECE1',  // Soft Parchment Surface
          card: '#FFFFFF',    // Clean Pure Card
          subtle: '#EDE4D6',  // Subtle Warm Border
          hover: '#EAE1D2',   // Warm Hover
          dark: '#13281E',    // Deep Sovereign Forest
          darkSurface: '#0E1F17',
        },
        earth: {
          forest: '#183A2B',     // Sovereign Deep Forest Green
          forestSoft: 'rgba(24, 58, 43, 0.07)',
          terracotta: '#9E4D34', // Warm Terracotta Clay
          terracottaSoft: 'rgba(158, 77, 52, 0.09)',
          sage: '#4A7A58',       // Vedic Sage Green
          sageSoft: 'rgba(74, 122, 88, 0.10)',
          ochre: '#B68637',      // Heritage Ochre Amber / Gold
          ochreSoft: 'rgba(182, 134, 55, 0.10)',
          clay: '#6B5B52',       // Muted Clay
          bark: '#423730',       // Deep Bark
          charcoal: '#1A2420',   // Ultra-dark Charcoal Forest
        },
        elemental: {
          earth: '#9E4D34',
          water: '#183A2B',
          waterSoft: '#1F4736',
          fire: '#9E4D34',
          wind: '#E2ECE5',
          sky: '#2B6CB0',
          skySoft: 'rgba(43, 108, 176, 0.08)',
        },
        sandstone: {
          dark: '#183A2B',
          muted: '#4A5B53',
          faint: '#7A8C83',
          border: '#E6DED2',
        }
      },
      fontFamily: {
        bebas: ['"Bebas Neue"', 'sans-serif'],
        ndot: ['"Doto"', 'monospace'],
        space: ['"Space Grotesk"', 'sans-serif'],
        sans: ['"Space Grotesk"', '"Plus Jakarta Sans"', '"Inter"', 'sans-serif'],
        serif: ['"Lora"', 'Georgia', 'serif'],
        heading: ['"Bebas Neue"', '"Space Grotesk"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'card-light': '0 10px 30px -5px rgba(24, 58, 43, 0.06), 0 4px 12px -2px rgba(24, 58, 43, 0.03)',
        'card-hover': '0 20px 35px -5px rgba(24, 58, 43, 0.10), 0 8px 16px -2px rgba(24, 58, 43, 0.05)',
      },
    },
  },
  plugins: [],
}
