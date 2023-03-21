import { Story, Meta } from '@storybook/angular/types-6-0';
import PersonIndex from './person-index.component';

export default {
  title: 'Example/Button',
  component: PersonIndex,
} as Meta;

const Template: Story<PersonIndex> = (args: PersonIndex) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
};
