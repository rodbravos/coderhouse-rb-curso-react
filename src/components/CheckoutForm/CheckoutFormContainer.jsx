import { useForm } from "react-hook-form";
import { useCartContext } from "../../routing/context/CartContext";
import { collection, addDoc } from "firebase/firestore/lite";
import { db } from "../../firebase/config";
import { useState } from "react";
import SendIcon from "../../assets/send-icon.svg";

const CheckoutFormContainer = () => {
  const { register, handleSubmit } = useForm();
  const { cart, item, itemsTotal, total, clearCarrito } = useCartContext();
  const [pedidoId, setPedidoId] = useState("");

  const finalizaCompra = (data) => {
    const pedido = {
      cliente: data,
      productos: cart,
      total: total,
      itemsTotal: itemsTotal,
    };

    const pedidosRef = collection(db, "orders");
    addDoc(pedidosRef, pedido).then((doc) => {
      setPedidoId(doc.id);
      clearCarrito();
    });
  };

  if (pedidoId) {
    return (
      <div className="container-fluid">
        <div className="container">
          <h4>Compra exitosa</h4>
          <p>
            Felicidades, se ha realizado tu compra con los datos entregados.
          </p>
          <p>Tu código de pedido es: {pedidoId}</p>
        </div>
      </div>
    );
  }

  return cart.length === 0 ? (
    <div className="container-fluid">
      <div className="container">
        <h3>El carrito de compras está vacío</h3>
        <p>
          Primero debes seleccionar productos antes de poder llenar el
          formulario final de compra.
        </p>
      </div>
    </div>
  ) : (
    <div className="container-fluid">
      <div className="container">
        <h3>Complete el Formulario</h3>
        <p>
          Todos los campos son necesarios para poder hacer llegar su producto.
        </p>
      </div>
      <div className="container my-5">
        <div className="row">
          <div className="col-md-8 offset-md-2">
            <form className="form" onSubmit={handleSubmit(finalizaCompra)}>
              <div className="mb-3 row">
                <label htmlFor="nombre" className="form-label fw-bold col-sm-3">
                  Nombre
                </label>
                <div className="col-md-9">
                  <input
                    type="text"
                    className="form-control"
                    id="nombre"
                    name="nombre"
                    {...register("nombre")}
                  />
                </div>
              </div>
              <div className="mb-3 row">
                <label
                  htmlFor="apellido"
                  className="form-label fw-bold col-sm-3"
                >
                  Apellidos
                </label>
                <div className="col-md-9">
                  <input
                    type="text"
                    className="form-control"
                    id="apellido"
                    name="apellido"
                    {...register("apellido")}
                  />
                </div>
              </div>
              <div className="mb-3 row">
                <label htmlFor="email" className="form-label fw-bold col-sm-3">
                  Correo electrónico
                </label>
                <div className="col-md-9">
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    {...register("email")}
                  />
                </div>
              </div>
              <div className="mb-3 row">
                <label
                  htmlFor="direccion"
                  className="form-label fw-bold col-sm-3"
                >
                  Dirección
                </label>
                <div className="col-md-9">
                  <input
                    type="text"
                    className="form-control"
                    id="direccion"
                    name="direccion"
                    {...register("direccion")}
                  />
                </div>
              </div>
              <div className="mb-3 row">
                <label
                  htmlFor="telefono"
                  className="form-label fw-bold col-sm-3"
                >
                  Teléfono
                </label>
                <div className="col-md-9">
                  <input
                    type="number"
                    className="form-control"
                    id="telefono"
                    name="telefono"
                    {...register("telefono")}
                  />
                </div>
              </div>
              <button type="submit" className="btn btn-danger">
                <img
                  src={SendIcon}
                  alt="logo"
                  className="d-inline-block align-text-top"
                />
                &nbsp; Terminar compra
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutFormContainer;
