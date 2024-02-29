import ItemCount from "../ItemCount/ItemCount";
import { useCartContext } from "../../routing/context/CartContext";

const ItemDetail = ({ item }) => {
  const { name, description, category, price, image } = item;
  const { addItem } = useCartContext();
  const onAdd = (count) => {
    // console.log(`Agregaste ${count} items al carrito`);
    addItem(item, count);
  };

  return (
    <div>
      <section className="py-5">
        <div className="container px-4 px-lg-5 my-5">
          <div className="row gx-4 gx-lg-5 align-items-center">
            <div className="col-md-6 text-center">
              <img
                className="card-img-top mb-5 mb-md-0"
                src={image}
                alt={name}
                style={{ maxWidth: "70%" }}
              />
            </div>
            <div className="col-md-6">
              <div className="badge text-bg-danger rounded-pill fs-6 mb-1 text-capitalize">
                {category}
              </div>
              <h4 className="display-6 fw-bold">{name}</h4>
              <div className="fs-4 fw-bold mb-3">
                <span>${price} CLP</span>
              </div>
              <p
                className="lead py-3 lh-sm text-justify"
                style={{ textAlign: "justify" }}
              >
                {description}
              </p>
              <ItemCount onAdd={onAdd} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ItemDetail;
