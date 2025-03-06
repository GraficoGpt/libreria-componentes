import type { Meta, StoryObj } from '@storybook/angular';

import { ToastComponent } from '../../app/components/organisms/toast/toast.component';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<ToastComponent> = {
  title: 'Organisms/Toast',
  component: ToastComponent,
  tags: ['autodocs'],
  argTypes: {
    type: {
      description:
        'Tipo de toast',
      table: {
        type: {
          summary: 'string',
        },
        defaultValue: {
          summary: 'info',
        },
      },
      control: {
        type: 'select',
        options: ['info', 'success', 'warning', 'error'],
      },
    },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: {},
};

export default meta;
type Story = StoryObj<ToastComponent>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Info: Story = {
  args: {
    type: 'info',
  },
};

export const Warning: Story = {
  args: {
    type: 'warning',
  },
};

export const ErrorT: Story = {
  args: {
    type: 'error',
  },
};

export const Success: Story = {
  args: {
    type: 'success',
  },
};

