import { useQuery } from '@apollo/client';
import React from 'react'
import { GET_ALL_BOOKS } from './graphql/query';
import { useEffect } from 'react';
import { useState } from 'react';
import './Books.css'

function Books() {
    const { loading, error, data } = useQuery(GET_ALL_BOOKS);
    const [books, setBooks] = useState([])

    useEffect(()=>{
        if(data)
        setBooks(data.allBooks)
    },[data])

    if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

 

  return(
    <div className='books-container' style={{border:"1px solid black"}}>{
        books.map(({id,title,desc,author,pages,price})=>{
            return (
             <div className='book-container' style={{border:"1px solid black",margin:"10px",padding:"20px"}} key={id}>
                  <h2>Book Details {id}</h2>
                  <p>Title: {title}</p>
                  <p>Description: {desc}</p>
                  <p>price: {price}</p>
                  <p>pages: {pages}</p>
                  <p>author: {author}</p>
             </div>
            )
         })
    }
       
    </div>
  )
}

export default Books