import React from "react";
import PropTypes from "prop-types";
import { Header, Sidebar } from "../../components";
import { Box, CssBaseline } from "@mui/material";
import { Outlet } from "react-router-dom";

function SidebarLayout(props) {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Header position="fixed" />
      <Sidebar />
      <Box component="main" sx={{ flexGrow: 1, m: "100px 30px 0" }}>
        <Outlet />
      </Box>
    </Box>
  );
}

SidebarLayout.propTypes = {};

export default SidebarLayout;
