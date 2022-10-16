import { AppBar, Toolbar, Typography, Badge, Grid } from "@mui/material";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CustomBreadcrumbs } from "../Breadcrumbs/CustomBreadcrumbs";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CartContext from "../../context/CartContext";
import "./header.css";
import { Cart } from "../Cart/Cart";
export const Header = () => {
  const { quantity } = useContext(CartContext);
  const [open, setOpen] = useState(false);
  return (
    <div className="headerContainer">
      <AppBar position="static" className="appbar">
        <Toolbar variant="dense" className="toolbar">
          <Grid container>
            <Grid item lg={8} xs={10} className="titleContainer">
              <PhoneAndroidIcon className="titleIcon" />
              <Link to={"/"} className="titleLink">
                <Typography
                  className="appTitle"
                  variant="h6"
                  color="inherit"
                  component="div"
                >
                  PHONE SHOP
                </Typography>
              </Link>
              <CustomBreadcrumbs />
            </Grid>

            <Grid item xs={2} lg={4} className="shoppingCartContainer">
              <ShoppingCartIcon
                onClick={() => setOpen(true)}
                className="shoppingCartIcon"
              />
              <Badge badgeContent={quantity} color="success" />
            </Grid>
            <Cart open={open} setOpen={setOpen} />
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
};
