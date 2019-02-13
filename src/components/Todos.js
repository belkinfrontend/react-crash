import React, { Component } from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

class Todos extends Component {

    render() {
        console.log(this.props.todos);
        return (
            this.props.todos.map((todo) => (
                <TodoItem todo={todo} key={todo.id} markComplete={this.props.markComplete} deleteTodo={this.props.deleteTodo}/>
            ))
        );
    }
}

Todos.propTypes = {
    todos: PropTypes.array.isRequired
}

export default Todos;
