import { ThemeProvider } from "@booking-platform-shared/theme";
import { Typography, Container, Button } from "@booking-platform-shared/ui";

function App() {
  return (
    <ThemeProvider>
      <Container maxWidth="xl">
        <Typography variant="headlineLarge">Admin Portal</Typography>
        <Typography variant="bodyLarge">
          System administration and platform management dashboard.
        </Typography>
        
        <Typography variant="headlineMedium" style={{ marginTop: "40px" }}>
          Platform Overview
        </Typography>
        
        <div style={{ 
          display: "grid", 
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", 
          gap: "16px", 
          marginTop: "24px" 
        }}>
          <div style={{ padding: "24px", backgroundColor: "#f5f5f5", borderRadius: "8px" }}>
            <Typography variant="titleLarge">Users</Typography>
            <Typography variant="headlineSmall" color="primary">1,247</Typography>
          </div>
          <div style={{ padding: "24px", backgroundColor: "#f5f5f5", borderRadius: "8px" }}>
            <Typography variant="titleLarge">Properties</Typography>
            <Typography variant="headlineSmall" color="primary">342</Typography>
          </div>
          <div style={{ padding: "24px", backgroundColor: "#f5f5f5", borderRadius: "8px" }}>
            <Typography variant="titleLarge">Bookings</Typography>
            <Typography variant="headlineSmall" color="primary">5,891</Typography>
          </div>
        </div>

        <div style={{ display: "flex", gap: "16px", marginTop: "32px" }}>
          <Button variant="filled">User Management</Button>
          <Button variant="outlined">Property Approval</Button>
          <Button variant="text">System Settings</Button>
        </div>
      </Container>
    </ThemeProvider>
  );
}

export default App;