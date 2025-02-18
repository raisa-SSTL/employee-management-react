import React from "react";
import { Card, CardContent, Box, Typography, TextField, Fab } from "@mui/material";
import EmpTableContent from "./EmpTableContent";
import AddToPhotosOutlinedIcon from '@mui/icons-material/AddToPhotosOutlined';

const EmployeeTable = () => {
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
                {/* Add Button */}
                <Fab
                    color="secondary"
                    // onClick={handleButtonClick}
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
    </Box>
  );
};

export default EmployeeTable;
