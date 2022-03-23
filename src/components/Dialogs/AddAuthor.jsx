import { useMutation } from "@apollo/client";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import PropTypes from "prop-types";
import React from "react";
import { CREATE_AUTHOR } from "../../services/gql/mutationSchemas";
import { HookInput } from "../Inputs";
import { useFormik } from "formik";
import { toast } from "react-toastify";

function AddAuthor({ open, handleClose }) {
  const [createAuthor] = useMutation(CREATE_AUTHOR, {
    refetchQueries: ["GetAuthors"],
  });

  const formik = useFormik({
    initialValues: {
      firstname: "",
      surname: "",
      dob: "",
    },
    onSubmit: (values) => onSubmit(values),
  });

  const onSubmit = async (values) => {
    try {
      await createAuthor({
        variables: { author: { authorInput: { ...values } } },
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
        <DialogTitle>Add Author</DialogTitle>
        <DialogContent>
          <HookInput
            form={formik}
            name="firstname"
            label="First Name"
            autoFocus
            fullWidth
          />
          <HookInput form={formik} name="surname" label="Surname" fullWidth />
          <HookInput
            form={formik}
            name="dob"
            label="Date of Birth"
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

AddAuthor.propTypes = {
  open: PropTypes.bool,
  handleClose: PropTypes.func,
};

export default AddAuthor;
