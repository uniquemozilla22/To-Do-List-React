import React, { Component } from 'react'
import Todolist from './todolist'

export default class Form extends Component {

    state={
        activities:["Pick up Samosa","camosta"],
        selected:"",
        input:""
    }

    submitHandler=(event)=>{
        event.preventDefault()
        const handler=this.state.activities        
        handler.push(this.state.input)
        this.setState({
            ...this.state,
            activities:handler
        })

    }

    selectedHandler=(event)=>{
        this.setState({
            ...this.state,
            selected:event.target.value
        })
    }

    inputHandler=(event)=>{
        this.setState({
            ...this.state,
            input:event.target.value
        })
    }

    render() {
        return (
            <div>
                <form action="" onSubmit={this.submitHandler}>
                <input type="text" onChange={this.inputHandler}></input>
                <button className="todo-button" type="submit">
                    <i className="fas fa-plus-square"></i>
                </button>
    
                <div className="select">
                <select name="todos" className="filter-todo" onChange={this.selectedHandler}>
                    <option value="all">ALL</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
                </div>
                </form>

                <Todolist list ={this.state.activities} show={this.state.selected}/>
            </div>
        )
    }
}
