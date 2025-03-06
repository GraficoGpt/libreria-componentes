import type { Meta, StoryObj } from '@storybook/angular';

import { StepComponent } from '../../app/components/molecules/step/step.component';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<StepComponent> = {
  title: 'Molecules/Step',
  component: StepComponent,
  tags: ['autodocs'],
  argTypes: {
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { },
};

export default meta;
type Story = StoryObj<StepComponent>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {

  },
};

export const Secondary: Story = {
  args: {
  },
};
