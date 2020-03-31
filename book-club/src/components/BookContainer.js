import React, { useContext } from 'react';
import { BookContext } from '../context/BookContext';
import {Book} from './Book'

export function BookContainer(){
    const {book} = useContext(BookContext);

    return(
       <div>
           <h2>Reading List</h2>
           {book.map(item =>{
               return <Book items ={item} key={item.id} />
           })}

       </div>
    )
}