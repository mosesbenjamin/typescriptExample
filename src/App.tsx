import React from 'react';

import './App.css';
import ReducerExample from './components/bawad/ReducerExample';
import TextField from './components/bawad/TextField';

// Props
// Hooks
// Render props

const App: React.FC = ()=>{
    return(
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", marginTop: "2em" }}>
            <TextField 
                text="Hello" 
                person={{firstName: 'John', lastName: 'Doe '}}
                handleChange={e=> console.log(e.target.value)}
                handleSubmit={e=>console.log('Good job Benjamin!!! You are doing well')}
            />
            <ReducerExample />
        </div>
    );
};

export default App;
