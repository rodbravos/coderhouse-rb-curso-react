import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ item }) => {
  const { id, title, description, category, price, image } = item;
  const onAdd = (count) => {
    console.log(`Agregaste ${count} items al carrito`);
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
                alt={title}
                style={{ maxWidth: "70%" }}
              />
            </div>
            <div className="col-md-6">
              <div className="badge text-bg-danger rounded-pill fs-6 mb-1 text-capitalize">
                {category}
              </div>
              <h4 className="display-6 fw-bold">{title}</h4>
              <div className="fs-4 fw-bold mb-3">
                <span>$ {price}</span>
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
