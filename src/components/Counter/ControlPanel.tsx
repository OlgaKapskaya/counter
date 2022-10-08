import React from "react";
import {Button} from "../Button";
import s from './ControlPanel.module.css'

type ControlPanel = {
    incCounter: () => void
    resetCounter: () => void
    deleteCounter: () => void
    count: number
    max: number
    min: number
}
export const ControlPanel = (props: ControlPanel) => {
    return (
        <div className={s.container}>
            <Button name={'ADD'} callback={props.incCounter} disabled={props.count === props.max}/>
            <Button name={'SUB'} callback={props.deleteCounter} disabled={props.count === props.min}/>
            <Button name={'RESET'} callback={props.resetCounter} disabled={props.count === props.min}/>
        </div>
    )
}