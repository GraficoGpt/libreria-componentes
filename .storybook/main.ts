import type { StorybookConfig } from '@storybook/angular';

const config: StorybookConfig = {
  // stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)' ],
  stories: ['../src/stories/**/*.stories.@(js|jsx|mjs|ts|tsx)' ],
  addons: [
    '@storybook/addon-onboarding',
    '@storybook/addon-essentials',
    '@chromatic-com/storybook',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/angular',
    options: {},
  },
  staticDirs: ['../src/assets'],
};
export default config;
