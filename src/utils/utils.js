export const setValidationKey = () => {
  const now = new Date().getTime() + 3600;
  const item = {
    expiry: now,
  };
  localStorage.setItem("validationKey", JSON.stringify(item));
};

export const checkValidationKey = () => {
  if (localStorage.getItem("key") !== null) {
    const key = JSON.parse(localStorage.getItem("key"));
    if (key.expiry > new Date().getTime()) {
      return true;
    } else {
      localStorage.clear();
      setValidationKey();
      return true;
    }
  } else {
    setValidationKey();
    return true;
  }
};

export const dataHasAlreadyBeenFetched = () => {
  if (localStorage.getItem("data") !== null) {
    return true;
  } else {
    return false;
  }
};

export const getAllDataFromStorage = () => {
  return JSON.parse(localStorage.getItem("data"));
};

export const setAllDataToStorage = (data) => {
  localStorage.setItem("data", JSON.stringify(data));
};

export const itemHasAlreadyBeenFetched = (id) => {
  const items = JSON.parse(localStorage.getItem("items"));
  const foundItem = items && items.find((item) => item.id === id);
  return foundItem ? true : false;
};

export const getItemFromStorage = (id) => {
  const items = JSON.parse(localStorage.getItem("items"));
  const foundItem = items && items.find((item) => item.id === id);
  return foundItem;
};

export const setItemToStorage = (item) => {
  if (localStorage.getItem("items") === null) {
    localStorage.setItem("items", JSON.stringify([item]));
  } else {
    const items = JSON.parse(localStorage.getItem("items"));
    items.push(item);
    localStorage.setItem("items", JSON.stringify(items));
  }
};

export const setItemToCartStorage = (item) => {
  if (localStorage.getItem("cartItems") === null) {
    localStorage.setItem("cartItems", JSON.stringify([item]));
  } else {
    const items = JSON.parse(localStorage.getItem("items"));
    items.push(item);
    localStorage.setItem("cartItems", JSON.stringify(items));
  }
};
