import React, { useContext, useEffect, useState } from "react";
import { fetchProductsList } from "../apis/Products";
import ProductItem from "../Pages/Shop/Components/ProductItem";
import { ActionsContext, FilterContext } from "../utils/contexts/FilterContext";

function ProductLists(props) {
  const state = useContext(FilterContext);
  const dispatch = useContext(ActionsContext);
  const addItems = (value) => {
    dispatch({ type: "ADD_ITEMS", payload: value });
  };
  const filterItems = (value) => {
    dispatch({ type: "FILTER_ITEMS", payload: value });
  };
  const setMin = (value) => {
    dispatch({ type: "SET_MIN", payload: value });
  };
  const setMax = (value) => {
    dispatch({ type: "SET_MAX", payload: value });
  };

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    const fetchData = async () => {
      try {
        const data = await fetchProductsList();
        console.log(data);
        const minPrice = data.reduce((min, item) => {
          if (item.price < min) {
            return item.price;
          }
          return min;
        }, Number.MAX_VALUE);
        setMin(minPrice);
        const maxPrice = data.reduce((max, item) => {
          if (item.price > max) {
            return item.price;
          }
          return max;
        }, Number.MIN_VALUE);
        setMax(maxPrice);

        addItems(data);
        filterItems(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
    return () => {
      abortController.abort();
    };
  }, []);
  return (
    <div className="w-2/3 grid grid-cols-2 gap-4">
      {state.items
        .filter((item) => {
          return state.textSearch !== ""
            ? item.title.toLowerCase().includes(state.textSearch)
            : // ||
              //   item.description.toLowerCase().includes(state.textSearch)
              true;
        })
        .filter((item) => {
          return state.selectedCategories.length > 0
            ? state.selectedCategories.includes(item.category)
            : true;
        })
        .filter((item) => {
          return state.min !== 0 && state.max !== 0
            ? item.price > state.min && item.price < state.max
            : true;
        })
        .map(({ id, title, price, category, description, image }, i) => {
          return (
            <ProductItem
              key={id}
              data={{ id,title, price, category, description, image }}
            />
          );
        })}
    </div>
  );
}

export default ProductLists;
