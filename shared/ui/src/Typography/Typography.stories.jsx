import Typography from "./Typography";

export default {
  title: "UI Components/Typography",
  component: Typography,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: "Booking platform typography component implementing the complete MD3 type scale. " +
          "Includes display, headline, title, body, and label variants for consistent text styling.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: [
        "displayLarge",
        "displayMedium", 
        "displaySmall",
        "headlineLarge",
        "headlineMedium",
        "headlineSmall",
        "titleLarge",
        "titleMedium",
        "titleSmall",
        "bodyLarge",
        "bodyMedium",
        "bodySmall",
        "labelLarge",
        "labelMedium",
        "labelSmall",
      ],
      description: "The typography variant following the booking platform type scale",
    },
    color: {
      control: { type: "select" },
      options: [
        "primary",
        "secondary",
        "textPrimary",
        "textSecondary",
        "error",
      ],
      description: "The color of the text",
    },
    component: {
      control: { type: "select" },
      options: [
        "h1",
        "h2",
        "h3",
        "h4",
        "h5",
        "h6",
        "p",
        "span",
        "div",
      ],
      description: "The HTML element to render",
    },
  },
  args: {
    children: "Typography Text",
  },
};

// Display styles
export const DisplayLarge = {
  args: {
    variant: "displayLarge",
    children: "Display Large",
  },
};

export const DisplayMedium = {
  args: {
    variant: "displayMedium",
    children: "Display Medium",
  },
};

export const DisplaySmall = {
  args: {
    variant: "displaySmall",
    children: "Display Small",
  },
};

// Headline styles
export const HeadlineLarge = {
  args: {
    variant: "headlineLarge",
    children: "Headline Large",
  },
};

export const HeadlineMedium = {
  args: {
    variant: "headlineMedium",
    children: "Headline Medium",
  },
};

export const HeadlineSmall = {
  args: {
    variant: "headlineSmall",
    children: "Headline Small",
  },
};

// Title styles
export const TitleLarge = {
  args: {
    variant: "titleLarge",
    children: "Title Large",
  },
};

export const TitleMedium = {
  args: {
    variant: "titleMedium",
    children: "Title Medium",
  },
};

export const TitleSmall = {
  args: {
    variant: "titleSmall",
    children: "Title Small",
  },
};

// Body styles
export const BodyLarge = {
  args: {
    variant: "bodyLarge",
    children: "Body Large - This is the main reading text size, optimized for comfortable reading.",
  },
};

export const BodyMedium = {
  args: {
    variant: "bodyMedium",
    children: "Body Medium - This is slightly smaller body text for secondary content.",
  },
};

export const BodySmall = {
  args: {
    variant: "bodySmall",
    children: "Body Small - This is the smallest body text size for captions and fine print.",
  },
};

// Label styles
export const LabelLarge = {
  args: {
    variant: "labelLarge",
    children: "Label Large",
  },
};

export const LabelMedium = {
  args: {
    variant: "labelMedium",
    children: "Label Medium",
  },
};

export const LabelSmall = {
  args: {
    variant: "labelSmall",
    children: "Label Small",
  },
};

// Color variants
export const Colors = () => (
  <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
    <Typography variant="bodyLarge" color="primary">Primary Color</Typography>
    <Typography variant="bodyLarge" color="secondary">Secondary Color</Typography>
    <Typography variant="bodyLarge" color="textPrimary">Text Primary</Typography>
    <Typography variant="bodyLarge" color="textSecondary">Text Secondary</Typography>
    <Typography variant="bodyLarge" color="error">Error Color</Typography>
  </div>
);

// Complete type scale showcase
export const TypeScale = () => (
  <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
    <div>
      <Typography variant="titleMedium" color="textSecondary">Display</Typography>
      <Typography variant="displayLarge">Display Large</Typography>
      <Typography variant="displayMedium">Display Medium</Typography>
      <Typography variant="displaySmall">Display Small</Typography>
    </div>
    
    <div>
      <Typography variant="titleMedium" color="textSecondary">Headline</Typography>
      <Typography variant="headlineLarge">Headline Large</Typography>
      <Typography variant="headlineMedium">Headline Medium</Typography>
      <Typography variant="headlineSmall">Headline Small</Typography>
    </div>
    
    <div>
      <Typography variant="titleMedium" color="textSecondary">Title</Typography>
      <Typography variant="titleLarge">Title Large</Typography>
      <Typography variant="titleMedium">Title Medium</Typography>
      <Typography variant="titleSmall">Title Small</Typography>
    </div>
    
    <div>
      <Typography variant="titleMedium" color="textSecondary">Body</Typography>
      <Typography variant="bodyLarge">Body Large</Typography>
      <Typography variant="bodyMedium">Body Medium</Typography>
      <Typography variant="bodySmall">Body Small</Typography>
    </div>
    
    <div>
      <Typography variant="titleMedium" color="textSecondary">Label</Typography>
      <Typography variant="labelLarge">Label Large</Typography>
      <Typography variant="labelMedium">Label Medium</Typography>
      <Typography variant="labelSmall">Label Small</Typography>
    </div>
  </div>
);

TypeScale.parameters = {
  docs: {
    description: {
      story: "Complete booking platform type scale showing all typography variants organized by category.",
    },
  },
};
