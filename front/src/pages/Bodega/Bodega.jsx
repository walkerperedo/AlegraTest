import {
  Grid,
  List,
  ListItem,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";
import React from "react";

export default function Bodega({ ingredients }) {
  return (
    <>
      <Typography variant="h4">Bodega</Typography>
      <Paper elevation={3}>
        <Grid>
          <Typography variant="h5">Ingredientes y Cantidades</Typography>
          <List>
            {ingredients.map((ingredient) => (
              <ListItem>
                <ListItemText
                  primary={`${ingredient.name} disponible: ${ingredient.quantity}`}
                />
                <ListItemText
                  primary={`Cantidad comprada de bodega: ${ingredient.quantityBoughtFromPlaza}`}
                />
              </ListItem>
            ))}
          </List>
        </Grid>
      </Paper>
    </>
  );
}
