import React from "react";
import PropTypes from "prop-types";
import { Link, NavLink } from "react-router-dom";

const Item = ({ id, name, category, price, image }) => {
  return (
    <div className="col-md-3 col-sm-4">
      <div className="card my-2">
        <img
          src={image}
          className="card-img-top p-3 mx-auto"
          alt={name}
          style={{ width: "60%" }}
        />
        <div className="card-body bg-light">
          <h5 className="card-title fw-bold text-center">{name}</h5>
          <p className="badge text-bg-danger text-capitalize">{category}</p>
          <p className="text-muted">$ {price}</p>
        </div>
        <div className="card-footer text-center bg-dark">
          <Link to={`/product/${id}`} className="btn btn-sm btn-danger">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1.5em"
              height="1.5em"
              viewBox="0 0 24 24"
              className="text-light ml-2"
            >
              <path
                fill="currentColor"
                d="m19.6 21l-6.3-6.3q-.75.6-1.725.95T9.5 16q-2.725 0-4.612-1.888T3 9.5q0-2.725 1.888-4.612T9.5 3q2.725 0 4.613 1.888T16 9.5q0 1.1-.35 2.075T14.7 13.3l6.3 6.3zM9.5 14q1.875 0 3.188-1.312T14 9.5q0-1.875-1.312-3.187T9.5 5Q7.625 5 6.313 6.313T5 9.5q0 1.875 1.313 3.188T9.5 14"
              />
            </svg>
            <span className="fw-bold">Details</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

Item.propTypes = {};

export default Item;
