import React from "react";

const Spinner = () => {
  return (
    <div>
      <div className="w-full text-center">
        <div
          className="spinner-border text-success"
          style={{ width: "150px", height: "150px" }}
          role="status"
        >
          <span className="visually-hidden">Cargando...</span>
        </div>
      </div>
    </div>
  );
};

export default Spinner;
