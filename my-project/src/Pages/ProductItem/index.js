import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchProductDetails } from "../../apis/Products";
import Loading from "../../Components/Loading";

function ProductItemPage({ data }) {
  const { productId } = useParams();
  const [productDetails, setProductDetails] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const data = await fetchProductDetails(productId);
        setProductDetails(data);
        setLoading(false);
      } catch (e) {
        console.error(e);
      }
    };
    fetchData();
  }, [productId]);
  if (loading) return <Loading />;
  return (
    <div className="flex flex-col sm:flex-row p-4 md:p-16 mx-auto bg-white">
      <div className="w-full sm:w-1/2 pr-0 sm:pr-10">
        <img
          loading
          className="rounded-md object-contain w-full"
          src={productDetails.image}
          alt="item_img"
        />
      </div>
      <div className="w-full sm:w-1/2 pl-0 sm:pl-10 mt-4 sm:mt-0">
        <p className="text-zinc-800 text-xl md:text-2xl font-bold leading-7 md:leading-10 tracking-tight">
          {productDetails.title}
        </p>
        <p className="text-red-500 py-2 md:py-4 text-3xl md:text-4xl font-bold leading-7 md:leading-10 tracking-tight">
          ${productDetails.price}
        </p>
        <div>
          <p className="text-slate-900 py-2 font-bold leading-6 md:leading-7 tracking-tight">
            Details Product
          </p>
          <span className="text-stone-500 text-base md:text-lg font-normal leading-6 md:leading-7 tracking-tight">
            {productDetails.description}
          </span>
        </div>
      </div>
    </div>
  );
}

export default ProductItemPage;
