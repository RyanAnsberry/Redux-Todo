// action type
export const ADD_TODO = 'ADD_TODO'

// action creator
export function addTodo(todo) {
    // action 
    return {
        type: ADD_TODO,
        todo: todo
    }
}