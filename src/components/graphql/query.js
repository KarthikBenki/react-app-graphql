import {  gql } from '@apollo/client';

export const GET_ALL_BOOKS = gql`
   query {
      allBooks {
         title
         id
         desc
         pages
         author
         price
      }
   }
`;


export const GET_BOOK = gql`
  query GetBook($bookId: Int!) {
    getBook(bookId: $bookId) {
      title
      id
      desc
      pages
      author
      price
    }
  }
`;
