
import React from 'react';
import './todo.css'

const TaskListItem = ({ text, id, complited, onRemove, onUpdate }) => (
    <li className="todoItems" key={id}>
        <p>{text}</p>
        <label>
            <input type="checkbox"
                checked={complited} // Выбранный чекбокс
                onChange={onUpdate} />
            Complited
        </label> 
        <section>
            <button type="button"
                onClick={onRemove}>Delete todo</button>
        </section>

    </li>
)

export default TaskListItem;