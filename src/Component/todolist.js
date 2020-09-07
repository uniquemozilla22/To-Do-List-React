import React from 'react'

const todolist = (props) => {

    let listing=[]
    const completeButtonHandler=(index)=>{
        console.log(index)
    }
    props.list.map((value,index)=>{
      
        let x=<div className="todo" key={index}><li className="todo-item" key={index}>{value}</li><button className="complete-btn" onSubmit={completeButtonHandler(index)}><i className="fas fa-check" aria-hidden="true"></i></button><button className="trash-btn"><i className="fas fa-trash" aria-hidden="true"></i></button></div>
        return listing.push(x)
    
    })

   
    
    return (
        <div>
            <div className="todo-container">
                 <ul className="todo-list">
                     {listing}
                 </ul>
            </div>
        </div>
    )
}

export default todolist
