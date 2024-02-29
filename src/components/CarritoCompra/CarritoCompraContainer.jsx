import React from "react";
import { useCartContext } from "../../routing/context/CartContext";
import { NavLink } from "react-router-dom";

const CarritoCompraContainer = () => {
  const { cart, itemsTotal, total } = useCartContext();

  return itemsTotal == 0 ? (
    <div className="container-fluid">
      <div className="container">
        <h4>No hay productos seleccionados para la compra.</h4>
      </div>
    </div>
  ) : (
    <div className="container-fluid">
      <div className="container">
        <div className="row">
          <div className="col-md-9">
            <h2>Carrito de compra</h2>
            <p>
              Se realizará la compra de un total de{" "}
              <span className="fw-bold">
                {itemsTotal} producto
                {itemsTotal > 1 ? "s" : ""}
              </span>
              .
            </p>
          </div>
          <div className="col-md-3 my-auto text-end">
            <NavLink
              className="text-decoration-none btn btn-danger"
              to="/checkoutForm"
            >
              Finalizar compra
            </NavLink>
          </div>
        </div>

        <div className="table-responsive my-3">
          <table className="table table-hover">
            <thead className="text-center bg-success">
              <tr>
                <th className="bg-danger text-light">Película</th>
                <th className="bg-danger text-light">Cantidad</th>
                <th className="bg-danger text-light">Precio unitario</th>
                <th className="bg-danger text-light">Total</th>
              </tr>
            </thead>
            <tbody className="table-group-divider">
              {cart.map((item) => (
                <tr key={item.item.id}>
                  <td className="text-center">{item.item.name}</td>
                  <td className="text-center">{item.quantity}</td>
                  <td className="text-center">
                    {formatCurrency(item.item.price)}
                  </td>
                  <td className="text-center">
                    {formatCurrency(item.item.price * item.quantity)}
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot className="table-group-divider">
              <tr>
                <td colSpan={3} className="fw-bold text-end bg-light">
                  Total a pagar
                </td>
                <td className="fw-bold text-center bg-light">
                  {formatCurrency(total)}
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  );
};

function formatCurrency(value) {
  const formatter = new Intl.NumberFormat("es-CL", {
    style: "currency",
    currency: "CLP",
    minimumFractionDigits: 0,
  });

  return formatter.format(value);
}

export default CarritoCompraContainer;
