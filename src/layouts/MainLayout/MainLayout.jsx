import React from "react";
import PropTypes from "prop-types";
import { Outlet } from "react-router-dom";
import { Header } from "../../components";

function MainLayout(props) {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}

MainLayout.propTypes = {};

export default MainLayout;
