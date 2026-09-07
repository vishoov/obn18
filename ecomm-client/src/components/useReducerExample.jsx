import React from 'react'
import { useReducer } from 'react'


function counterReducer(state, action){
    if(action.type=="increase"){
        return {
            count: state.count+1
        }
    }

    if(action.type=='decrease'){
        return {
            count:state.count-1
        }
    }

    return state;
}


const UseReducerExample = () => {
    const [state, dispatch] = useReducer(counterReducer, {count:0})


    return (
    <div>
        <h1>Count: {state.count}</h1>


        <button onClick={()=>dispatch({
            type:"increase"
        })}>
            + Add
        </button>

        <button onClick={()=>dispatch({type:"decrease"})}>
            - Subtract
        </button>
        


    </div>
  )
}

export default UseReducerExample