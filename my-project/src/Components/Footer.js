import React from "react";
import PropTypes from "prop-types";

Footer.propTypes = {};

function Footer(props) {
  return (
      <div className="mx-auto px-4 py-4 sm:px-16 flex flex-col sm:flex-row sm:justify-between">
          <div>
              <div className="w-80 h-80 bg-gray-200 rounded-md overflow-hidden"></div>
          </div>
          <div className="flex flex-col justify-between mt-4 sm:mt-0 sm:ml-6">
              <h1 className="text-3xl sm:text-5xl font-bold text-orange-500">Dealerz</h1>
              <div className="mt-2 sm:flex sm:flex-col sm:gap-y-2">
                  <span>Privacy Policy</span>
                  <span>Terms and Condition</span>
              </div>
              <span className="mt-2">@2020 TanahAir Studio. All rights reserved.</span>
          </div>
          <div className="flex flex-row gap-x-2 sm:gap-x-6 mt-4 sm:mt-0">
              <span className="w-8 h-8 bg-orange-500 rounded-full text-center">Yt</span>
              <span className="w-8 h-8 bg-orange-500 rounded-full text-center">Fb</span>
              <span className="w-8 h-8 bg-orange-500 rounded-full text-center">Tw</span>
              <span className="w-8 h-8 bg-orange-500 rounded-full text-center">Lg</span>
          </div>
      </div>
  );
}

export default Footer;
