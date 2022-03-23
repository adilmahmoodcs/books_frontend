import { useQuery } from "@apollo/client";
import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";
import { AddAuthor } from "../../components";
import { GET_AUTHORS } from "../../services/gql/querySchemas";
import { Table } from "./Components";

function AuthorsListing(props) {
  const { data, error, loading, refetch } = useQuery(GET_AUTHORS);

  const [open, setOpen] = useState(false);

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error...</p>;

  return (
    <Box sx={{}}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 2,
        }}
      >
        <Typography variant="h5" sx={{ mb: 2 }}>
          Authors
        </Typography>

        <Button variant="contained" onClick={() => setOpen(true)}>
          Add New Author
        </Button>
      </Box>

      <Table data={data.authors} />

      <AddAuthor open={open} handleClose={() => setOpen(false)} />
    </Box>
  );
}

AuthorsListing.propTypes = {};

export default AuthorsListing;
