import React from "react";

type NewComponentType ={
    currentMoneyPr: Array<MoneyType>
    callback: (name: string)=> void
}
type MoneyType= {
    banknote: string,
    nominal: number,
    number: string
}

export const NewComponent = (props:NewComponentType) => {

    const onClickHandler = (param:string) => {
        {props.callback(param)}
    }

    return (
<div id='body'>
    <ul>
        {props.currentMoneyPr.map((objFromMoneyArr, index) => {
            return (
                <li key={index}>
                    <span>{objFromMoneyArr.banknote}</span>
                    <span>{objFromMoneyArr.nominal}</span>
                    <span>{objFromMoneyArr.number}</span>
                </li>
            )
        })}
    </ul>
    <button onClick={()=>onClickHandler('all')}>all</button>
    <button onClick={()=>onClickHandler('dollar')}>dollar</button>
    <button onClick={()=>onClickHandler('ruble')}>ruble</button>
</div>
)
}