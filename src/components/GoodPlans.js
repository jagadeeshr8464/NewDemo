import React from "react";
import GoodPlans1 from "./assets/GoodPlans1.png";
import GoodPlans2 from "./assets/GoodPlans2.png";
import BestMatch from "./assets/BestMatch.png";
import VerifyProfile from "./assets/VerifyProfile.png";
import Privacy from "./assets/Privacy.png";
import logo from './assets/logo.png';
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { RiFacebookCircleFill } from "react-icons/ri";
import { IoLogoInstagram } from "react-icons/io";
import { BsYoutube } from "react-icons/bs";
import { useNavigate } from 'react-router-dom'; 

const GoodPlans = () => {
  const navigate = useNavigate(); 
  const styles = {
    container: {
      width: "100%",
      padding: "50px 20px",
      textAlign: "center",
      boxSizing: "border-box",
    },
    divider: {
      height: "2px",
      width: "100%",
      backgroundColor: "#FFEB3B",
    },
    title: {
      fontSize: "2.5rem",
      fontWeight: "bold",
      color: "#7a468c",
      marginBottom: "40px",
    },
    plansContainer: {
      display: "flex",
      gap: "50px",
      justifyContent: "center",
      flexWrap: "wrap",
      marginBottom: "40px",
    },
    imageCard: {
      position: "relative",
      width: "350px",
      height: "450px",
      borderRadius: "20px",
      overflow: "hidden",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    },
    cardImage: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
    },

    
    overlay: {
      position: "absolute",
      top: "45%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      padding: "20px",
      borderRadiu3: "10px",
      textAlign: "center",
      width: "40%",
    },
    overlayTitle: {
      fontSize: "1.2rem",
      fontWeight: "bold",
      color: "#7a468c",
      marginBottom: "45px",
    },
    overlayDetails: {
      fontSize: "0.7rem",
      fontWeight: 'bold',
      color: "#555",
      marginBottom: "20px", 
      lineHeight: "1.5",

    },
    overlayPrice: {
      fontSize: "1.25rem",
      fontWeight: "bold",
      color: "#22693a",
      marginBottom: "30px", 
    },
    buttonContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginTop: "10px",
    },
    button: {
      padding: "10px 20px",
      fontSize: "1rem",
      backgroundColor: "#22693a",
      color: "#fff",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      width: '120%',
      marginRight: '90px'
    },


    ///////Trusted-Section//////
    trustedSection: {
        textAlign: "center",
        padding: "20px 0",
      },
      trustedTitle: {
        fontSize: "2rem",
        fontWeight: "bold",
        color: "#7a468c",
        marginBottom: "10px",
      },
      divider1: {
        height: "2px",
        width: "60%",
        backgroundColor: "#FFEB3B",
        margin: "10px auto",
      },
      iconsContainer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "40px", 
        marginTop: "20px",
      },
      iconCard: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        textAlign: "center",
        gap: '30px'
      },
      iconImage: {
        width: "50px",
        height: "50px",
        marginBottom: "10px",
  
      },
      iconText: {
        fontSize: "1rem",
        fontWeight: "bold",
        color: "#555",
      },

    footer: {
      backgroundColor: "#07544b",
      color: "#fff",
      textAlign: "center",
      padding: "40px 20px",
      width: '100%'
    },
    footerLogo: {
      width: "200px",
      marginBottom: "20px",
      backgroundColor: 'none'
    },
    footerText: {
      fontSize: "2.9rem",
      fontWeight: "bold",
      marginBottom: "20px",
      fontFamily: 'jost',

    },
    footerText1: {
      fontSize: "0.7rem",
      fontWeight: "bold",
      marginBottom: "20px",
      color: '#FFFFFF'
      

    },
   
    button1: {
      padding: "10px 20px",
      fontSize: "0.8rem",
      backgroundColor: "white",
      color: "black",
      border: "none",
      borderRadius: "20px",
      cursor: "pointer",
      width: '12%',
      alignSelf: 'center'
    },
    footerDivider: {
      height: "2px",
      width: "80%",
      backgroundColor: "white",
      margin: "0 auto",
    },
    footerBottomContainer: {
      width: "90%",
      
      justifyContent: "space-between",
    },
    footerLinkContainer: {
      display: "flex",
      gap: "40px", 
      justifyContent: 'center',
      

    },
    footerLink: {
      color: "#fff",
      fontSize: "1rem",
      textDecoration: "none",
      justifyContent: 'center',
      paddingTop: '20px'
    },
    socialIcons: {
      display: "flex",
      justifyContent: "flex-end", 
      gap: "20px",
      flexGrow: 1,
    },
    socialIcon: {
      color: "#fff",
      fontSize: "2rem",
      cursor: "pointer",
    },
  };

  return (
    <div style={styles.container}>
      {/* Divider */}
      <div style={styles.divider}></div>
      <h1 style={styles.title}>With Good Plans</h1>
      <div style={styles.plansContainer}>
        {/* Image Card with Overlay */}
        <div style={styles.imageCard}>
          <img src={GoodPlans1} alt="Plan 1" style={styles.cardImage} />

        </div>

        <div style={styles.imageCard}>
          <img src={GoodPlans2} alt="Plan 2" style={styles.cardImage} />
          <div style={styles.overlay}>
            <h2 style={styles.overlayTitle}>Monthly plan</h2>
            <p style={styles.overlayDetails}>
              <p style={{ color: 'grey' }}>What You'll Get</p>
              <p> - Lifetime Access</p>
              <p> - Access to All Profiles</p>
            </p>
            <p style={styles.overlayPrice}>$30/Month</p>
            <button style={styles.button}>Choose</button>
          </div>
        </div>

        <div style={styles.imageCard}>
          <img src={GoodPlans2} alt="Plan 3" style={styles.cardImage} />
          <div style={styles.overlay}>
            <h2 style={styles.overlayTitle}>Yearly plan</h2>
            <p style={styles.overlayDetails}>
              <p style={{ color: 'grey' }}>What You'll Get</p>
              <p> - Lifetime Access</p>
              <p> - Access to All Profiles</p>
            </p>
            <p style={styles.overlayPrice}>$350/Year</p>
            <button style={styles.button}>Choose</button>
          </div>
        </div>


      </div>

      {/* Trusted Section */}
      <div style={styles.trustedSection}>
        <h1 style={styles.trustedTitle}>Trusted by Millions</h1>
        <div style={styles.divider1}></div>
        <div style={styles.iconsContainer}>
          <div style={styles.iconCard}>
            <img src={BestMatch} alt="Best Matches" style={styles.iconImage} />
            <p style={styles.iconText}>Best Matches</p>
          </div>
          <div style={styles.iconCard}>
            <img src={VerifyProfile} alt="Verified Profiles" style={styles.iconImage} />
            <p style={styles.iconText}>Verified Profiles</p>
          </div>
          <div style={styles.iconCard}>
            <img src={Privacy} alt="100% Privacy" style={styles.iconImage} />
            <p style={styles.iconText}>100% Privacy</p>
          </div>
        </div>
        <div style={styles.divider1}></div>
      </div>

      {/* Footer Section */}
      <div style={styles.footer}>
        <img src={logo} alt="HiAce Logo" style={styles.footerLogo} />
        <p style={styles.footerText1}>JOIN FOR A BETTER FUTURE</p>

        <p style={styles.footerText}>Request More Information</p>
        <button style={styles.button1} onClick={() => navigate('/contact-us')}>Contact Us</button>

       
        <p style={{ marginTop: "20px", fontSize:"10px" }}>© 2024 HiAce Systems</p>
      <div style={styles.footerDivider}></div>

      <div style={styles.footerBottomContainer}>
        {/* Footer Links */}
        <div style={styles.footerLinkContainer}>
          <a href="/" style={styles.footerLink}>
            Team
          </a>
          <a href="/" style={styles.footerLink}>
            Case Studies
          </a>
          <a href="/" style={styles.footerLink}>
            Publications
          </a>
        </div>

        {/* Social Icons */}
        <div style={styles.socialIcons}>
          <TiSocialLinkedinCircular style={styles.socialIcon} />
          <RiFacebookCircleFill style={styles.socialIcon} />
          <IoLogoInstagram style={styles.socialIcon} />
          <BsYoutube style={styles.socialIcon} />
        </div>
      </div>
      </div>
    </div>
  );
};

export default GoodPlans;