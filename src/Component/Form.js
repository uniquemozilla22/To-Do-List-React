import React, { Component } from 'react'

export default class Form extends Component {

    state={
        activities:[
            {
                title:"Test 1",
            completed:false
        },
            {
                title:"test 2",
            completed:true
        }
        ],
        selected:"",
        input:""
    }

    submitHandler=(event)=>{
        event.preventDefault()
        let  handler=this.state.activities        
        let handleritem={
            title:this.state.input,
            completed:false
        }
        handler.push(handleritem)
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

        let listing=[]
    const completeButtonHandler=(key)=>{
        console.log(key)
    }
    this.state.activities.map((values,index)=>{
        if(values.completed===true)
        {
            Object.keys(this.state.activities[index]).map((key,value)=>{
                console.log(value)
                listing[index] =<div className="todo completed" key={index}><li className="todo-item" key={index}>{values.title}</li><button className="complete-btn" onClick={(index)=>completeButtonHandler}><i className="fas fa-check" aria-hidden="true"></i></button><button className="trash-btn"><i className="fas fa-trash" aria-hidden="true"></i></button></div>
              })
        }
        else{
            Object.keys(this.state.activities[index]).map((key,value)=>{

                listing[index]=<div className="todo" key={index}><li className="todo-item" key={index}>{values.title}</li><button className="complete-btn" onClick={()=>completeButtonHandler}><i className="fas fa-check" aria-hidden="true"></i></button><button className="trash-btn"><i className="fas fa-trash" aria-hidden="true"></i></button></div>
              })
        }
         
    })
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

                <div className="todo-container">
                 <ul className="todo-list">
                     {listing}
                 </ul>
            </div>
            </div>
        )
    }
}
