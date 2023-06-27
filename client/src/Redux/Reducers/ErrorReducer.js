import { CLEARERRORS, HANDLEEERRORS } from "../ActionTypes/ErrorTypes"

const intialState = []

const ErrorReducer=(state = intialState,action)=>{
    switch (action.type) {
        case HANDLEEERRORS : return [...state,action.payload]
        case CLEARERRORS : return state.filter(el => el.id !== action.payload)
        default: return state
           
    }
}

export default ErrorReducer