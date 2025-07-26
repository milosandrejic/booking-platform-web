import Container from "./Container";
import Typography from "../Typography/Typography";

export default {
  title: "Layout/Container",
  component: Container,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: "Booking platform responsive container component providing layout containers " +
          "with configurable max widths and spacing for consistent page layouts.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    maxWidth: {
      control: { type: "select" },
      options: [
        "xs",
        "sm",
        "md",
        "lg",
        "xl",
        false,
      ],
      description: "The maximum width of the container",
    },
    fixed: {
      control: { type: "boolean" },
      description: "If true, the container will have a fixed width instead of responsive",
    },
    disableGutters: {
      control: { type: "boolean" },
      description: "If true, removes the horizontal padding",
    },
  },
  args: {
    children: (
      <div style={{ backgroundColor: "#e3f2fd", padding: "20px", borderRadius: "8px" }}>
        <Typography variant="titleLarge">Container Content</Typography>
        <Typography variant="bodyMedium">
          This is content inside a Container component. The container provides responsive spacing
          and maximum width constraints following Material Design 3 guidelines.
        </Typography>
      </div>
    ),
  },
};

export const Default = {
  args: {},
};

export const ExtraSmall = {
  args: {
    maxWidth: "xs",
  },
};

export const Small = {
  args: {
    maxWidth: "sm",
  },
};

export const Medium = {
  args: {
    maxWidth: "md",
  },
};

export const Large = {
  args: {
    maxWidth: "lg",
  },
};

export const ExtraLarge = {
  args: {
    maxWidth: "xl",
  },
};

export const NoMaxWidth = {
  args: {
    maxWidth: false,
  },
};

export const Fixed = {
  args: {
    maxWidth: "md",
    fixed: true,
  },
};

export const NoGutters = {
  args: {
    maxWidth: "md",
    disableGutters: true,
  },
};

// Demo showing different max widths
export const AllSizes = () => (
  <div style={{ display: "flex", flexDirection: "column", gap: "20px", padding: "20px" }}>
    {[
      "xs",
      "sm", 
      "md",
      "lg",
      "xl",
    ].map(size => (
      <Container key={size} maxWidth={size}>
        <div style={{ 
          backgroundColor: "#e3f2fd", 
          padding: "16px", 
          borderRadius: "8px",
          textAlign: "center" 
        }}>
          <Typography variant="titleMedium">maxWidth="{size}"</Typography>
        </div>
      </Container>
    ))}
  </div>
);

AllSizes.parameters = {
  docs: {
    description: {
      story: "Demonstration of all container sizes showing how max width affects the layout.",
    },
  },
};

// Content demo
export const ContentExample = () => (
  <Container maxWidth="lg">
    <div style={{ padding: "40px 0" }}>
      <Typography variant="displayMedium" style={{ marginBottom: "24px" }}>
        Welcome to Our Platform
      </Typography>
      
      <Typography variant="bodyLarge" style={{ marginBottom: "32px" }}>
        This is an example of content within a Container component. The container provides
        responsive spacing and ensures content doesn't become too wide on large screens,
        maintaining optimal readability.
      </Typography>
      
      <div style={{ 
        display: "grid", 
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", 
        gap: "24px",
        marginBottom: "32px"
      }}>
        {[1, 2, 3].map(num => (
          <div 
            key={num}
            style={{ 
              backgroundColor: "#f5f5f5", 
              padding: "24px", 
              borderRadius: "12px" 
            }}
          >
            <Typography variant="titleMedium" style={{ marginBottom: "8px" }}>
              Feature {num}
            </Typography>
            <Typography variant="bodyMedium">
              Description of feature {num} and its benefits for users of the platform.
            </Typography>
          </div>
        ))}
      </div>
      
      <Typography variant="bodyMedium" color="textSecondary">
        Container components help maintain consistent spacing and layout across different screen sizes.
      </Typography>
    </div>
  </Container>
);

ContentExample.parameters = {
  docs: {
    description: {
      story: "Example of real content layout using the Container component.",
    },
  },
};
