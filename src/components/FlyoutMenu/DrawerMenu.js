import React, { useState } from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Collapse,
  Typography,
  InputBase,
  Box,
  Avatar,
  Button,
  Badge
} from "@mui/material";
import {
  Home as HomeIcon,
  Dashboard as DashboardIcon,
  People as PeopleIcon,
  ExpandLess,
  ExpandMore,
  Settings as SettingsIcon,
  Search as SearchIcon,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import profilePic from "../assets/profilePic.png";
import logo from "../assets/logo.png";
import { Notifications as NotificationsIcon, AddCircleOutline, YouTube } from "@mui/icons-material";

const Sidebar = () => {
  const [openMenus, setOpenMenus] = useState({
    members: false,
    profileAttributes: false,
  });

  const toggleMenu = (menu) => {
    setOpenMenus((prev) => ({
      ...prev,
      [menu]: !prev[menu],
    }));
  };

  const styles = {
    header: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      mb: 2,
    },
    userSection: {
      display: "flex",
      alignItems: "center",
      gap: "20px",
      marginRight: '20px'
    },

  };

  return (
    <Box>
      {/* <Box sx={{marginLeft: '50px', my: 1,  }}>
        <img src={logo} alt="Logo" style={{ width: "120px", position: 'fixed' }} />
      </Box> */}
      {/* <Box sx={styles.header}>
       
        <Box sx={styles.userSection}>
        <Button color="primary">Home</Button>
          <Button color="primary">Login</Button>
          <Button color="primary">Contact</Button>
          <Button color="primary">About Us</Button>
          <Badge color="secondary" badgeContent={4}>
            <NotificationsIcon sx={{ fontSize: "28px", color: "#0044cc" }} />
          </Badge>
          <Avatar
            src={profilePic}
            sx={{ width: 40, height: 40, border: "2px solid #0044cc" }}
          />
          <Typography variant="body2" sx={{ color: "#0044cc", fontWeight: "bold" }}>
            Welcome Back! <br />
            User Name
          </Typography>
        </Box>
      </Box> */}
    <Box sx={{ width: 250, backgroundColor: "#002B5B", color: "#fff", height: "100vh", position: "fixed", }}>
      {/* Logo */}
      {/* Profile Section */}
      <Box sx={{ textAlign: "center", mb: 2 }}>
        <Avatar
          src={profilePic}
          sx={{
            width: 80,
            height: 90,
            mx: "auto",
            mb: 1,
            border: "2px solid #fff",
          }}
        />
        <Typography variant="body1">Demo</Typography>
        <Typography variant="body2">demo@gmail.com</Typography>
      </Box>

      {/* Search */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          backgroundColor: "#003366",
          borderRadius: "20px",
          px: 1,
          py: 0.5,
          mx: 2,
          mb: 2,
        }}
      >
        <SearchIcon sx={{ color: "#fff", mr: 1 }} />
        <InputBase
          placeholder="Search in menu"
          sx={{
            color: "#fff",
            width: "100%",
          }}
        />
      </Box>

      {/* Menu List */}
      <List>
        <ListItem button component={Link} to="/" sx={{ color: "white" }}>
          <ListItemIcon>
            <HomeIcon sx={{ color: "#fff" }} />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>

        <ListItem button component={Link} to="/RightSidePage" sx={{ color: "white" }}>
          <ListItemIcon>
            <DashboardIcon sx={{ color: "#fff" }} />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>

        <ListItem button onClick={() => toggleMenu("members")} sx={{ color: "white" }}>
          <ListItemIcon>
            <PeopleIcon sx={{ color: "#fff" }} />
          </ListItemIcon>
          <ListItemText primary="Members" />
          {openMenus.members ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={openMenus.members} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button component={Link} to="/free-members" sx={{ pl: 8, color: "white" }}>
              <ListItemText primary="Free Members" />
            </ListItem>
            <ListItem button component={Link} to="/premium-members" sx={{ pl: 8, color: "white" }}>
              <ListItemText primary="Premium Members" />
            </ListItem>
          </List>
        </Collapse>

        <ListItem button onClick={() => toggleMenu("profileAttributes")} sx={{ color: "white" }}>
          <ListItemIcon>
            <SettingsIcon sx={{ color: "#fff" }} />
          </ListItemIcon>
          <ListItemText primary="Profile Attributes" />
          {openMenus.profileAttributes ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={openMenus.profileAttributes} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button component={Link} to="/religions" sx={{ pl: 8, color: "white" }}>
              <ListItemText primary="Religions" />
            </ListItem>
            <ListItem button component={Link} to="/castes" sx={{ pl: 8, color: "white" }}>
              <ListItemText primary="Castes" />
            </ListItem>
          </List>
        </Collapse>
        <ListItem button component={Link} to="/RightSidePage" sx={{ color: "white" }}>
          <ListItemIcon>
            <DashboardIcon sx={{ color: "#fff" }} />
          </ListItemIcon>
          <ListItemText primary="Jagadeesh" />
        </ListItem>

      </List>
    </Box>
    </Box>
  );
};

export default Sidebar;