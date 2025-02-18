import React from "react";

import {
    Typography,
    Box,
    Button
} from "@mui/material";
  
  const EmployeeViewContent = ({employeeData}) => {

    return (
        <Box>
            <Typography sx={{ mb: 1 }}>
                <strong>Photo:</strong> 
            </Typography>
            <Typography sx={{ mb: 1 }}>
                <strong>Name:</strong> {employeeData?.name || "No name set"}
            </Typography>
            <Typography sx={{ mb: 1 }}>
                <strong>Phone:</strong> {employeeData?.phone || "No phone number set"}
            </Typography>
            <Typography sx={{ mb: 1 }}>
                <strong>Email:</strong> {employeeData?.email || "No email set"}
            </Typography>
            <Typography sx={{ mb: 1 }}>
                <strong>Address:</strong> {employeeData?.address || "No address set"}
            </Typography>
            <Typography sx={{ mb: 1 }}>
                <strong>Department:</strong> {employeeData?.department || "No department set"}
            </Typography>
        </Box>
    );

  };

  export default EmployeeViewContent;