import type { Meta, StoryObj } from '@storybook/angular';
import { fn } from '@storybook/test';

import { ButtonComponent } from '../../app/components/atoms/button/button.component';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<ButtonComponent> = {
  title: 'Atoms/Button',
  component: ButtonComponent,
  tags: ['autodocs'],
  argTypes: {
    onClick: { action: 'clicked' },
    buttontext: { control: 'text', defaultValue: 'Button' },
    size: {
      control: {
        type: 'select',
        options: ['sdp-btn--small', 'sdp-btn--medium', 'sdp-btn--large'],
      },
    },
    type: {
      control: {
        type: 'select',
        options: ['sdp-btn--primary', 'sdp-btn--secondary', 'sdp-btn--text'],
      },
    },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
};

export default meta;
type Story = StoryObj<ButtonComponent>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    type: 'sdp-btn--primary',
  },
};

export const Secondary: Story = {
  args: {
    type: 'sdp-btn--secondary',
  },
};

export const Text: Story = {
  args: {
    type: 'sdp-btn--text',
  },
};
