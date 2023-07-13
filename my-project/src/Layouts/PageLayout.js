import React from "react";
import PropTypes from "prop-types";
import TopHeader from "../Components/TopHeader";
import HeaderNavigation from "../Components/HeaderNavigation";
import Footer from "../Components/Footer";
import { Outlet } from "react-router-dom";

PageLayout.propTypes = {};

function PageLayout(props) {
  return (
    <>
      <TopHeader />
      <HeaderNavigation />
      <Outlet />
      <Footer />
    </>
  );
}

export default PageLayout;
