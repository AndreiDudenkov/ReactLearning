import React, {ChangeEvent, useState} from "react";

type Button_InputPropsType = {
    onClickHandler: (title:string)=> void

}

export const Button_Input = (props:Button_InputPropsType) =>{
    let [title, setTitle] = useState("")

    const inputChangeHandler = (event:ChangeEvent<HTMLInputElement>) => {
         setTitle(event.currentTarget.value)

    }
    const onClickHandler = () => {
        props.onClickHandler(title)
        setTitle('')
    }
    return(
        <div>
            <input value={title} onChange={inputChangeHandler}/>
            <button onClick={onClickHandler}>+</button>
        </div>
    )
}
