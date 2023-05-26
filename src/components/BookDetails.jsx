import React from 'react';
import { useQuery} from '@apollo/client';
import { GET_BOOK } from './graphql/query';


const BookDetails = () => {
    const bookId = 3; // Replace with the desired book ID
  
    const { loading, error, data } = useQuery(GET_BOOK, {
      variables: { bookId },
    });
  
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;
  
    const { title, id, desc,price,pages,author } = data.getBook;
  
    return (
      <div style={{border:"1px solid black",margin:"10px",padding:"20px",color:"blue"}}>
        <h2>Book Details by id</h2>
        <p>Title: {title}</p>
        <p>ID: {id}</p>
        <p>Description: {desc}</p>
        <p>price: {price}</p>
        <p>pages: {pages}</p>
        <p>author: {author}</p>
      </div>
    );
  };

  export default BookDetails;
  