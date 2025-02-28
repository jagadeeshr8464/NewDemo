import React, { useState } from "react";
import {
  Container,
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Badge,
  TextField,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  InputBase,
  Grid,
  useMediaQuery,
} from "@mui/material";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SearchIcon from "@mui/icons-material/Search";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import SentimentDissatisfiedIcon from "@mui/icons-material/SentimentDissatisfied";
import logo from "./assets/logo.png";
import userIcon from "./assets/userIcon.png";

const AllBlogCategories = () => {
  const [categories, setCategories] = useState([]);
  const [categoryName, setCategoryName] = useState("");

  // Check screen size for responsiveness
  const isMobile = useMediaQuery("(max-width: 900px)");

  const handleAddCategory = () => {
    if (categoryName.trim() !== "") {
      setCategories([...categories, { id: categories.length + 1, name: categoryName }]);
      setCategoryName("");
    }
  };

  return (
    <Box sx={{ 
      minHeight: "100vh", 
      backgroundColor: "#f8f8f8", 
      transition: "margin-left 0.3s ease",
      marginLeft: isMobile ? "0px" : "260px", 
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between"
    }}>
      
      {/*Top Navigation Bar */}
      <AppBar position="static" sx={{ backgroundColor: "white", boxShadow: "none", borderBottom: "2px solid #E0E0E0" }}>
  <Toolbar sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
    
    {/* Left: Logo */}
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <img src={logo} alt="Logo" style={{ height: "40px" }} />
    </Box>

    {/* Right: Notifications & User */}
    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
      <Badge color="error">
        <NotificationsNoneIcon sx={{ fontSize: 30, color: "black", cursor: "pointer" }} />
      </Badge>

      {/* User Section */}
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
         <Box sx={{ display: "flex", alignItems: "center" }}>
      <img src={userIcon} alt="userIcon" style={{ height: "30px" }} />
    </Box>
        <Box>
          <Typography sx={{ fontSize: "14px", fontWeight: "bold", color: "black" }}>Name</Typography>
          <Typography sx={{ fontSize: "12px", color: "#777" }}>Destine</Typography>
        </Box>
      </Box>
    </Box>

  </Toolbar>
</AppBar>


      <Container maxWidth="lg" sx={{ py: 4, flexGrow: 1 }}>
        {/* Page Header */}
        <Typography variant="h5" fontWeight="bold" sx={{ mb: 3 }}>
          All Blog Categories
        </Typography>

        {/*Responsive Grid Layout */}
        <Grid container spacing={3}>
          {/* Left Section - Blog Categories Table */}
          <Grid item xs={12} md={7}>
            <Paper sx={{ p: 3, borderRadius: "12px" }}>
              
              {/* "All Categories" Title & Search Bar (Row Layout) */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  mb: 2,
                }}
              >
                <Typography variant="h6" fontWeight="bold">
                  All Categories
                </Typography>

                {/* Search Bar */}
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    border: "1px solid #ccc",
                    borderRadius: "5px",
                    pl: 1,
                    width: "250px",
                  }}
                >
                  <InputBase
                    placeholder="Type name & Enter"
                    fullWidth
                    sx={{ ml: 1, flex: 1 }}
                  />
                  <IconButton>
                    <SearchIcon />
                  </IconButton>
                </Box>
              </Box>

              {/* Table */}
              <TableContainer>
                <Table>
                  <TableHead sx={{ backgroundColor: "#f5f5f5" }}>
                    <TableRow>
                      <TableCell sx={{ fontWeight: "bold" }}>#</TableCell>
                      <TableCell sx={{ fontWeight: "bold" }}>Name</TableCell>
                      <TableCell sx={{ fontWeight: "bold" }}>Options</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {categories.length === 0 ? (
                      <TableRow>
                        <TableCell colSpan={3} align="center" sx={{ py: 6 }}>
                          <SentimentDissatisfiedIcon sx={{ fontSize: "50px", color: "#777" }} />
                          <Typography fontWeight="bold" sx={{ mt: 1 }}>
                            Nothing Found
                          </Typography>
                        </TableCell>
                      </TableRow>
                    ) : (
                      categories.map((category, index) => (
                        <TableRow key={category.id}>
                          <TableCell>{index + 1}</TableCell>
                          <TableCell>{category.name}</TableCell>
                          <TableCell>Options</TableCell>
                        </TableRow>
                      ))
                    )}
                  </TableBody>
                </Table>
              </TableContainer>
            </Paper>
          </Grid>

          {/* Right Section - Add Blog Category Form */}
          <Grid item xs={12} md={5}>
            <Paper sx={{ p: 3, borderRadius: "12px" }}>
              <Typography variant="h6" fontWeight="bold" sx={{ mb: 2 }}>
                Add New Blog Category
              </Typography>

              {/* Label & Input Field */}
              <Typography sx={{ fontSize: "14px", fontWeight: "bold", color: "#333", mb: 1 }}>
                Name
              </Typography>
              <TextField
                placeholder="Enter Category Name"
                variant="outlined"
                fullWidth
                value={categoryName}
                onChange={(e) => setCategoryName(e.target.value)}
                sx={{ mb: 3 }}
              />

              {/* Save Button */}
              <Button
                variant="contained"
                fullWidth
                sx={{
                  backgroundColor: "#001f89",
                  color: "white",
                  fontWeight: "bold",
                  "&:hover": { backgroundColor: "#001970" },
                }}
                onClick={handleAddCategory}
                startIcon={<AddCircleOutlineIcon />}
              >
                Save
              </Button>
            </Paper>
          </Grid>
        </Grid>
      </Container>

      {/* Footer */}
      <Typography variant="body2" align="center" sx={{ py: 2, color: "gray" }}>
        © Hiace Matrimony v4.4
      </Typography>
    </Box>
  );
};

export default AllBlogCategories;