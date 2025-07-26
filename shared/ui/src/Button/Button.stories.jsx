import Button from "./Button";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: "UI Components/Button",
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
    docs: {
      description: {
        component: "Booking platform button component following Material Design 3 specifications. " +
          "Supports filled, outlined, and text variants with booking platform theming.",
      },
    },
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["filled", "outlined", "text"],
      description: "The visual variant of the button",
    },
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large"],
      description: "The size of the button",
    },
    disabled: {
      control: { type: "boolean" },
      description: "Whether the button is disabled",
    },
    fullWidth: {
      control: { type: "boolean" },
      description: "Whether the button should take full width of its container",
    },
    onClick: { action: "clicked" },
  },
  args: {
    children: "Button",
  },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Filled = {
  args: {
    variant: "filled",
    children: "Filled Button",
  },
};

export const Outlined = {
  args: {
    variant: "outlined",
    children: "Outlined Button",
  },
};

export const Text = {
  args: {
    variant: "text",
    children: "Text Button",
  },
};

export const Small = {
  args: {
    variant: "filled",
    size: "small",
    children: "Small Button",
  },
};

export const Medium = {
  args: {
    variant: "filled",
    size: "medium",
    children: "Medium Button",
  },
};

export const Large = {
  args: {
    variant: "filled",
    size: "large",
    children: "Large Button",
  },
};

export const Disabled = {
  args: {
    variant: "filled",
    disabled: true,
    children: "Disabled Button",
  },
};

export const FullWidth = {
  args: {
    variant: "filled",
    fullWidth: true,
    children: "Full Width Button",
  },
  parameters: {
    layout: "padded",
  },
};

export const WithIcons = {
  args: {
    variant: "filled",
    children: "Button with Icons",
    startIcon: "🏠",
    endIcon: "→",
  },
};

// Story showing all variants together
export const AllVariants = () => (
  <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
    <Button variant="filled">Filled</Button>
    <Button variant="outlined">Outlined</Button>
    <Button variant="text">Text</Button>
  </div>
);

AllVariants.parameters = {
  docs: {
    description: {
      story: "All button variants displayed together for comparison.",
    },
  },
};

// Story showing all sizes
export const AllSizes = () => (
  <div style={{ display: "flex", gap: "16px", alignItems: "center", flexWrap: "wrap" }}>
    <Button variant="filled" size="small">Small</Button>
    <Button variant="filled" size="medium">Medium</Button>
    <Button variant="filled" size="large">Large</Button>
  </div>
);

AllSizes.parameters = {
  docs: {
    description: {
      story: "All button sizes displayed together for comparison.",
    },
  },
};
