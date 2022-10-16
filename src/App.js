import "./App.css";
import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ProductList } from "./pages/ProductList/ProductList";
import { ProductDetail } from "./pages/ProductDetail/ProductDetail";
import { Header } from "./components/Header/Header";
import axios from "axios";
import { URL, productURL } from "./config";
import {
  checkValidationKey,
  dataHasAlreadyBeenFetched,
  getAllDataFromStorage,
  setAllDataToStorage,
} from "./utils/utils";

const App = () => {
  const [data, setData] = useState();
  useEffect(() => {
    const options = {
      method: "GET",
      url: URL + productURL,
    };
    if (checkValidationKey()) {
      if (dataHasAlreadyBeenFetched()) {
        setData(getAllDataFromStorage());
      } else {
        axios.request(options).then((response) => {
          setData(response.data);
          setAllDataToStorage(response.data);
        });
      }
    }
  }, []);

  return (
    <div className="appContainer">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<ProductList data={data} />} />
          <Route path="/:id" element={<ProductDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
