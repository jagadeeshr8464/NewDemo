import React from "react";
import HappyStoriesPic1 from './assets/HappyStoriesPic1.png';
import HappyStoriesPic2 from './assets/HappyStoriesPic2.png';
import HappyStoriesPic3 from './assets/HappyStoriesPic3.png';

const HappyStories = () => {
  const styles = {
    container: {
      width: "100%",
      backgroundColor: "#f9f9f9",
      padding: "50px 20px",
      textAlign: "center",
      boxSizing: "border-box",
    },
    title: {
      fontSize: "2.5rem",
      fontWeight: "bold",
      color: "#7a468c",
      marginBottom: "20px",
    },
    subtitle: {
      fontSize: "1.25rem",
      color: "#555",
      marginBottom: "40px",
      maxWidth: "700px",
      margin: "0 auto",
      lineHeight: "1.6",
    },
    cardContainer: {
      display: "flex",
      gap: "20px",
      justifyContent: "center",
      flexWrap: "wrap",
    },
    card: {
      maxWidth: "300px",
      padding: "20px",
      textAlign: "left",
    },
    image: {
      width: "100%",
      borderRadius: "10px 10px 0 0",
      marginBottom: "15px",
    },
    quote: {
      fontSize: "1rem",
      fontWeight: "bold",
      color: "#555",
      marginBottom: "10px",
      fontStyle: "italic",
    },
    description: {
      fontSize: "0.9rem",
      color: "#777",
      lineHeight: "1.5",
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Happy Stories</h1>
      <p style={styles.subtitle}>
        "Love doesn’t make the world go around. Love is what makes the ride
        worthwhile." Millions of Active Matrimonial users around the world find
        their true love and partners from this site. We are always here to help
        and find you the suitable match for yourself.
      </p>
      <div style={styles.cardContainer}>
        <div style={styles.card}>
          <img
            src={HappyStoriesPic1}
            alt="Happy Couple"
            style={styles.image}
          />
          <p style={styles.quote}>
            "Love doesn’t make the world go around. Love is what makes the ride
            worthwhile."
          </p>
          <p style={styles.description}>
            Millions of Active Matrimonial users around the world find their
            true love and partners from this site. We are always here to help
            and find you the suitable match for yourself.
          </p>
        </div>
        <div style={styles.card}>
          <img
            src={HappyStoriesPic2}
            alt="Happy Couple"
            style={styles.image}
          />
          <p style={styles.quote}>
            "Love doesn’t make the world go around. Love is what makes the ride
            worthwhile."
          </p>
          <p style={styles.description}>
            Millions of Active Matrimonial users around the world find their
            true love and partners from this site. We are always here to help
            and find you the suitable match for yourself.
          </p>
        </div>
        <div style={styles.card}>
          <img
            src={HappyStoriesPic3}
            alt="Happy Couple"
            style={styles.image}
          />
          <p style={styles.quote}>
            "Love doesn’t make the world go around. Love is what makes the ride
            worthwhile."
          </p>
          <p style={styles.description}>
            Millions of Active Matrimonial users around the world find their
            true love and partners from this site. We are always here to help
            and find you the suitable match for yourself.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HappyStories;
