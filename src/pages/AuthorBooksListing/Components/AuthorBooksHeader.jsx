import React from "react";
import PropTypes from "prop-types";
import { Box, Button, Paper, Typography } from "@mui/material";

function AuthorBooksHeader({ data, genres, onAddNewBookClick }) {
  return (
    <Paper elevation={1}>
      <Box sx={{ p: 3, display: "flex", justifyContent: "space-between" }}>
        <Box>
          <Typography
            sx={{ display: "inline", fontSize: 20, fontWeight: "500" }}
          >
            {`Author: `}
          </Typography>
          <Typography sx={{ display: "inline" }}>
            {data.author.firstname} {data.author.surname}
          </Typography>
        </Box>

        <Box>
          <Typography
            sx={{ display: "inline", fontSize: 18, fontWeight: "500" }}
          >
            {`Genres: `}
          </Typography>
          {genres.length === 0 && (
            <Typography sx={{ display: "inline" }}>None</Typography>
          )}
          {genres.map((genre, index) => (
            <Typography key={genre} sx={{ display: "inline" }}>
              {`${genre}${index < genres.length - 1 ? ", " : ""}`}
            </Typography>
          ))}
        </Box>
      </Box>

      <Box sx={{ p: 3, display: "flex", justifyContent: "space-between" }}>
        <Box>
          <Typography
            sx={{ display: "inline", fontSize: 18, fontWeight: "500" }}
          >
            {`Total Books: `}
          </Typography>
          <Typography sx={{ display: "inline" }}>
            {data.author.books.length}
          </Typography>
        </Box>

        <Box>
          <Button variant="contained" onClick={onAddNewBookClick}>
            Add New Book
          </Button>
        </Box>
      </Box>
    </Paper>
  );
}

AuthorBooksHeader.propTypes = {
  data: PropTypes.object,
  genres: PropTypes.array,
  onAddNewBookClick: PropTypes.func,
};

export default AuthorBooksHeader;
