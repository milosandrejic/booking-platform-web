import { Typography, Container, Button } from "@booking-platform-shared/ui";

export default function Home() {
  return (
    <Container maxWidth="lg">
      <Typography variant="headlineLarge">Owner Portal Dashboard</Typography>
      <Typography variant="bodyLarge">
        Manage your properties, bookings, and guest communications.
      </Typography>
      <Typography variant="titleLarge">Quick Actions</Typography>
      <div style={{ display: "flex", gap: "16px", marginTop: "24px" }}>
        <Button variant="filled">Add New Property</Button>
        <Button variant="outlined">View Bookings</Button>
        <Button variant="text">Analytics</Button>
      </div>
      <Typography variant="bodyMedium" color="primary" style={{ marginTop: "32px" }}>
        Welcome back! You have 3 new booking requests and 2 messages waiting.
      </Typography>
    </Container>
  );
}
