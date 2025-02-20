import React, {useState} from "react";
import {
  Typography,
  Box,
  Button, Grid, Card, CardContent
} from "@mui/material";
import {useEmployees} from "../../context/EmployeeContext";
import DeleteConfirmationDialog from "../../components/DeleteConfirmationDialogue";
import { ToastContainer } from "react-toastify";

const EmpCardContent = ({ }) => {

  const { employees } = useEmployees(); 
  const [open, setOpen] = useState(false);
  const [selectedEmp, setSelectedEmp] = useState(null);

  const handleDelete = (empId) => {
    setSelectedEmp(empId);
    setOpen(true);
  };

  const handleDialogClose = () => {
    setOpen(false);
    setSelectedEmp(null);
  };

    return(
        <>
        <Grid container>
                        {employees.map((employee, index) => (
                            <Grid
                            key={index}
                            item
                            xs={12}
                            lg={4}
                            sx={{
                                display: "flex",
                                alignItems: "stretch",
                            }}
                            >
                            <Card
                                variant="outlined"
                                sx={{
                                p: 0,
                                width: "100%",
                                }}
                            >
                                <Box
                                    sx={{
                                        height: 200, // fixed height for image
                                        overflow: "hidden", 
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                    }}
                                >
                                    <img 
                                        src={employee.img} 
                                        alt="Employee" 
                                        style={{
                                            width: "100%", 
                                            height: "100%", 
                                            objectFit: "cover" // Ensures uniformity
                                        }} 
                                    />
                                </Box>
                                {/* <img src={employee.img} alt="img" width="100%" /> */}
                                <CardContent
                                sx={{
                                    paddingLeft: "30px",
                                    paddingRight: "30px",
                                }}
                                >
                                <Typography
                                    sx={{
                                    fontSize: "h4.fontSize",
                                    fontWeight: "500",
                                    }}
                                >
                                    {employee.name}
                                </Typography>
                                <Typography
                                    color="textSecondary"
                                    sx={{
                                    fontSize: "14px",
                                    fontWeight: "400",
                                    mt: 1,
                                    }}
                                >
                                    {employee.department}
                                </Typography>
                                <Typography
                                    color="textSecondary"
                                    sx={{
                                    fontSize: "14px",
                                    fontWeight: "400",
                                    mt: 1,
                                    }}
                                >
                                    {employee.phone}
                                </Typography>
                                <Typography
                                    color="textSecondary"
                                    sx={{
                                    fontSize: "14px",
                                    fontWeight: "400",
                                    mt: 1,
                                    }}
                                >
                                    {employee.email}
                                </Typography>
                                <Typography
                                    color="textSecondary"
                                    sx={{
                                    fontSize: "14px",
                                    fontWeight: "400",
                                    mt: 1,
                                    }}
                                >
                                    {employee.address}
                                </Typography>
                                <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 2 }}>
                                    <Button variant="contained" color="error" onClick={() => handleDelete(employee.id)}>
                                        Delete
                                    </Button>
                                </Box>
                                </CardContent>
                            </Card>
                            </Grid>
                        ))}
                    </Grid>
        {/* Confirm delete alert */}
        <DeleteConfirmationDialog 
        open={open} 
        onClose={handleDialogClose} 
        message="Are you sure you want to delete this employee?" 
        employee={selectedEmp}
        />
        {/* toast notification */}
        <ToastContainer />
    </>
    );
};

export default EmpCardContent;
