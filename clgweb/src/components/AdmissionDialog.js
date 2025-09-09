import React, { useState, useEffect } from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";

function AdmissionDialog() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(true); // open dialog on page load
  }, []);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>🎓 Admissions Open!</DialogTitle>
      <DialogContent>
        Hurry up! Admissions are now open for the academic year <b>2025–26</b>.
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="secondary">
          Close
        </Button>
        <Button 
          variant="contained" 
          color="primary" 
          href="#apply" // you can link to Apply Now section/page
        >
          Apply Now
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default AdmissionDialog;
