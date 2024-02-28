import { db } from "./config";
import { collection, addDoc } from "firebase/firestore/lite";
import { movies } from "../utils/MockData";

export const importMovies = async () => {
  const moviesCollection = collection(db, "movies");

  movies.forEach((movie) => {
    console.log(movie);
    addDoc(moviesCollection, movie).then((docRef) => {
      console.log(docRef);
      console.log(docRef.id);
    });
  });
  console.log(movies);
};
