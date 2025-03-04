import React from "react";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import AuthLayout from "./AuthLayout";
import { useNavigate } from "react-router-dom";
import logo from '../assets/logo.png';

const Register = () => {
  const navigate = useNavigate();
  const styles = {
    formContainer: {
      width: "100%",
      maxWidth: "400px",
      padding: "10px",
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
    inputWrapper: {
      position: "relative",
      marginBottom: "15px",
    },
    inputIcon: {
      position: "absolute",
      top: "50%",
      left: "10px",
      transform: "translateY(-50%)",
      color: "#888",
      fontSize: "16px",
      zIndex: 1,
    },
    formInput: {
      width: "100%",
      padding: "10px 10px 10px 40px",
      fontSize: "16px",
      border: "1px solid #ddd",
      borderRadius: "5px",
      boxSizing: "border-box",
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
    logo: {
      width: '120px',
      display: 'block',
      margin: '0 auto 20px',
    },
  };
  return (
    <AuthLayout>
      <div style={styles.formContainer}>
        <img src={logo} alt="Logo" style={styles.logo} />
        <h2 style={styles.formHeading}>Let’s Get Started!</h2>
        <p style={styles.formSubHeading}>
          Create an account and find your perfect match
        </p>

        <form style={styles.form}>
          <div style={styles.inputWrapper}>
            <FaUser style={styles.inputIcon} />
            <input
              type="text"
              placeholder="First Name"
              required
              style={styles.formInput}
            />
          </div>
          <div style={styles.inputWrapper}>
            <FaUser style={styles.inputIcon} />
            <input
              type="text"
              placeholder="Last Name"
              required
              style={styles.formInput}
            />
          </div>
          <div style={styles.inputWrapper}>
            <FaUser style={styles.inputIcon} />
            <input
              type="text"
              placeholder="User Name"
              required
              style={styles.formInput}
            />
          </div>
          <div style={styles.inputWrapper}>
            <FaEnvelope style={styles.inputIcon} />
            <input
              type="email"
              placeholder="Email"
              required
              style={styles.formInput}
            />
          </div>
          <div style={styles.inputWrapper}>
            <FaLock style={styles.inputIcon} />
            <input
              type="password"
              placeholder="Password"
              required
              style={styles.formInput}
            />
          </div>
          <div style={styles.inputWrapper}>
            <FaLock style={styles.inputIcon} />
            <input
              type="password"
              placeholder="Confirm Password"
              required
              style={styles.formInput}
            />
          </div>
          <button type="submit" style={styles.formButton}>
            CREATE
          </button>
        </form>

        <p style={styles.formText}>
          Already have an account?{" "}
          <span
            style={styles.formLink}
            onClick={() => {
              navigate("/login");
            }}
          >
            Login here
          </span>
        </p>
      </div>
    </AuthLayout>
  );
};

export default Register;
