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
              ({ id, title, category, price, count, image }, index) => {
                return (
                  <Item
                    key={index}
                    id={id}
                    title={title}
                    category={category}
                    price={price}
                    count={count}
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
