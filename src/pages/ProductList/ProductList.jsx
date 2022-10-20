import { Grid, Input } from "@mui/material";
import React, { useEffect, useState } from "react";
import { ProductCard } from "../../components/ProductCard/ProductCard";
import axios from "axios";
import { URL, productURL } from "../../config";
import {
  checkValidationKey,
  dataHasAlreadyBeenFetched,
  getAllDataFromStorage,
  setAllDataToStorage,
} from "../../utils/utils";
import "./productList.css";
export const ProductList = () => {
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
  const [filter, setFilter] = useState("");
  const filterResults = (e) => {
    setFilter(e.currentTarget.value.toLowerCase());
  };

  return (
    <div className="productListContainer">
      <Grid container>
        <Grid item xs={12} className="searchbarContainer">
          <Input
            type="text"
            name="search"
            onChange={filterResults}
            className="searchbar"
            placeholder="Search Phones..."
          />
        </Grid>
        {data &&
          data?.map((product) => {
            if (
              product?.brand.toLowerCase().includes(filter) ||
              product?.model.toLowerCase().includes(filter)
            ) {
              return (
                <Grid item xs={12} md={3} sm={4} key={product.id}>
                  <ProductCard product={product} />
                </Grid>
              );
            }
          })}
      </Grid>
    </div>
  );
};
