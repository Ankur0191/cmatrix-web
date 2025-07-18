// components/CallToActionSection.tsx
import { Box, Button, Container, Typography } from "@mui/material";

export default function CallToActionSection() {
  return (
    <Container sx={{ mt: 12, textAlign: "center" }}>
      <Box
        sx={{
          p: 5,
          background: "rgba(255,255,255,0.06)",
          borderRadius: "18px",
          border: "1px solid rgba(255,255,255,0.1)",
        }}
      >
        <Typography variant="h5" gutterBottom>
          Ready to change your learning forever?
        </Typography>
        <Button variant="contained" size="large" sx={{ mt: 2, backgroundColor: "#00D8FF" }}>
          Get Started with CMatrix
        </Button>
      </Box>
    </Container>
  );
}
