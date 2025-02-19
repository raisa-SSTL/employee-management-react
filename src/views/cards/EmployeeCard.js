import React, {useContext, useState} from "react";
import { Card, CardContent, Box, Typography, TextField, Fab, Divider } from "@mui/material";
import AddToPhotosOutlinedIcon from '@mui/icons-material/AddToPhotosOutlined';
import AddEmployeeModal from "../modal/AddEmployeeModal";
import EmpCardContent from "./EmpCardContent";

const EmployeeCard = () => {

    const [open, setOpen] = useState(false);
    const handleAddButtonClick = () => setOpen(true);

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
                                // value={searchQuery}
                                // onChange={handleSearch}
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
                    <EmpCardContent />
                </CardContent>
            </Card>
            <AddEmployeeModal open={open} setOpen={setOpen}/>
        </Box>
    );
}

export default EmployeeCard;