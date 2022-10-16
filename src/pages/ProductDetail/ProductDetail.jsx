import React, { useState, useEffect, useContext, Fragment } from "react";
import {
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Button,
  Grid,
  Typography,
  Snackbar,
} from "@mui/material";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./productDetail.css";
import CartContext from "../../context/CartContext";
import { SpecsModal } from "../../components/SpecsModal/SpecsModal";
import { URL, productURL } from "../../config";
import {
  checkValidationKey,
  itemHasAlreadyBeenFetched,
  getItemFromStorage,
  setItemToStorage,
  setItemToCartStorage,
} from "../../utils/utils";

export const ProductDetail = () => {
  const { addToCart } = useContext(CartContext);
  const [show, setShow] = useState(false);
  const [openSnackBar, setOpenSnackbar] = useState(false);
  let { id } = useParams();
  const [details, setDetails] = useState();
  const [selectedColor, setSelectedColor] = useState();
  const [selectedStorage, setSelectedStorage] = useState();
  useEffect(() => {
    const options = {
      method: "GET",
      url: URL + productURL + id,
    };
    if (checkValidationKey()) {
      if (itemHasAlreadyBeenFetched(id)) {
        const item = getItemFromStorage(id);
        setSelectedColor(item.options.colors[0].code);
        setSelectedStorage(item?.options?.storages[0].code);
        setDetails(item);
      } else {
        axios.request(options).then((response) => {
          setItemToStorage(response.data);
          setDetails(response.data);
          setSelectedColor(response.data.options.colors[0].code);
          setSelectedStorage(response.data.options.storages[0].code);
        });
      }
    }
  }, []);

  const addToCartHandler = () => {
    const options = {
      method: "POST",
      url: URL + "api/cart",
      data: {
        id: id,
        colorCode: selectedColor,
        storageCode: selectedStorage,
      },
    };
    axios.request(options).then((response) => {
      addToCart({ count: response.data.count, item: details });
      setItemToCartStorage(details);
      setOpenSnackbar(true);
    });
  };

  return (
    <div className="detailsContainer">
      <Grid container className="detailsContainerGrid" spacing={3}>
        <Grid item xs={12} lg={6} md={6} className="imageContainer">
          <img src={details?.imgUrl} />
        </Grid>
        <Grid item xs={12} lg={6} md={6} className="specsContainer">
          <Grid item xs={12}>
            <Typography className="specsTitle">{details?.brand}</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography className="specsModel">{details?.model}</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography className="specsPrice">
              {details?.price ? details?.price + "€" : "--"}
            </Typography>
          </Grid>
          <Grid item xs={12} className="actionsContainer">
            <FormControl>
              <FormLabel id="radioButtonsColor">Colors</FormLabel>
              <RadioGroup
                name="radioGroupColors"
                onChange={(e) => {
                  setSelectedColor(parseInt(e.target.value));
                }}
                row
              >
                {details?.options?.colors?.map((color, idx) => {
                  return (
                    <Fragment key={idx}>
                      <div
                        key={idx}
                        className="colorExample"
                        style={{ backgroundColor: color.name }}
                      ></div>
                      <FormControlLabel
                        value={color.code}
                        control={<Radio />}
                        label={color.name}
                        name="colors"
                        checked={color.code === selectedColor}
                      />
                    </Fragment>
                  );
                })}
              </RadioGroup>
            </FormControl>
            <FormControl>
              <FormLabel id="radioButtonsStorage">Storage</FormLabel>
              <RadioGroup
                name="radioGroupStorage"
                row
                onChange={(e) => setSelectedStorage(parseInt(e.target.value))}
              >
                {details?.options?.storages?.map((storage, idx) => {
                  return (
                    <FormControlLabel
                      value={storage.code}
                      control={<Radio />}
                      label={storage.name}
                      key={idx}
                      name="storage"
                      checked={storage.code === selectedStorage}
                    />
                  );
                })}
              </RadioGroup>
            </FormControl>
            <Grid className="showMoreConmtainer" onClick={() => setShow(!show)}>
              <Typography className="showMore">+ Technical Details</Typography>
            </Grid>
            <Grid item xs={12} className="buttonContainer">
              <Button onClick={addToCartHandler} className="addToCartButton">
                Add To Cart
              </Button>
            </Grid>
          </Grid>

          <SpecsModal details={details} show={show} setShow={setShow} />
        </Grid>
      </Grid>
      <Snackbar
        open={openSnackBar}
        autoHideDuration={3000}
        onClose={() => setOpenSnackbar(false)}
        message="Item added to cart"
      />
    </div>
  );
};
