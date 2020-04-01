import React, {useReducer} from 'react';
import './App.css';
import uuid from 'uuid/v4';
import {AddBook} from './components/AddBook';
import {BookContainer} from './components/BookContainer';
import {BookContext} from './context/BookContext';
import {BookReducer, ADD_BOOK, REMOVE_BOOK} from './reducer/BookADD';

function App() {
  const [book, dispatch] = useReducer(BookReducer, [{
    id:uuid(),
    title:'Gooder - thats a word',
    author:'Some Guy',
    genre:'Other'
  }]);
  const addBook = (input) => {
    const newBook = {...input, 
    id: uuid()
}

    dispatch({type: ADD_BOOK, payload: newBook})
  }
  const removeBook = (input) =>{
    dispatch({type: REMOVE_BOOK, payload:input})
  }
  return (
    <div className="App">
      <BookContext.Provider value ={{book, addBook, removeBook}}>
        <AddBook />
        < BookContainer />
      </BookContext.Provider>
    </div>
  );
}

export default App;
