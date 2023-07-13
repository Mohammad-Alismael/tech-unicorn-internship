import React, { useEffect, useState } from "react";
import {
  fetchCategories,
  fetchCategoryProducts,
} from "../../../apis/Categories";
import ProductCard from "../../../Components/ProductCard";
import Loading from "../../../Components/Loading";

Collections.propTypes = {};

function Collections(props) {
  const [categories, setCategories] = useState([]);
  const [selectedCategoryItems, setSelectedCategoryItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("electronics");
  const [loading,setLoading] = useState(false)

  const handleCategoryClick = (category) => {
    fetchCategoryProducts(category).then((data) => {
      setSelectedCategory(category);
      setSelectedCategoryItems(data);
    });
  };
  useEffect(() => {
    const controller = new AbortController()
    async function fetchCategories_() {
      try {
        const response = await fetchCategories();
        setCategories(response);
      } catch (error) {
        console.error(error);
      }
    }
    async function fetch(){
      setLoading(true)
      fetchCategoryProducts(selectedCategory).then((data) => {
        setSelectedCategoryItems(data);
        setLoading(false)
      });
    }

    fetchCategories_().then(console.log);
    fetch().then(console.log)
  }, []);
  return (
    <div className="bg-[#F1F1F6] p-16">
      <h2 className="text-3xl font-bold text-center">Our Premium Collection</h2>
      <div>
        <ul className="flex justify-between gap-x-4 my-6 max-[425px]:justify-center">
          {categories.map((category) => (
            <li
              className={`capitalize hover:cursor-pointer ${
                category === selectedCategory ? "text-orange-500" : ""
              }`}
              key={category}
              onClick={() => handleCategoryClick(category)}
            >
              {category}
            </li>
          ))}
        </ul>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 gap-5 mb-6">
        {!loading && selectedCategoryItems.map(({ id, title, price, category, description, image }, i) => {
          return <ProductCard key={id} data={{ id, title, price, category, description, image }} />;
        })}
        {loading ? <Loading/> : null}
      </div>
    </div>
  );
}

export default Collections;
