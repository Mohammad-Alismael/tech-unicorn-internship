import axios from "axios";

async function fetchProductsList(signal) {
  try {
    const response = await axios.get("https://fakestoreapi.com/products");
    const data = response.data;
    console.log(data);
    return data;
  } catch (error) {
    if (axios.isCancel(error)) {
      console.log("Request canceled");
    } else {
      console.error(error);
    }
  }
}

async function fetchProductDetails(productId,signal){
  try {
    const response = await axios.get(`https://fakestoreapi.com/products/${productId}`);
    const data = response.data;
    console.log(data);
    return data;
  } catch (error) {
    if (axios.isCancel(error)) {
      console.log("Request canceled");
    } else {
      console.error(error);
    }
  }
}

export { fetchProductsList,fetchProductDetails };
