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
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';
import WalletIcon from '@mui/icons-material/Wallet';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import GroupsIcon from '@mui/icons-material/Groups';

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
      <Box sx={{ width: 260, backgroundColor: "#002B5B", color: "#fff", height: "100vh", position: "fixed", overflowY: "auto",}}>
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
              <DashboardCustomizeIcon sx={{ color: "#fff" }} />
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
              <ListItem button component={Link} to="/premium-members" sx={{ pl: 8, color: "white" }}>
                <ListItemText primary="Bulk Members Add" />
              </ListItem>
              <ListItem button component={Link} to="/premium-members" sx={{ pl: 8, color: "white" }}>
                <ListItemText primary="Deleted Members" />
              </ListItem>
              <ListItem button component={Link} to="/premium-members" sx={{ pl: 8, color: "white" }}>
                <ListItemText primary="Reported Members" />
              </ListItem>
              <ListItem button component={Link} to="/premium-members" sx={{ pl: 8, color: "white" }}>
                <ListItemText primary="Unapproved Profile Pictures" />
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
              <ListItem button component={Link} to="/castes" sx={{ pl: 8, color: "white" }}>
                <ListItemText primary="Sub Castes" />
              </ListItem>
              <ListItem button component={Link} to="/castes" sx={{ pl: 8, color: "white" }}>
                <ListItemText primary="Member Languages" />
              </ListItem>
              <ListItem button component={Link} to="/castes" sx={{ pl: 8, color: "white" }}>
                <ListItemText primary="Countries" />
              </ListItem>
              <ListItem button component={Link} to="/castes" sx={{ pl: 8, color: "white" }}>
                <ListItemText primary="State" />
              </ListItem>
              <ListItem button component={Link} to="/castes" sx={{ pl: 8, color: "white" }}>
                <ListItemText primary="City" />
              </ListItem>
              <ListItem button component={Link} to="/castes" sx={{ pl: 8, color: "white" }}>
                <ListItemText primary="On Behalf" />
              </ListItem>
              <ListItem button component={Link} to="/castes" sx={{ pl: 8, color: "white" }}>
                <ListItemText primary="Family Values" />
              </ListItem>
              <ListItem button component={Link} to="/castes" sx={{ pl: 8, color: "white" }}>
                <ListItemText primary="Family Status" />
              </ListItem>
              <ListItem button component={Link} to="/castes" sx={{ pl: 8, color: "white" }}>
                <ListItemText primary="Marital Statuses" />
              </ListItem>
              <ListItem button component={Link} to="/castes" sx={{ pl: 8, color: "white" }}>
                <ListItemText primary="Profile Sections" />
              </ListItem>
            </List>
          </Collapse>

          <ListItem button component={Link} to="/RightSidePage" sx={{ color: "white" }}>
            <ListItemIcon>
              <DashboardCustomizeIcon sx={{ color: "#fff" }} />
            </ListItemIcon>
            <ListItemText primary="Premimum Package" />
          </ListItem>

          <ListItem button component={Link} to="/RightSidePage" sx={{ color: "white" }}>
            <ListItemIcon>
              <DashboardCustomizeIcon sx={{ color: "#fff" }} />
            </ListItemIcon>
            <ListItemText primary="Packages Payments" />
          </ListItem>

          <ListItem button onClick={() => toggleMenu("profileAttributes")} sx={{ color: "white" }}>
            <ListItemIcon>
              <WalletIcon sx={{ color: "#fff" }} />
            </ListItemIcon>
            <ListItemText primary="Wallet" />
            {openMenus.profileAttributes ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={openMenus.profileAttributes} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button component={Link} to="/religions" sx={{ pl: 8, color: "white" }}>
                <ListItemText primary="Wallet Transaction History" />
              </ListItem>
              <ListItem button component={Link} to="/castes" sx={{ pl: 8, color: "white" }}>
                <ListItemText primary="Manual Wallet Recharge Requests" />
              </ListItem>
            </List>
          </Collapse>

          <ListItem button component={Link} to="/HappyStories" sx={{ color: "white" }}>
            <ListItemIcon>
              <DashboardCustomizeIcon sx={{ color: "#fff" }} />
            </ListItemIcon>
            <ListItemText primary="Happy Stories" />
          </ListItem>

          <ListItem button onClick={() => toggleMenu("profileAttributes")} sx={{ color: "white" }}>
            <ListItemIcon>
              <ShowChartIcon sx={{ color: "#fff" }} />
            </ListItemIcon>
            <ListItemText primary="Blog System" />
            {openMenus.profileAttributes ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={openMenus.profileAttributes} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button component={Link} to="/religions" sx={{ pl: 8, color: "white" }}>
                <ListItemText primary="All Posts" />
              </ListItem>
              <ListItem button component={Link} to="/castes" sx={{ pl: 8, color: "white" }}>
                <ListItemText primary="Categories" />
              </ListItem>
            </List>
          </Collapse>

          <ListItem button onClick={() => toggleMenu("profileAttributes")} sx={{ color: "white" }}>
            <ListItemIcon>
              <ShowChartIcon sx={{ color: "#fff" }} />
            </ListItemIcon>
            <ListItemText primary="Marketing" />
            {openMenus.profileAttributes ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={openMenus.profileAttributes} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button component={Link} to="/religions" sx={{ pl: 8, color: "white" }}>
                <ListItemText primary="News Letter" />
              </ListItem>
            </List>
          </Collapse>

          <ListItem button component={Link} to="/HappyStories" sx={{ color: "white" }}>
            <ListItemIcon>
              <NotificationsIcon sx={{ color: "#fff" }} />
            </ListItemIcon>
            <ListItemText primary="Contact Us Queries" />
          </ListItem>

          <ListItem button component={Link} to="/HappyStories" sx={{ color: "white" }}>
            <ListItemIcon>
              <DashboardIcon sx={{ color: "#fff" }} />
            </ListItemIcon>
            <ListItemText primary="All Uploaded files" />
          </ListItem>

          <ListItem button onClick={() => toggleMenu("profileAttributes")} sx={{ color: "white" }}>
            <ListItemIcon>
              <SettingsIcon sx={{ color: "#fff" }} />
            </ListItemIcon>
            <ListItemText primary="Website Setups" />
            {openMenus.profileAttributes ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={openMenus.profileAttributes} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button component={Link} to="/religions" sx={{ pl: 8, color: "white" }}>
                <ListItemText primary="Header" />
              </ListItem>
              <ListItem button component={Link} to="/castes" sx={{ pl: 8, color: "white" }}>
                <ListItemText primary="Footer" />
              </ListItem>
              <ListItem button component={Link} to="/castes" sx={{ pl: 8, color: "white" }}>
                <ListItemText primary="pages" />
              </ListItem>
              <ListItem button component={Link} to="/castes" sx={{ pl: 8, color: "white" }}>
                <ListItemText primary="Appearance" />
              </ListItem>
            </List>
          </Collapse>

          <ListItem button onClick={() => toggleMenu("profileAttributes")} sx={{ color: "white" }}>
            <ListItemIcon>
              <SettingsIcon sx={{ color: "#fff" }} />
            </ListItemIcon>
            <ListItemText primary="Settings" />
            {openMenus.profileAttributes ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={openMenus.profileAttributes} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button component={Link} to="/religions" sx={{ pl: 8, color: "white" }}>
                <ListItemText primary="General Settings" />
              </ListItem>
              <ListItem button component={Link} to="/castes" sx={{ pl: 8, color: "white" }}>
                <ListItemText primary="Language" />
              </ListItem>
              <ListItem button component={Link} to="/castes" sx={{ pl: 8, color: "white" }}>
                <ListItemText primary="Currency" />
              </ListItem>
              <ListItem button component={Link} to="/castes" sx={{ pl: 8, color: "white" }}>
                <ListItemText primary="Payment Methods" />
              </ListItem>
              <ListItem button component={Link} to="/castes" sx={{ pl: 8, color: "white" }}>
                <ListItemText primary="SMTP Settings" />
              </ListItem>
              <ListItem button component={Link} to="/castes" sx={{ pl: 8, color: "white" }}>
                <ListItemText primary="Third Party Settings" />
              </ListItem>
              <ListItem button component={Link} to="/castes" sx={{ pl: 8, color: "white" }}>
                <ListItemText primary="Social Media Login" />
              </ListItem>
              <ListItem button component={Link} to="/castes" sx={{ pl: 8, color: "white" }}>
                <ListItemText primary="Firebase Push Notification" />
              </ListItem>
            </List>
          </Collapse>

          <ListItem button onClick={() => toggleMenu("profileAttributes")} sx={{ color: "white" }}>
            <ListItemIcon>
              <GroupsIcon sx={{ color: "#fff" }} />
            </ListItemIcon>
            <ListItemText primary="Staffs" />
            {openMenus.profileAttributes ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={openMenus.profileAttributes} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button component={Link} to="/religions" sx={{ pl: 8, color: "white" }}>
                <ListItemText primary="All Staffs" />
              </ListItem>
              <ListItem button component={Link} to="/castes" sx={{ pl: 8, color: "white" }}>
                <ListItemText primary="Staffs Roles" />
              </ListItem>
            </List>
          </Collapse>     

          <ListItem button onClick={() => toggleMenu("profileAttributes")} sx={{ color: "white" }}>
            <ListItemIcon>
              <SettingsIcon sx={{ color: "#fff" }} />
            </ListItemIcon>
            <ListItemText primary="Systems" />
            {openMenus.profileAttributes ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={openMenus.profileAttributes} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button component={Link} to="/religions" sx={{ pl: 8, color: "white" }}>
                <ListItemText primary="Updates" />
              </ListItem>
              <ListItem button component={Link} to="/castes" sx={{ pl: 8, color: "white" }}>
                <ListItemText primary="Server Status" />
              </ListItem>
            </List>
          </Collapse>   

          <ListItem button component={Link} to="/HappyStories" sx={{ color: "white" }}>
            <ListItemIcon>
              <DashboardIcon sx={{ color: "#fff" }} />
            </ListItemIcon>
            <ListItemText primary="Addon Manager" />
          </ListItem>  

        </List>
      </Box>
    </Box>
  );
};

export default Sidebar;