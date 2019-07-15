import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

class TodoForm extends React.Component {
    constructor() {
        super()
        this.state = {
            todo: ''
        }
    }

    handleChange = (e) => {
		e.preventDefault()

		this.setState({
			[e.target.name]: e.target.value,
		})
    }
    
    addNewTodo = (e) => {
        e.preventDefault()

        const { todo } = this.state
        this.props.addTodo(todo)
        this.setState({
             todo: '' 
        })
    }

    render() {
        return (
            <div className='todo-form'>
                <h2>Add Todo:</h2>
                <form onSubmit={this.addNewTodo}>
                    <input name="todo" placeholder="Enter new todo" 
                    value={this.state.todo} onChange={this.handleChange} />
                <button type="submit">Add</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
	return {
		todo: state.todo
	}
}

const mapDispatchToProps = {
	addTodo: addTodo,
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(TodoForm)