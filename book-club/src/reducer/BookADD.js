export const ADD_BOOK = "ADD_BOOK";
export const REMOVE_BOOK = "REMOVE_BOOK";

export function BookReducer(state, action) {
    switch(action.type){
        case ADD_BOOK:
            return[...state, action.payload]

        case REMOVE_BOOK:
            return state.filter(item => item.id === !action.payload.id)
        default : 
        return state
    }
}