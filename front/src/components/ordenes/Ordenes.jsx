import { Box, Chip, Divider, Grid, Stack, Typography } from "@mui/material";
import React from "react";

export default function Ordenes({ title }) {
  return (
    <Box sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      <Box sx={{ my: 3, mx: 2 }}>
        <Grid container alignItems="center">
          <Grid item xs>
            <Typography gutterBottom variant="h4" component="div">
              Ordenes {title}
            </Typography>
          </Grid>
        </Grid>
      </Box>
      <Divider variant="middle" />
      <Box sx={{ m: 2 }}>
        <Typography gutterBottom variant="body1">
          #1 Silpancho
        </Typography>
      </Box>
      <Divider variant="middle" />
    </Box>
  );
}
