import { Typography, Container, Button } from "@booking-platform-shared/ui";

export default function Home() {
  return (
    <Container maxWidth="lg">
      <Typography variant="h1">Welcome to Storefront Portal</Typography>
      <Typography variant="body1">
        Find and book amazing accommodations for your next trip.
      </Typography>
      <Typography variant="h2">Featured Destinations</Typography>
      <Typography variant="body2" color="secondary">
        Discover the world's most beautiful places to stay.
      </Typography>
      <Button variant="primary" size="large">
        Start Exploring
      </Button>
    </Container>
  );
}
