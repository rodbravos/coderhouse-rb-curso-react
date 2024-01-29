import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { getProductsAsync, getProductsAsyncById } from "../../utils/MockData";
import ItemList from "../ItemList/ItemList";
import Spinner from "../Spinner/Spinner";

const ItemListContainer = ({}) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const category = "men's clothing";

  useEffect(() => {
    // async function fetchData() {
    //   try {
    //     const response = await getProducts();
    //     setItems(response);
    //     setLoading(false);
    //   } catch (error) {
    //     console.log(error);
    //   }
    // }
    // fetchData();

    // getProducts()
    //   .then((res) => {
    //     console.log("promesa resuelta");
    //     setItems(res);
    //     setLoading(false);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });

    getProductsAsync().then((products) => {
      const filteredProducts = products.filter(
        (product) => product.category === category
      );

      setItems(filteredProducts);
      // setItems(products);
      setLoading(false);
    });
  }, []);

  return loading ? <Spinner /> : <ItemList itemList={items} />;
};

ItemListContainer.propTypes = {};

export default ItemListContainer;
