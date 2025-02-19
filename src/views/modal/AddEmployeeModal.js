import React, { useState } from "react";
import { Box, Typography, TextField, Button, Modal } from "@mui/material";
import { toast } from "react-toastify";
import { useEmployees } from "../../context/EmployeeContext";

const AddEmployeeModal = ({ open, setOpen }) => {

    const { addEmployee } = useEmployees();

  const [newEmployee, setNewEmployee] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    department: "",
    img: ""
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEmployee((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => setNewEmployee((prev) => ({ ...prev, img: reader.result }));
    if (file) reader.readAsDataURL(file);
  };

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
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      addEmployee(newEmployee);
      toast.success("Employee added successfully!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
      });
      handleClose();
      setNewEmployee({ name: "", phone: "", email: "", address: "", department: "", img: "" });
      setErrors({});
    }
  };

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

  return (
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
          <TextField label="Name" name="name" value={newEmployee.name} onChange={handleInputChange} fullWidth sx={{ mb: 2 }} error={!!errors.name} helperText={errors.name} />
          <TextField label="Phone" name="phone" value={newEmployee.phone} onChange={handleInputChange} fullWidth sx={{ mb: 2 }} error={!!errors.phone} helperText={errors.phone} />
          <TextField label="Email" name="email" type="email" value={newEmployee.email} onChange={handleInputChange} fullWidth sx={{ mb: 2 }} error={!!errors.email} helperText={errors.email} />
          <TextField label="Address" name="address" value={newEmployee.address} onChange={handleInputChange} fullWidth sx={{ mb: 2 }} error={!!errors.address} helperText={errors.address} />
          <TextField label="Department" name="department" value={newEmployee.department} onChange={handleInputChange} fullWidth sx={{ mb: 2 }} error={!!errors.department} helperText={errors.department} />
          <input type="file" accept="image/*" onChange={handleImageChange} style={{ marginBottom: "16px" }} />
          <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 2 }}>
            <Button onClick={handleClose}>Cancel</Button>
            <Button type="submit" variant="contained" color="primary">
              Add Employee
            </Button>
          </Box>
        </form>
      </Box>
    </Modal>
  );
};

export default AddEmployeeModal;
