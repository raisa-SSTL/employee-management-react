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
  Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, 
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useEmployees } from "../../context/EmployeeContext";
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import Swal from 'sweetalert2';

const EmpTableContent = () => {

  const navigate = useNavigate();
  const { employees } = useEmployees(); //employee data fetched from context
  const [open, setOpen] = useState(false);
  const [selectedEmp, setSelectedEmp] = useState(null);

  const handleDelete = (empId) => {
    setSelectedEmp(empId);
    setOpen(true);
    // Swal.fire({
    //   title: 'Are you sure?',
    //   text: "This action cannot be undone.",
    //   icon: 'warning',
    //   showCancelButton: true,
    //   confirmButtonColor: '#d33',
    //   cancelButtonColor: '#3085d6',
    //   confirmButtonText: 'Yes, delete it!',
    //   cancelButtonText: 'Cancel',
    // }).then((result) => {
    //   // if (result.isConfirmed) {
    //   //   // Perform the delete action here, for example:
    //   //   console.log(`Employee with ID ${empId} has been deleted.`);
    //   //   // You can add your delete logic here, like calling an API or updating state
    //   // }
    //   if (result.isConfirmed) {
    //     Swal.fire({
    //       title: "Deleted!",
    //       text: "Your file has been deleted.",
    //       icon: "success"
    //     });
    //   }
    // });
  };

  const handleDialogClose = () => {
    setOpen(false);
    setSelectedEmp(null);
  };

  return (
    <>
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
                    onClick={() => handleDelete(employee.id)}
                >
                    Delete
                </Button>
            </TableCell>   
          </TableRow>
        ))}
      </TableBody>
    </Table>
    {/* Confirm delete alert */}
    <Dialog
      open={open}
      onClose={handleDialogClose}
      aria-labelledby="delete-dialog-title"
      aria-describedby="delete-dialog-description"
    >
    <DialogContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <WarningAmberIcon sx={{ color: 'orange', fontSize: '3rem', mb: 1 }} />
        <DialogContentText 
            id="delete-dialog-description" 
            sx={{ textAlign: 'center' }}
        >
            Are you sure you want to delete this employee? 
        </DialogContentText>
    </DialogContent>
    <DialogActions sx={{ justifyContent: 'center', mb:2 }}>
        <Button onClick={handleDialogClose} color="primary">
            Cancel
        </Button>
        <Button color="error">
            Delete
        </Button>
    </DialogActions>
  </Dialog>

  </>
  );
};

export default EmpTableContent;
