import React from 'react'
import { connect } from 'react-redux'

function TodoList (props){
    const { todos } = props

    return (
        <div className='todo-list'>
            <h1>Todo List</h1>
            <ul>
                {todos.map((todo, index) => {
                    console.log(todo)
                    return<li key={index}>{todo}</li>
                })}
            </ul>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        todos: state.todos
    }
}

export default connect(mapStateToProps)(TodoList)