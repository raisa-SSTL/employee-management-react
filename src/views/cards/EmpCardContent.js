import React, {useState} from "react";
import {
  Typography,
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Chip,
  Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, Card, CardContent
} from "@mui/material";
// import user1 from "../../assets/images/backgrounds/u2.jpg";
// import user2 from "../../assets/images/backgrounds/u3.jpg";
// import user3 from "../../assets/images/backgrounds/u4.jpg";
import {useEmployees} from "../../context/EmployeeContext";

// const blogs = [
//     {
//       img: user1,
//       title: "Super awesome, Angular 12 is coming soon!",
//       subtitle:
//         "Some quick example text to build on the card title and make up the bulk of the card's content.",
//       btncolor: "error",
//     },
//     {
//       img: user2,
//       title: "Super awesome, Angular 12 is coming soon!",
//       subtitle:
//         "Some quick example text to build on the card title and make up the bulk of the card's content.",
//       btncolor: "warning",
//     },
//     {
//       img: user3,
//       title: "Super awesome, Angular 12 is coming soon!",
//       subtitle:
//         "Some quick example text to build on the card title and make up the bulk of the card's content.",
//       btncolor: "primary",
//     },
// ];

const EmpCardContent = ({ }) => {

  const { employees } = useEmployees(); 

    return(
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
                                        height: 200, // Fixed height
                                        overflow: "hidden", // Ensures images don’t exceed the box
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
                                <Button
                                    variant="contained"
                                    sx={{
                                    mt: "15px",
                                    }}
                                    // color={blog.btncolor}
                                    color="error"
                                >
                                    Delete
                                </Button>
                                </CardContent>
                            </Card>
                            </Grid>
                        ))}
                    </Grid>
    );
};

export default EmpCardContent;
