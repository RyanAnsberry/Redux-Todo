import { ADD_TODO } from './actions'

const initialState = {
    todos: []
}

export default function(state = initialState, action) {
    switch (action.type) {
        case ADD_TODO: {
            const todo = action.todo
            const newTodos = state.todos.concat(todo)
            return [...state, newTodos]
        }
        default:
			return state
    }
}