import Logo from "../../assets/logo.svg";
import { getCategoriesAsync } from "../../utils/MockData";
import CartWidget from "../CartWidget/CartWidget";
import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategoriesAsync().then((categories) => {
      setCategories(categories);
    });
  }, []);

  return (
    <nav className="navbar navbar-expand-lg bg-dark sticky-top py-3">
      <div className="container">
        <NavLink className="navbar-brand d-flex justify-content-start" to="/">
          <img
            className="d-inline-block align-text-top"
            src={Logo}
            alt="logo"
            width="40"
          />
          <span className="text-light fw-bold my-auto">RodStore</span>
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink to="/products" className="nav-link text-light" href="#">
                All products
              </NavLink>
            </li>

            {categories.map((category, index) => (
              <li className="nav-item" key={index}>
                <NavLink
                  to={`/products/${category}`}
                  className="nav-link text-light text-capitalize"
                >
                  {category}
                </NavLink>
              </li>
            ))}
          </ul>

          <CartWidget />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
