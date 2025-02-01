import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaInstagram, FaTwitter } from "react-icons/fa";
import { BsFacebook } from "react-icons/bs";
import logo from './assets/logo.png';
import { LuShoppingCart } from "react-icons/lu";
import { LiaUserCircleSolid } from "react-icons/lia";

const ContactUs = () => {
  const styles = {
    container: {
      display: "flex",
      flexDirection: "row",
      height: "100vh",
      fontFamily: "'Poppins', sans-serif",
      gap: "40px", 
    },
    header: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "20px 40px",
      backgroundColor: "#ffffff",
      fontWeight: "bold",
      boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)",
    },
    navLinks: {
      display: "flex",
      alignItems: "center",
      gap: "20px",
    },
    navLink: {
      color: "#1C19A8",
      textDecoration: "none",
      fontSize: "16px",
      fontWeight: "bold",
      cursor: "pointer",
    },
    icons: {
      display: "flex",
      alignItems: "center",
      gap: "10px",
    },

    centerText: {
      textAlign: "center",
      paddingLeft:"130px",
    },
    contactTitle: {
      fontSize: "30px",
      fontWeight: "bold",
      color: "#F5A623", 
      
    },
    contactSubtitle: {
      fontSize: "26px",
      fontWeight: "bold",
      color: "#1C19A8", 
      textDecoration: "none",
    },

    ///////////Left-Section/////////
    leftSection: {
      position: "relative",
      width: "30%",
      padding: "40px",
      backgroundColor: "#F8C471", 
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      boxSizing: "border-box",
      

    },
    leftHeading: {
      fontSize: "24px",
      fontWeight: "bold",
      color: "#1C19A8",
      marginBottom: "10px",
    },
    contactInfo: {
      fontSize: "12px",
      color: "#1C19A8",
      lineHeight: "1.8",
      marginTop: "20px",
    },
    infoItem: {
      display: "flex",
      alignItems: "center",
      gap: "10px",
      marginBottom: "15px",
    },
    socialIcons: {
      display: "flex",
      gap: "30px",
      marginTop: "40px",
      zIndex: 2, 
      justifyContent: 'center'
    },
    socialIcon: {
      fontSize: "24px",
      color: "#2C3E50",
      cursor: "pointer",
    },
    eclipse1: {
      position: "absolute",
      bottom: "10%",
      left: "65%",
      width: "100px",
      height: "100px",
      backgroundColor: "#1C19A8", 
      borderRadius: "50%",
      zIndex: 1,
    },
    eclipse2: {
      position: "absolute",
      bottom: "25%",
      left: "60%",
      width: "60px",
      height: "60px",
      backgroundColor: "#7A468C", 
      borderRadius: "50%",
      zIndex: 0,
    },
    eclipse3: {
      position: "absolute",
      bottom: "25%",
      left: "25%",
      width: "20px",
      height: "20px",
      backgroundColor: "#1C19A8", 
      borderRadius: "50%",
      zIndex: 1,
    },

    //////////////////Right-Section////////
    rightSection: {
      width: "100%",
      padding: "40px",
      backgroundColor: "#7986CB", 
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      boxSizing: "border-box",
      flex: 1, 

    },
    rightHeading: {
      fontSize: "32px",
      fontWeight: "bold",
      color: "#FFD700", 
      marginBottom: "10px",
    },
    subHeading: {
      fontSize: "24px",
      fontWeight: "500",
      color: "#6A0572", 
      textDecoration: "underline",
      marginBottom: "20px",
    },
    form: {
      width: "100%",
      display: "flex",
      flexDirection: "column",
      gap: "20px",
    },
    /////////Text Inputs////////
    row: {
      display: "flex",
      gap: "20px",
      width: "100%",
    },
    inputGroup: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      backgroundColor: '#7986CB'

    },
    label: {
      fontSize: "14px",
      color: 'white',
      marginBottom: "5px",
      backgroundColor: '#7986CB'
    },
    Messagelabel: {
        fontSize: "14px",
        fontWeight: "bold",
        color: 'white',
        marginBottom: "5px",
        backgroundColor: '#7986CB'
      },
    inputBaseline: {
      border: "none",
      borderBottom: "1px solid #FFFFFF", 
      padding: "5px 0",
      fontSize: "16px",
      outline: "none",
      backgroundColor: '#7986CB'
    },
    textarea: {
      padding: "10px",
      fontSize: "16px",
      border: "1px solid #ccc",
      borderRadius: "5px",
      height: "120px",
      resize: "none",
      boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)", 
    },
    selectGroup: {
      display: "flex",
      flexDirection: "column",
      gap: "10px",
    },
    radioTitle: {
      fontSize: "14px",
      fontWeight: "bold",
      color: "white",
    },
    radioGroup: {
      display: "flex",
      gap: "20px",
      color: 'white'
    },
    button: {
      padding: "15px 30px",
      fontSize: "18px",
      backgroundColor: "#FFD700", 
      color: "#1C19A8", 
      border: "none",
      fontWeight: '700',
      borderRadius: "5px",
      cursor: "pointer",
      alignSelf: "center",
      fontFamily: 'poppins',
      marginTop: '5%'
    },
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <div style={styles.header}>
        <div>
          <img
            src={logo}
            alt="Logo"
            style={{
              width: "120px",
              height: "auto",
            }}
          />
        </div>
        {/* Centered Text */}
        <div style={styles.centerText}>
          <h1 style={styles.contactTitle}>Contact Us</h1>
          <h2 style={styles.contactSubtitle}>Can we help you?</h2>
        </div>
        <div style={styles.navLinks}>
          <a href="/" style={{ ...styles.navLink, marginRight: "20px" }}>
            Home
          </a>
          <a href="/Registration" style={{ ...styles.navLink, marginRight: "20px" }}>
            LogIn
          </a>
          <a href="/contact" style={styles.navLink}>
            Contact
          </a>
          <div style={styles.icons}>
            <LuShoppingCart style={{
              width: "25px",
              height: "25px",
              marginRight: "15px",
              cursor: "pointer",
            }} />
            <LiaUserCircleSolid style={{
              width: "25px",
              height: "25px",
              marginRight: "15px",
              cursor: "pointer",
            }} />

          </div>
        </div>
      </div>

      {/* Main Content */}
      <div style={styles.container}>
        {/* Left Section */}
        <div style={styles.leftSection}>
          <div>
            <h2 style={styles.leftHeading}>Contact Information</h2>
            <p>Say something to start a live chat!</p>
            <div style={styles.contactInfo}>
              <div style={styles.infoItem}>
                <FaPhoneAlt />
                +1012 3456 789
              </div>
              <div style={styles.infoItem}>
                <FaEnvelope />
                demo@gmail.com
              </div>
              <div style={styles.infoItem}>
                <FaMapMarkerAlt />
                4th floor, 9th Avenue, Kutappa Garden, Vijaya Bank Layout,
                Bilekhalli, Bengaluru, Karnataka 560076
              </div>
            </div>
          </div>
          <div style={styles.socialIcons}>
            <BsFacebook style={styles.socialIcon} />
            <FaInstagram style={styles.socialIcon} />
            <FaTwitter style={styles.socialIcon} />
          </div>
          {/* Eclipse shapes */}
          <div style={styles.eclipse1}></div>
          <div style={styles.eclipse2}></div>
          <div style={styles.eclipse3}></div>
        </div>

        {/* Right Section */}
         <div style={styles.rightSection}>
          <form style={styles.form}>
            <div style={styles.row}>
              <div style={styles.inputGroup}>
                <label style={styles.label}>First Name *</label>
                <input
                  type="text"
                  placeholder="Enter your first name"
                  style={styles.inputBaseline}
                />
              </div>
              <div style={styles.inputGroup}>
                <label style={styles.label}>Last Name *</label>
                <input
                  type="text"
                  placeholder="Enter your last name"
                  style={styles.inputBaseline}
                />
              </div>
            </div>
            <div style={styles.row}>
              <div style={styles.inputGroup}>
                <label style={styles.label}>Email *</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  style={styles.inputBaseline}
                />
              </div> 
              <div style={styles.inputGroup}>
                <label style={styles.label}>Subject *</label>
                <input
                  type="text"
                  placeholder="Enter your subject"
                  style={styles.inputBaseline}
                />
              </div>
            </div>

            <div style={styles.selectGroup}>
              <p style={styles.radioTitle}>Select Subject?</p>
              <div style={styles.radioGroup}>
                <label>
                  <input type="radio" name="inquiry" /> General Inquiry
                </label>
                <label>
                  <input type="radio" name="inquiry" /> Feedback
                </label>
                <label>
                  <input type="radio" name="inquiry" /> Complaint
                </label>
                <label>
                  <input type="radio" name="inquiry" /> Suggetion
                </label>
              </div>
            </div>
            <div style={styles.inputGroup}>
              <label style={styles.Messagelabel}>Message</label>
              <textarea
                placeholder="Write your message..."
                style={styles.inputBaseline}
              ></textarea>
            </div>
            <button type="submit" style={styles.button}>
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;