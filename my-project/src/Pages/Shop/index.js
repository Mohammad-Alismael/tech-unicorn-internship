import React from "react";
import Sidebar from "./Components/Sidebar";
import ProductLists from "../../Containers/ProductLists";
import LandingSection from "../../Components/LandingSection";

function ShopPage(props) {
  return (
    <div className="min-h-fit">
      <LandingSection
        title="Home Shopping, Your Choice!"
        subTitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />
      <div className="bg-[#F1F1F6] p-16 flex">
        <Sidebar />
        <ProductLists />
      </div>
    </div>
  );
}

export default ShopPage;
