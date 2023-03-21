import { Story, Meta } from '@storybook/angular/types-6-0';
import Country from './country.component';
export default {
  title: 'Example/PersonIndex',
  component: Country,
} as Meta;

const Template: Story<Country> = (args: Country) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
};
