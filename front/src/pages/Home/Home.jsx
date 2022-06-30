import { Button, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Ordenes } from "../../components";
import homeService from "../../services/home.service";
import OrderService from "../../services/order.service";

export default function Home({ recipes }) {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    OrderService.getOrders().then((orders) => {
      setOrders(orders);
    });
  }, []);

  const onClick = async () => {
    try {
      const randomNumber = Math.floor(Math.random() * 6);
      const randomRecipeId = recipes[randomNumber]._id;
      await homeService.askDish({ recipeId: randomRecipeId });
      const newOrders = await OrderService.getOrders();
      setOrders(newOrders);
    } catch (error) {
      console.log(error);
    }
  };
  const ordersInProcess = orders.filter((order) => order.status === "process");
  const ordersDelivered = orders.filter(
    (order) => order.status === "delivered"
  );
  return (
    <>
      <Button onClick={onClick}>Haz to orden</Button>
      <Grid container justify="center" spacing="12">
        <Ordenes title="Entregadas" orders={ordersDelivered} />
        <Ordenes title="Realizadas" orders={orders} />
        <Ordenes title="En preparacion" orders={ordersInProcess} />
      </Grid>
    </>
  );
}
