import React, { useState} from "react";
import { Card, CardContent, Box, Typography, TextField, Fab, Divider } from "@mui/material";
import AddToPhotosOutlinedIcon from '@mui/icons-material/AddToPhotosOutlined';
import AddEmployeeModal from "../modal/AddEmployeeModal";
import EmpCardContent from "./EmpCardContent";
import { useEmployees } from "../../context/EmployeeContext";

const EmployeeCard = () => {

    const [open, setOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
      const { employees } = useEmployees();

    const handleAddButtonClick = () => setOpen(true);

    const handleSearch = (e) => {
        setSearchQuery(e.target.value.toLowerCase());
    };
    const filteredEmployees = employees.filter(
        (employee) =>
          employee.name.toLowerCase().includes(searchQuery) ||
          employee.email.toLowerCase().includes(searchQuery)
    );

    return(
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
                        <Typography variant="h3">Employee Cards</Typography>
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
                    <Divider sx={{ my: 2, backgroundColor: "grey.200" }} />
                    <EmpCardContent 
                        employees = {filteredEmployees}
                    />
                </CardContent>
            </Card>
            <AddEmployeeModal open={open} setOpen={setOpen}/>
        </Box>
    );
}

export default EmployeeCard;