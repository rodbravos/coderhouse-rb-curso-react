import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import { getProductsAsyncById } from "../../utils/MockData";
import Spinner from "../Spinner/Spinner";

const ItemDetailContainer = () => {
  const [loading, setLoading] = useState(true);
  const [item, setItem] = useState([]);
  const { productId } = useParams();

  useEffect(() => {
    getProductsAsyncById(productId).then((product) => {
      setItem(product);
      setLoading(false);
    });
  }, [productId]);

  return loading ? <Spinner /> : <ItemDetail item={item} />;
};

export default ItemDetailContainer;
