import React from "react";
import { Box, Toolbar, Container } from "@mui/material";

// Define the prop types for the Layout component
interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Container fixed>
      <Box component="main" sx={{ p: 1 }}>
        <Toolbar />
        {children}
      </Box>
    </Container>
  );
};

export default Layout;
