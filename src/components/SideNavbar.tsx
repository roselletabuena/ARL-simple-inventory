import React from "react";
import {
  Box,
  Drawer,
  Toolbar,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  Divider,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import ReceiptIcon from "@mui/icons-material/Receipt";

type SideNavbarProps = {
  mobileOpen: boolean;
  onToggle: () => void;
};

const SideNavbar: React.FC<SideNavbarProps> = ({ mobileOpen, onToggle }) => {
  const drawerWidth = 240;

  const pages = [
    {
      text: "Invoice Builder",
      icon: <ReceiptIcon />,
      path: "/invoice_builder",
    },
    { text: "Products", icon: <Inventory2Icon />, path: "/products" },
    // { text: "Orders", icon: <ViewQuiltIcon />, path: "/orders" },
    // { text: "Point of Sale", icon: <ShoppingCartIcon />, path: "/POS" },
    // { text: "Receipts", icon: <Info />, path: "/about" },
  ];

  const drawer = (
    <div>
      <Toolbar>
        <Typography variant='h6' noWrap>
          My App
        </Typography>
      </Toolbar>
      <Divider />
      <List>
        {pages.map((page) => (
          <ListItem key={page.text} disablePadding>
            <NavLink
              to={page.path}
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              <ListItemIcon>{page.icon}</ListItemIcon>
              <ListItemText primary={page.text} />
            </NavLink>
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <Box
      component='nav'
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
      aria-label='sidebar'
    >
      <Drawer
        variant='temporary'
        open={mobileOpen}
        onClose={onToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
          },
        }}
      >
        {drawer}
      </Drawer>

      <Drawer
        variant='permanent'
        sx={{
          display: { xs: "none", sm: "block" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
          },
        }}
        open
      >
        {drawer}
      </Drawer>
    </Box>
  );
};

export default SideNavbar;
