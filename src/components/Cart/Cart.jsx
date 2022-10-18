import React, { Fragment, useContext } from "react";
import CartContext from "../../context/CartContext";
import {
  Grid,
  Dialog,
  DialogTitle,
  DialogContent,
  Typography,
  Button,
  DialogActions,
} from "@mui/material";
import "./cart.css";
import CancelIcon from "@mui/icons-material/Cancel";
export const Cart = ({ open, setOpen }) => {
  const { cartItems } = useContext(CartContext);

  // TODO
  // const handleDeleteItem = (e) => {
  //   console.log(e.target.id);
  // };
  const calcTotal = () => {
    let total = 0;
    cartItems.map((item) => {
      if (item.price !== "") {
        total += parseInt(item.price);
      }
    });
    return total;
  };
  return (
    <Dialog open={open} onClose={() => setOpen(false)} className="cartDialog">
      <DialogTitle>
        CART
        <span className="totalPrice">{calcTotal()}€</span>
      </DialogTitle>
      <DialogContent className="cartDialogContent">
        <Grid container className="cartContainer">
          {cartItems && cartItems.length > 0
            ? cartItems.map((item, idx) => {
                return (
                  <Fragment key={idx}>
                    <Grid
                      item
                      xs={12}
                      justifyContent="center"
                      alignItems="center"
                      className="cartItem"
                    >
                      <Grid item xs={2} className="imgContainer">
                        <img src={item.imgUrl} />
                      </Grid>
                      <Grid item xs={10} className="infoContainer">
                        {item.brand} {item.model}
                      </Grid>
                      <Grid item xs={2} className="priceContainer">
                        {item?.price ? item.price + "€" : "--"}
                      </Grid>
                      <Grid item xs={2} className="cancelIcon">
                        <CancelIcon />
                      </Grid>
                    </Grid>
                  </Fragment>
                );
              })
            : "You dont have anything in your cart yet"}
        </Grid>
      </DialogContent>
      <DialogActions className="dialogActions">
        <Button className="checkoutButton">
          <Typography>Checkout</Typography>
        </Button>
      </DialogActions>
    </Dialog>
  );
};
