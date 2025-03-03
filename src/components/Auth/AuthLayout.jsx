import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import northPic from "../assets/northPic.png";

const AuthLayout = ({ children }) => {
  const navigate = useNavigate();

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
      backgroundColor: "#f4f4f4",
    },
    app: {
      width: "100%",
      height: "100%",
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
      backgroundImage: `url(${northPic})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      position: "relative",
    },
    leftContent: {
      position: "absolute",
      bottom: "50px",
      left: "50px",
      color: "gold",
      zIndex: 2,
    },
    leftHeading: {
      fontSize: "40px",
      fontWeight: "bold",
      marginBottom: "10px",
    },
    leftParagraph: {
      fontSize: "18px",
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
    rightSection: {
      flex: 1,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "rgba(255, 255, 255, 0.8)",
      backgroundImage: `url(${northPic})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      position: "relative",
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
                Login
              </span>
              <span
                style={styles.navLink}
                onClick={() => navigate("/contact-us")}
              >
                Contact
              </span>
            </nav>
          </div>
        </div>

        {/* Left Section */}
        <div style={styles.leftSection}>
          <div style={styles.leftOverlay}></div>
          <div style={styles.leftContent}>
            <h1 style={styles.leftHeading}>HiAce</h1>
            <h1 style={styles.leftHeading}>Matrimony.</h1>
            <p style={styles.leftParagraph}>
              The World's No.1 Matchmaking Service
            </p>
          </div>
        </div>

        {/* Right Section */}
        <div style={styles.rightSection}>{children}</div>
      </div>
    </div>
  );
};

export default AuthLayout;
