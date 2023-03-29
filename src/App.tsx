import React from 'react';
import './App.css';
import {NewComponent} from "./ExternalComponents";
function App() {
    const topCars = [
        {manufacturer:'BMW', model:'m5cs'},
        {manufacturer:'Mercedes', model:'e63s'},
        {manufacturer:'Audi', model:'rs6'}
    ]
    return (<>
            <NewComponent cars={topCars}/>
        </>
    );
}

export default App;
