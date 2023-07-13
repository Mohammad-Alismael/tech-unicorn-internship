import React, { useContext } from "react";
import RangeSlider from "../../../Components/RangeSlider";
import LabelPicker from "../../../Components/LabelPicker";
import {
  ActionsContext,
} from "../../../utils/contexts/FilterContext";

function Sidebar(props) {
  const dispatch = useContext(ActionsContext);
  const setTextSearch = (value) => {
    dispatch({ type: "SET_TEXT_SEARCH", payload: value });
  };
  const filterBySearch = (e) => {
    const text = e.target.value;
    setTextSearch(text);
  };
  return (
    <div className="w-1/3 px-4">
      <input
        type="text"
        placeholder="search products"
        className="p-4 rounded w-full h-10 bg-transparent border-2 border-black"
        onChange={filterBySearch}
      />
      <RangeSlider />
      <LabelPicker />
    </div>
  );
}

export default Sidebar;
