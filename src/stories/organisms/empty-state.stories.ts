import type { Meta, StoryObj } from '@storybook/angular';

import { EmptyStateComponent } from '../../app/components/organisms/empty-state/empty-state.component';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<EmptyStateComponent> = {
  title: 'Organisms/Empty State',
  component: EmptyStateComponent,
  tags: ['autodocs'],
  argTypes: {

  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: {},
};

export default meta;
type Story = StoryObj<EmptyStateComponent>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {

  },
};
