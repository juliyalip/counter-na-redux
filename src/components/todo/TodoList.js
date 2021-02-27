import React from 'react';
import './todo.css';

import TaskListItem from './TaskListItem'

const TodoList = ({ items, onDeleteTodo, onUpdateTodo }) =>( 
    <ul>

        {items.map(({ text, id, complited }) => (
            <TaskListItem key={id}
                text={text}
                complited={complited}
                onRemove={() =>{ onDeleteTodo(id)}}
                onUpdate={() => { onUpdateTodo(id) }}
            
            />
        ))
        
        }
    </ul>)


export default TodoList;