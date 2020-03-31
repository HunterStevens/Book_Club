import React from 'react'

export const Book = (props) =>{

    return(
        <div>
            <h1>Title: {props.items.title}</h1>
            <h3>Author: {props.items.author}</h3>
            <h4>Genre: {props.items.genre}</h4>
        </div>
    )
}