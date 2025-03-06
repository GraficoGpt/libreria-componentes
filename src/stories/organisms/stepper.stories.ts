import type { Meta, StoryObj } from '@storybook/angular';

import { StepperComponent } from '../../app/components/organisms/stepper/stepper.component';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<StepperComponent> = {
  title: 'Organisms/Stepper',
  component: StepperComponent,
  tags: ['autodocs'],
  argTypes: {
    steps: {
      description:
        'La cantidad de pasos que tiene el stepper, cada paso tiene un título y un subtítulo, se entregan en un array de objetos',
      table: {
        type: {
          summary: 'Array<{ title: string; subtitle: string }>',
        },
      },
      control: 'object',
      defaultValue: [
        { title: 'Título 1', subtitle: 'Subtítulo 1' },
        { title: 'Título 2', subtitle: 'Subtítulo 2' },
      ],
    },
    currentStep: {
      description: 'El indice del paso actual en el stepper',
      table: {
        type: {
          summary: 'number',
        },
      },
      control: 'number',
      defaultValue: 2,
    },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: {},
};

export default meta;
type Story = StoryObj<StepperComponent>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const DosPasos: Story = {
  args: {
    steps: [
      { title: 'Título 1', subtitle: 'Subtítulo 1' },
      { title: 'Título 2', subtitle: 'Subtítulo 2' },
    ],
    currentStep: 0,
  },
};

export const TresPasos: Story = {
  args: {
    steps: [
      { title: 'Título 1', subtitle: 'Subtítulo 1' },
      { title: 'Título 2', subtitle: 'Subtítulo 2' },
      { title: 'Título 3', subtitle: 'Subtítulo 3' },
    ],
    currentStep: 0,
  },
};

export const CincoPasos: Story = {
  args: {
    steps: [
      { title: 'Título 1', subtitle: 'Subtítulo 1' },
      { title: 'Título 2', subtitle: 'Subtítulo 2' },
      { title: 'Título 3', subtitle: 'Subtítulo 3' },
      { title: 'Título 4', subtitle: 'Subtítulo 4' },
      { title: 'Título 5', subtitle: 'Subtítulo 5' },
    ],
    currentStep: 0,
  },
};


