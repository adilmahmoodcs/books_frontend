import { gql } from "@apollo/client";

export const CREATE_AUTHOR = gql`
  mutation CreateAuthor($author: AuthorCreateInput!) {
    authorCreate(input: $author) {
      author {
        id
        firstname
        surname
        dob
      }
    }
  }
`;

export const DELETE_AUTHOR = gql`
  mutation DeleteAuthor($authorId: AuthorDeleteInput!) {
    authorDelete(input: $authorId) {
      author {
        id
      }
    }
  }
`;

export const CREATE_BOOK = gql`
  mutation CreateBook($book: BookCreateInput!) {
    bookCreate(input: $book) {
      book {
        id
        title
      }
    }
  }
`;

export const DELETE_BOOK = gql`
  mutation DeleteBook($bookId: BookDeleteInput!) {
    bookDelete(input: $bookId) {
      book {
        id
      }
    }
  }
`;
