import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // ✅ for navigation
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";

function AdmissionDialog() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setOpen(true); // open dialog on page load
  }, []);

  const handleClose = () => {
    setOpen(false);
  };

  const handleApplyNow = () => {
    setOpen(false);
    navigate("/apply"); // ✅ redirect to apply form page
  };

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
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
          onClick={handleApplyNow} // ✅ redirect instead of showing form here
        >
          Apply Now
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default AdmissionDialog;
