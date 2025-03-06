import type { Meta, StoryObj } from '@storybook/angular';

import { ChipsComponent } from '../../app/components/molecules/chips/chips.component';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<ChipsComponent> = {
  title: 'Molecules/Chips',
  component: ChipsComponent,
  tags: ['autodocs'],
  argTypes: {
    chipState: {
      options: ['enabled', 'hover', 'active', 'disabled'],
      control: { type: 'select' }
    },
    chipText: {
      control: { type: 'text' }
    },
    chipIcon: {
      control: { type: 'text' }
    }
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { },
};

export default meta;
type Story = StoryObj<ChipsComponent>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Enabled: Story = {
  args: {
    chipState: 'enabled',
  },
};

export const Active: Story = {
  args: {
    chipState: 'active',
  },
};

export const Disable: Story = {
  args: {
    chipState: 'disabled',
  },
};

