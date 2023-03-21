import { Story, Meta } from '@storybook/angular/types-6-0';
import Head from './head.component';
export default {
  title: 'Example/Head',
  component: Head,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<Head> = (args: Head) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
};
