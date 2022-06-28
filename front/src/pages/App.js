import { Header } from "../components";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Bodega from "./Bodega/Bodega";
import Cocina from "./Cocina/Cocina";
import Home from "./Home/Home";
import Recetas from "./Recetas/Recetas";
import { Container } from "@mui/material";

function App() {
  return (
    <Container maxWidth="lg">
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="bodega" element={<Bodega />} />
        <Route path="recetas" element={<Recetas />} />
      </Routes>
    </Container>
  );
}

export default App;
