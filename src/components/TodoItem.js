import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class TodoItem extends Component {

    getStyle = () => {
        return {
            background: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px dotted #ccc',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
    }

    render() {
        const {id, title} = this.props.todo;
        return (
            <div style={this.getStyle()} >
                <p>
                    <input type="checkbox" onChange={this.props.markComplete.bind(this, id)} />
                    { title }
                    <button onClick={this.props.deleteTodo.bind(this, id)} style={btnStyle}>Delete</button>
                </p>
            </div>
        )
    }
}
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}
const btnStyle = {
    float: 'right'
}

export default TodoItem;