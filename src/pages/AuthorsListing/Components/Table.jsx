import { useMutation } from "@apollo/client";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { LoadingButton } from "@mui/lab";
import {
  Button,
  Paper,
  Table as MuiTable,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import PropTypes from "prop-types";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { DELETE_AUTHOR } from "../../../services/gql/mutationSchemas";

const tableHead = [
  "Author Id",
  "First Name",
  "Surname",
  "Date of Birth",
  "Books",
  "",
];

function Table({ data = [] }) {
  const [deleteAuthor] = useMutation(DELETE_AUTHOR, {
    refetchQueries: ["GetAuthors"],
  });

  const [deleting, setDeleting] = useState(false);

  const handleDeleteAuthor = async (id) => {
    try {
      setDeleting(true);
      await deleteAuthor({
        variables: { authorId: { id } },
      });
      toast.success("Author deleted successfully");
    } catch (error) {
      toast.error("Something went wrong");
    } finally {
      setDeleting(false);
    }
  };

  return (
    <TableContainer component={Paper}>
      <MuiTable sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {tableHead.map((ele) => (
              <TableCell key={ele} align="center">
                {ele}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>

        <TableBody>
          {data.map((author) => (
            <TableRow
              key={author.id}
              sx={{ "& .MuiTableCell-root": { textAlign: "center" } }}
            >
              <TableCell>{author.id}</TableCell>
              <TableCell>{author.firstname}</TableCell>
              <TableCell>{author.surname}</TableCell>
              <TableCell>{new Date(author.dob).toDateString()}</TableCell>
              <TableCell sx={{}}>
                <Button
                  variant="outlined"
                  LinkComponent={Link}
                  to={`/${author.id}/books`}
                >
                  Books
                </Button>
              </TableCell>
              <TableCell align="right">
                <LoadingButton
                  loading={deleting}
                  loadingPosition="start"
                  startIcon={<DeleteForeverIcon />}
                  variant="outlined"
                  color="error"
                  sx={{ marginLeft: "auto" }}
                  onClick={() => handleDeleteAuthor(author.id)}
                >
                  Delete
                </LoadingButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </MuiTable>
    </TableContainer>
  );
}

Table.propTypes = {
  data: PropTypes.array,
};

export default Table;
