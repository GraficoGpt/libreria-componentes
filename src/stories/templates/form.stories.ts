import type { Meta, StoryObj } from '@storybook/angular';
import { DatosClienteComponent } from '../../app/formularios/priori-ahorro/datos-cliente/datos-cliente.component';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<DatosClienteComponent> = {
  title: 'Templates/Forms',
  component: DatosClienteComponent,
  tags: ['autodocs'],
  argTypes: {

  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: {},
};

export default meta;
type Story = StoryObj<DatosClienteComponent>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {

  },
};
