import {
  Grid,
  List,
  ListItem,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import warehouseService from "../../services/warehouse.service";

export default function Bodega() {
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    warehouseService.getAll().then((ingredient) => {
      setIngredients(ingredient);
    });
  }, []);
  return (
    <>
      <Typography variant="h4">Bodega</Typography>
      <Paper elevation={3}>
        <Grid>
          <Typography variant="h5">Ingredientes y Cantidades</Typography>
          <List>
            {ingredients &&
              ingredients.map((ingredient) => (
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
