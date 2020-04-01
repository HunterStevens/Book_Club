import React, { useContext, useState } from 'react';
import { BookContext } from '../context/BookContext';

export function AddBook(){
    const [form, setForm] = useState({
        title:'',
        author:'',
        genre:''
    })
    const{addBook} = useContext(BookContext)
    const formChange = (event) =>{
        setForm({...form, [event.target.name]:event.target.value})
    }

    return(
        <form onSubmit={(event) =>{
            event.preventDefault();
            addBook(form);
        }}>
            <label>
                Title:
            <input name="title" value ={form.title} onChange={formChange} />
            </label>
            <label>
                Author:
            <input name="author" value ={form.author} onChange={formChange}/>
            </label>
            <label>
                Genre:
            <input name="genre" value ={form.genre} onChange={formChange}/>
            </label>
            <button type ='submit'>AddBook</button>
        </form>
    )
}