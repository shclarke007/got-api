import React from 'react';

const BooksList = ({books}) =>{
  
  return books.map(item => (
      <div className = "cards">
        <p>Name: {item.name}</p> 
        <p>Country: {item.country}</p> 
        <p>ISBN: {item.isbn}</p>
        <p>Authors: {item.authors}</p>
        <p>No. Pages: {item.numberOfPages}</p>
        <p>Publisher: {item.publisher}</p>
        <p>Media Type: {item.mediaType}</p>
        <p>Released: {item.released}</p>
        <p>Characters: {item.characters}</p>
        <br />
      </div>
    ))}

export default BooksList;