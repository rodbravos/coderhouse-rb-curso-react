import React from "react";
import PropTypes from "prop-types";
import Item from "../Item/Item";

const ItemList = ({ itemList }) => {
  return (
    <div>
      <div className="container-fluid">
        <div className="container">
          <div className="row">
            {itemList.map(
              ({ id, name, category, price, stock, image }, index) => {
                return (
                  <Item
                    key={index}
                    id={id}
                    name={name}
                    category={category}
                    price={price}
                    stock={stock}
                    image={image}
                  />
                );
              }
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

ItemList.propTypes = {};

export default ItemList;
