import React, {useState} from "react";
import {Board} from "./Tablo";
import {ControlPanel} from "./ControlPanel";
import s from './Counter.module.css'

export const Counter = () => {
    const [count, setCount] = useState(0);

    const incCounter = () => {
        if (count < 5) {
            setCount(count+1)
        }

    }
    const resetCounter = () => {
        setCount(0)
    }
    const delCounter = () => {
        if (count > 0) {
            setCount(count - 1 )
        }

    }
    return (
        <div className={s.counter}>
            <Board count={count}/>
            <ControlPanel
                incCounter={incCounter}
                resetCounter={resetCounter}
                deleteCounter={delCounter}
                count={count}/>

        </div>
    )
}