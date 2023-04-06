import React, {useState} from 'react';
import './App.css';
import {Button_Input} from "./ExternalComponents";


function App() {
    const [message, setMessage] = useState([
            {message: 'message1'},
            {message: 'message2'},
            {message: 'message3'},
        ]
    )
  const onClickHandler = (title:string) => {
        let newMessage = {message: title}
        setMessage([newMessage, ...message])
  }

    return (
        <div className="App"  >
            <Button_Input onClickHandler={onClickHandler} />
            {message.map((el, index) => {
                return ( <div>

                    <div key={index}>{el.message}</div>
                    </div>
                )
            })}
        </div>
    );
}


export default App;
