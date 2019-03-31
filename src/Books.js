import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import BooksHeader from './components/headers/BooksHeader';
import BooksList from './components/content/BooksList';

class Books extends Component {
  state = {
    isLoaded:false,
    books: []
  };

  componentDidMount() {
    fetch('https://www.anapioficeandfire.com/api/books')
    .then(res =>res.json())
    .then(json => {
      
      this.setState({
        isLoaded:true,
        books:json,
      })
    });
  }

  render() {
    const {isLoaded} = this.state;
    if(!isLoaded){
      return <div><h3>Loading...</h3></div>
    } else {
      return (
        <div>
            < BooksHeader />
            <BooksList books={this.state.books} />
        </div>
      );
    }
   
  }
}

export default Books;