import React, { useState } from "react";

const ItemCount = ({ onAdd }) => {
  const [count, setCount] = useState(1);

  const onChangeHandler = (event) => {
    setCount(Number(event.target.value));
  };

  return (
    <div>
      <div className="d-flex">
        <div className="input-group">
          <input
            type="button"
            value="-"
            className="btn btn-danger"
            onClick={() => (count > 1 ? setCount(count - 1) : 1)}
          />

          <input
            type="number"
            className="form-contro text-center"
            style={{ maxWidth: "5rem" }}
            value={count}
            onChange={onChangeHandler}
          />

          <input
            type="button"
            value="+"
            className="btn btn-danger"
            onClick={() => count < 99 && setCount(count + 1)}
          />
        </div>

        <button
          className="btn btn-danger flex-shrink-0"
          type="button"
          onClick={() => onAdd(count)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.2em"
            height="1.2em"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M7 22q-.825 0-1.412-.587T5 20q0-.825.588-1.412T7 18q.825 0 1.413.588T9 20q0 .825-.587 1.413T7 22m10 0q-.825 0-1.412-.587T15 20q0-.825.588-1.412T17 18q.825 0 1.413.588T19 20q0 .825-.587 1.413T17 22M6.15 6l2.4 5h7l2.75-5zM5.2 4h14.75q.575 0 .875.513t.025 1.037l-3.55 6.4q-.275.5-.737.775T15.55 13H8.1L7 15h12v2H7q-1.125 0-1.7-.987t-.05-1.963L6.6 11.6L3 4H1V2h3.25zm3.35 7h7z"
            />
          </svg>
          <span className="px-1">Agregar al carro</span>
        </button>
      </div>
    </div>
  );
};

export default ItemCount;
