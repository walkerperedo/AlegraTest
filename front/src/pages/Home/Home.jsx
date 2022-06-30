import { Button, Grid } from "@mui/material";
import React from "react";
import { Ordenes } from "../../components";
import homeService from "../../services/home.service";

export default function Home({ recipes }) {
  const onClick = async () => {
    const randomNumber = Math.floor(Math.random() * 6);
    const randomRecipeId = recipes[randomNumber]._id;
    const answer = await homeService.askDish({ recipeId: randomRecipeId });
  };
  return (
    <>
      <Button onClick={onClick}>Haz to orden</Button>
      <Grid container justify="center" spacing="12">
        <Ordenes title="Entregadas" />
        <Ordenes title="Realizadas" />
        <Ordenes title="En preparacion" />
      </Grid>
    </>
  );
}
