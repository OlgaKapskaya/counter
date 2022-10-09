import React, {ChangeEvent, useEffect, useState} from "react";
import s from './SettingsCounter.module.css'
import {Button} from "../Button";
import {StorageType} from "./Counter";

type SettingsCounterProps = {
    storage: StorageType
    changeSettings: (start: number, max: number, step: number) => void
    setSettings: (status: 'on' | 'off') => void
    setError: (text: string) => void
    error?:string

}
export const SettingsCounter = (props: SettingsCounterProps) => {
    const [start, setStart] = useState(props.storage.START_VALUE)
    const [max, setMax] = useState(props.storage.MAX_VALUE)
    const [step, setStep] = useState(props.storage.STEP)

    useEffect(() => {
        setStart(props.storage.START_VALUE)
        setMax(props.storage.MAX_VALUE)
        setStep(props.storage.STEP)
    }, [props.storage])

    if (start >= max || step < 1) {
        props.setError('Incorrect value!')
    } else {
        props.setError("")
    }
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
    }
    const onClickDefaultButton = () => {
        setStep(1)
        setMax(5)
        setStart(0)
        props.changeSettings(0, 5, 1)
    }
    const inputStartClass = start >= max ? s.errorInput : s.input
    const inputMaxClass = max <= start ? s.errorInput : s.input
    const inputStepClass = step < 1 ? s.errorInput : s.input
    return (
        <div className={s.container}>
                <label>Set start value:</label>
                <input
                    type={'number'}
                    className={inputStartClass}
                    value={start}
                    onChange={onChangeStartHandler}/>
                <label>Set max value:</label>
                <input
                    type={'number'}
                    className={inputMaxClass}
                    value={max}
                    onChange={onChangeMaxHandler}/>
                <label>Set step:</label>
                <input
                    type={'number'}
                    className={inputStepClass}
                    value={step}
                    onChange={onChangeStepHandler}/>

            <div className={s.panel} >
                <Button name={'SAVE'} callback={onClickSaveButton} disabled={props.error !== ""}/>
                <Button name={'SET DEFAULT'} callback={onClickDefaultButton} disabled={false}/>
            </div>
        </div>
    )
}
