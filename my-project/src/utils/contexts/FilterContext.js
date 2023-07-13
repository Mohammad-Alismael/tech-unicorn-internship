import React, { createContext, useReducer } from "react";

// Create a new context
const FilterContext = createContext({});
const ActionsContext = createContext({});

const filterReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEMS":
      return { ...state, items: action.payload };
    case "SET_TEXT_SEARCH":
      return { ...state, textSearch: action.payload };
    case "SET_SELECTED_CATEGORIES":
      return { ...state, selectedCategories: action.payload };
    case "SET_MIN":
      return { ...state, min: action.payload };
    case "SET_MAX":
      return { ...state, max: action.payload };
    case "SET_PRICE":
      return { ...state, price: action.payload };
    case "FILTER_ITEMS":
      return { ...state, filteredItems: action.payload };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};
const FilterContextProvider = ({ children }) => {
  const initialState = {
    items: [],
    selectedCategories: [],
    textSearch: "",
    price: 0,
    min: 0,
    max: 0,
    filteredItems: [],
  };
  const [state, dispatch] = useReducer(filterReducer, initialState);

  return (
    // this is for optimizing performance, setting multiple context since dispatch does not change
    // without doing it, the whole children will rerender
    <ActionsContext.Provider value={dispatch}>
      <FilterContext.Provider value={state}>{children}</FilterContext.Provider>
    </ActionsContext.Provider>
  );
};

export { FilterContext, ActionsContext, FilterContextProvider };
