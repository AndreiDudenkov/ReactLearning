import React, {useState} from 'react';
import './App.css';


function App() {
    const [money, setMoney] = useState([
        {banknote: "dollar", nominal: 100, number: "a123456789"},
        {banknote: "dollar", nominal: 50, number: "b123456789"},
        {banknote: "ruble", nominal: 100, number: "c123456789"},
        {banknote: "dollar", nominal: 100, number: "d123456789"},
        {banknote: "dollar", nominal: 50, number: "e123456789"},
        {banknote: "ruble", nominal: 100, number: "f123456789"},
        {banknote: "dollar", nominal: 50, number: "j123456789"},
        {banknote: "ruble", nominal: 50, number: "h123456789"}
    ])
    const[ peremenna, functForFind] = useState('all')
     let currentMoney = money

    if (peremenna === "dollar"){
        currentMoney = money.filter((el)=> el.banknote === "dollar")
    }if  (peremenna === "ruble"){
        currentMoney = money.filter((el)=> el.banknote === "ruble")
    }
    const onClickHandler = (namebtn: string) => {
        functForFind(namebtn)

    }
    return (<div>
            <ul>
                {currentMoney.map((objFromMoneyArr, index) => {
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
    );
}

export default App;
