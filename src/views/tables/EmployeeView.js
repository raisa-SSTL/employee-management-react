import React, {useState} from 'react';
import { useParams } from 'react-router-dom';
import { Card, CardContent, Box, Typography, Button, CircularProgress } from "@mui/material";
import { useNavigate } from "react-router-dom";
import EmployeeViewContent from "./EmployeeViewContent";

const EmployeeView = () => {

    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const navigate = useNavigate();

    //   if (loading) {
    //           return (
    //             <Box
    //               sx={{
    //                 display: "flex",
    //                 justifyContent: "center",
    //                 alignItems: "center",
    //                 minHeight: "100vh",
    //               }}
    //             >
    //               <CircularProgress />
    //             </Box>
    //           );
    //       }
    
    
    const handleButtonClick = () => {
        navigate("/employee-table");
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
              <Typography variant="h3">Task Details</Typography>
                <Button
                                          variant="outlined"
                                          color="secondary"
                                          sx={{
                                            mr: 1,
                                            mb: {
                                              xs: 1,
                                              sm: 0,
                                              lg: 0,
                                            },
                                          }}
                                          onClick={handleButtonClick}
                                        >
                                          Back
                </Button>
            </Box>
              <Box
                sx={{
                  overflow: {
                    xs: "auto",
                    sm: "unset",
                  },
                }}
              >
                <EmployeeViewContent 
                    // taskData={task}
                />
              </Box>
            </CardContent>
          </Card>
        </Box>
    );
};

export default EmployeeView;