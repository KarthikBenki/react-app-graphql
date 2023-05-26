import {  gql } from '@apollo/client';

export const GET_ALL_BOOKS = gql`
   query {
      allBooks {
         title
         id
         desc
         pages
         author
      }
   }
`;