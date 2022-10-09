import React, {ChangeEvent, useState} from "react";
import s from './SettingsCounter.module.css'
import {Button} from "../Button";

type SettingsCounterProps = {
    start: number
    max: number
    step: number
    changeSettings: (start: number, max: number, step: number) => void
    setSettings: (status: 'on' | 'off') => void
    error?: string
}
export const SettingsCounter = (props: SettingsCounterProps) => {
    const [start, setStart] = useState(props.start)
    const [max, setMax] = useState(props.max)
    const [step, setStep] = useState(props.step)

    const onChangeStartHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setStart(Number(event.currentTarget.value))
    }
    const onChangeMaxHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setMax(Number(event.currentTarget.value))
    }
    const onChangeStepHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setStep(Number(event.currentTarget.value))
    }
    const onClickSaveButton = () => {
        props.changeSettings(start, max, step)
        //props.setSettings('off')
    }


    return (
        <div className={s.container}>
            <label>Set start value:</label>
            <input
                type={'number'}
                className={s.input}
                value={start}
                onChange={onChangeStartHandler}/>
            <label>Set max value:</label>
            <input
                type={'number'}
                className={s.input}
                value={max}
                onChange={onChangeMaxHandler}/>
            <label>Set step:</label>
            <input
                type={'number'}
                className={s.input}
                value={step}
                onChange={onChangeStepHandler}/>
            <Button name={'SAVE'} callback={onClickSaveButton} disabled={props.error === ""}/>
        </div>
    )
}
