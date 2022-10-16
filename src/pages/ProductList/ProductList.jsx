import { Grid, Input } from "@mui/material";
import React, { useState } from "react";
import { ProductCard } from "../../components/ProductCard/ProductCard";
import "./productList.css";
export const ProductList = ({ data }) => {
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
