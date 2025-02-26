import { createSystem, defaultConfig } from '@chakra-ui/react';

export const system = createSystem(defaultConfig, {
  theme: {
    tokens: {
      colors: {
        gray: {
          50: { value: '#fafafa' },
          100: { value: '#f4f4f5' },
          200: { value: '#e4e4e7' },
          300: { value: '#d4d4d8' },
          400: { value: '#a1a1aa' },
          500: { value: '#71717a' },
          600: { value: '#52525b' },
          700: { value: '#3f3f46' },
          800: { value: '#27272a' },
          900: { value: '#18181b' },
          950: { value: '#111111' },
        },
      },
    },
  },
  globalCss: {
    'html, body': {
      minHeight: '100vh',
      width: '100%',
      bg: 'gray.900', // ✅ Uses CSS variable to sync theme
    },
    '#root': {
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
    },
  },
});
