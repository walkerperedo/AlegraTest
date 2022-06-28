import { Button, Grid } from "@mui/material";
import React from "react";
import { Ordenes } from "../../components";

export default function Home() {
  return (
    <>
      <Button>Haz to orden</Button>
      <Grid container justify="center" spacing="12">
        <Ordenes title="Entregadas" />
        <Ordenes title="Realizadas" />
        <Ordenes title="En preparacion" />
      </Grid>
    </>
  );
}
