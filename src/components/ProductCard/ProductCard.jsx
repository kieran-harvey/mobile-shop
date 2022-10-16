import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import "./productCard.css";

export const ProductCard = ({ product }) => {
  return (
    <Card className="productCardContainer">
      <CardContent className="productCardContent">
        <Grid container className="cardContentContainer">
          <Grid item xs={12}>
            <Typography className="productBrand">{product?.brand}</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography className="productModel">{product?.model}</Typography>
          </Grid>
          <CardMedia
            component="img"
            height="140"
            width="10"
            image={product?.imgUrl}
            alt="phone"
          />
          <Grid item xs={12}>
            <Typography className="productPrice">
              {product?.price ? product.price + "€" : "--"}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography className="link">
              <Link to={`/${product.id}`} state={{ from: product }}>
                More info
              </Link>
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
