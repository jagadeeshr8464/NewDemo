import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import northPic from "../assets/northPic.png";
import southindian from "../assets/southindian.png";
import kerala_home from "../assets/kerala_home.png";
import andhrabackgroungimage from "../assets/andhrabackgroungimage.png";
import karnatakabackgroundimage from "../assets/karnatakabackgroundimage.png";

// Map regions to background images
const regionBackgrounds = {
  NorthIndia: northPic,
  TamilNadu: southindian,
  Kerala: kerala_home,
  Hyderabad: andhrabackgroungimage,
  Karnataka: karnatakabackgroundimage,
};

const AuthLayout = ({ children }) => {
  const navigate = useNavigate();

  // Get selected region from sessionStorage (fallback to NorthIndia)
  const selectedRegion = sessionStorage.getItem("selectedRegion") || "NorthIndia";
  const selectedBg = regionBackgrounds[selectedRegion] || northPic; // Default to NorthIndia
  const isNorthIndia = selectedRegion === "NorthIndia"; // Check if the selected region is NorthIndia

  const styles = {
    body: {
      margin: 0,
      padding: 0,
      width: "100vw",
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontFamily: "Arial, sans-serif",
      backgroundColor: "#fff",
    },
    app: {
      width: "100vw",
      height: "100vh",
      display: "flex",
      borderRadius: "10px",
      overflow: "hidden",
      boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)",
      position: "relative",
    },
    nav: {
      position: "absolute",
      top: "20px",
      left: "20px",
      right: "20px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      zIndex: 10,
    },
    navLogo: {
      display: "flex",
      alignItems: "center",
      gap: "20px",
    },
    navLogoImg: {
      width: "100px",
    },
    navLinks: {
      display: "flex",
      gap: "40px",
      marginLeft: 120,
    },
    navLink: {
      textDecoration: "none",
      fontSize: "16px",
      color: "#fff",
      fontWeight: "bold",
      cursor: "pointer",
    },
    leftSection: {
      flex: 1,
      backgroundImage: `url(${selectedBg})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      position: "relative",
      display: isNorthIndia ? "flex" : "none", // Hide left section for other regions
    },
    leftOverlay: {
      position: "absolute",
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      zIndex: 1,
    },
    leftContent: {
      position: "absolute",
      bottom: "50px",
      left: "50px",
      color: "#FFD700", // Gold Color
      zIndex: 2,
      fontSize: "24px",
      fontWeight: "bold",
    },
    rightSection: {
      flex: isNorthIndia ? 1 : 1, // If NorthIndia, it takes space
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: isNorthIndia ? "50%" : "100%", // Full width for other regions
      backgroundColor: isNorthIndia ? "rgba(255, 255, 255, 0.8)" : "#fff",
      backgroundImage: isNorthIndia ? `url(${northPic})` : `url(${selectedBg})`,
      //backgroundSize: "cover",
      backgroundPosition: "center",
      position: "relative",
    },
    formContainer: {
      width: "400px",
      marginLeft : "800px",
      padding: "10px",
       //backgroundColor: "rgba(255, 255, 255, 0.95)",
       //borderRadius: "10px",
       //boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
       //backdropFilter: "blur(10px)",
       //textAlign: "Center",
      alignItems: "Center",
      display: "flex",
      backgroundSize: "cover",
      backgroundPosition: "center",
      //position: "relative",
    },
  };

  return (
    <div style={styles.body}>
      <div style={styles.app}>
        {/* Navigation */}
        <div style={styles.nav}>
          <div style={styles.navLogo}>
            <img src={logo} alt="Logo" style={styles.navLogoImg} />
            <nav style={styles.navLinks}>
              <span style={styles.navLink} onClick={() => navigate("/")}>
                Home
              </span>
              <span style={styles.navLink} onClick={() => navigate("/login")}>
                LogIn
              </span>
              <span style={styles.navLink} onClick={() => navigate("/ContactUs")}>
                Contact
              </span>
            </nav>
          </div>
        </div>

        {/* Left Section - Only shown for NorthIndia */}
        <div style={styles.leftSection}>
          <div style={styles.leftOverlay}></div>
          <div style={styles.leftContent}>
            <h1>HiAce </h1>
            <h1>Matrimony.</h1>
            <p>The World's No.1 Matchmaking Service</p>
          </div>
        </div>

        {/* Right Section - Centered Background for Other Regions */}
        <div style={styles.rightSection}>
          {!isNorthIndia ? (
            <div style={styles.formContainer}>{children}</div>
          ) : (
            children
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
