import React, { useReducer } from 'react';

type Actions =
    |  {type: 'add'; text: string}
    |  {
            type: 'remove';
            idx: number;
    }
 

interface Todo {
    text?: string;
    complete?: boolean;
}    

type State = Todo[];

const TodoReducer = (state: State, action: Actions) =>{
    switch(action.type){
        case 'add':
            return [...state, { text: action.text, complete: false }];
        case 'remove':
            return state.filter((_, i)=> action.idx !== i)  ;
        default:
            return state;      
    }
}

const ReducerExample: React.FC = () =>{
    const [todos, dispatch] = useReducer(TodoReducer, [])
    return(
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", marginTop: "2em"  }}>
            <button
             onClick={()=>{
                 dispatch({ type: 'add', text: '...' })
             }}
            >
                +
            </button>
            {JSON.stringify(todos)}
        </div>
    )
};

export default ReducerExample;