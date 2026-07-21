import plugin from 'tailwindcss/plugin';

/*
 * Crepitus Protocol — Design System Configuration
 *
 * Every token below maps to a protocol-layer concept:
 *   crep-*      → core protocol accent (chartreuse collateral ramp)
 *   vault-*     → collateral vault UI surfaces
 *   synth-*     → synthetic equity instrument palette
 *   route-*     → yield-routing connector visuals
 *   oracle-*    → price-feed signal indicators
 *   surface-*   → neutral depth scale for layered panels
 *   risk-*      → MCR threshold visual encoding
 */

const CREP_ACCENT = { r: 200, g: 230, b: 0 };
const crepRgba = (alpha) => `rgba(${CREP_ACCENT.r}, ${CREP_ACCENT.g}, ${CREP_ACCENT.b}, ${alpha})`;

/** @type {import('tailwindcss').Config} */
const crepitusProtocolConfig = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],

  theme: {
    extend: {
      colors: {
        crep: {
          50: '#FCFFE6',
          100: '#F6FFBF',
          200: '#EEFF80',
          300: '#DFFB40',
          400: '#D4ED2E',
          500: '#C8E600',
          600: '#A5BF00',
          700: '#7C9000',
          800: '#536000',
          900: '#2A3000',
          950: '#151800',
        },
        chartreuse: {
          50: '#FCFFE6',
          100: '#F6FFBF',
          200: '#EEFF80',
          300: '#DFFB40',
          400: '#D4ED2E',
          500: '#C8E600',
          600: '#A5BF00',
          700: '#7C9000',
          800: '#536000',
          900: '#2A3000',
        },
        vault: {
          dim: '#1C2410',
          floor: '#243012',
          wall: '#2D3D16',
          shelf: '#3A5220',
          ledge: '#4A6A2B',
          cap: '#5E8536',
          highlight: '#74A344',
        },
        synth: {
          deep: '#0A1628',
          base: '#102040',
          mid: '#1A3060',
          bright: '#2A4A88',
          signal: '#3D6BC0',
          peak: '#5A8EF0',
          flare: '#82B0FF',
        },
        route: {
          idle: '#2A2A1A',
          warm: '#3D3D10',
          active: '#5C5C00',
          flowing: '#7A7A00',
          saturated: '#A0A000',
          overflow: '#C8C800',
        },
        oracle: {
          stale: '#4A3A2A',
          pending: '#6B5520',
          fresh: '#8C7010',
          confirmed: '#B89000',
          verified: '#E0B000',
          trusted: '#FFD700',
        },
        surface: {
          50: '#FAFAFA',
          100: '#F0F0F0',
          200: '#DEDEDE',
          300: '#BEBEBE',
          400: '#9E9E9E',
          500: '#7E7E7E',
          600: '#5E5E5E',
          700: '#3E3E3E',
          800: '#2A2A2A',
          900: '#1A1A1A',
          950: '#0F0F0F',
        },
        risk: {
          healthy: '#22C55E',
          caution: '#84CC16',
          elevated: '#EAB308',
          warning: '#F59E0B',
          danger: '#EF4444',
          liquidation: '#DC2626',
          critical: '#991B1B',
        },
        success: {
          400: '#4ADE80',
          500: '#22C55E',
          600: '#16A34A',
        },
        warning: {
          400: '#FBBF24',
          500: '#F59E0B',
          600: '#D97706',
        },
        error: {
          400: '#F87171',
          500: '#EF4444',
          600: '#DC2626',
        },
      },

      fontFamily: {
        display: ['Space Grotesk', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
        body: ['Inter', 'sans-serif'],
      },

      fontSize: {
        'ticker-xs': ['0.625rem', { lineHeight: '1', letterSpacing: '0.02em' }],
        'ticker-sm': ['0.6875rem', { lineHeight: '1.1', letterSpacing: '0.015em' }],
        'ticker-base': ['0.8125rem', { lineHeight: '1.2', letterSpacing: '0.01em' }],
        'ticker-lg': ['1.125rem', { lineHeight: '1.15', letterSpacing: '-0.01em' }],
        'ticker-xl': ['1.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'stat-hero': ['2.25rem', { lineHeight: '1', letterSpacing: '-0.03em', fontWeight: '700' }],
        'vault-heading': ['1.75rem', { lineHeight: '1.15', letterSpacing: '-0.025em' }],
      },

      spacing: {
        'panel': '1.5rem',
        'gutter': '1.25rem',
        'sidebar-w': '4.5rem',
        'sidebar-expanded': '16rem',
        'ticker-h': '2.5rem',
        'card-pad': '1.25rem',
        'modal-margin': '2rem',
      },

      borderRadius: {
        'card': '1rem',
        'modal': '1.25rem',
        'pill': '9999px',
        'chip': '0.5rem',
        'vault-panel': '1.5rem',
      },

      screens: {
        'desk': '1440px',
        'ultra': '2560px',
      },

      transitionTimingFunction: {
        'vault-ease': 'cubic-bezier(0.16, 1, 0.3, 1)',
        'mint-spring': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
        'liquidate-snap': 'cubic-bezier(0.68, -0.6, 0.32, 1.6)',
        'route-flow': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'oracle-pulse': 'cubic-bezier(0.22, 0.68, 0, 1.71)',
      },

      transitionDuration: {
        'vault': '350ms',
        'mint': '500ms',
        'oracle': '200ms',
        'route': '800ms',
      },

      animation: {
        'pulse-glow': 'crep-pulse-glow 3s ease-in-out infinite',
        'border-glow': 'crep-border-glow 4s ease-in-out infinite',
        'float': 'crep-float 6s ease-in-out infinite',
        'slide-up': 'crep-slide-up 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
        'slide-in-right': 'crep-slide-in-right 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
        'fade-in': 'crep-fade-in 0.3s ease-out',
        'shimmer': 'crep-shimmer 2s linear infinite',
        'spin-slow': 'spin 8s linear infinite',
        'count-up': 'crep-count-up 1s ease-out',
        'stagger-in': 'crep-stagger-in 0.5s cubic-bezier(0.16, 1, 0.3, 1) both',
        'liquidate-flash': 'crep-liquidate-flash 0.6s cubic-bezier(0.68, -0.6, 0.32, 1.6)',
        'mint-confirm': 'crep-mint-confirm 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)',
        'collateral-lock': 'crep-collateral-lock 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
        'route-pulse': 'crep-route-pulse 2.5s ease-in-out infinite',
        'oracle-tick': 'crep-oracle-tick 1s steps(1) infinite',
        'debt-warning': 'crep-debt-warning 1.2s ease-in-out infinite',
        'yield-flow': 'crep-yield-flow 3s linear infinite',
        'vault-breathe': 'crep-vault-breathe 4s ease-in-out infinite',
        'synth-ripple': 'crep-synth-ripple 2s ease-out infinite',
        'position-enter': 'crep-position-enter 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
      },

      keyframes: {
        'crep-pulse-glow': {
          '0%, 100%': { boxShadow: `0 0 15px ${crepRgba(0.2)}, inset 0 0 15px ${crepRgba(0.04)}` },
          '50%': { boxShadow: `0 0 35px ${crepRgba(0.4)}, inset 0 0 30px ${crepRgba(0.08)}` },
        },
        'crep-border-glow': {
          '0%, 100%': { borderColor: crepRgba(0.2) },
          '50%': { borderColor: crepRgba(0.5) },
        },
        'crep-float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        'crep-slide-up': {
          '0%': { transform: 'translateY(12px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'crep-slide-in-right': {
          '0%': { transform: 'translateX(100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        'crep-fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'crep-shimmer': {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'crep-count-up': {
          '0%': { opacity: '0', transform: 'translateY(4px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'crep-stagger-in': {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'crep-liquidate-flash': {
          '0%': { background: 'transparent', transform: 'scale(1)' },
          '25%': { background: 'rgba(239, 68, 68, 0.15)', transform: 'scale(1.02)' },
          '50%': { background: 'rgba(239, 68, 68, 0.25)', transform: 'scale(0.98)' },
          '100%': { background: 'transparent', transform: 'scale(1)' },
        },
        'crep-mint-confirm': {
          '0%': { transform: 'scale(0.9) rotate(-2deg)', opacity: '0' },
          '60%': { transform: 'scale(1.05) rotate(1deg)', opacity: '1' },
          '100%': { transform: 'scale(1) rotate(0deg)', opacity: '1' },
        },
        'crep-collateral-lock': {
          '0%': { transform: 'translateY(-4px)', opacity: '0.6' },
          '50%': { transform: 'translateY(1px)' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'crep-route-pulse': {
          '0%, 100%': { opacity: '0.4', transform: 'scaleX(0.95)' },
          '50%': { opacity: '1', transform: 'scaleX(1)' },
        },
        'crep-oracle-tick': {
          '0%, 49%': { opacity: '1' },
          '50%, 100%': { opacity: '0.3' },
        },
        'crep-debt-warning': {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(239, 68, 68, 0)' },
          '50%': { boxShadow: '0 0 20px 4px rgba(239, 68, 68, 0.3)' },
        },
        'crep-yield-flow': {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '200% 50%' },
        },
        'crep-vault-breathe': {
          '0%, 100%': { opacity: '0.85', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.005)' },
        },
        'crep-synth-ripple': {
          '0%': { boxShadow: '0 0 0 0 rgba(90, 142, 240, 0.4)' },
          '70%': { boxShadow: '0 0 0 12px rgba(90, 142, 240, 0)' },
          '100%': { boxShadow: '0 0 0 0 rgba(90, 142, 240, 0)' },
        },
        'crep-position-enter': {
          '0%': { opacity: '0', transform: 'translateX(-8px) scale(0.97)' },
          '100%': { opacity: '1', transform: 'translateX(0) scale(1)' },
        },
        'ring-pulse': {
          '0%': { transform: 'scale(1)', opacity: '0.8' },
          '100%': { transform: 'scale(3)', opacity: '0' },
        },
      },

      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(var(--tw-gradient-stops))',
        'shimmer-gradient': `linear-gradient(90deg, transparent 0%, ${crepRgba(0.04)} 50%, transparent 100%)`,
        'vault-gradient': `linear-gradient(135deg, ${crepRgba(0.03)} 0%, transparent 50%, ${crepRgba(0.02)} 100%)`,
        'route-flow-gradient': `linear-gradient(90deg, ${crepRgba(0.1)}, ${crepRgba(0.3)}, ${crepRgba(0.1)})`,
        'oracle-confirmed-gradient': 'linear-gradient(180deg, rgba(255, 215, 0, 0.05) 0%, transparent 60%)',
        'synth-depth-gradient': 'linear-gradient(180deg, rgba(90, 142, 240, 0.03) 0%, transparent 100%)',
        'risk-heat-gradient': 'linear-gradient(90deg, #22C55E, #84CC16, #EAB308, #F59E0B, #EF4444, #DC2626)',
      },

      backdropBlur: {
        '2xl': '40px',
        '3xl': '64px',
        'vault': '24px',
      },

      boxShadow: {
        'glass': '0 8px 32px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.15)',
        'glass-lg': '0 12px 48px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
        'glass-xl': '0 20px 60px rgba(0, 0, 0, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.25)',
        'glow-sm': `0 0 15px ${crepRgba(0.25)}`,
        'glow-md': `0 0 30px ${crepRgba(0.35)}`,
        'glow-lg': `0 0 50px ${crepRgba(0.45)}`,
        'inner-glow': `inset 0 1px 0 rgba(255, 255, 255, 0.15), inset 0 0 20px ${crepRgba(0.05)}`,
        'vault-depth': `0 4px 24px rgba(0, 0, 0, 0.3), 0 0 12px ${crepRgba(0.08)}`,
        'vault-hover': `0 8px 40px rgba(0, 0, 0, 0.35), 0 0 20px ${crepRgba(0.15)}`,
        'synth-glow': '0 0 24px rgba(90, 142, 240, 0.2), inset 0 1px 0 rgba(90, 142, 240, 0.1)',
        'oracle-confirmed': '0 0 16px rgba(255, 215, 0, 0.2)',
        'risk-critical': '0 0 20px rgba(239, 68, 68, 0.3), inset 0 0 10px rgba(239, 68, 68, 0.05)',
        'route-active': `0 0 18px ${crepRgba(0.2)}, 0 2px 8px rgba(0, 0, 0, 0.2)`,
      },

      zIndex: {
        'sidebar': '40',
        'topbar': '30',
        'modal': '50',
        'toast': '60',
        'command-palette': '70',
      },
    },
  },

  safelist: [
    { pattern: /^(text|bg|border|shadow)-risk-(healthy|caution|elevated|warning|danger|liquidation|critical)$/ },
    { pattern: /^animate-(liquidate-flash|mint-confirm|oracle-tick|route-pulse|debt-warning|vault-breathe)$/ },
  ],

  plugins: [
    plugin(function crepitusProtocolComponents({ addComponents, addUtilities, matchUtilities, addVariant, theme }) {
      addComponents({
        '.liquid-glass': {
          'background': 'rgba(255, 255, 255, 0.04)',
          'backdrop-filter': 'blur(20px)',
          '-webkit-backdrop-filter': 'blur(20px)',
          'border': '1px solid rgba(255, 255, 255, 0.08)',
          'border-radius': theme('borderRadius.card'),
        },
        '.liquid-glass-elevated': {
          'background': 'rgba(255, 255, 255, 0.06)',
          'backdrop-filter': 'blur(40px)',
          '-webkit-backdrop-filter': 'blur(40px)',
          'border': '1px solid rgba(255, 255, 255, 0.1)',
          'border-radius': theme('borderRadius.modal'),
          'box-shadow': theme('boxShadow.glass-xl'),
        },
        '.liquid-btn': {
          'background': 'rgba(255, 255, 255, 0.06)',
          'border': '1px solid rgba(255, 255, 255, 0.12)',
          'border-radius': '0.75rem',
          'padding': '0.5rem 1rem',
          'font-weight': '500',
          'transition': 'all 200ms cubic-bezier(0.16, 1, 0.3, 1)',
          '&:hover': {
            'background': 'rgba(255, 255, 255, 0.1)',
            'border-color': 'rgba(255, 255, 255, 0.2)',
          },
        },
        '.liquid-btn-primary': {
          'background': crepRgba(0.12),
          'border': `1px solid ${crepRgba(0.25)}`,
          'color': '#3a5500',
          'border-radius': '0.75rem',
          'padding': '0.5rem 1rem',
          'font-weight': '600',
          'transition': 'all 200ms cubic-bezier(0.16, 1, 0.3, 1)',
          '&:hover': {
            'background': crepRgba(0.2),
            'border-color': crepRgba(0.4),
            'box-shadow': `0 0 12px ${crepRgba(0.15)}`,
          },
        },
        '.liquid-pill-lime': {
          'background': crepRgba(0.15),
          'border': `1px solid ${crepRgba(0.25)}`,
          'color': '#3a5500',
          'border-radius': '9999px',
          'padding': '0.25rem 0.75rem',
          'font-weight': '500',
        },
        '.crep-stat-card': {
          'background': 'rgba(255, 255, 255, 0.03)',
          'backdrop-filter': 'blur(16px)',
          '-webkit-backdrop-filter': 'blur(16px)',
          'border': '1px solid rgba(255, 255, 255, 0.06)',
          'border-radius': theme('borderRadius.card'),
          'padding': theme('spacing.card-pad'),
          'transition': 'all 350ms cubic-bezier(0.16, 1, 0.3, 1)',
          '&:hover': {
            'border-color': crepRgba(0.15),
            'box-shadow': `0 4px 24px rgba(0, 0, 0, 0.2), 0 0 8px ${crepRgba(0.08)}`,
          },
        },
        '.crep-ticker-row': {
          'display': 'flex',
          'align-items': 'center',
          'gap': '0.75rem',
          'padding': '0.5rem 0.75rem',
          'border-radius': '0.5rem',
          'font-family': theme('fontFamily.mono'),
          'font-variant-numeric': 'tabular-nums',
          'transition': 'background 150ms ease',
          '&:hover': {
            'background': 'rgba(255, 255, 255, 0.04)',
          },
        },
        '.crep-position-badge': {
          'display': 'inline-flex',
          'align-items': 'center',
          'gap': '0.375rem',
          'padding': '0.25rem 0.625rem',
          'border-radius': '9999px',
          'font-size': '0.6875rem',
          'font-weight': '600',
          'letter-spacing': '0.02em',
        },
        '.crep-vault-meter': {
          'position': 'relative',
          'height': '6px',
          'border-radius': '9999px',
          'background': 'rgba(255, 255, 255, 0.08)',
          'overflow': 'hidden',
          '&::after': {
            'content': '""',
            'position': 'absolute',
            'inset': '0',
            'border-radius': '9999px',
            'background': `linear-gradient(90deg, ${crepRgba(0.6)}, ${crepRgba(0.9)})`,
            'transform': 'scaleX(var(--vault-fill, 0))',
            'transform-origin': 'left',
            'transition': 'transform 600ms cubic-bezier(0.16, 1, 0.3, 1)',
          },
        },
        '.crep-risk-indicator': {
          'width': '8px',
          'height': '8px',
          'border-radius': '50%',
          'background': 'var(--risk-color, #22C55E)',
          'box-shadow': '0 0 6px var(--risk-color, #22C55E)',
        },
        '.crep-oracle-dot': {
          'width': '6px',
          'height': '6px',
          'border-radius': '50%',
          'background': '#FFD700',
          'box-shadow': '0 0 8px rgba(255, 215, 0, 0.4)',
          'animation': 'crep-oracle-tick 1s steps(1) infinite',
        },
        '.crep-route-line': {
          'height': '2px',
          'border-radius': '1px',
          'background': `linear-gradient(90deg, transparent, ${crepRgba(0.6)}, transparent)`,
          'background-size': '200% 100%',
          'animation': 'crep-yield-flow 3s linear infinite',
        },
        '.specular-sweep': {
          'position': 'relative',
          'overflow': 'hidden',
          '&::before': {
            'content': '""',
            'position': 'absolute',
            'inset': '0',
            'background': 'linear-gradient(105deg, transparent 40%, rgba(255, 255, 255, 0.03) 45%, rgba(255, 255, 255, 0.06) 50%, rgba(255, 255, 255, 0.03) 55%, transparent 60%)',
            'transform': 'translateX(-100%)',
            'transition': 'transform 600ms ease',
          },
          '&:hover::before': {
            'transform': 'translateX(100%)',
          },
        },
        '.dot-matrix-bg': {
          'background-image': `radial-gradient(circle, ${crepRgba(0.03)} 1px, transparent 1px)`,
          'background-size': '24px 24px',
        },
      });

      addUtilities({
        '.vault-clip-hex': {
          'clip-path': 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)',
        },
        '.crep-text-gradient': {
          'background': `linear-gradient(135deg, ${crepRgba(1)}, #7C9000)`,
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
          'background-clip': 'text',
        },
        '.crep-border-gradient': {
          'border-image': `linear-gradient(135deg, ${crepRgba(0.4)}, ${crepRgba(0.1)}) 1`,
        },
        '.tabular-nums': {
          'font-variant-numeric': 'tabular-nums',
        },
        '.vault-scrollbar': {
          'scrollbar-width': 'thin',
          'scrollbar-color': `${crepRgba(0.2)} transparent`,
          '&::-webkit-scrollbar': { width: '4px' },
          '&::-webkit-scrollbar-track': { background: 'transparent' },
          '&::-webkit-scrollbar-thumb': {
            background: crepRgba(0.2),
            'border-radius': '2px',
          },
        },
        '.risk-meter-healthy': { '--risk-color': '#22C55E' },
        '.risk-meter-caution': { '--risk-color': '#84CC16' },
        '.risk-meter-elevated': { '--risk-color': '#EAB308' },
        '.risk-meter-warning': { '--risk-color': '#F59E0B' },
        '.risk-meter-danger': { '--risk-color': '#EF4444' },
        '.risk-meter-liquidation': { '--risk-color': '#DC2626' },
        '.risk-meter-critical': { '--risk-color': '#991B1B' },
      });

      matchUtilities(
        {
          'vault-fill': (value) => ({
            '--vault-fill': value,
          }),
        },
        { values: { '0': '0', '25': '0.25', '50': '0.5', '75': '0.75', '100': '1' } }
      );

      addVariant('vault-open', '&[data-vault-open="true"]');
      addVariant('agent-active', '&[data-agent-active="true"]');
      addVariant('position-profitable', '&[data-profitable="true"]');
      addVariant('position-underwater', '&[data-profitable="false"]');
      addVariant('oracle-stale', '&[data-oracle-status="stale"]');
      addVariant('oracle-fresh', '&[data-oracle-status="fresh"]');
      addVariant('route-flowing', '&[data-route-status="flowing"]');
    }),
  ],
};

export default crepitusProtocolConfig;
