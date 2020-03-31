import React from 'react';

export function AddBook(){

    return(
        <form>
            <label>
                Title:
            <input name="title"/>
            </label>
            <label>
                Author:
            <input name="author"/>
            </label>
            <label>
                Genre:
            <input name="genre"/>
            </label>
        </form>
    )
}