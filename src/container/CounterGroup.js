import React, { Component } from 'react';
import Counter from '../component/Counter'

export default class CounterGroup extends Component {
    constructor(props){
        super(props);
    }
    render() {
        let number = this.props.number;
        let counterList = [];
        for(let i = 0; i < number; i++){
            counterList.push(<Counter />)
        }
        return (
            <div>
                {counterList}
            </div>
        );
    }
}