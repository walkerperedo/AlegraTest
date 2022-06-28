import React from "react";
import { Button, Grid } from "@mui/material";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <Grid>
      <Link to="/">
        <Button>Home</Button>
      </Link>
      <Link to="/cocina">
        <Button>Cocina</Button>
      </Link>
      <Link to="bodega">
        <Button>Bodega</Button>
      </Link>
      <Link to="recetas">
        <Button>Recetas</Button>
      </Link>
    </Grid>
  );
}
