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

const employees = [
  {
    id: "1",
    name: "Sunil Joshi",
    department: "Web Designer",
    phone: "(305) 555-8293",
    email: "james.wilson@example.com",
    address: "New Delhi",
  },
  {
    id: "2",
    name: "Andrew McDownland",
    department: "Project Manager",
    phone: "(646) 555-1749",
    email: "samantha.brown@testmail.com",
    address: "London",
  },
  {
    id: "3",
    name: "Christopher Jamil",
    department: "Project Manager",
    phone: "(415) 555-6210",
    email: "alexander.lee@demoemail.com",
    address: "London",
  },
  {
    id: "4",
    name: "Nirav Joshi",
    department: "Frontend Engineer",
    phone: "(818) 555-0937",
    email: "emma.johnson@mockmail.com",
    address: "California",
  },
];

const EmpTableContent = () => {
  const navigate = useNavigate();

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
        {employees.map((product) => (
          <TableRow key={product.name}>
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
                    {product.name}
                  </Typography>
                  <Typography
                    color="textSecondary"
                    sx={{
                      fontSize: "13px",
                    }}
                  >
                    {product.department}
                  </Typography>
                </Box>
              </Box>
            </TableCell>
            <TableCell>
              <Typography color="textSecondary" variant="h6">
                {product.phone}
              </Typography>
            </TableCell>
            <TableCell>
              <Typography color="textSecondary" variant="h6">
                {product.email}
              </Typography>
            </TableCell>
            <TableCell>
              <Typography color="textSecondary" variant="h6">
                {product.address}
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
                    onClick={() => navigate(`/employee-view/${employees.id}`)}
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
