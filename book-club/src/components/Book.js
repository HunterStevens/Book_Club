import React, { useContext } from 'react'
import {BookReducer} from '../reducer/BookADD'
import { BookContext } from '../context/BookContext'

export const Book = (props) =>{
const {removeBook} = useContext(BookContext)
    return(
        <div>
            <h1>Title: {props.items.title}</h1>
            <h3>Author: {props.items.author}</h3>
            <h4>Genre: {props.items.genre}</h4>
            <button onClick={() => removeBook(props.items.id)} >Remove Booke</button>
        </div>
    )
}