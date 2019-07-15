import { ADD_TODO } from './actions'

const initialState = {
    todos: []
}

export default function(state = initialState, action) {
    switch (action.type) {
        case ADD_TODO: {
            console.log(action.todo)
            const value = action.todo
            const newTodo = {
                value: value,
                completed: false
            }
            console.log(newTodo)
            return { ...state, newTodo }
        }
        default:
			return state
    }
}