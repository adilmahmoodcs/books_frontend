import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_AUTHOR_BY_ID } from "../../services/gql/querySchemas";
import AuthorBooksHeader from "./Components/AuthorBooksHeader";
import { Grid } from "@mui/material";
import { BookCard } from "../../components";
import { AddBook } from "../../components";

function AuthorBooksListing(props) {
  const { authorId } = useParams();
  const { data, error, loading } = useQuery(GET_AUTHOR_BY_ID(authorId));

  const [genres, setGenres] = useState([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!!data) {
      const _genres = [...new Set(data.author.books.map((book) => book.genre))];
      setGenres(_genres);
    }
  }, [data]);

  if (loading) return null;

  if (error) return null;

  return (
    <div>
      <AuthorBooksHeader
        data={data}
        genres={genres}
        onAddNewBookClick={() => setOpen(true)}
      />

      <Grid container spacing={3} sx={{ mt: 2 }}>
        {data.author.books.map((book) => (
          <Grid key={book.id} item lg={3}>
            <BookCard data={book} />
          </Grid>
        ))}
      </Grid>

      <AddBook
        open={open}
        handleClose={() => setOpen(false)}
        authorId={authorId}
      />
    </div>
  );
}

AuthorBooksListing.propTypes = {};

export default AuthorBooksListing;
