import React from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  Button,
} from "@mui/material";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import { useEmployees } from "../context/EmployeeContext";
import { ToastContainer, toast } from "react-toastify";

const DeleteConfirmationDialog = ({ open, onClose, message, employee }) => {

  const { deleteEmployee } = useEmployees(); //employee data fetched from context

  const handleConfirmDelete = () => {
      if (employee) {
        deleteEmployee(employee); // delete function from context
        toast.success("Employee deleted successfully!", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      }
      onClose(); 
    };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      aria-labelledby="delete-dialog-title"
      aria-describedby="delete-dialog-description"
    >
      <DialogContent sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <WarningAmberIcon sx={{ color: "orange", fontSize: "3rem", mb: 1 }} />
        <DialogContentText id="delete-dialog-description" sx={{ textAlign: "center" }}>
          {message || "Are you sure you want to delete this item?"}
        </DialogContentText>
      </DialogContent>
      <DialogActions sx={{ justifyContent: "center", mb: 2 }}>
        <Button onClick={onClose} color="primary" variant="contained">
          Cancel
        </Button>
        <Button color="error" onClick={handleConfirmDelete} variant="contained">
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DeleteConfirmationDialog;
