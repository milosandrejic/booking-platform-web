import { Typography, Container, Button } from "@booking-platform-shared/ui";

export default function Home() {
  return (
    <Container maxWidth="lg">
      <Typography variant="h1">Owner Portal Dashboard</Typography>
      <Typography variant="body1">
        Manage your properties, bookings, and guest communications.
      </Typography>
      <Typography variant="h3">Quick Actions</Typography>
      <div style={{ display: "flex", gap: "16px", marginTop: "24px" }}>
        <Button variant="primary">Add New Property</Button>
        <Button variant="secondary">View Bookings</Button>
        <Button variant="outline">Analytics</Button>
      </div>
      <Typography variant="body2" color="secondary" style={{ marginTop: "32px" }}>
        Welcome back! You have 3 new booking requests and 2 messages waiting.
      </Typography>
    </Container>
  );
}
