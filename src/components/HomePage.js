import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import HomePagePic from "./assets/HomePagePic.png";
import logo from "./assets/logo.png";

const HomePage = () => {
    const navigate = useNavigate();
  const [selectedLocation, setSelectedLocation] = useState("");
  
    const styles = {
        container: {
            backgroundImage: `url(${HomePagePic})`,
            backgroundPosition: "center top", 
            height: "100vh",
            width: "100vw",
            display: "flex",
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
            fontFamily: "'Arial', sans-serif",
        },
        blurOverlay: {
            position: "absolute",
            top: "0",
            left: "0",
            right: "0",
            bottom: "0",
            backgroundColor: "rgba(255, 255, 255, 0.4)", 
            backdropFilter: "blur(10px)",
            zIndex: "-1",
        },
        formBox: {
            //backgroundColor: "rgba(255, 255, 255, 0.95)",
            background:"#9E9DC33B",
            //zIndex: "1",
            backdropFilter: "blur(4px)",
            padding: "30px",
              borderRadius: "15px",
             boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.2)",
            textAlign: "center",
            width: "400px",
            //border: "2px dashed #0044cc",
            marginBottom: '17%',
            WebkitBackdropFilter: "blur(8px)"
        },
        logo: {
            width: "140px",
            marginBottom: "10px",
        },
        title: {
            fontSize: "20px",
            fontWeight: "bold",
            color: "#0044cc",
            marginBottom: "15px",
        },
        description: {
            fontSize: "16px",
            color: "#555",
            lineHeight: "1.5",
            marginBottom: "20px",
            width: '55%',
            maxWidth: "300px",
            margin: "0 auto",
            textAlign: "center",
        },
        form: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width:'70%',
            marginLeft : '70px'
         //   gap: "10px",
        },
        dropdown: {
            flex: "1",
            padding: "12px",
            border: "1px solid #ccc",
            borderRadius: "15px 0 0 15px",
            fontSize: "14px",
            outline: "none",
            width: '10%'
        },
        submitButton: {
            backgroundColor: "#0044cc",
            color: "#fff",
            border: "none",
            padding: "12px",
            borderRadius: "0 15px 15px 0",
            fontSize: "14px",
            fontWeight: "bold",
            cursor: "pointer",
            width:'30%'
        },
        footer: {
            position: "absolute", 
            bottom: "10px",
            left: "0",
            right: "0",
            textAlign: "center", 
            fontSize: "12px",
            color: "blue",
        },
    };

    const handleDropdownChange = (e) => {
        setSelectedLocation(e.target.value);
      };
    
      const handleSubmit = () => {
        if (!selectedLocation) {
          alert("Please select a location before submitting!");
          return;
        }
        // Navigate based on the selected location
        if (selectedLocation === "NorthIndia") {
          navigate("/register");
        } else if (selectedLocation === "TamilNadu") {
          navigate("/how-it-works");
        } else if (selectedLocation === "Kerala") {
          navigate("/happy-stories");
        } else if (selectedLocation === "Hyderabad") {
          navigate("/good-plans");
        } else if (selectedLocation === "Karnataka") {
          navigate("/contact-us");
        }
      };
    
    return (
        <div style={styles.container}>
            <div style={styles.blurOverlay}></div>
            <div style={styles.formBox}>
                <img src={logo} alt="HIACE Matrimony" style={styles.logo} />
                <h2 style={styles.title}>Find Your Perfect</h2>
                <p style={styles.description}>
                    "Select your geolocation to find the perfect updates tailored just for
                    you and stay always up to date."
                </p>
                <form style={styles.form} onSubmit={(e) => e.preventDefault()}>
          <select
            style={styles.dropdown}
            value={selectedLocation}
            onChange={handleDropdownChange}
          >
            <option value="" disabled>
              LOCATION
            </option>
            <option value="NorthIndia">North India</option>
            <option value="TamilNadu">Tamil Nadu</option>
            <option value="Kerala">Kerala</option>
            <option value="Hyderabad">Hyderabad</option>
            <option value="Karnataka">Karnataka</option>
          </select>
          <button
            type="button"
            style={styles.submitButton}
            onClick={handleSubmit}
          >
            SUBMIT
          </button>
        </form>
            </div>
            <footer style={styles.footer}>© 2025 HiAce Systems</footer>
        </div>
    );
};

export default HomePage;