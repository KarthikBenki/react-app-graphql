import { useQuery } from '@apollo/client';
import React from 'react'
import { GET_ALL_BOOKS } from './graphql/query';
import { useEffect } from 'react';
import { useState } from 'react';

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
    <div style={{border:"1px solid black"}}>{
        books.map(({id,title,desc,author,pages,price})=>{
            return (
             <div style={{border:"1px solid black",margin:"10px"}} key={id}>
                 <h1>{title}</h1>
                 <p>{desc}</p>
                 <p>{author}</p>
                 <p>{pages}</p>
                 <p>{price}</p>
             </div>
            )
         })
    }
       
    </div>
  )
}

export default Books