import React from "react";
import { FaFacebook, FaApple } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import AuthLayout from "./AuthLayout";

const Login = () => {
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    // Set session storage to indicate the user is authenticated
    sessionStorage.setItem("isAuthenticated", "true");
    navigate("/RightSidePage");
  };

  const styles = {
    formContainer: {
      width: "100%",
      maxWidth: "400px",
      padding: "20px",
      backgroundColor: "rgba(255, 255, 255, 0.85)",
      borderRadius: "10px",
      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
      backdropFilter: "blur(8px)",
    },
    formHeading: {
      fontSize: "24px",
      fontWeight: "bold",
      marginBottom: "10px",
      textAlign: "center",
    },
    formSubHeading: {
      fontSize: "16px",
      marginBottom: "20px",
      textAlign: "center",
      color: "#333",
    },
    form: {
      display: "flex",
      flexDirection: "column",
    },
    formInput: {
      width: "100%",
      padding: "10px",
      fontSize: "16px",
      border: "1px solid #ddd",
      borderRadius: "5px",
      boxSizing: "border-box",
      marginBottom: "15px",
    },
    formButton: {
      backgroundColor: "#007bff",
      color: "#fff",
      padding: "10px",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      fontSize: "16px",
      fontWeight: "bold",
      textTransform: "uppercase",
    },
    formText: {
      marginTop: "10px",
      fontSize: "14px",
      textAlign: "center",
    },
    formLink: {
      color: "#007bff",
      textDecoration: "none",
      cursor: "pointer",
    },
    socialIconsContainer: {
      marginTop: "20px",
      textAlign: "center",
    },
    socialText: {
      fontSize: "14px",
      color: "#666",
      marginBottom: "10px",
    },
    iconGroup: {
      display: "flex",
      justifyContent: "center",
      gap: "20px",
    },
    socialIcon: {
      fontSize: "28px",
      cursor: "pointer",
      transition: "transform 0.3s ease",
    },
  };

  return (
    <AuthLayout>
      <div style={styles.formContainer}>
        <h2 style={styles.formHeading}>Welcome back!</h2>
        <p style={styles.formSubHeading}>Find your perfect match</p>
        <form style={styles.form} onSubmit={(e) => handleLogin(e)}>
          <input
            type="text"
            placeholder="Username"
            required
            style={styles.formInput}
          />
          <input
            type="password"
            placeholder="Password"
            required
            style={styles.formInput}
          />
          <button type="submit" style={styles.formButton}>
            LOG IN
          </button>
        </form>

        <p style={styles.formText}>Forgot Password?</p>

        <div style={styles.socialIconsContainer}>
          <p style={styles.socialText}>Or sign in using</p>
          <div style={styles.iconGroup}>
            <FaFacebook style={{ ...styles.socialIcon, color: "#1877F2" }} />
            <FcGoogle style={styles.socialIcon} />
            <FaApple style={{ ...styles.socialIcon, color: "#000000" }} />
          </div>
        </div>

        <p style={styles.formText}>
          Don’t have an account?{" "}
          <span style={styles.formLink} onClick={() => navigate("/register")}>
            Sign Up
          </span>
        </p>
      </div>
    </AuthLayout>
  );
};

export default Login;
