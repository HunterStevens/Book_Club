import React, {useReducer} from 'react';
import logo from './logo.svg';
import './App.css';
import {AddBook} from './components/AddBook';
import {BookContatiner} from './components/BookContainer';
import {BookContext} from './context/BookContext';
import {v4 as uuid} from 'uuid';
import {BookReducer, ADD_BOOK, REMOVE_BOOK} from './reducer/BookADD';

function App() {
  const [book, dispatch] = useReducer(BookReducer, [{
    id:uuid(),
    title:'',
    author:'',
    genre:''
  }]);
  const addBook = (input) => {
    const newBook = {...input, 
    id: uuid()}

    dispatch({type: ADD_BOOK, payload: newBook})
  }
  const removeBook = (input) =>{
    dispatch({type: REMOVE_BOOK, payload:input})
  }
  return (
    <div className="App">
      <BookContext.Provider value ={{book, addBook, removeBook}}>
        <AddBook />
        <BookContatiner />
      </BookContext.Provider>
    </div>
  );
}

export default App;
