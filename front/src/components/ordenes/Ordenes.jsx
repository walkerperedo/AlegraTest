import { Box, Divider, Grid, Typography } from "@mui/material";
import React from "react";

export default function Ordenes({ title, orders }) {
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
      {orders.map((order) => (
        <>
          <Divider variant="middle" />
          <Box sx={{ m: 2 }}>
            <Typography gutterBottom variant="body1">
              {order.number} {order.recipeName}
            </Typography>
          </Box>
          <Divider variant="middle" />
        </>
      ))}
    </Box>
  );
}
