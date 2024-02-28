import { createContext, useContext, useState } from "react";

const cartContext = createContext();

export const { Provider } = cartContext;

export const useCartContext = () => useContext(cartContext);

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [itemsTotal, setItemsTotal] = useState(0);
  const [total, setTotal] = useState(0);

  const addItem = (item, quantity) => {
    // setItemsTotal(itemsTotal + quantity);
    // setTotal(total + item.price * quantity);

    // if (isInCart(item.id)) {
    //   const newCart = cart.map((cartItem) => {
    //     if (cartItem.item.id === item.id) {
    //       return { ...cartItem, quantity: cartItem.quantity + quantity };
    //     } else {
    //       return cartItem;
    //     }
    //   });
    //   setCart(newCart);
    // } else {
    //   setCart([...cart, { item, quantity }]);
    // }

    const existingItemIndex = cart.findIndex(
      (cartItem) => cartItem.item.id === String(item.id)
    );

    if (existingItemIndex !== -1) {
      // Item already exists, update the quantity
      const updatedCart = [...cart];
      updatedCart[existingItemIndex] = {
        ...updatedCart[existingItemIndex],
        quantity: updatedCart[existingItemIndex].quantity + quantity,
      };

      // Update the total based on the price of the item and its new quantity
      setTotal(
        (prevTotal) =>
          prevTotal +
          item.price *
            (updatedCart[existingItemIndex].quantity -
              updatedCart[existingItemIndex].quantity)
      );

      setCart(updatedCart);
    } else {
      // Item does not exist, create a new entry
      setCart((prevCart) => [...prevCart, { item, quantity }]);

      // Update the total based on the price of the item and its new quantity
      setTotal((prevTotal) => prevTotal + item.price * quantity);
    }

    // Update the itemsTotal based on the new quantity
    setItemsTotal((prevItemsTotal) => prevItemsTotal + quantity);
    // aca termina
  };

  const removeItem = (id) => {};

  const clear = () => {
    setCart([]);
    setItemsTotal(0);
    setTotal(0);
  };

  // const isInCart = (id) => cart.find((item) => item.item.id === id);

  const valorDelContexto = {
    cart,
    itemsTotal,
    total,
    addItem,
    removeItem,
    clear,
  };
  return <Provider value={valorDelContexto}>{children}</Provider>;
};

export default CartProvider;
