import type { Meta, StoryObj } from '@storybook/angular';

import { CardComponent } from '../../app/components/molecules/card/card.component';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<CardComponent> = {
  title: 'Molecules/Card',
  component: CardComponent,
  tags: ['autodocs'],
  argTypes: {
    cardType: {
      options: ['sdp-card-primary', 'sdp-card-secondary'],
      control: { type: 'select' }
    },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { },
};

export default meta;
type Story = StoryObj<CardComponent>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    cardType: 'sdp-card-primary',
  },
};

export const Secondary: Story = {
  args: {
    cardType: 'sdp-card-secondary',
  },
};
