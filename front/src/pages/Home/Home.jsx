import { Button, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Ordenes } from "../../components";
import OrderService from "../../services/order.service";
import recipesService from "../../services/recipe.service";
import warehouseService from "../../services/warehouse.service";

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

      //Buscamos la receta en especifico
      const recipe = await recipesService.getOne(randomRecipeId);
      //Creamos un pedido
      const order = await OrderService.createOrder(recipe.name);
      // //obtemos los ingredientes con sus cantidades
      const ingredients = recipe.ingredients;
      // //le pedimos los ingredientes a la bodega
      const ingredientsPromises = ingredients.map(async (ingredient) => {
        return await warehouseService.getIngrediet({
          ingredientName: ingredient.name,
          quantity: ingredient.quantity,
        });
      });
      await Promise.all(ingredientsPromises);
      // //entregamos el plato
      await OrderService.updateOrder({
        orderId: order._id,
        state: "delivered",
      });

      //acutalizamos las ordenes

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
