import React from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardActionArea,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Avatar,
  Badge,
} from "@mui/material";
import { Notifications as NotificationsIcon, AddCircleOutline, YouTube } from "@mui/icons-material";
import BestMatch from "../components/assets/BestMatch.png";
import VerifyProfile from "../components/assets/VerifyProfile.png";
import Privacy from "../components/assets/Privacy.png";
import profilePic from "../components/assets/profilePic.png";

const RightSidePage = () => {
  const styles = {
    mainContainer: {
      backgroundColor: "#fff",
      padding: "20px",
      minHeight: "100vh",
      marginLeft: "260px",
      // marginTop: '100px'
      position: "fixed",
      marginVertical: '100px'
    },
    header: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      mb: 2,
    },
    userSection: {
      display: "flex",
      alignItems: "center",
      gap: "15px",
    },
    searchBar: {
      backgroundColor: "#ECEFF1",
      padding: "20px",
      borderRadius: "10px",
      mb: 3,
    },
    sectionTitle: {
      color: "#0044cc",
      fontWeight: "bold",
      fontSize: "1.2rem",
      marginBottom: "20px",
    },
    featuresContainer: {
      display: "flex",
      justifyContent: "space-around",
      marginTop: "20px",
    },
    featureCard: {
      textAlign: "center",
      padding: '40px'
    },
    featureIcon: {
      fontSize: "40px",
      color: "red",
    },
    trustedSection: {
      backgroundColor: "#FAFAFA",
      padding: "20px",
      borderRadius: "10px",
      marginTop: "40px",
      textAlign: "center",
    },
    trustedFooter: {
      display: "flex",
      justifyContent: "space-around",
      marginTop: "20px",
    },
    trustedIcon: {
      fontSize: "30px",
      color: "#0044cc",
    },
    trustedTitle: {
      fontSize: "2rem",
      fontWeight: "bold",
      color: "#7a468c",
      marginBottom: "10px",
    },
    divider: {
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
      gap: "30px",
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
    quote: {
        fontSize: '16px',
        color: '#333',
     
        marginBottom: '10px',
      },
  };

  return (
    <Box sx={styles.mainContainer}>
      {/* Header */}
     {/* Header */}
     <Box sx={styles.header}>
        <Box >
          {/* <Button color="primary">Home</Button>
          <Button color="primary">Login</Button>
          <Button color="primary">Contact</Button>
          <Button color="primary">About Us</Button> */}
        </Box>
        <Box sx={styles.userSection}>
        <Button color="primary">Home</Button>
          <Button color="primary">Login</Button>
          <Button color="primary">Contact</Button>
          <Button color="primary">About Us</Button>
          <Badge color="secondary" badgeContent={4}>
            <NotificationsIcon sx={{ fontSize: "28px", color: "#0044cc" }} />
          </Badge>
          <Avatar
            src={profilePic}
            sx={{ width: 40, height: 40, border: "2px solid #0044cc" }}
          />
          <Typography variant="body2" sx={{ color: "#0044cc", fontWeight: "bold" }}>
            Welcome Back! <br />
            User Name
          </Typography>
        </Box>
      </Box>

      <Box
  sx={{
    backgroundColor: "#E6E6FA", // Light purple background
    padding: "20px",
    borderRadius: "10px",
    border: "2px solid #0044cc", // Border as per design
    marginBottom: "30px",
  }}
>
  <Typography
    variant="h6"
    sx={{
      fontWeight: "bold",
      color: "#0044cc",
      marginBottom: "20px",
      textAlign: "left",
    }}
  >
    Find Your Right Match Here
  </Typography>
  <Box
    sx={{
      display: "flex",
      gap: "15px", // Reduced spacing between inputs
      alignItems: "center",
      flexWrap: "wrap", // Wrap for responsiveness
    }}
  >
    {/* Looking For */}
    <Box sx={{ flex: "1", maxWidth: "20%" }}>
      <InputLabel
        shrink
        sx={{
          color: "#888",
          fontSize: "0.9rem",
          marginBottom: "5px",
        }}
      >
        I'm looking for you
      </InputLabel>
      <FormControl fullWidth variant="outlined" sx={{ backgroundColor: "#fff", borderRadius: "10px" }}>
        <Select
          defaultValue="Woman"
          sx={{
            height: "30px", // Slim height
            fontSize: "0.8rem", // Slim font size
          }}
        >
          <MenuItem value="Man">Man</MenuItem>
          <MenuItem value="Woman">Woman</MenuItem>
        </Select>
      </FormControl>
    </Box>

    {/* Aged */}
    <Box sx={{ display: "flex", alignItems: "center", maxWidth: "35%" }}>
      <Box sx={{ flex: "1" }}>
        <InputLabel
          shrink
          sx={{
            color: "#888",
            fontSize: "0.9rem",
            marginBottom: "5px",
          }}
        >
          Aged
        </InputLabel>
        <FormControl fullWidth variant="outlined" sx={{ backgroundColor: "#fff", borderRadius: "10px" }}>
          <Select
            defaultValue={23}
            sx={{
              height: "30px",
              fontSize: "0.8rem",
            }}
          >
            {[...Array(41)].map((_, i) => (
              <MenuItem key={i} value={18 + i}>
                {18 + i}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
      <Typography
        sx={{
          margin: "0 10px",
          color: "#888",
          fontSize: "0.9rem",
          marginTop: "22px",
        }}
      >
        to
      </Typography>
      <Box sx={{ flex: "1" }}>
        <FormControl fullWidth variant="outlined" sx={{ backgroundColor: "#fff", borderRadius: "10px", marginTop: '25px' }}>
          <Select
            defaultValue={28}
            sx={{
              height: "30px",
              fontSize: "0.8rem",
            }}
          >
            {[...Array(41)].map((_, i) => (
              <MenuItem key={i} value={18 + i}>
                {18 + i}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
    </Box>

    {/* Religion */}
    <Box sx={{ flex: "1", maxWidth: "20%" }}>
      <InputLabel
        shrink
        sx={{
          color: "#888",
          fontSize: "0.9rem",
          marginBottom: "5px",
        }}
      >
        Of Religion
      </InputLabel>
      <FormControl fullWidth variant="outlined" sx={{ backgroundColor: "#fff", borderRadius: "10px" }}>
        <Select
          defaultValue="Hindu"
          sx={{
            height: "30px",
            fontSize: "0.8rem",
          }}
        >
          <MenuItem value="Hindu">Hindu</MenuItem>
          <MenuItem value="Muslim">Muslim</MenuItem>
          <MenuItem value="Christian">Christian</MenuItem>
        </Select>
      </FormControl>
    </Box>

    {/* Mother Tongue */}
    <Box sx={{ flex: "1", maxWidth: "20%" }}>
      <InputLabel
        shrink
        sx={{
          color: "#888",
          fontSize: "0.9rem",
          marginBottom: "5px",
        }}
      >
        And Mother Tongue
      </InputLabel>
      <FormControl fullWidth variant="outlined" sx={{ backgroundColor: "#fff", borderRadius: "10px" }}>
        <Select
          defaultValue="English"
          sx={{
            height: "30px",
            fontSize: "0.8rem",
          }}
        >
          <MenuItem value="English">English</MenuItem>
          <MenuItem value="Hindi">Hindi</MenuItem>
          <MenuItem value="Tamil">Tamil</MenuItem>
        </Select>
      </FormControl>
    </Box>

    {/* Search Button */}
    <Box>
      <Button
        variant="contained"
        sx={{
          height: "36px",
          minWidth: "140px",
          backgroundColor: "#0044cc",
          color: "#fff",
          fontWeight: "bold",
          fontSize: "0.8rem",
          ":hover": {
            backgroundColor: "#003399",
          },
          borderRadius: "10px",
          top:'10px',
          left: '20px'
        }}
      >
        Search
      </Button>
    </Box>
  </Box>
</Box>







      {/* Features */}

      <Grid container spacing={6} sx={{ justifyContent: "center", paddingTop: '70px' }}>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardActionArea sx={styles.featureCard}>
              <AddCircleOutline sx={styles.featureIcon} />
              <CardContent>
                <Typography variant="h6" sx={{ color: "#0044cc", fontWeight: "600", fontSize: 15 }}>
                  Create Your Biodata
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardActionArea sx={styles.featureCard}>
              <YouTube sx={styles.featureIcon} />
              <CardContent>
                <Typography variant="h6" sx={{ color: "#0044cc", fontWeight: "600", fontSize: 15 }}>
                  How to Create Biodata
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>

      {/* Trusted by Millions */}
      <div style={styles.trustedSection}>
        <h1 style={styles.trustedTitle}>Trusted by Millions</h1>
        <p style={styles.quote}>
            "Love doesn’t make the world go around. Love is what makes the ride
            worthwhile."
            Millions of Active Matrimonial users around the world find their
            true love and partners from this site. We are always there to help
            and find you the suitable match for yourself.
          </p>
        <div style={styles.divider}></div>
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
        <div style={styles.divider}></div>
      </div>
    </Box>
  );
};

export default RightSidePage;