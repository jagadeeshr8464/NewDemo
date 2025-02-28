import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/FlyoutMenu/DrawerMenu";
import HomePage from "./components/HomePage";
import RightSidePage from "./components/RightSidePage";
import Registration from "./components/Registration";
import { Box } from "@mui/material";
import HappyStories from "./components/HappyStories";
import GoodPlans from "./components/GoodPlans";
import ContactUs from "./components/ContactUs";
import AddMembers from "./components/AddMembers";
import AllBlogCategories from "./components/AllBlogCategories";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); 

  const styles = {
    content: {
      marginLeft: isLoggedIn ? "260px" : "0", 
      padding: "20px",
      backgroundColor: "#F4F6F8", 
      minHeight: "100vh",
      transition: "margin-left 0.3s ease",
    },
    fullScreen: {
      padding: "0",
      backgroundColor: "#ffffff", 
      minHeight: "100vh",
    },
  };

  return (
    <Router>
      { <Sidebar />} {/* Show sidebar only when logged in */}
      <Box
        sx={isLoggedIn ? styles.content : styles.fullScreen} 
      >
        <Routes>
          {/* Public Routes */}
           <Route path="/" element={<HomePage />} /> 
          <Route
            path="/registration"
            element={<Registration setIsLoggedIn={setIsLoggedIn} />}
          />
          <Route
            path="/login"
            element={<Registration setIsLoggedIn={setIsLoggedIn} />}
          />
          

          {/* Private Routes */}
          { (
            <>
              <Route path="/RightSidePage" element={<RightSidePage />} />
              <Route path="/HappyStories" element={<HappyStories />} />
              <Route path="/GoodPlans" element={<GoodPlans />} />
              <Route path="/ContactUs" element={<ContactUs  />} />
              <Route path="/HomePage" element={<HomePage />} />
              <Route path="/AddMembers" element={<AddMembers />} />
              <Route path="/AllBlogCategories" element={<AllBlogCategories />} />
            </>
          )}
        </Routes>
      </Box>
    </Router>
  );
};

export default App;
