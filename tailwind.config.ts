import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				/* Ocean Theme Colors */
				ocean: {
					deep: 'hsl(var(--ocean-deep))',
					abyss: 'hsl(var(--abyss))',
					reef: 'hsl(var(--reef))',
					mist: 'hsl(var(--teal-mist))',
					glass: 'hsl(var(--sea-glass))',
					foam: 'hsl(var(--foam))',
					pearl: 'hsl(var(--pearl))',
					coral: 'hsl(var(--coral))'
				}
			},
			backgroundImage: {
				'gradient-tide': 'var(--gradient-tide)',
				'gradient-depth': 'var(--gradient-depth)',
				'gradient-surface': 'var(--gradient-surface)',
				'gradient-hero': 'var(--gradient-hero)'
			},
			boxShadow: {
				'reef': 'var(--shadow-reef)',
				'depth': 'var(--shadow-depth)',
				'surface': 'var(--shadow-surface)',
				'glow': 'var(--glow-pearl)'
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
				xl: 'calc(var(--radius) + 4px)',
				'2xl': 'calc(var(--radius) + 8px)'
			},
			fontFamily: {
				'display': ['Fraunces', 'serif'],
				'sans': ['Inter', 'system-ui', 'sans-serif']
			},
			fontSize: {
				'fluid-xs': 'clamp(0.75rem, 0.7rem + 0.25vw, 0.875rem)',
				'fluid-sm': 'clamp(0.875rem, 0.8rem + 0.375vw, 1rem)',
				'fluid-base': 'clamp(1rem, 0.9rem + 0.5vw, 1.125rem)',
				'fluid-lg': 'clamp(1.125rem, 1rem + 0.625vw, 1.25rem)',
				'fluid-xl': 'clamp(1.25rem, 1.1rem + 0.75vw, 1.5rem)',
				'fluid-2xl': 'clamp(1.5rem, 1.3rem + 1vw, 2rem)',
				'fluid-3xl': 'clamp(1.875rem, 1.6rem + 1.375vw, 2.5rem)',
				'fluid-4xl': 'clamp(2.25rem, 1.9rem + 1.75vw, 3rem)',
				'fluid-5xl': 'clamp(3rem, 2.5rem + 2.5vw, 4rem)',
				'fluid-6xl': 'clamp(3.75rem, 3rem + 3.75vw, 5.5rem)'
			},
			animation: {
				'tide-rise': 'tide-rise 0.8s cubic-bezier(0.165, 0.84, 0.44, 1) forwards',
				'current-flow': 'current-drift 8s cubic-bezier(0.25, 0.46, 0.45, 0.94) infinite',
				'wave-motion': 'wave-motion 15s ease-in-out infinite',
				'fade-in': 'fade-in 0.6s ease-out',
				'scale-in': 'scale-in 0.4s ease-out',
				'ripple': 'ripple 0.6s ease-out'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'tide-rise': {
					from: { opacity: '0', transform: 'translateY(2rem)' },
					to: { opacity: '1', transform: 'translateY(0)' }
				},
				'current-drift': {
					'0%, 100%': { transform: 'translateX(0) translateY(0)' },
					'25%': { transform: 'translateX(1rem) translateY(-0.5rem)' },
					'50%': { transform: 'translateX(0) translateY(-1rem)' },
					'75%': { transform: 'translateX(-1rem) translateY(-0.5rem)' }
				},
				'wave-motion': {
					'0%, 100%': { transform: 'translateX(0)' },
					'50%': { transform: 'translateX(-50px)' }
				},
				'fade-in': {
					from: { opacity: '0', transform: 'translateY(1rem)' },
					to: { opacity: '1', transform: 'translateY(0)' }
				},
				'scale-in': {
					from: { opacity: '0', transform: 'scale(0.95)' },
					to: { opacity: '1', transform: 'scale(1)' }
				},
				'ripple': {
					'0%': { transform: 'scale(0)', opacity: '1' },
					'100%': { transform: 'scale(4)', opacity: '0' }
				}
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
