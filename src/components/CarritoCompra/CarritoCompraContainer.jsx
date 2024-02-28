import React from "react";
import { useCartContext } from "../../routing/context/CartContext";

const CarritoCompraContainer = () => {
  const { cart, itemsTotal, total } = useCartContext();

  return (
    <div className="container-fluid">
      <div className="container">
        <div className="mb-4">
          <h2>Finalizar la compra</h2>
          <p>
            Se realizará la compra de un total de{" "}
            <span className="fw-bold">
              {itemsTotal} producto
              {itemsTotal > 1 ? "s" : ""}
            </span>
            .
          </p>
        </div>

        <div className="table-responsive my-5">
          <table className="table table-hover">
            <thead className="text-center bg-success">
              <tr>
                <th className="bg-danger text-light">Nombre Película</th>
                <th className="bg-danger text-light">Cantidad</th>
                <th className="bg-danger text-light">Precio unitario</th>
                <th className="bg-danger text-light">Total por producto</th>
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
