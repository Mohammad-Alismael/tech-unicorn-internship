import axios from "axios";

async function fetchCategories() {
  try {
    const response = await axios.get(
      "https://fakestoreapi.com/products/categories"
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

async function fetchCategoryProducts(category) {
  try {
    const response = await axios.get(
      `https://fakestoreapi.com/products/category/${category}`
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}
export { fetchCategories, fetchCategoryProducts };
