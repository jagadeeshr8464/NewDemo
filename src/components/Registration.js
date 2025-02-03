import React, { useState } from 'react';
import northPic from './assets/northPic.png';
import logo from './assets/logo.png';
import { FaUser, FaEnvelope, FaLock, FaFacebook,FaApple } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Registration = () => {
  const [isLogin, setIsLogin] = useState(false); // State to toggle between login and registration
  const navigate = useNavigate(); // Initialize useNavigate
  const styles = {
    body: {
      margin: 0,
      padding: 0,
      width: '100vw',
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#f4f4f4',
    },
    app: {
      width: '100vw',
      height: '100vh',
      display: 'flex',
      borderRadius: '10px',
      overflow: 'hidden',
      boxShadow: '0 8px 20px rgba(0, 0, 0, 0.2)',
      position: 'relative',
    },
    nav: {
      position: 'absolute',
      top: '20px',
      left: '20px',
      right: '20px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      zIndex: 10,
    },
    navLogo: {
      display: 'flex',
      alignItems: 'center',
      gap: '20px',
    },
    navLogoImg: {
      width: '100px',
    },
    navLinks: {
      display: 'flex',
      gap: '20px',
    
    },
    navLink: {
      textDecoration: 'none',
      fontSize: '16px',
      color: '#fff',
      fontWeight: 'bold',
      cursor: 'pointer',
    },
    leftSection: {
      flex: 1,
      backgroundImage: `url(${northPic})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      position: 'relative',
    },
    leftContent: {
      position: 'absolute',
      bottom: '50px',
      left: '50px',
      color: 'gold',
      zIndex: 2,
    },
    leftHeading: {
      fontSize: '40px',
      fontWeight: 'bold',
      marginBottom: '10px',
    },
    leftParagraph: {
      fontSize: '18px',
    },
    leftOverlay: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      zIndex: 1,
    },
    rightSection: {
      flex: 1,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(255, 255, 255, 0.8)',

      backgroundImage: `url(${northPic})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      position: 'relative',
      

    },
    formContainer: {
      width: '100%',
      maxWidth: '300px',
      minWidth: '200px',
      padding: '16px',
      backgroundColor: 'rgba(255, 255, 255, 0.85)',
      borderRadius: '10px',
      boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)',
      height: 'auto',
      maxHeight: '450px',
    },
    logo: {
      width: '120px',
      display: 'block',
      margin: '0 auto 20px',
    },
    formHeading: {
      fontSize: '24px',
      fontWeight: 'bold',
      marginBottom: '10px',
      textAlign: 'center',
    },
    formSubHeading: {
      fontSize: '10px',
      marginBottom: '20px',
      textAlign: 'center',
      color: '#333',
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      //alignItems: 'center',
    },
    formInput: {
      marginBottom: '8px',
      padding: '6px 6px 6px 35px',
      fontSize: '14px',
      border: '1px solid #ddd',
      borderRadius: '5px',
      width: '86%'

    },
    formButton: {
      backgroundColor: '#007bff',
      color: '#fff',
      padding: '6px',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      fontSize: '12px',
      fontWeight: 'bold',
      textTransform: 'uppercase',
      width:'150px',
      margin: '0 auto',
    
    },
    formText: {
      marginTop: '8px',
      fontSize: '12px',
      textAlign: 'right',
      color: '#666'
    },
    formText2:{
      textAlign: 'center',
      fontSize: '12px',
    },
    formLink: {
      color: '#007bff',
      textDecoration: 'none',
      cursor: 'pointer',
      fontSize: '14px'
    },
    inputWrapper: {
      position: "relative",
    },
    inputIcon: {
      position: "absolute",
      top: "35%",
      left: "10px",
      transform: "translateY(-50%)",
      color: "#888",
      fontSize: "16px",
      zIndex: 1,
    },
    socialIconsContainer: {
      marginTop: '20px',
      textAlign: 'center',
    },
    socialText: {
      fontSize: '10px',
      color: '#666',
      marginBottom: '10px',
    },
    iconGroup: {
      display: 'flex',
      justifyContent: 'center',
      gap: '20px', 
    },
    socialIcon: {
      fontSize: '28px', 
      cursor: 'pointer',
      transition: 'transform 0.3s ease', 
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
              <span style={styles.navLink} onClick={() => navigate('/')}>
                Home
              </span>
              {/* <span style={styles.navLink} onClick={() => navigate('/registration')}> */}
              <span style={styles.navLink} onClick={() => setIsLogin(true)}>

                Login
              </span>
              <span style={styles.navLink} onClick={() => navigate('/contact-us')}>
                Contact
              </span>
            </nav>
          </div>
        </div>

        {/* Left Section */}
        <div style={styles.leftSection}>
          <div style={styles.leftOverlay}></div>
          <div style={styles.leftContent}>
            {(
              <>
                <h1 style={styles.leftHeading}>HiAce</h1>
                <h1 style={styles.leftHeading}>Matrimony.</h1>
                <p style={styles.leftParagraph}>The World's No.1 Matchmaking Service</p>
              </>
            )}
          </div>
        </div>

        {/* Right Section */}
        <div style={styles.rightSection}>
          <div style={styles.formContainer}>
            <img src={logo} alt="Logo" style={styles.logo} />
            {isLogin ? (
              <>
                <h2 style={styles.formHeading}>Welcome back!</h2>
                <p style={styles.formSubHeading}>Find your perfect</p>
                <form style={styles.form}
                onSubmit={(e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    // Add your login validation logic here if needed
    navigate("/RightSidePage"); // Redirect to the desired page with the drawer
  }}>
                  <div style={styles.inputWrapper}>
                    <FaUser style={styles.inputIcon} />
                    <input type="text" placeholder="User Name"  style={styles.formInput} />
                  </div>
                  <div style={styles.inputWrapper}>
                    <FaLock style={styles.inputIcon} />
                    <input type="password" placeholder="Password"  style={styles.formInput} />
                  </div>
                  <p style={styles.formText}>Forgot Password?</p>
                  <button type="submit" style={styles.formButton}>
                    LOG IN
                  </button>
                </form>
                {/* Social Media Sign-In */}
                <div style={styles.socialIconsContainer}>
                 <p style={styles.socialText}>Or sign up using</p> 
                  <div style={styles.iconGroup}>
                    <FaFacebook style={{ ...styles.socialIcon, color: '#1877F2' }} />
                    <FcGoogle style={{ ...styles.socialIcon }} />
                    <FaApple style={{ ...styles.socialIcon, color: '#000000' }} />
                  </div>
                </div>
                <p style={styles.formText2}>
                  Don’t have an account?{' '}
                  <span
                    style={styles.formLink}
                    onClick={() => setIsLogin(false)}
                  >
                    Sign Up
                  </span>
                </p>
              </>
              
            ) : (
              <>
                <h2 style={styles.formHeading}>Let’s Get Started!</h2>
                <p style={styles.formSubHeading}>Create an account and find your perfect </p>

                <form style={styles.form}>
                  <div style={styles.inputWrapper}>
                    <FaUser style={styles.inputIcon} />
                    <input type="text" placeholder="First Name" required style={styles.formInput} />
                  </div>
                  <div style={styles.inputWrapper}>
                    <FaUser style={styles.inputIcon} />
                    <input type="text" placeholder="Last Name" required style={styles.formInput} />
                  </div>
                  <div style={styles.inputWrapper}>
                    <FaUser style={styles.inputIcon} />
                    <input type="text" placeholder="User Name" required style={styles.formInput} />
                  </div>
                  <div style={styles.inputWrapper}>
                    <FaEnvelope style={styles.inputIcon} />
                    <input type="email" placeholder="Email" required style={styles.formInput} />
                  </div>
                  <div style={styles.inputWrapper}>
                    <FaLock style={styles.inputIcon} />
                    <input type="password" placeholder="Password" required style={styles.formInput} />
                  </div>
                  <div style={styles.inputWrapper}>
                    <FaLock style={styles.inputIcon} />
                    <input type="password" placeholder="Confirm Password" required style={styles.formInput} />
                  </div>
                  <button type="submit" style={styles.formButton}>
                    CREATE
                  </button>
                </form>


                <p style={styles.formText2}>
                  Already have an account?{' '}
                  <span
                    style={styles.formLink}
                    onClick={() => setIsLogin(true)}
                  >
                    Login here
                  </span>
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};



export default Registration