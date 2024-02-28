import { db } from "./config";
import { collection, addDoc } from "firebase/firestore/lite";
import { categories } from "../utils/MockData";

export const importCategories = async () => {
  const categoriesCollection = collection(db, "categories");

  categories.forEach((category) => {
    console.log(category);
    addDoc(categoriesCollection, category).then((docRef) => {
      console.log(docRef);
      console.log(docRef.id);
    });
  });
  console.log(categories);
};
