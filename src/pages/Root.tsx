import Box from "@mui/material/Box";
import { useState, BoxProps } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Header from "../components/Header";
import SideNavbar from "../components/SideNavbar";
import { styled } from "@mui/system";
import { Outlet } from "react-router-dom";

export default function Root() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle: any = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Box display='flex'>
      <CssBaseline />
      <Header onToggle={handleDrawerToggle} />
      <SideNavbar mobileOpen={mobileOpen} onToggle={handleDrawerToggle} />

      <Container component='main'>
        <Outlet />
      </Container>
    </Box>
  );
}

const Container = styled(Box)<BoxProps>(({ theme }) =>
  theme.unstable_sx({
    mt: 10,
    p: 3,
    width: "100%",
  })
);
