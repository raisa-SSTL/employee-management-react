import React, {useContext, useState} from "react";
import { Card, CardContent, Box, Typography, TextField, Fab, Modal, Button } from "@mui/material";
import EmpTableContent from "./EmpTableContent";
import AddToPhotosOutlinedIcon from '@mui/icons-material/AddToPhotosOutlined';
import { useNavigate } from "react-router-dom";
import {useEmployees} from "../../context/EmployeeContext";

const EmployeeTable = () => {

  const navigate = useNavigate();
  const { addEmployee } = useEmployees(); // add employee method from context
  const [open, setOpen] = useState(false);
  const [errors, setErrors] = useState({});
  const [newEmployee, setNewEmployee] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    department: "",
    img: ""
  });

  const handleAddButtonClick = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setNewEmployee({
      name: "",
      phone: "",
      email: "",
      address: "",
      department: "",
      img: ""
    });
    setErrors({});
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEmployee((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setNewEmployee((prev) => ({ ...prev, img: reader.result }));
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  // form validation
  const validate = () => {
    const newErrors = {};
    if (!newEmployee.name.trim()) newErrors.name = "This field cannot stay empty";
    if (!newEmployee.phone.trim()) newErrors.phone = "This field cannot stay empty";
    if (!newEmployee.email.trim()) newErrors.email = "This field cannot stay empty";
    if (!newEmployee.address.trim()) newErrors.address = "This field cannot stay empty";
    if (!newEmployee.department.trim()) newErrors.department = "This field cannot stay empty";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // addEmployee(newEmployee); 
    // handleClose();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors); 
    } else {
      addEmployee(newEmployee); 
      handleClose();
    }
  };

  return (
    <Box>
      <Card variant="outlined">
        <CardContent>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center", 
                mb: 2, 
              }}
            >
                <Typography variant="h3">Employee Table</Typography>
                <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 5, 
                }}
                >
                {/* Search Bar */}
                <TextField
                    variant="outlined"
                    size="small"
                    placeholder="Search Employee..."
                    // value={searchQuery}
                    // onChange={handleSearchChange}
                    sx={{
                      width: "250px", // width of the search bar
                      "& .MuiOutlinedInput-root": {
                      borderRadius: "50px", 
                    },
                    }}
                />
                {/* Employee Add Button */}
                <Fab
                    color="secondary"
                    onClick={handleAddButtonClick}
                >
                    <AddToPhotosOutlinedIcon />
                </Fab>
            </Box>
            </Box>
          <Box
            sx={{
              overflow: {
                xs: "auto",
                sm: "unset",
              },
            }}
          >
            <EmpTableContent />
          </Box>
        </CardContent>
      </Card>
      {/* add employee modal */}
      <Modal open={open} onClose={handleClose}>
        <Box 
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            borderRadius: 2,
          }}
        >
          <Typography variant="h4" sx={{ mb: 2 }} align="center">
            Add New Employee
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              label="Name"
              name="name"
              value={newEmployee.name}
              onChange={handleInputChange}
              fullWidth
              sx={{ mb: 2 }}
              error={!!errors.name}
              helperText={errors.name}
            />
            <TextField
              label="Phone"
              name="phone"
              value={newEmployee.phone}
              onChange={handleInputChange}
              fullWidth
              sx={{ mb: 2 }}
              error={!!errors.phone}
              helperText={errors.phone}
            />
            <TextField
              label="Email"
              name="email"
              type="email"
              value={newEmployee.email}
              onChange={handleInputChange}
              fullWidth
              sx={{ mb: 2 }}
              error={!!errors.email}
              helperText={errors.email}
            />
            <TextField
              label="Address"
              name="address"
              value={newEmployee.address}
              onChange={handleInputChange}
              fullWidth
              sx={{ mb: 2 }}
              error={!!errors.address}
              helperText={errors.address}
            />
            <TextField
              label="Department"
              name="department"
              value={newEmployee.department}
              onChange={handleInputChange}
              fullWidth
              sx={{ mb: 2 }}
              error={!!errors.department}
              helperText={errors.department}
            />
            <input 
              type="file" 
              accept="image/*" 
              onChange={handleImageChange} 
              style={{ marginBottom: "16px" }}
            />
            <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 2 }}>
              <Button onClick={handleClose}>Cancel</Button>
              <Button type="submit" variant="contained" color="primary">
                Add Employee
              </Button>
            </Box>
          </form>
        </Box>
      </Modal>
    </Box>
  );
};

export default EmployeeTable;
