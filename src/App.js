import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/FlyoutMenu/DrawerMenu";
import HomePage from "./components/HomePage";
import RightSidePage from "./components/RightSidePage";
import Registration from "./components/Registration";
import { Box } from "@mui/material";

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
              {/* Add additional private routes here */}
            </>
          )}
        </Routes>
      </Box>
    </Router>
  );
};

export default App;



















// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Registration from './components/Registration';
// import HowItWorks from './components/HowItWorks';
// import HappyStories from './components/HappyStories';
// import GoodPlans from './components/GoodPlans';
// import ContactUs from './components/ContactUs';
// import HomePage from './components/HomePage';
// import UserProfile from './components/UserProfile';

// function App() {
//   return (
//     <Router>
//       {/* Routes for navigation */}
     
//       <Routes>
//         <Route path="/" element={<HomePage />} />
//         <Route path="/registration" element={<Registration />} />
//          <Route path="/how-it-works" element={<HowItWorks />} /> 
//         <Route path="/happy-stories" element={<HappyStories />} />
//         <Route path="/good-plans" element={<GoodPlans />} />
//          <Route path="/contact-us" element={<ContactUs />} /> 
//       </Routes> 
//       <div >
//       {/* <HomePage/> 
//       <Registration/>  */}
//       <HowItWorks/>
//       <HappyStories/>
//       <GoodPlans/>
//       <ContactUs/>
//     </div>
//     </Router>
//   );
// }

// export default App;