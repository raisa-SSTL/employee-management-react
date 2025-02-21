import React, {useContext, useState} from "react";
import { Card, CardContent, Box, Typography, TextField, Fab, Modal, Button, Menu, FormControlLabel, Checkbox } from "@mui/material";
import EmpTableContent from "./EmpTableContent";
import AddToPhotosOutlinedIcon from '@mui/icons-material/AddToPhotosOutlined';
import { useNavigate } from "react-router-dom";
import {useEmployees} from "../../context/EmployeeContext";
import FilterListIcon from '@mui/icons-material/FilterList';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AddEmployeeModal from "../modal/AddEmployeeModal";

const EmployeeTable = () => {

  const navigate = useNavigate();
  const { employees } = useEmployees(); 
  const [open, setOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterOpen, setFilterOpen] = useState(null);
  const [isDepartmentFilterEnabled, setIsDepartmentFilterEnabled] = useState(false);

  const handleAddButtonClick = () => setOpen(true);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value.toLowerCase());
  };
  const filteredEmployees = employees.filter(
    (employee) =>
      employee.name.toLowerCase().includes(searchQuery) ||
      employee.email.toLowerCase().includes(searchQuery)
  );

  const handleFilterClick = (event) => {
    setFilterOpen(event.currentTarget);
  };
  const handleFilterClose = () => {
    setFilterOpen(null);
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
                  {/* Filter Button */}
                  <Button
                    startIcon={<FilterListIcon />}
                    onClick={handleFilterClick}
                    variant="outlined"
                    sx={{
                      borderRadius: "50px",
                    }}
                  >
                    Filter
                  </Button>
                  <Menu
                  anchorEl={filterOpen}
                  open={Boolean(filterOpen)}
                  onClose={handleFilterClose}
                  sx={{ p: 2 }}
                  >
                    {/* Department Filter */}
                    <Typography sx={{ px: 2, py: 1 }}>Filter By:</Typography>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={isDepartmentFilterEnabled}
                          onChange={() => setIsDepartmentFilterEnabled(!isDepartmentFilterEnabled)}
                          color="primary"
                          sx={{ pl: 3}}
                        />
                      }
                      label="Department"
                    />
                  </Menu>
                  
                  {/* Search Bar */}
                  <TextField
                      variant="outlined"
                      size="small"
                      placeholder="Search Employee..."
                      value={searchQuery}
                      onChange={handleSearch}
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
            <EmpTableContent 
              employees={filteredEmployees}
              isDepartmentFilterEnabled={isDepartmentFilterEnabled}
            />
          </Box>
        </CardContent>
      </Card>
      {/* add employee modal */}
      <AddEmployeeModal open={open} setOpen={setOpen}/>
    </Box>
  );
};

export default EmployeeTable;
