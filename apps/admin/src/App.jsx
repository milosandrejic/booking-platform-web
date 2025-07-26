import { ThemeProvider } from "@booking-platform-shared/theme";
import { Typography, Container, Button } from "@booking-platform-shared/ui";

function App() {
  return (
    <ThemeProvider>
      <Container maxWidth="xl">
        <Typography variant="h1">Admin Portal</Typography>
        <Typography variant="body1">
          System administration and platform management dashboard.
        </Typography>
        
        <Typography variant="h2" style={{ marginTop: "40px" }}>
          Platform Overview
        </Typography>
        
        <div style={{ 
          display: "grid", 
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", 
          gap: "16px", 
          marginTop: "24px" 
        }}>
          <div style={{ padding: "24px", backgroundColor: "#f5f5f5", borderRadius: "8px" }}>
            <Typography variant="h3">Users</Typography>
            <Typography variant="h4" color="primary">1,247</Typography>
          </div>
          <div style={{ padding: "24px", backgroundColor: "#f5f5f5", borderRadius: "8px" }}>
            <Typography variant="h3">Properties</Typography>
            <Typography variant="h4" color="primary">342</Typography>
          </div>
          <div style={{ padding: "24px", backgroundColor: "#f5f5f5", borderRadius: "8px" }}>
            <Typography variant="h3">Bookings</Typography>
            <Typography variant="h4" color="primary">5,891</Typography>
          </div>
        </div>

        <div style={{ display: "flex", gap: "16px", marginTop: "32px" }}>
          <Button variant="primary">User Management</Button>
          <Button variant="secondary">Property Approval</Button>
          <Button variant="outline">System Settings</Button>
        </div>
      </Container>
    </ThemeProvider>
  );
}

export default App;