import { Typography, Container, Button } from "@booking-platform-shared/ui";

export default function Home() {
  return (
    <Container maxWidth="lg">
      <Typography variant="displayMedium">Welcome to Storefront Portal</Typography>
      <Typography variant="bodyLarge">
        Find and book amazing accommodations for your next trip.
      </Typography>
      <Typography variant="headlineMedium">Featured Destinations</Typography>
      <Typography variant="bodyMedium" color="primary">
        Discover the world's most beautiful places to stay.
      </Typography>
      <Button variant="filled" size="large">
        Start Exploring
      </Button>
    </Container>
  );
}
