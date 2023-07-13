import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

ProductCard.propTypes = {};

function ProductCard({ data }) {
  const { id, title, price, category, description, image } = data;
  const navigate = useNavigate();
  const redirect = () => {
    navigate(`/productItem/${id}`);
  };
  return (
    <div
      onClick={redirect}
      className="min-h-[550px] bg-white rounded-2xl border-2"
    >
      <img
        loading
        className="rounded-md object-contain h-2/3 w-full"
        src={image}
        alt="item_img"
      />
      <div className="px-5">
        <span className="text-[#9A9AB0] py-5">{category}</span>
        <p className="text-2xl font-bold overflow-hidden whitespace-nowrap overflow-ellipsis">
          {title}
        </p>{" "}
        <div className="w-10 h-10 my-5 bg-orange-500 rounded-full flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
