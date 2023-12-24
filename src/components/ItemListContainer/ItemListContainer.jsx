const ItemListContainer = ({ saludo }) => {
  return (
    <div className="container-fluid py-5">
      <div className="container mx-auto">
        <h1 className="text-center">{saludo}</h1>
      </div>
    </div>
  );
};

export default ItemListContainer;
