/* eslint-disable no-duplicate-imports */
import { ComponentMeta, ComponentStory } from '@storybook/react'

import { Button } from './Button'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Antd/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = args => <Button {...args} />

export const Primary = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  size: 'medium',
  label: 'primary',
}

export const Default = Template.bind({})
Default.args = {
  size: 'medium',
  label: 'default',
}

export const Dashed = Template.bind({})
Dashed.args = {
  size: 'medium',
  label: 'dashed',
}

// FIXME: label 안 나오고 패딩 없는 등 문제 발생 원인 찾아서 수정할 것
export const Text = Template.bind({})
Dashed.args = {
  size: 'medium',
  label: 'text',
}

export const Link = Template.bind({})
Link.args = {
  size: 'medium',
  label: 'link',
}