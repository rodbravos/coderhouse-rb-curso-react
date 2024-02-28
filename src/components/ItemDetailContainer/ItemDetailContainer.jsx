import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
// import { getProductsAsyncById } from "../../utils/MockData";
import Spinner from "../Spinner/Spinner";
import { db } from "../../firebase/config";
import { collection, doc, getDoc, refEqual } from "firebase/firestore/lite";

const ItemDetailContainer = () => {
  const [loading, setLoading] = useState(true);
  const [item, setItem] = useState([]);
  const { productId } = useParams();

  useEffect(() => {
    const movieCollection = collection(db, "movies");
    const refDoc = doc(movieCollection, productId);

    getDoc(refDoc)
      .then((doc) => {
        setItem({ ...doc.data() });
        setLoading(false);
      })
      .catch((error) => {
        console.log("Error getting movie data: ", error);
      });
    // setLoading(false);

    // getProductsAsyncById(productId).then((product) => {
    //   setItem(product);
    //   setLoading(false);
    // });
  }, [productId]);

  return loading ? <Spinner /> : <ItemDetail item={item} />;
};

export default ItemDetailContainer;
