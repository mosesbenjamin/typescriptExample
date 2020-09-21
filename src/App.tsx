import React from 'react';

import './App.css';
import TextField from './components/bawad/TextField';

// Props
// Hooks
// Render props

const App: React.FC = ()=>{
    return(
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "2em" }}>
            <TextField text="Hello" person={{firstName: 'John', lastName: 'Doe '}}/>
        </div>
    );
};

export default App;
