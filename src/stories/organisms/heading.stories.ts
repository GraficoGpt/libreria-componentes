import type { Meta, StoryObj } from '@storybook/angular';

import { HeadingComponent } from '../../app/components/organisms/heading/heading.component';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<HeadingComponent> = {
  title: 'Organisms/Heading',
  component: HeadingComponent,
  tags: ['autodocs'],
  argTypes: {
    text: {
      description:
        'El texto que se mostrará en el título de la página',
      table: {
        type: {
          summary: 'string',
        },
      },
      control: 'text',
      defaultValue: 'Título de la página',
    },
    breadcrumb: {
      description: 'Si se muestra o no el breadcrumb',
      table: {
        type: {
          summary: 'boolean',
        },
      },
      control: 'boolean',
      defaultValue: true,
    },
    actionBtn: {
      description: 'Si se muestra o no el botón de acción',
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
type Story = StoryObj<HeadingComponent>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const SoloTitulo: Story = {
  args: {
    actionBtn: false,
    breadcrumb: false,
  },
};

export const SinBoton: Story = {
  args: {
    actionBtn: false,
  },
};

export const SinBreadcrumb: Story = {
  args: {
    breadcrumb: false,
  },
};

