import type { Meta, StoryObj } from '@storybook/react';
import { ButtonPrimary, ButtonSecondary, ButtonAccent } from '@/components/ui/Button';

const meta = {
  title: 'UI/Button',
  component: ButtonPrimary,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'The size of the button',
    },
    fullWidth: {
      control: 'boolean',
      description: 'Whether the button should take up the full width of its container',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the button is disabled',
    },
    isLoading: {
      control: 'boolean',
      description: 'Whether to show a loading spinner',
    },
    children: {
      control: 'text',
      description: 'The content of the button',
    },
  },
} satisfies Meta<typeof ButtonPrimary>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'Primary Button',
    size: 'md',
    disabled: false,
    isLoading: false,
    fullWidth: false,
  },
};

export const Secondary: Story = {
  args: {
    ...Primary.args,
    children: 'Secondary Button',
  },
  render: (args) => <ButtonSecondary {...args} />,
};

export const Accent: Story = {
  args: {
    ...Primary.args,
    children: 'Accent Button',
  },
  render: (args) => <ButtonAccent {...args} />,
};

export const Small: Story = {
  args: {
    ...Primary.args,
    size: 'sm',
  },
};

export const Large: Story = {
  args: {
    ...Primary.args,
    size: 'lg',
  },
};

export const Loading: Story = {
  args: {
    ...Primary.args,
    isLoading: true,
  },
};

export const Disabled: Story = {
  args: {
    ...Primary.args,
    disabled: true,
  },
};

export const FullWidth: Story = {
  args: {
    ...Primary.args,
    fullWidth: true,
  },
};

export const WithIcon: Story = {
  args: {
    ...Primary.args,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
};
