import Logo from "../../assets/logo.svg";
import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark sticky-top py-3">
      <div className="container">
        <a className="navbar-brand d-flex justify-content-start" href="#">
          <img
            className="d-inline-block align-text-top"
            src={Logo}
            alt="logo"
            width="40"
          />
          <span className="text-light fw-bold my-auto">RodPeliculas</span>
        </a>
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
              <a
                className="nav-link text-light active"
                aria-current="page"
                href="#"
              >
                Inicio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" href="#">
                Productos
              </a>
            </li>
          </ul>

          <CartWidget />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
