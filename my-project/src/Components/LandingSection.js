import React from "react";
import { useNavigate } from "react-router-dom";

LandingSection.propTypes = {};

function LandingSection({ title, subTitle, children }) {
  return (
    <div className="flex mx-auto bg-white">
      <div className="w-1/2"></div>
      <div className="w-1/2 my-16">
        <h2 className="max-w-md text-4xl font-bold text-center sm:text-5xl sm:text-left text-slate-900">
          {title}
        </h2>
        <p className="max-w-md mt-4 text-center sm:text-left text-[#515151]">
          {subTitle}
        </p>
        {children}
      </div>
    </div>
  );
}

export default LandingSection;
