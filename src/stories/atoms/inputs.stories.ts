import type { Meta, StoryObj } from '@storybook/angular';

import { InputTextComponent } from '../../app/components/atoms/input-text/input-text.component';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<InputTextComponent> = {
  title: 'Atoms/Inputs',
  component: InputTextComponent,
  tags: ['autodocs'],
  argTypes: {
    labelText: { control: 'text', defaultValue: 'Nombre del usuario' },
    type: {
      control: {
        type: 'select',
        options: ['text', 'password', 'email', 'number'],
        defaultValue: 'text',
      },
    },
  },
};

export default meta;
type Story = StoryObj<InputTextComponent>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Enabled: Story = {
  args: {
    labelText: 'Nombre del usuario',
  },
};

export const Active: Story = {
  args: {
    labelText: 'Nombre del usuario',
    stateClass: 'active',
  },
};

export const Filled: Story = {
  args: {
    labelText: 'Nombre del usuario',
    value: 'Carlos Andrés Contreras',
  },
};

export const ErrorState: Story = {
  args: {
    labelText: 'Número de celular',
    value: 'Número 31699',
    stateClass: 'error'
  },
};

export const Disabled: Story = {
  args: {
    labelText: 'Nombre del usuario',
    disabled: true,
    stateClass: 'disabled',
  },
};
