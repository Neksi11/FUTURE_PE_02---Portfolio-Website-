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
				/* Elegant Monochrome Palette */
				elegant: {
					black: 'hsl(var(--pure-black))',
					charcoal: 'hsl(var(--charcoal))',
					slate: 'hsl(var(--slate))',
					graphite: 'hsl(var(--graphite))',
					ash: 'hsl(var(--ash))',
					silver: 'hsl(var(--silver))',
					platinum: 'hsl(var(--platinum))',
					pearl: 'hsl(var(--pearl))',
					white: 'hsl(var(--pure-white))',
					gold: 'hsl(var(--accent-gold))'
				}
			},
			backgroundImage: {
				'gradient-radial': 'var(--gradient-radial)',
				'gradient-linear': 'var(--gradient-linear)',
				'gradient-subtle': 'var(--gradient-subtle)',
				'gradient-accent': 'var(--gradient-accent)'
			},
			boxShadow: {
				'minimal': 'var(--shadow-minimal)',
				'elegant': 'var(--shadow-elegant)',
				'dramatic': 'var(--shadow-dramatic)',
				'glow': 'var(--glow-subtle)'
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
				xl: 'calc(var(--radius) + 4px)',
				'2xl': 'calc(var(--radius) + 8px)'
			},
			fontFamily: {
				'display': ['Playfair Display', 'serif'],
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
				'fluid-6xl': 'clamp(3.75rem, 3rem + 3.75vw, 5.5rem)',
				'fluid-7xl': 'clamp(4.5rem, 3.5rem + 5vw, 7rem)',
				'fluid-8xl': 'clamp(5rem, 4rem + 6vw, 8rem)'
			},
			animation: {
				'fade-up': 'fade-up 1s cubic-bezier(0.16, 1, 0.3, 1) forwards',
				'scroll-left': 'scroll-left 30s linear infinite',
				'float': 'float 6s ease-in-out infinite'
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
				'fade-up': {
					from: { opacity: '0', transform: 'translateY(2rem)' },
					to: { opacity: '1', transform: 'translateY(0)' }
				},
				'scroll-left': {
					from: { transform: 'translateX(100%)' },
					to: { transform: 'translateX(-100%)' }
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
					'33%': { transform: 'translateY(-10px) rotate(1deg)' },
					'66%': { transform: 'translateY(-5px) rotate(-1deg)' }
				}
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
