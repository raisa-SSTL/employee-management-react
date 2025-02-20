import React, { useState } from "react";
import { Box, Typography, TextField, Button, Modal } from "@mui/material";
import { toast } from "react-toastify";
import { useEmployees } from "../../context/EmployeeContext";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import u3 from "../../assets/images/backgrounds/u3.jpg";
import defaultuser from "../../assets/images/users/defaultuser.jpg";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css";

const AddEmployeeModal = ({ open, setOpen }) => {

    const { addEmployee } = useEmployees();
    const [phoneNo, setPhoneNo] = useState("");

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
        const employeeData = {
            ...newEmployee,
            img: newEmployee.img || defaultuser, // use default image if none is uploaded
          };
      addEmployee(employeeData);
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
        {/* Image Upload Section */}
        <Box sx={{ display: "flex", justifyContent: "center", position: "relative", mb: 3 }}>
        <Box
            sx={{
            width: 100,
            height: 100,
            borderRadius: "50%",
            overflow: "hidden",
            border: "2px solid #ccc",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            cursor: "pointer",
            }}
            onClick={() => document.getElementById("fileInput").click()}
        >
            <img
            src={newEmployee.img || defaultuser } // Default placeholder
            alt="Employee"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
            <input
            type="file"
            id="fileInput"
            accept="image/*"
            onChange={handleImageChange}
            style={{ display: "none" }}
            />
        </Box>
        <Box
            sx={{
            position: "absolute",
            top: 0,
            right: "calc(50% - 40px)", // Adjust position
            bgcolor: "primary.main",
            width: 30,
            height: 30,
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            }}
            onClick={() => document.getElementById("fileInput").click()}
        >
            <AddAPhotoIcon sx={{ color: "white", fontSize: 18 }} />
        </Box>
        </Box>
        <form onSubmit={handleSubmit}>
          <TextField label="Name" name="name" value={newEmployee.name} onChange={handleInputChange} fullWidth sx={{ mb: 2 }} error={!!errors.name} helperText={errors.name} />
          {/* <TextField label="Phone" name="phone" value={newEmployee.phone} onChange={handleInputChange} fullWidth sx={{ mb: 2 }} error={!!errors.phone} helperText={errors.phone} /> */}
          <PhoneInput
            country={"eg"}
            enableSearch={true}
            value={newEmployee.phone}
            onChange={(phone) => setNewEmployee((prev) => ({ ...prev, phone }))}
            inputStyle={{ width: "100%" }}
          />
            {errors.phone && (
              <Typography variant="body2" sx={{ color: "red", mt: 0.5 }}>
                {errors.phone}
              </Typography>
            )}
          <TextField label="Email" name="email" type="email" value={newEmployee.email} onChange={handleInputChange} fullWidth sx={{ mb: 2, mt:2 }} error={!!errors.email} helperText={errors.email} />
          <TextField label="Address" name="address" value={newEmployee.address} onChange={handleInputChange} fullWidth sx={{ mb: 2 }} error={!!errors.address} helperText={errors.address} />
          <TextField label="Department" name="department" value={newEmployee.department} onChange={handleInputChange} fullWidth sx={{ mb: 2 }} error={!!errors.department} helperText={errors.department} />
          {/* <input type="file" accept="image/*" onChange={handleImageChange} style={{ marginBottom: "16px" }} /> */}
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
