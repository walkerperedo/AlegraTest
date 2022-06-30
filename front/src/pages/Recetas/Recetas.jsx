import {
  Grid,
  List,
  ListItem,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";

export default function Recetas({ recipes }) {
  return (
    <>
      <Typography variant="h4">Recetas</Typography>
      {recipes.map((recipe) => {
        return (
          <Paper key={recipe._id} elevation={3}>
            <Typography variant="h5">{recipe.name}</Typography>
            <Grid>
              <Typography variant="h6">Ingredients</Typography>
              <List>
                {recipe.ingredients.map((ingredient) => (
                  <ListItem key={ingredient.name}>
                    <ListItemText
                      primary={`${ingredient.name} ${ingredient.quantity}`}
                    />
                  </ListItem>
                ))}
              </List>
            </Grid>
            <Typography variant="h6">Preparation</Typography>
            <Typography>{recipe.preparacion}</Typography>
          </Paper>
        );
      })}
    </>
  );
}
