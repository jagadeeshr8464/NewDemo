import React, { useState } from "react";
import {
  Box,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Avatar,
  Typography,
  TextField,
  IconButton,
  Menu,
  MenuItem,
  Modal,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { styled } from "@mui/system";

const styles = {
  mainContainer: {
    backgroundColor: "#fff",
    padding: "10px 20px",
    marginLeft: "260px",
  },
};

const ApprovalBadge = styled("span")({
  backgroundColor: "#d4f8d4",
  color: "#2e7d32",
  padding: "5px 12px",
  borderRadius: "15px",
  fontSize: "12px",
  display: "inline-flex",
  alignItems: "center",
  gap: "5px",
  fontWeight: "bold",
});

const StatusBadge = styled("span")({
  backgroundColor: "#d4f8d4",
  color: "#2e7d32",
  padding: "5px 12px",
  borderRadius: "15px",
  fontSize: "12px",
  fontWeight: "bold",
});

const MembersTable = () => {
  const [members, setMembers] = useState([
    { id: 1, code: "2024111", name: "John D", gender: "Male", since: "Male", status: "Active" },
    { id: 2, code: "2024112", name: "Ram M A", gender: "Male", since: "Male", status: "Active" },
    { id: 3, code: "2024113", name: "Charan S", gender: "Male", since: "Male", status: "Active" },
  ]);

  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedRow, setSelectedRow] = useState(null);
  const [openModal, setOpenModal] = useState(false);

  // State for New Member Form
  const [newMember, setNewMember] = useState({
    name: "",
    gender: "",
    code: "",
    since: "",
    status: "Active",
  });

  // Open action menu
  const handleMenuClick = (event, row) => {
    setAnchorEl(event.currentTarget);
    setSelectedRow(row);
  };

  // Close action menu
  const handleMenuClose = () => {
    setAnchorEl(null);
    setSelectedRow(null);
  };

  // Open modal
  const handleOpenModal = () => {
    setOpenModal(true);
  };

  // Close modal
  const handleCloseModal = () => {
    setOpenModal(false);
  };

  // Handle input change in form
  const handleChange = (e) => {
    setNewMember({ ...newMember, [e.target.name]: e.target.value });
  };

  // Add new member
  const handleSave = () => {
    if (newMember.name && newMember.gender && newMember.code && newMember.since) {
      setMembers([...members, { id: members.length + 1, ...newMember }]);
      setNewMember({ name: "", gender: "", code: "", since: "", status: "Active" });
      handleCloseModal();
    }
  };

  // Delete member
  const handleDelete = (id) => {
    setMembers(members.filter((member) => member.id !== id));
    handleMenuClose();
  };

  return (
    <Box sx={styles.mainContainer}>
      {/* Page Header - Members & Add Button */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          mb: 3,
        }}
      >
        <Typography
          variant="h6"
          fontWeight="bold"
          sx={{ fontSize: "22px", color: "#333" }}
        >
          Members
        </Typography>

        <Button
          variant="contained"
          sx={{
            bgcolor: "#001f89",
            color: "white",
            fontSize: "14px",
            fontWeight: "bold",
            padding: "8px 16px",
            borderRadius: "10px",
            "&:hover": { bgcolor: "#001970" },
          }}
          onClick={handleOpenModal}
        >
          Add New Members
        </Button>
      </Box>

      {/* Table Container with "All Members" & Search Bar in the same row */}
      <TableContainer component={Paper} sx={{ borderRadius: "12px", padding: "15px" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            mb: 2,
          }}
        >
          <Typography
            variant="h6"
            fontWeight="bold"
            sx={{ fontSize: "18px", color: "#333" }}
          >
            All Members
          </Typography>

          <TextField
            variant="outlined"
            placeholder="Type First name/Last name"
            size="small"
            sx={{
              width: { xs: "100%", md: "250px" },
              "& .MuiOutlinedInput-root": {
                borderRadius: "20px",
                backgroundColor: "white",
              },
            }}
          />
        </Box>

        <Table>
          <TableHead sx={{ bgcolor: "#f5f5f5" }}>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell>Image</TableCell>
              <TableCell>Member Code</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Gender</TableCell>
              <TableCell>Approval Status</TableCell>
              <TableCell>Member Since</TableCell>
              <TableCell>Member Status</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {members.map((member) => (
              <TableRow key={member.id}>
                <TableCell>{member.id}</TableCell>
                <TableCell><Avatar /></TableCell>
                <TableCell>{member.code}</TableCell>
                <TableCell>{member.name}</TableCell>
                <TableCell>{member.gender}</TableCell>
                <TableCell><ApprovalBadge><CheckCircleIcon sx={{ fontSize: "14px" }} />Approved</ApprovalBadge></TableCell>
                <TableCell>{member.since}</TableCell>
                <TableCell><StatusBadge>Active</StatusBadge></TableCell>
                <TableCell align="right">
                  <IconButton onClick={(e) => handleMenuClick(e, member)}>
                    <MoreVertIcon />
                  </IconButton>
                  {/* <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
                    <MenuItem onClick={() => handleDelete(member.id)}>🗑️ Delete</MenuItem>
                  </Menu> */}
                  <Menu
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl && selectedRow?.id === member.id)}
                    onClose={handleMenuClose}
                  >
                    <MenuItem onClick={handleMenuClose}>👤 View Profile</MenuItem>
                    <MenuItem onClick={() => handleDelete(member.id)}>🗑️ Delete</MenuItem>
                    <MenuItem onClick={handleMenuClose}>💾 Save Profile</MenuItem>
                  </Menu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Modal for Adding New Member */}
      <Modal open={openModal} onClose={handleCloseModal}>
        <Box sx={{ padding: 4, bgcolor: "white", width: "300px", margin: "100px auto", borderRadius: "8px" }}>
          <Typography variant="h6">Add New Member</Typography>
          <TextField label="Name" name="name" fullWidth sx={{ mt: 2 }} onChange={handleChange} />
          <TextField label="Gender" name="gender" fullWidth sx={{ mt: 2 }} onChange={handleChange} />
          <TextField label="Member Code" name="code" fullWidth sx={{ mt: 2 }} onChange={handleChange} />
          <TextField label="Member Since" name="since" fullWidth sx={{ mt: 2 }} onChange={handleChange} />
          <Button variant="contained" sx={{ mt: 2 }} onClick={handleSave}>Save</Button>
        </Box>
      </Modal>
    </Box>
  );
};

export default MembersTable;