import React from 'react';
import './App.css';
import {Button} from "./ExternalComponents";


function App() {
const btn  = (name:string, age:number) => {
    console.log(name, age)
    }

    return  (
        <>
          <Button name={'MyChannel-1'} callback={()=>btn('Jon', 15)}/>
          <Button name={'MyChannel-2'} callback={()=>btn('Dima', 30)}/>

         </>
    );
}

export default App;
