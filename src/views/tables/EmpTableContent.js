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
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const EmpTableContent = ({ employees }) => {

  const navigate = useNavigate();
  const { deleteEmployee } = useEmployees(); //employee data fetched from context
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

  const handleConfirmDelete = () => {
    if (selectedEmp) {
      deleteEmployee(selectedEmp); // delete function from context
      toast.success("Employee deleted successfully!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
    handleDialogClose(); 
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
        {/* {employees.map((employee) => (
          <TableRow key={employee.name}>
            <TableCell>
              <img 
                src={employee.img} 
                alt={employee.name} 
                style={{
                  width: "50px",
                  height: "50px",
                  borderRadius: "50%",
                  objectFit: "cover"
                }}
              />
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
            <TableCell align="right">
                <Button
                    variant="contained"
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
                    variant="contained"
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
                    variant="contained"
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
        ))} */}

        {employees.length > 0 ? (
          employees.map((employee) => (
            <TableRow key={employee.id}>
              <TableCell>
                <img 
                  src={employee.img} 
                  alt={employee.name} 
                  style={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "50%",
                    objectFit: "cover"
                  }}
                />
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
              <TableCell align="right">
                <Button
                  variant="contained"
                  color="primary"
                  sx={{ mr: 1 }}
                  onClick={() => navigate(`/employee-view/${employee.id}`)}
                >
                  View
                </Button>
                <Button
                  variant="contained"
                  color="secondary"
                  sx={{ mr: 1 }}
                >
                  Update
                </Button>
                <Button
                  variant="contained"
                  color="error"
                  sx={{ mr: 1 }}
                  onClick={() => handleDelete(employee.id)}
                >
                  Delete
                </Button>
              </TableCell>   
            </TableRow>
          ))
          ) : (
          <TableRow>
            <TableCell colSpan={6} align="center">
              <Typography variant="h6" color="textSecondary">
                No Employees Found
              </Typography>
            </TableCell>
          </TableRow>
        )}
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
          <Button onClick={handleDialogClose} color="primary" variant="contained">
              Cancel
          </Button>
          <Button color="error" onClick={handleConfirmDelete} variant="contained">
              Delete
          </Button>
      </DialogActions>
  </Dialog>
  <ToastContainer />
  </>
  );
};

export default EmpTableContent;
