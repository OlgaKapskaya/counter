import React from "react";
import {Button} from "./Button";
import s from './ControlPanel.module.css'

type ControlPanel = {
    incCounter: () => void
    resetCounter: () => void
    deleteCounter: () => void
    count: number
}
export const ControlPanel = (props: ControlPanel) => {
    const incButtonHandler = () => {
        props.incCounter()
    }
    const resetButtonHandler = () => {
        props.resetCounter()
    }
    const delCounter = () => {
        props.deleteCounter()
    }
    return (
        <div className={s.container}>
            <Button name={'ADD'} callback={incButtonHandler} disabled={props.count >= 5}/>
            <Button name={'SUB'} callback={delCounter} disabled={props.count === 0}/>
            <Button name={'RESET'} callback={resetButtonHandler} disabled={props.count === 0}/>
        </div>
    )
}