import React from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  Button,
} from "@mui/material";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";

const DeleteConfirmationDialog = ({ open, onClose, onConfirm, message }) => {
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
        <Button color="error" onClick={onConfirm} variant="contained">
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DeleteConfirmationDialog;
