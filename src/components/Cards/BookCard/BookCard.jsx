import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { LoadingButton } from "@mui/lab";
import { Card, CardActions, CardContent, Typography } from "@mui/material";
import { Box } from "@mui/system";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
import { DELETE_BOOK } from "../../../services/gql/mutationSchemas";

function BookCard({ data }) {
  const [deleteBook] = useMutation(DELETE_BOOK, {
    refetchQueries: ["GetAuthorById"],
  });

  const [deleting, setDeleting] = useState(false);

  const handleDeleteBook = async () => {
    try {
      setDeleting(true);
      await deleteBook({
        variables: { bookId: { id: data.id } },
      });
      toast.success("Book deleted successfully");
    } catch (error) {
      toast.error("Something went wrong");
    } finally {
      setDeleting(false);
    }
  };

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {data.genre}
          </Typography>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {`Id: ${data.id}`}
          </Typography>
        </Box>
        <Typography variant="h5" component="div">
          {data.title}
        </Typography>
        <Typography variant="body2">
          {`Published on: ${new Date(data.publishYear).getFullYear()}`}
        </Typography>
        <CardActions>
          <LoadingButton
            loading={deleting}
            loadingPosition="start"
            startIcon={<DeleteForeverIcon />}
            variant="outlined"
            color="error"
            sx={{ marginLeft: "auto" }}
            onClick={handleDeleteBook}
          >
            Delete
          </LoadingButton>
        </CardActions>
      </CardContent>
    </Card>
  );
}

BookCard.propTypes = {
  data: PropTypes.object,
};

export default BookCard;
