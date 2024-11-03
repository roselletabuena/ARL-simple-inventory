import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { signOut } from "aws-amplify/auth";

type HeaderProps = {
  onToggle: () => void;
};

const Header: React.FC<HeaderProps> = ({ onToggle }) => {
  async function handleSignOut() {
    await signOut();
  }

  return (
    <AppBar
      position='fixed'
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
    >
      <Toolbar>
        <IconButton
          color='inherit'
          edge='start'
          onClick={onToggle}
          sx={{ mr: 2, display: { sm: "none" } }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant='h6' noWrap component='div'>
          ARL Inventory System
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexGrow: 1,
            justifyContent: "flex-end",
          }}
        >
          <Button
            type='button'
            onClick={handleSignOut}
            sx={{
              color: "white",
              borderColor: "white",
            }}
            variant='outlined'
          >
            Logout
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
