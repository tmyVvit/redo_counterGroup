import * as type from '../constant/ActionType'

export default (state=[0,0], action)=>{
    switch(action.type){
        case type.ADD:{
            let newState = [...state];
            newState[action.index]++;
            return newState;
        }
        case type.SUB:{
            let newState = [...state];
            newState[action.index]--;
            return newState;
        }
        case type.MUL:{
            let newState = [...state];
            newState[action.index] *= action.multiplier;
            return newState;
        }
        default:
        return  state;
    }
}