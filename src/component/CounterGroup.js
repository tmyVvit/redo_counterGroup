import React, { Component } from 'react';
import Counter from './Counter'

export default class CounterGroup extends Component {
    constructor(props){
        super(props);
    }
    render() {
        const {onAdd, onSub, onMul, data, number} = this.props;
        let counterList = [];
        for(let i = 0; i < number; i++){
            counterList.push(<Counter 
                index={i}
                            key={i}
                            count={data[i]}
                            onAdd={onAdd}
                            onSub={onSub}
                            onMul={onMul}
                        />)
        }
        return (
            <div>
                {counterList}
            </div>
        );
    }
}