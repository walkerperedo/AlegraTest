import {
  Grid,
  List,
  ListItem,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";
import React from "react";

export default function Recetas() {
  return (
    <>
      <Typography variant="h4">Recetas</Typography>
      <Paper elevation={3}>
        <Typography variant="h5">Silpancho</Typography>
        <Grid>
          <Typography variant="h6">Ingredients</Typography>
          <List>
            <ListItem>
              <ListItemText primary="tomato 2" />
            </ListItem>
            <ListItem>
              <ListItemText primary="onion 1" />
            </ListItem>
          </List>
        </Grid>
        <Typography variant="h6">Preparation</Typography>
        <Typography>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium
          aliquid quibusdam nemo esse rerum dolores veritatis, maxime vel
          voluptatum nesciunt exercitationem earum, qui nihil dignissimos
          facilis, repellat quam fuga debitis?
        </Typography>
      </Paper>
    </>
  );
}
