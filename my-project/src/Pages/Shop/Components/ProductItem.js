import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

ProductItem.propTypes = {};

function ProductItem({ data }) {
  const { id, title, price, category, description, image } = data;
  const navigate = useNavigate();
  const redirect = () => {
    navigate(`/productItem/${id}`);
  };
  return (
    <div
      onChange={redirect}
      className="flex flex-col bg-white rounded p-5 h-[360px]"
    >
      <div className="h-3/5 aspect-square">
        <img
          loading
          className="rounded-md object-contain h-full w-full"
          src={image}
          alt="item_img"
        />
      </div>

      <p className="text-2xl py-4 text-center font-bold overflow-hidden whitespace-nowrap overflow-ellipsis">
        {title}
      </p>
      <p className="text-center text-orange-500 text-base font-medium leading-tight tracking-tight">
        {price}
      </p>
    </div>
  );
}

export default ProductItem;
