import { gql } from "@apollo/client";

export const GET_AUTHORS = gql`
  query GetAuthors {
    authors {
      id
      firstname
      surname
      dob
    }
  }
`;

export const GET_AUTHOR_BY_ID = (authorId) => gql`
  query GetAuthorById {
    author(id: ${authorId}) {
      firstname
      surname
      dob
      books {
        id
        title
        genre
        publishYear
      }
    }
  }
`;
