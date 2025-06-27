import type { Meta, StoryObj } from '@storybook/react';
import PageSection from '@/components/layout/PageSection';

const meta = {
  title: 'Layout/PageSection',
  component: PageSection,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    background: {
      control: 'select',
      options: ['white', 'light', 'accent', 'dark'],
      description: 'Background color of the section',
    },
    width: {
      control: 'select',
      options: ['narrow', 'wide', 'full'],
      description: 'Width of the content within the section',
    },
    padding: {
      control: 'select',
      options: ['small', 'normal', 'large'],
      description: 'Amount of padding around the content',
    },
    centered: {
      control: 'boolean',
      description: 'Whether to center the content horizontally',
    },
    animate: {
      control: 'boolean',
      description: 'Whether to animate the section on scroll',
    },
    animationDelay: {
      control: 'number',
      description: 'Delay for the animation in ms',
    },
  },
} satisfies Meta<typeof PageSection>;

export default meta;
type Story = StoryObj<typeof meta>;

// Example content for demonstration
const ExampleContent = () => (
  <div>
    <h2 className="text-3xl font-bold mb-6">Section Heading</h2>
    <p className="text-lg mb-8">
      This is an example of content that would typically go inside a PageSection component. The
      PageSection handles the layout, background, and spacing while you focus on the content.
    </p>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {[1, 2, 3].map((item) => (
        <div key={item} className="border border-gray-200 rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-3">Feature {item}</h3>
          <p>Sample feature description that highlights the value proposition.</p>
        </div>
      ))}
    </div>
  </div>
);

export const Default: Story = {
  args: {
    background: 'white',
    width: 'wide',
    padding: 'normal',
    centered: false,
    animate: false,
    children: <ExampleContent />,
  },
};

export const LightBackground: Story = {
  args: {
    ...Default.args,
    background: 'light',
  },
};

export const DarkBackground: Story = {
  args: {
    ...Default.args,
    background: 'dark',
  },
};

export const AccentBackground: Story = {
  args: {
    ...Default.args,
    background: 'accent',
  },
};

export const NarrowWidth: Story = {
  args: {
    ...Default.args,
    width: 'narrow',
  },
};

export const Centered: Story = {
  args: {
    ...Default.args,
    centered: true,
  },
};

export const LargePadding: Story = {
  args: {
    ...Default.args,
    padding: 'large',
  },
};
