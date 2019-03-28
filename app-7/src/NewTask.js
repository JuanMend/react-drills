import React, { Component } from 'react'

class NewTask extends Component{
    constructor(){
        super()
        this.state = {
            userInput: ''
        }
    }
    
    handlerChange = (event) => {
        this.setState({userInput: event.target.value})
    }
    handleAdd = () => {
        this.props.add(this.state.userInput)
        this.setState({userInput: ''})
    }


    render(){
        return(
            <div>
                <input onChange={this.handlerChange} 
                placeholder="Enter new task"
                
                />
                <button onClick={this.handleAdd}>Add</button>

            </div>
        )
    }
}

export default NewTask