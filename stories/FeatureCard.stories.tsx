import type { Meta, StoryObj } from '@storybook/react';
import FeatureCard from '@/components/ui/FeatureCard';
import { ButtonPrimary } from '@/components/ui/Button';

const meta = {
  title: 'UI/FeatureCard',
  component: FeatureCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: 'Card title',
    },
    description: {
      control: 'text',
      description: 'Card description',
    },
    badge: {
      control: 'text',
      description: 'Optional badge text to show in the corner',
    },
    featured: {
      control: 'boolean',
      description: 'Whether this is a featured/highlighted card',
    },
    href: {
      control: 'text',
      description: 'Optional link for the entire card',
    },
    iconBgColor: {
      control: 'color',
      description: 'Background color for the icon container',
    },
  },
} satisfies Meta<typeof FeatureCard>;

export default meta;
type Story = StoryObj<typeof meta>;

// Icon for examples
const ExampleIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6 text-accent"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M13 10V3L4 14h7v7l9-11h-7z"
    />
  </svg>
);

export const Default: Story = {
  args: {
    title: 'Feature Title',
    description:
      'This is a brief description of the feature or service being offered. It explains the value proposition in a concise way.',
    icon: <ExampleIcon />,
    iconBgColor: 'bg-accent/10',
  },
};

export const WithBadge: Story = {
  args: {
    ...Default.args,
    badge: 'Popular',
  },
};

export const Featured: Story = {
  args: {
    ...Default.args,
    featured: true,
  },
};

export const WithFooter: Story = {
  args: {
    ...Default.args,
    footer: <ButtonPrimary size="sm">Learn More</ButtonPrimary>,
  },
};

export const AsLink: Story = {
  args: {
    ...Default.args,
    href: '#',
  },
};

export const NoIcon: Story = {
  args: {
    title: 'No Icon Card',
    description: "This card doesn't have an icon, showing how the component looks without one.",
  },
};
