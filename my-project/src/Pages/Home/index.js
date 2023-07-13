import React from "react";
import Collections from "./Components/Collections";
import LandingSection from "../../Components/LandingSection";
import { useNavigate } from "react-router-dom";

function HomePage(props) {
  const navigate = useNavigate();
  const redirect = () => {
    navigate("/shop");
  };
  return (
    <div className="">
      <LandingSection
        title="Your Premium Sound, Unplugged!"
        subTitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua."
      >
        <button
          className="bg-orange-500 mt-8 rounded px-5 py-3 capitalize text-white"
          onClick={redirect}
        >
          find out more
        </button>
      </LandingSection>
      <Collections />
    </div>
  );
}

export default HomePage;
