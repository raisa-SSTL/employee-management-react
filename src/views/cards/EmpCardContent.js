import React, {useState} from "react";
import {
  Typography,
  Box,
  Button, Grid, Card, CardContent, TableRow, TableCell, TablePagination
} from "@mui/material";
import DeleteConfirmationDialog from "../../components/DeleteConfirmationDialogue";
import { ToastContainer } from "react-toastify";

const EmpCardContent = ({ employees }) => {
 
  const [open, setOpen] = useState(false);
  const [selectedEmp, setSelectedEmp] = useState(null);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(6); // 6 cards per page

  const handleDelete = (empId) => {
    setSelectedEmp(empId);
    setOpen(true);
  };

  const handleDialogClose = () => {
    setOpen(false);
    setSelectedEmp(null);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  // cards per page change
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // split employees for pagination
  const paginatedEmployees = employees.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

    return(
        <>
        <Grid container>
        {paginatedEmployees.length > 0 ? (
                        paginatedEmployees.map((employee, index) => (
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
                                    transition: "0.3s", // smooth transition
                                    "&:hover": {
                                        boxShadow: "0px 5px 15px rgba(0, 123, 255, 0.5)", 
                                        transform: "scale(1.02)", // slightly enlarge the card
                                    },
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
                        ))
                    ) : (
                        <Grid item xs={12} sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "200px" }}>
                            <Typography variant="h6" color="textSecondary">
                                No Employees Found
                            </Typography>
                        </Grid>
                    )}
                    </Grid>
        {/* Confirm delete alert */}
        <DeleteConfirmationDialog 
        open={open} 
        onClose={handleDialogClose} 
        message="Are you sure you want to delete this employee?" 
        employee={selectedEmp}
        />
        {/* Pagination Controls */}
        <TablePagination
          component="div"
          count={employees.length}
          page={page}
          onPageChange={handleChangePage}
          rowsPerPage={rowsPerPage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          labelRowsPerPage="Cards per page:"
          rowsPerPageOptions={[6, 12, 18]}
        />
        {/* toast notification */}
        <ToastContainer />
    </>
    );
};

export default EmpCardContent;
