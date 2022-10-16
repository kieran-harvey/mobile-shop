import {
  Dialog,
  DialogContent,
  DialogTitle,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import "./specsModal.css";

export const SpecsModal = ({ details, show, setShow }) => {
  return (
    <Dialog open={show} onClose={() => setShow(false)} className="specsDialog">
      <DialogTitle>Specifications</DialogTitle>
      <DialogContent>
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          className="dialogContentContainer"
        >
          <Grid item xs={6}>
            <Typography>CPU:</Typography>
            <span>{details?.cpu}</span>
          </Grid>
          <Grid item xs={6}>
            <Typography>RAM:</Typography>
            <span>{details?.ram}</span>
          </Grid>
          <Grid item xs={6}>
            <Typography>OS:</Typography>
            <span>{details?.os}</span>
          </Grid>
          <Grid item xs={6}>
            <Typography>Screen Resolution:</Typography>
            <span>{details?.displayResolution}</span>
          </Grid>
          <Grid item xs={6}>
            <Typography>Battery:</Typography>
            <span>{details?.battery}</span>
          </Grid>
          <Grid item xs={6}>
            <Typography>Camera:</Typography>
            <span>{details?.primaryCamera}</span>
          </Grid>
          <Grid item xs={6}>
            <Typography>Resolution:</Typography>
            <span>{details?.dimentions}</span>
          </Grid>
          <Grid item xs={6}>
            <Typography>Weight(g):</Typography>
            <span>{details?.weight}</span>
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  );
};
