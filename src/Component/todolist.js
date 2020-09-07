import React from 'react'

const todolist = (props) => {

    let listing=[]
    props.list.map((value,index)=>{
      
        let x=<div class="todo"><li class="todo-item" key={index}>{value}</li><button class="complete-btn"><i class="fas fa-check" aria-hidden="true"></i></button><button class="trash-btn"><i class="fas fa-trash" aria-hidden="true"></i></button></div>
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
