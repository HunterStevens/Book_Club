import {createContext, useReducer} from 'react';
import { BookReducer } from '../reducer/BookADD';

export const BookContext = createContext()

export const BookContextProvider = (props) => {
    const [books, dispatch] = useReducer(BookReducer);
    return(
        <BookContext.Provider value = {{books, dispatch}}>
            {props}
        </BookContext.Provider>
    )
}