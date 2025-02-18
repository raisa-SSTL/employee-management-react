import React from "react";

import {
    Typography,
    Box,
    Button
} from "@mui/material";
  
  const EmployeeViewContent = ({}) => {

    return (
        <Box>
            {/* <Typography variant="h5" sx={{ mb: 2 }}>
                Task Details
            </Typography> */}
            <Typography sx={{ mb: 1 }}>
                <strong>Photo:</strong> 
                {/* {taskData?.id} */}
            </Typography>
            <Typography sx={{ mb: 1 }}>
                <strong>Name:</strong> 
                {/* {taskData?.title} */}
            </Typography>
            <Typography sx={{ mb: 1 }}>
                <strong>Phone:</strong> 
                {/* {taskData?.description || "No description provided"} */}
            </Typography>
            <Typography sx={{ mb: 1 }}>
                <strong>Email:</strong> 
                {/* {taskData?.priority || "Not specified"} */}
            </Typography>
            <Typography sx={{ mb: 1 }}>
                <strong>Address:</strong> 
                {/* {taskData?.deadline || "No deadline set"} */}
            </Typography>
            <Typography sx={{ mb: 1 }}>
                <strong>Department:</strong>
                 {/* {taskData?.status || "No status set"} */}
            </Typography>
        </Box>
    );

  };

  export default EmployeeViewContent;