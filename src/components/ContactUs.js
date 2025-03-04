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
      gap: "40px", // Adjust the gap as per the image
      marginLeft: "21%",
    },
    header: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "10px 10px",
      backgroundColor: "#ffffff",
      fontWeight: "bold",
      
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

    },
    contactTitle: {
      fontSize: "35px",
      fontWeight: "bold",
      color: "#F5A623", // Yellow shade for the title
    },
    contactSubtitle: {
      fontSize: "30px",
      fontWeight: "bold",
      color: "#1C19A8", // Blue shade for the subtitle
      textDecoration: "none",
     
    },
    leftSection: {
      position: "relative",
      width: "30%",
      padding: "40px",
      backgroundColor: "#F8C471", // Light yellow
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      boxSizing: "border-box",
    },
    rightSection: {
      width: "70%",
      padding: "40px",
      backgroundColor: "#7986CB", // Light purple background
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      boxSizing: "border-box",
    },
    form: {
      width: "100%",
      display: "flex",
      flexDirection: "column",
      gap: "20px",
    },
    inputGroup: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
    },
    label: {
      fontSize: "14px",
      fontWeight: "bold",
      color: "white",
      marginBottom: "5px",
    },
    inputBaseline: {
      border: "none",
      borderBottom: "1px solid #FFFFFF",
      padding: "5px 0",
      fontSize: "16px",
      outline: "none",
      backgroundColor: "transparent",
    },
    button: {
      padding: "15px 30px",
      fontSize: "18px",
      backgroundColor: "#FFD700", // Gold
      color: "#1C19A8", // Dark purple
      border: "none",
      fontWeight: "700",
      borderRadius: "5px",
      cursor: "pointer",
      alignSelf: "center",
      fontFamily: "poppins",
      marginTop: "5%",
    },

    ///////////Left-Section/////////

    leftHeading: {
      fontSize: "24px",
      fontWeight: "bold",
      color: "#1C19A8",
      marginBottom: "10px",
    },
    contactInfo: {
      fontSize: "16px",
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
      zIndex: 2, // Ensures the icons are above the shapes
      justifyContent: "center",
    },
    socialIcon: {
      fontSize: "24px",
      color: "#2C3E50",
      cursor: "pointer",
    },
    eclipse1: {
      position: "absolute",
      bottom: "10%",
      left: "55%",
      width: "21%",
      height: "21%",
      backgroundColor: "#1C19A8", // Dark Blue
      borderRadius: "50%",
      zIndex: 1,
    },
    eclipse2: {
      position: "absolute",
      bottom: "25%",
      left: "48%",
      width: "15%",
      height: "15%",
      backgroundColor: "#7A468C", // Purple
      borderRadius: "50%",
      zIndex: 0,
    },
    eclipse3: {
      position: "absolute",
      bottom: "25%",
      left: "25%",
      width: "20px",
      height: "20px",
      backgroundColor: "#1C19A8", // Dark Blue
      borderRadius: "50%",
      zIndex: 1,
    },
  
    // Media Queries
    "@media (max-width: 1200px)": {
      leftHeading: {
        fontSize: "22px",
      },
      contactInfo: {
        fontSize: "14px",
        marginTop: "15px",
      },
      socialIcons: {
        gap: "20px",
      },
      socialIcon: {
        fontSize: "20px",
      },
      eclipse1: {
        width: "150px",
        height: "150px",
        bottom: "12%",
        left: "50%",
      },
      eclipse2: {
        width: "80px",
        height: "80px",
        bottom: "20%",
        left: "45%",
      },
      eclipse3: {
        width: "15px",
        height: "15px",
        bottom: "20%",
        left: "30%",
      },
    },
  
    "@media (max-width: 768px)": {
      leftHeading: {
        fontSize: "20px",
      },
      contactInfo: {
        fontSize: "12px",
      },
      socialIcons: {
        gap: "15px",
      },
      socialIcon: {
        fontSize: "18px",
      },
      eclipse1: {
        width: "120px",
        height: "120px",
        bottom: "15%",
        left: "45%",
      },
      eclipse2: {
        width: "70px",
        height: "70px",
        bottom: "18%",
        left: "40%",
      },
      eclipse3: {
        width: "10px",
        height: "10px",
        bottom: "18%",
        left: "28%",
      },
    },
  
    "@media (max-width: 576px)": {
      leftHeading: {
        fontSize: "18px",
      },
      contactInfo: {
        fontSize: "10px",
      },
      socialIcons: {
        gap: "10px",
      },
      socialIcon: {
        fontSize: "16px",
      },
      eclipse1: {
        width: "100px",
        height: "100px",
        bottom: "18%",
        left: "40%",
      },
      eclipse2: {
        width: "60px",
        height: "60px",
        bottom: "16%",
        left: "35%",
      },
      eclipse3: {
        width: "8px",
        height: "8px",
        bottom: "16%",
        left: "25%",
      },
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
              width: "10vw",
              height: "auto",
              marginLeft: '190%'
            }}
          />
        </div>
       
        <div style={styles.navLinks}>
          <a href="/" style={{ ...styles.navLink, marginRight: "20px" }}>
            Home
          </a>
          {/* <button style={{ ...styles.navLink, marginRight: "20px" }} onClick={() => navigate('/contact-us')}>Login</button> */}
          <a href="/Registration" style={{ ...styles.navLink, marginRight: "20px" }}>
            LogIn
          </a>
          <a href="/contact-us" style={styles.navLink}>
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
 {/* Centered Text */}
 <div style={styles.centerText}>
          <h1 style={styles.contactTitle}>Contact Us</h1>
          <h2 style={styles.contactSubtitle}>Can we help you?</h2>
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
                  <input type="radio" name="inquiry" /> Suggestion
                </label>
              </div>
            </div>
            <div style={styles.inputGroup}>
              <label style={styles.label}>Message</label>
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