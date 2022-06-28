import {
  Grid,
  List,
  ListItem,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";
import React from "react";

export default function Bodega() {
  return (
    <>
      <Typography variant="h4">Bodega</Typography>
      <Paper elevation={3}>
        <Grid>
          <Typography variant="h5">Ingredintes y Cantidades</Typography>
          <List>
            <ListItem>
              <ListItemText primary="tomato 2" />
            </ListItem>
            <ListItem>
              <ListItemText primary="onion 1" />
            </ListItem>
          </List>
        </Grid>
      </Paper>
    </>
  );
}
