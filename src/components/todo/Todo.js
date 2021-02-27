import { Component } from 'react';
import shortid from "shortid";

import FormTodo from './FormTodo';
import TodoList from './TodoList';


export default class Todo extends Component {
    state = {       todos: []    }
    
    addTodos = text => {
        const todo = {   id: shortid.generate(),
            text: text,
            complited: false        }
        this.setState(prevState => {
            return {
                todos: [...prevState.todos, todo]
            }     })    }
    deleteTodo = todoId => {
        this.setState(prevState => ({
            todos: prevState.todos.filter(todo => todo.id !== todoId)
        }))    }
    upDateTodo = todoId => {
        this.setState(prevState => {
            return {
                todos: prevState.todos.map(todo => {
                    if (todo.id === todoId) {
                        return { // в массив на место этого тодо вернем объект
                            ...todo, // распылили старую заметку со свойствами
                            complited: !todo.complited // изменили ему свойство на противоположное
                        }
                    }
                    return todo;
                    // если не совпал, то вернули старый таск
                })       }   })     } 

    render() {        const {todos} = this.state
        return (            <>
                <FormTodo onAddText={this.addTodos} />
                {todos.length > 0 && (<TodoList
                    items={todos}
                    onDeleteTodo={this.deleteTodo}
                onUpdateTodo={this.upDateTodo}
                />)}
                
     
                </>
        )
    }
}