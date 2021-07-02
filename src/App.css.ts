import { keyframes, style, composeStyles } from '@vanilla-extract/css'
import { atoms } from './sprinkles.css'

export const App = style(
  {
    textAlign: 'center',
  },
  'App',
)

export const AooLogoSpin = keyframes(
  {
    from: {
      transform: 'rorate(0deg)',
    },
    to: {
      transform: 'rorate(360deg)',
    },
  },
  'AooLogoSpin',
)

export const AppLogo = style(
  {
    height: '40vmin',
    pointerEvents: 'none',
    '@media': {
      'prefers-reduced-motion: no-preference': {
        animation: `${AooLogoSpin} infinite 20s linear`,
      },
    },
  },
  'AppLogo',
)
export const AppHeader = style(
  {
    backgroundColor: 'violet',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 'calc(10px + 2vmin)',
    color: 'white',
  },
  'AppHeader',
)
export const AppLink = style(
  {
    color: '#61dafb',
  },
  'AppLink',
)
export const Button = style(
  {
    fontSize: 'calc(10px + 2vmin)',
  },
  'Button',
)

export const card = composeStyles(
  atoms({
    background: {
      lightMode: 'green-50',
      darkMode: 'gray-800',
    },
    borderRadius: {
      mobile: '4x',
      desktop: '5x',
    },
    padding: {
      mobile: '7x',
      desktop: '8x',
    },
  }),
  style({
    transition: 'transform 4s ease-in-out',
    ':hover': {
      cursor: 'default',
      transform: 'scale(2) rotate(720deg)',
    },
  }),
)
