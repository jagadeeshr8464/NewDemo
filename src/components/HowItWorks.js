import React from "react";
import { RiUserAddLine } from "react-icons/ri";
import { BiSearchAlt } from "react-icons/bi";
import { FiPhoneCall } from "react-icons/fi";
import { GiDiamondRing } from "react-icons/gi";

const HowItWorks = () => {
  
  const styles = {
    container: {
      width: "100vw",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      boxSizing: "border-box",
    },
    topSection: {
      backgroundColor: "#e6e6e6",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: "20px",
    },
    title: {
      fontSize: "2rem",
      fontWeight: "bold",
      color: "#7a468c",
      textAlign: "center",
      marginBottom: "20px",
    },
    filterContainer: {
      display: "flex",
      gap: "15px",
      flexWrap: "wrap",
      justifyContent: "center",
      width: "100%",
    },
    dropdown: {
      padding: "10px",
      fontSize: "1rem",
      border: "1px solid #ccc",
      borderRadius: "5px",
      width: "200px",
    },
    searchButton: {
      padding: "10px 20px",
      fontSize: "1rem",
      backgroundColor: "#22693a",
      color: "#fff",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
    },
    divider: {
      width: "100%",
      backgroundColor: "#0077b6",
    },
    bottomSection: {
      width: "100%",
      backgroundColor: "#C0DFC7",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: "40px 20px",
      boxSizing: "border-box",
      flex: 1,
    },
    worksTitle: {
      fontSize: "2.5rem",
      fontWeight: "bold",
      color: "#7a468c",
      textAlign: "center",
      marginBottom: "40px",
    },
    cardsContainer: {
      display: "flex",
      gap: "40px",
      justifyContent: "center",
      flexWrap: "wrap",
      width: "100%",
    },
    card: {
      width: "200px",
      textAlign: "center",
    },
    cardIcon: {
      fontSize: "4rem",
      color: "#ff4d88",
      marginBottom: "10px",
    },
    cardTitle: {
      fontSize: "1.25rem",
      fontWeight: "bold",
      color: "#7a468c",
      marginBottom: "10px",
    },
    cardText: {
      fontSize: "1rem",
      color: "#555",
      lineHeight: "1.5",
    },
  };

  return (
    <div style={styles.container}>
      {/* Top Section */}
      <div style={styles.topSection}>
        <h1 style={styles.title}>Find your Right Match here</h1>
        <div style={styles.filterContainer}>
          <select style={styles.dropdown}>
            <option>I'm looking for you</option>
          </select>
          <select style={styles.dropdown}>
            <option>I'm looking for you</option>
          </select>
          <select style={styles.dropdown}>
            <option>I'm looking for you</option>
          </select>
          <select style={styles.dropdown}>
            <option>Select an address</option>
          </select>
          <button style={styles.searchButton}>Search</button>
        </div>
      </div>

      {/* Divider */}
      <div style={styles.divider}></div>

      {/* Bottom Section */}
      <div style={styles.bottomSection}>
        <h1 style={styles.worksTitle}>How It's Works</h1>
        <div style={styles.cardsContainer}>
          <div style={styles.card}>
            <RiUserAddLine style={styles.cardIcon} />
            <h3 style={styles.cardTitle}>Create BioData</h3>
            <p style={styles.cardText}>
              You can easily create a biodata completely free of cost within
              some steps.
            </p>
          </div>
          <div style={styles.card}>
            <BiSearchAlt style={styles.cardIcon} />
            <h3 style={styles.cardTitle}>Search BioData</h3>
            <p style={styles.cardText}>
              You can search biodata using many filters including age,
              profession, and qualifications.
            </p>
          </div>
          <div style={styles.card}>
            <FiPhoneCall style={styles.cardIcon} />
            <h3 style={styles.cardTitle}>Contact</h3>
            <p style={styles.cardText}>
              If someone likes your biodata or you like someone’s biodata, you
              can directly contact their parent.
            </p>
          </div>
          <div style={styles.card}>
            <GiDiamondRing style={styles.cardIcon} />
            <h3 style={styles.cardTitle}>Get Married</h3>
            <p style={styles.cardText}>
              If you like the biodata, do your own inquiry & get married
              according to Sunnah.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;