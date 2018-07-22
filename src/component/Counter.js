import React, { Component } from 'react';

export default class Counter extends Component {
    constructor(props){
        super(props)
        this.state = {  number: 0}
        this.inputText = React.createRef();
    }

    add  = ()=>{
        this.setState(prevState=>({
            number: prevState.number+1
        }))
    }
    subtract  = ()=>{
        this.setState(prevState=>({
            number: prevState.number-1
        }))
    }
    multiply  = ()=>{
        this.setState(prevState=>({
            number: prevState.number*this.inputText.current.value
        }))
    }

    render() {
        return (
            <div>
                <input default='1' ref={this.inputText} />
                <button onClick={this.add}>+</button>
                <button onClick={this.subtract}>-</button>
                <button onClick={this.multiply}>*</button>
                {this.state.number}
            </div>
        );
    }
}