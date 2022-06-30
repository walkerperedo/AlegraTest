import { Header } from "../components";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Bodega from "./Bodega/Bodega";
import Home from "./Home/Home";
import Recetas from "./Recetas/Recetas";
import { Container } from "@mui/material";
import React, { useEffect, useState } from "react";
import recipesService from "../services/recipe.service";

function App() {
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    recipesService.getAll().then((recipes) => {
      setRecipes(recipes);
    });
  }, []);
  return (
    <Container maxWidth="lg">
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="bodega" element={<Bodega />} />
        <Route path="recetas" element={<Recetas recipes={recipes} />} />
      </Routes>
    </Container>
  );
}

export default App;
