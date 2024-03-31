import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Basket from "./pages/Basket";
import Catalog from "./pages/Catalog";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Catalog/>}></Route>
        <Route path="/basket" element={<Basket/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
