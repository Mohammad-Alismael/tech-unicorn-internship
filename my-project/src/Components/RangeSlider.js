import React, { useContext, useEffect, useState } from "react";
import { ActionsContext, FilterContext } from "../utils/contexts/FilterContext";
import { Range } from "react-range";
import { fetchProductsList } from "../apis/Products";

const RangeSlider = () => {
  const state = useContext(FilterContext);
  const dispatch = useContext(ActionsContext);
  const [values, setValues] = React.useState([20, 80]); // Initial values for minimum and maximum
  const [minPrice, setMinPrice] = React.useState(0); // Initial values for minimum and maximum
  const [maxPrice, setMaxPrice] = React.useState(99); // Initial values for minimum and maximum
  const handleChange = (newValues) => {
    setValues(newValues);
    setMin(newValues[0]);
    setMax(newValues[1]);
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
        setMinPrice(minPrice);
        const maxPrice = data.reduce((max, item) => {
          if (item.price > max) {
            return item.price;
          }
          return max;
        }, Number.MIN_VALUE);
        setMaxPrice(maxPrice);
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
    <>
      <p className="text-slate-900 text-2xl font-bold leading-7 tracking-tight py-4">
        Price
      </p>
      <div className="flex items-center pb-4">
        <span className="mr-2">{minPrice}</span>
        <Range
          values={values}
          step={1}
          min={minPrice}
          max={maxPrice}
          onChange={handleChange}
          renderTrack={({ props, children }) => (
            <div
              {...props}
              className="h-1 w-full bg-gray-300 rounded-md"
              style={{ marginTop: "5px" }}
            >
              {children}
            </div>
          )}
          renderThumb={({ props }) => (
            <div
              {...props}
              className="h-8 w-8 bg-orange-500 rounded-full flex items-center justify-center"
            >
              <div className="text-white text-xs">{props["aria-valuenow"]}</div>
            </div>
          )}
        />
        <span className="mx-2">{maxPrice}</span>
      </div>
    </>
  );
};

export default RangeSlider;
