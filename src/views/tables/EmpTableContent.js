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
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UpdateEmployeeModal from "../modal/UpdateEmployeeModal";
import DeleteConfirmationDialog from "../../components/DeleteConfirmationDialogue";

const EmpTableContent = ({ employees }) => {

  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [selectedEmp, setSelectedEmp] = useState(null);
  const [updateModalOpen, setUpdateModalOpen] = useState(false);

  const handleDelete = (empId) => {
    setSelectedEmp(empId);
    setOpen(true);
  };

  const handleDialogClose = () => {
    setOpen(false);
    setSelectedEmp(null);
  };

  const handleUpdate = (employee) => {
    setSelectedEmp(employee);
    setUpdateModalOpen(true);
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
          <TableCell align="center" style={{ paddingLeft: "60px" }}>
            <Typography color="textSecondary" variant="h6">
              Action
            </Typography>
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {employees.length > 0 ? (
          employees.map((employee) => (
            <TableRow key={employee.id} 
              sx={{
                p: 0,
                width: "100%",
                transition: "0.3s", // smooth transition
                "&:hover": {
                    boxShadow: "0px 5px 15px rgba(0, 123, 255, 0.5)", 
                    transform: "scale(1)", // slightly enlarge the card
                },
              }}
            >
              <TableCell align="left">
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
                {/* <Button
                  variant="contained"
                  color="primary"
                  sx={{ mr: 1 }}
                  onClick={() => navigate(`/employee-view/${employee.id}`)}
                >
                  View
                </Button> */}
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => handleUpdate(employee)}
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
    <DeleteConfirmationDialog 
        open={open} 
        onClose={handleDialogClose} 
        message="Are you sure you want to delete this employee?" 
        employee={selectedEmp}
    />
  {/* update employee modal */}
  <UpdateEmployeeModal 
    open={updateModalOpen}
    setOpen={setUpdateModalOpen}
    employee={selectedEmp}
  />
  {/* toast notification */}
  <ToastContainer />
  </>
  );
};

export default EmpTableContent;
