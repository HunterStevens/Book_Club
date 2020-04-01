import React, { useContext } from 'react';
import { BookContext } from '../context/BookContext';
import {Book} from './Book'

export const BookContainer = () => {
    const {book} = useContext(BookContext);
    console.log('Book from BookContainer: ', book);

    return(
       <div>
           <h2>Reading List</h2>
           {book.map(item =>{
               return <Book items ={item} key={item.id} />
           })}
        

       </div>
    )
}