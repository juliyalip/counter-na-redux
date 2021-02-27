import React, { Component } from 'react';

import './todo.css'

export default class FormTodo extends Component {
    state = {
    
       text: ''
    }

    handleChange = e => {
      
        this.setState({text: e.target.value})
        
    }
 
    hadleSubmit = e => {
        e.preventDefault();
        console.log(this.state);
        this.props.onAddText(this.state.text)
        this.resetForm()
    }
    
    resetForm = () => {
        this.setState({text: ''})
    }

    render (){
        return (
              <form onSubmit={this.hadleSubmit} className="containerTodo">
                <textarea name="todo" type="text" value={this.state.text} onChange={ this.handleChange}/>
                <button
                    type="submit"
                className="butTodo">Add todo</button>
    </form>
    
        )
    }
  
   }


