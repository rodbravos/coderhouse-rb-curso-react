import React from "react";
import { importMovies } from "../../firebase/importMovies";
import { importCategories } from "../../firebase/importCategories";

const Home = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="container">
          <h3>Bienvenido</h3>
          <p>
            Seleccione algunas de las categorías en el menú superior para ver
            las películas disponibles.
          </p>
          {/* <button className="btn btn-danger" onClick={importCategories}>
            Import first time CATEGORIES
          </button>
          <span className="mx-3"></span>
          <button className="btn btn-danger" onClick={importMovies}>
            Import first time MOVIES
          </button> */}
        </div>
      </div>
    </>
  );
};

export default Home;
