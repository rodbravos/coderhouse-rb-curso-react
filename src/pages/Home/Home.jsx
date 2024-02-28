import React from "react";
import { importMovies } from "../../firebase/importMovies";
import { importCategories } from "../../firebase/importCategories";

const Home = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="container">
          <button className="btn btn-danger" onClick={importCategories}>
            Import first time CATEGORIES
          </button>
          <span className="mx-3"></span>
          <button className="btn btn-danger" onClick={importMovies}>
            Import first time MOVIES
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
