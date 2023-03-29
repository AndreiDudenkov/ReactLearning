import React from 'react';
import './App.css';
import {NewComponent} from "./ExternalComponents";
function App() {
    const students = [
        {id: 1, name: 'Vasya', age: 15},
        {id: 2, name: 'Dima', age: 25},
        {id: 3, name: 'Jon', age: 35}
    ]
    return (<>
            <NewComponent students={students}/>
        </>
    );
}

export default App;
