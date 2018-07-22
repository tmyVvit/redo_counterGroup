import {connect} from 'react-redux'
import {add, sub, mul} from '../action/index.js'
import CounterGroup from '../component/CounterGroup.js';

const mapStateToProps = (state, ownProps)=>{
    return {
        data: state
    }
}

const mapDispatchToProps = (dispatch, ownProps)=> {
    return {
        onAdd: (key)=>dispatch(add(key)),
        onSub: (key)=>dispatch(sub(key)),
        onMul: (key, multiplier)=>dispatch(mul(key, multiplier)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CounterGroup)