import { useMutation } from "@apollo/client";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import { useFormik } from "formik";
import PropTypes from "prop-types";
import React from "react";
import { toast } from "react-toastify";
import { CREATE_BOOK } from "../../services/gql/mutationSchemas";
import { HookInput } from "../Inputs";

function AddBook({ open, handleClose, authorId }) {
  const [createBook] = useMutation(CREATE_BOOK, {
    refetchQueries: ["GetAuthorById"],
  });

  const formik = useFormik({
    initialValues: {
      title: "",
      genre: "",
      publishYear: "",
    },
    onSubmit: (values) => onSubmit(values),
  });

  const onSubmit = async (values) => {
    try {
      await createBook({
        variables: { book: { bookInput: { ...values, authorId: Number(authorId) } } },
      });
      toast.success("Author added successfully");
      formik.handleReset();
      handleClose();
    } catch (error) {
      toast.error("Oops, something went wrong!");
      console.log({ error });
    }
  };

  const onClose = () => {
    formik.handleReset();
    handleClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <form onSubmit={formik.handleSubmit}>
        <DialogTitle>Add Book</DialogTitle>
        <DialogContent>
          <HookInput
            form={formik}
            name="title"
            label="Book Title"
            autoFocus
            fullWidth
          />
          <HookInput form={formik} name="genre" label="Genre" fullWidth />
          <HookInput
            form={formik}
            name="publishYear"
            label="Publish Date"
            type="date"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Cancel</Button>
          <Button type="submit">Add</Button>
        </DialogActions>
      </form>
    </Dialog>
  );
}

AddBook.propTypes = {
  open: PropTypes.bool,
  handleClose: PropTypes.func,
  authorId: PropTypes.string,
};

export default AddBook;
