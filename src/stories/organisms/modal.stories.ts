import type { Meta, StoryObj } from '@storybook/angular';

import { ModalComponent } from '../../app/components/organisms/modal/modal.component';
// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<ModalComponent> = {
  title: 'Organisms/Modal',
  component: ModalComponent,
  tags: ['autodocs'],
  argTypes: {
    isOpen: {
      description:
        'Indica si el modal está abierto o cerrado',
      table: {
        type: {
          summary: 'boolean',
        },
      },
      control: 'boolean',
      defaultValue: true,
    },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: {},
};

export default meta;
type Story = StoryObj<ModalComponent>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Overlay: Story = {
  args: {

  },
};
