import React from 'react';
import './App.css';


function App() {

const subscriber = (name:string)=>{
     console.log(name)
}

    return  (
        <>
          <button onClick={()=>subscriber('Dima subscribe')}>MyChannel1</button>
          <button onClick={()=>subscriber('Jon subscribe')}>MyChannel2</button>
         </>
    );
}

export default App;
