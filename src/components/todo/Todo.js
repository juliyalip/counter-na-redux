import { Component } from 'react';
import shortid from "shortid";

import FormTodo from './FormTodo';
import TodoList from './TodoList';
import Filter from './Filter'


export default class Todo extends Component {
    state = {
        todos: [],
        filter: ''
    }

    
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
                })
            }
        })
    } 
        
    changeFilter = filter => {
        this.setState({ filter })
    };

    getVisibleTodo = () => {
// cоздание нового массива, его в state не храним. Тек. массив не изменяем !!!
        const { todos, filter } = this.state;
        return todos.filter(todo =>
            todo.text.toLowerCase().includes(filter.toLowerCase()))
    }

    render()
    {
        const { todos } = this.state;
        const visibleTodo = this.getVisibleTodo() // результат фильтрации


        return (
            <>
            <FormTodo onAddText={this.addTodos} />
            
            <Filter value={this.state.filter}
                onChangeFilter={ this.changeFilter}/>
            
                {todos.length > 0 && (<TodoList
                    items={visibleTodo}
                    onDeleteTodo={this.deleteTodo}
                onUpdateTodo={this.upDateTodo}
                />)}
                
     
                </>
        )
    }
}