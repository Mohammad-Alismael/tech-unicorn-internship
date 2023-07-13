import React, { useContext, useEffect, useState } from "react";
import { ActionsContext, FilterContext } from "../utils/contexts/FilterContext";
import { fetchCategories } from "../apis/Categories";

const LabelPicker = () => {
  const state = useContext(FilterContext);
  const dispatch = useContext(ActionsContext);

  const [selectedLabels, setSelectedLabels] = useState([]);
  const [categories, setCategories] = useState([]);
  const filterItems = (value) => {
    dispatch({ type: "SET_SELECTED_CATEGORIES", payload: value });
  };

  const toggleLabel = (label) => {
    const updatedLabels = selectedLabels.includes(label.name)
      ? selectedLabels.filter((selectedLabel) => selectedLabel !== label.name)
      : [...selectedLabels, label.name];

    filterItems(updatedLabels);
    setSelectedLabels(updatedLabels);
  };

  useEffect(() => {
    async function fetchCategories_() {
      try {
        const response = await fetchCategories();
        const labels = response.map((val, i) => {
          return { id: i + 1, name: val };
        });
        setCategories(labels);
      } catch (error) {
        console.error(error);
      }
    }
    fetchCategories_();
  }, []);
  return (
    <>
      <p className="text-slate-900 text-2xl font-bold leading-7 tracking-tight pb-4">
        Categories
      </p>

      <div className="flex flex-wrap">
        {categories.map((label) => (
          <button
            key={label.id}
            onClick={() => toggleLabel(label)}
            className={`bg-gray-200 rounded-full px-3 py-1 m-1 ${
              selectedLabels.includes(label.name)
                ? "bg-orange-500 text-white"
                : "text-gray-700"
            }`}
          >
            {label.name}
          </button>
        ))}
      </div>
    </>
  );
};

export default LabelPicker;
