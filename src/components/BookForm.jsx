import React, { useState } from 'react';
import { useMutation} from '@apollo/client';
import { CREATE_BOOK } from './graphql/mutation';

const BookForm = () => {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [author, setAuthor] = useState('');
  const [price, setPrice] = useState(0);
  const [pages, setPages] = useState(0);

  const [createBook, { loading, error }] = useMutation(CREATE_BOOK);

  const handleSubmit = (e) => {
    e.preventDefault();
    createBook({
      variables: { title, desc, author, price, pages },
    })
      .then((res) => {
        // Handle successful response if needed
        console.log(res);
      })
      .catch((err) => {
        // Handle error if needed
        console.error(err);
      });
  };

  return (
    <div className='form-container'> 
      <h2>Create Book</h2>
      <form onSubmit={handleSubmit}>
        <div className='form-input'>

       
       <label htmlFor="">Title: </label>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
         </div>
        <div className='form-input'>

        <label htmlFor="">Description: </label>
        <textarea
          placeholder="Description"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />
        </div>
        <div className='form-input'>

        <label htmlFor="">Author: </label>
        <input
          type="text"
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        </div>
        <div className='form-input'>

        <label htmlFor="">Price: </label>
        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(parseInt(e.target.value))}
        />
        </div>
        <div className='form-input'>

        <label htmlFor="">Pages: </label>
        <input
          type="number"
          placeholder="Pages"
          value={pages}
          onChange={(e) => setPages(parseInt(e.target.value))}
        />
        </div>
        <button className='submit-button' type="submit" disabled={loading}>
          {loading ? 'Creating...' : 'Create Book'}
        </button>
      </form>
      {error && <p>Error: {error.message}</p>}
    </div>
  );
};

export default BookForm;
