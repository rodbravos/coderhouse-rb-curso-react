import ShopingCart from "../../assets/shoping-cart.svg";
import { useCartContext } from "../../routing/context/CartContext";
import { Link, NavLink } from "react-router-dom";

const CartWidget = () => {
  const { itemsTotal } = useCartContext();

  return (
    <div>
      <NavLink className="text-decoration-none" to="/checkout">
        <img
          className="d-inline-block align-text-top"
          src={ShopingCart}
          alt="logo"
          width="25"
        />
        <span className="text-light my-auto mx-2 text-unstyled">
          {itemsTotal}
        </span>
      </NavLink>
    </div>
  );
};

export default CartWidget;
