import React, { Component } from 'react';

export default class Counter extends Component {
    constructor(props){
        super(props)
        this.inputText = React.createRef();
    }
    multiply  = (index)=>{
        const multiplier = this.inputText.current.value;
        if(!isNaN(multiplier))
            this.props.onMul(index, multiplier);
    }

    render() {
        const {count, onAdd, onSub, index} = this.props;
        // console.log("counter----"+index)
        return (
            <div>
                <input type='text' defaultValue='1' ref={this.inputText} />
                <button onClick={()=>onAdd(index)}>+</button>
                <button onClick={()=>onSub(index)}>-</button>
                <button onClick={()=>this.multiply(index)}>*</button>
                {count}
            </div>
        );
    }
}