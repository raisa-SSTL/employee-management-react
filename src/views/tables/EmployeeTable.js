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
  const [selectedDepartments, setSelectedDepartments] = useState([]);

  const handleAddButtonClick = () => setOpen(true);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value.toLowerCase());
  };
  const filteredEmployees = employees.filter(
    (employee) =>
        (employee.name.toLowerCase().includes(searchQuery) ||
          employee.email.toLowerCase().includes(searchQuery)) &&
        (selectedDepartments.length === 0 || selectedDepartments.includes(employee.department))
  );

  const handleFilterClick = (event) => {
    setFilterOpen(event.currentTarget);
  };
  const handleFilterClose = () => {
    setFilterOpen(null);
  };

   // department checkbox changes
   const handleDepartmentChange = (event) => {
    const { value, checked } = event.target;
    setSelectedDepartments((prev) =>
      checked ? [...prev, value] : prev.filter((dept) => dept !== value)
    );
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
                    <Box display="flex" flexDirection="column" sx={{ px: 2 }}>
                      <Typography sx={{ py: 1 }}>Select Department:</Typography>
                      {["Project Manager", "Web Designer", "HR Manager", "Frontend Engineer"].map((dept) => (
                        <FormControlLabel
                          key={dept}
                          control={
                            <Checkbox
                              value={dept}
                              checked={selectedDepartments.includes(dept)}
                              onChange={handleDepartmentChange}
                              color="primary"
                            />
                          }
                          label={dept}
                        />
                      ))}
                    </Box>
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
