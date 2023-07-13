import HomePage from "./Pages/Home";
import { Routes, Route } from "react-router-dom";
import PageLayout from "./Layouts/PageLayout";
import ShopPage from "./Pages/Shop";
import { FilterContextProvider } from "./utils/contexts/FilterContext";
import ProductItemPage from "./Pages/ProductItem";
import ComingSoon from "./Containers/ComingSoon";

function App() {
  return (
    <Routes>
      <Route path="/" element={<PageLayout />}>
        <Route index element={<HomePage />} />
        <Route
          path="shop"
          element={
            <FilterContextProvider>
              <ShopPage />
            </FilterContextProvider>
          }
        />
        <Route path="/productItem/:productId" element={<ProductItemPage />} />
        <Route path="*" element={<ComingSoon />} />
      </Route>
    </Routes>
  );
}

export default App;
