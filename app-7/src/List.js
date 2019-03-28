import React from 'react'
import Todo from './Todo'


function List(props){
    
    let list = props.tasks.map((el,index) => {
           return <Todo key={index} task={el} />
       });
       return <div>{list}</div>
       

       
}

export default List