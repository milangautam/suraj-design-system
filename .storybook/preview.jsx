import '../src/index.css';

/** @type { import('@storybook/react-vite').Preview } */
const preview = {
  parameters: {
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#FAFAF9' },
        { name: 'dark',  value: '#0C0A09' },
        { name: 'white', value: '#FFFFFF' },
      ],
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date:  /Date$/i,
      },
    },
    a11y: {
      test: 'todo',
    },
  },

  // Syncs the Tailwind `dark` class with the Storybook background switcher
  decorators: [
    (Story, context) => {
      const isDark = context.globals?.backgrounds?.value === '#0C0A09';
      document.documentElement.classList.toggle('dark', isDark);
      return <Story />;
    },
  ],
};

export default preview;
