import React from "react";
import {
  Typography,
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Chip,
  Button
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useEmployees } from "../../context/EmployeeContext";

const EmpTableContent = () => {

  const navigate = useNavigate();
  const { employees } = useEmployees(); //employee data fetched from context

  return (
    <Table
      aria-label="simple table"
      sx={{
        mt: 3,
        whiteSpace: "nowrap",
      }}
    >
      <TableHead>
        <TableRow>
          <TableCell>
            <Typography color="textSecondary" variant="h6" align="left">
              Photo
            </Typography>
          </TableCell>
          <TableCell>
            <Typography color="textSecondary" variant="h6">
              Name
            </Typography>
          </TableCell>
          <TableCell>
            <Typography color="textSecondary" variant="h6">
              Phone
            </Typography>
          </TableCell>
          <TableCell>
            <Typography color="textSecondary" variant="h6">
              Email
            </Typography>
          </TableCell>
          <TableCell>
            <Typography color="textSecondary" variant="h6">
              Address
            </Typography>
          </TableCell>
          <TableCell align="center">
            <Typography color="textSecondary" variant="h6">
              Action
            </Typography>
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {employees.map((employee) => (
          <TableRow key={employee.name}>
            <TableCell>
              <Typography
                sx={{
                  fontSize: "15px",
                  fontWeight: "500",
                }}
              >
                {/* {product.id} */}
              </Typography>
            </TableCell>
            <TableCell>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Box>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: "600",
                    }}
                  >
                    {employee.name}
                  </Typography>
                  <Typography
                    color="textSecondary"
                    sx={{
                      fontSize: "13px",
                    }}
                  >
                    {employee.department}
                  </Typography>
                </Box>
              </Box>
            </TableCell>
            <TableCell>
              <Typography color="textSecondary" variant="h6">
                {employee.phone}
              </Typography>
            </TableCell>
            <TableCell>
              <Typography color="textSecondary" variant="h6">
                {employee.email}
              </Typography>
            </TableCell>
            <TableCell>
              <Typography color="textSecondary" variant="h6">
                {employee.address}
              </Typography>
            </TableCell>
            {/* <TableCell align="right">
              <Typography variant="h6">${product.budget}k</Typography>
            </TableCell> */}
            <TableCell align="right">
                <Button
                    variant="outlined"
                    color="primary"
                    sx={{
                    mr: 1,
                    mb: {
                            xs: 1,
                            sm: 0,
                            lg: 0,
                        },
                    }}
                    onClick={() => navigate(`/employee-view/${employee.id}`)}
                >
                    View
                </Button>
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
                    // onClick={() => navigate(`/`)}
                >
                    Update
                </Button>
                <Button
                    variant="outlined"
                    color="error"
                    sx={{
                        mr: 1,
                        mb: {
                        xs: 1,
                        sm: 0,
                        lg: 0,
                    },
                    }}
                    // onClick={() => handleOpen()}
                >
                    Delete
                </Button>
            </TableCell>   
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default EmpTableContent;
