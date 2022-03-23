import { AppBar, Toolbar, Typography } from "@mui/material";
import PropTypes from "prop-types";
import * as React from "react";
import { useNavigate } from "react-router-dom";

function Header({ position = "static" }) {
  const navigate = useNavigate();

  return (
    <AppBar
      position={position}
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
    >
      <Toolbar>
        <Typography
          variant="h6"
          noWrap
          onClick={() => navigate("/")}
          to="/"
          sx={{ display: "block", cursor: "pointer" }}
        >
          Books Collection
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

Header.propTypes = {
  position: PropTypes.string,
};

export default Header;
