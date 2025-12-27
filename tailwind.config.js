/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                "primary": "#ff5c8d", // Playful Pink
                "primary-hover": "#f04678",
                "primary-dark": "#be185d", // Keeping for utility if needed
                "secondary": "#a78bfa", // Soft Purple
                "accent": "#ffd1dc", // Pastel Pink
                "background-light": "#fff5f7",
                "background-dark": "#2a1b26", // Deep Warm Purple
                "surface-light": "#ffffff",
                "surface-dark": "#4a1c30", // Using text-main as surface dark or similar deep tone
                "text-main-light": "#4a1c30", // Dark Maroon/Brown
                "text-main-dark": "#fce7f3",
                "text-muted-light": "#6b7280", // Standard gray for readability
                "text-muted-dark": "#fda4af",
                "border-light": "#fbcfe8",
                "border-dark": "#831843",

                // Specific design file colors
                "soft-pink": "#fce7f3",
                "soft-purple": "#f3e8ff",
                "soft-teal": "#ccfbf1",
            },
            fontFamily: {
                "display": ["Nunito", "sans-serif"],
                "body": ["Inter", "sans-serif"],
                "sans": ["Inter", "sans-serif"], // Default to body font
            },
            borderRadius: {
                "xl": "1rem",
                "2xl": "1.5rem",
                "3xl": "2rem",
                "blob": "40% 60% 70% 30% / 40% 50% 60% 50%"
            },
            animation: {
                "fade-in-up": "fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
                "float": "float 4s ease-in-out infinite",
                "pop-in": "popIn 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards",
                "wiggle": "wiggle 1s ease-in-out infinite",
                "spin-slow": "spin 8s linear infinite",
                "bounce-slow": "bounce 3s infinite",
                "unfold": "unfold 0.8s ease-out forwards",
            },
            keyframes: {
                fadeInUp: {
                    "0%": { opacity: "0", transform: "translateY(30px)" },
                    "100%": { opacity: "1", transform: "translateY(0)" }
                },
                float: {
                    "0%, 100%": { transform: "translateY(0)" },
                    "50%": { transform: "translateY(-15px)" }
                },
                popIn: {
                    "0%": { opacity: "0", transform: "scale(0.8)" },
                    "100%": { opacity: "1", transform: "scale(1)" }
                },
                wiggle: {
                    "0%, 100%": { transform: "rotate(-3deg)" },
                    "50%": { transform: "rotate(3deg)" }
                },
                unfold: {
                    "0%": { opacity: "0", transform: "translateY(20px) scale(0.95)" },
                    "100%": { opacity: "1", transform: "translateY(0) scale(1)" },
                }
            },
            boxShadow: {
                "soft-pink": "0 10px 40px -10px rgba(255, 92, 141, 0.3)",
                "glow": "0 0 20px rgba(236, 72, 153, 0.5)",
                'playful': '4px 4px 0px 0px rgba(236, 72, 153, 0.3)',
                'playful-hover': '6px 6px 0px 0px rgba(236, 72, 153, 0.5)',
                'card-purple': '4px 4px 0px 0px rgba(139, 92, 246, 0.3)',
                'card-cyan': '4px 4px 0px 0px rgba(6, 182, 212, 0.3)',
                'card-pink': '4px 4px 0px 0px rgba(236, 72, 153, 0.3)',
            }
        },
    },
    plugins: [
        require('@tailwindcss/container-queries'),
    ],
}
