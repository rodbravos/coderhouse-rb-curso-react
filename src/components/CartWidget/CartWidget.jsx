import ShopingCart from "../../assets/shoping-cart.svg";

const CartWidget = () => {
  return (
    <div>
      <img
        className="d-inline-block align-text-top"
        src={ShopingCart}
        alt="logo"
        width="25"
      />
      <span className="text-light my-auto mx-2">0</span>
    </div>
  );
};

export default CartWidget;
