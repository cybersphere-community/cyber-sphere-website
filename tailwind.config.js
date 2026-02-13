/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                orbitron: ['"Orbitron"', 'sans-serif'],
                mono: ['"JetBrains Mono"', 'monospace'],
            },
            colors: {
                brand: {
                    primary: '#0f172a', // Slate 900 (Headings)
                    secondary: '#475569', // Slate 600 (Body)
                    accent: '#2563eb', // Royal Blue (Buttons/Links)
                    light: '#f8fafc', // Slate 50 (Backgrounds)
                    surface: '#ffffff', // Pure White (Cards)
                }
            },
            boxShadow: {
                'soft': '0 4px 20px -2px rgba(0, 0, 0, 0.05)',
                'card': '0 10px 40px -10px rgba(0, 0, 0, 0.08)',
                'glow': '0 0 20px rgba(37, 99, 235, 0.15)', // Subtle blue glow
            },
            animation: {
                'glitch': 'glitch 1s linear infinite',
                'spin-slow': 'spin 10s linear infinite',
                'reverse-spin': 'reverse-spin 15s linear infinite',
                'pulse-glow': 'pulse-glow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            },
            keyframes: {
                'reverse-spin': {
                    from: { transform: 'rotate(360deg)' },
                    to: { transform: 'rotate(0deg)' },
                },
                'pulse-glow': {
                    '0%, 100%': { opacity: '1', boxShadow: '0 0 20px rgba(0, 243, 255, 0.5)' },
                    '50%': { opacity: '0.5', boxShadow: '0 0 10px rgba(0, 243, 255, 0.2)' },
                }
            }
        },
    },
    plugins: [],
}
