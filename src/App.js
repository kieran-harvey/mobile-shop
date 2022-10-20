import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ProductList } from "./pages/ProductList/ProductList";
import { ProductDetail } from "./pages/ProductDetail/ProductDetail";
import { Header } from "./components/Header/Header";

const App = () => {
  return (
    <div className="appContainer">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/:id" element={<ProductDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
