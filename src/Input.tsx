import React, {ChangeEvent} from "react"

type InputPropsType = {
    title: string
    setTitle: (setTitle: string) => void
}

export const Input = (props: InputPropsType) => {


    const inputChangeHandler = (event:ChangeEvent<HTMLInputElement>) => {
        props.setTitle(event.currentTarget.value)


    }

    return (
        <>
            <input value={props.title} onChange={inputChangeHandler}/>
</>
    )
}