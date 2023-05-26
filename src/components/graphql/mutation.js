import { gql } from "@apollo/client";

export const CREATE_BOOK = gql`
  mutation CreateBook(
    $title: String!,
    $desc: String!,
    $pages: Int!,
    $price: Float!,
    $author: String!
  ) {
    createBook(book: {
      title: $title,
      desc: $desc,
      pages: $pages,
      price: $price,
      author: $author
    }) {
      id
      title
      desc
      pages
      price
      author
    }
  }
`;